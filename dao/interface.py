import threading

import sqlalchemy
import sqlalchemy as db
import json
import pandas as pd
import numpy as np
import psycopg2
from utils.tools import *


class Database():
    # replace the user, password, hostname and database according to your configuration according to your information
    engine = db.create_engine('postgresql://postgresadmin:admin123@192.168.1.108:32345/electric')
    #engine = db.create_engine('postgresql://postgres:ynpower@localhost:5432/electric')

    def __init__(self):
        self.connection = self.engine.connect()
        print("DB Instance created")


# 示例：   print(getDataJson("曲靖GDP数据","2010-10-20","2010-10-21"))
# 时间请保证均为两位，例如2019年2月1日，即2019-02-01
def getDataJson(dataName, startTime, endTime):
    d = Database()
    resultDict = d.connection.execute("select * from data where dataname='%s'" % (dataName)).first()[1]
    assert isinstance(resultDict, dict)
    matchKeys = []
    for key in resultDict.keys():
        if startTime <= key < endTime:
            matchKeys.append(key)
    matchKeys.sort()
    newDict = {}
    for key in matchKeys:
        newDict[key] = resultDict[key]
    resultJsonStr = json.dumps(newDict)
    return resultJsonStr


def insertData(data):
    engine = db.create_engine('postgresql://postgresadmin:admin123@192.168.1.108:32345/electric')
    #engine = db.create_engine('postgresql://postgres:ynpower@localhost:5432/electric')
    #pd.io.sql.to_sql(data, 'electric_data', engine, index=False, if_exists='replace', dtype={'datatime': sqlalchemy.Date()})
    pd.io.sql.to_sql(data, 'electric_data', engine, index=False, if_exists='replace')
    return

# def addPowerData(data, area, grain, kind):
#     #conn = psycopg2.connect(dbname="electric", user="postgres", password="ynpower", host="127.0.0.1", port="5432")
#     conn = psycopg2.connect(dbname="electric", user="postgresadmin", password="admin123", host="dclab.club", port="32345")
#     cur = conn.cursor()
#     values = []
#     insertjoin = " "
#     x, y = data.shape
#     # print(data.columns)
#     header = [i for i in data.columns]
#     for i in range(x):
#         datatime = data.iloc[i][0]
#         datatime = formateTimeString(datatime, grain)
#         for j in range(1, y):
#             if np.isnan(data.iloc[i][j]):
#                 continue
#             # print(data.iloc[i][j], header[j])
#             values.append("INSERT INTO electric_data VALUES('{}', '{}', {}, '{}', '{}', '{}') on conflict on constraint unique_all_cons do update set datavalue={};".format(
#                     datatime, header[j],data.iloc[i][j], grain, area, kind, data.iloc[i][j]))
#     # for index, row in data.iterrows():
#     #     print(row, area, grain, kind)
#     insert = insertjoin.join(values)
#     # print(insert)
#     cur.execute(insert)
#     conn.commit()
#     conn.close()
#
# def getData(location, dataName, startTime, endTime):
#     l = location.split("_")
#     grain = l[1]
#     area = l[0]
#     kind = l[2]
#     conn = psycopg2.connect(dbname="electric", user="postgresadmin", password="admin123", host="192.168.1.108",
#                             port="32345")
#     cur = conn.cursor()
#     startTime = formateTimeString(startTime, grain)
#     endTime = formateTimeString(endTime, grain)
#     dataNamelist = dataName.split(',')
#     dataNames = ""
#     for i in range(len(dataNamelist)):
#         dataNames += "'" + dataNamelist[i] + "'"
#         if i != len(dataNamelist) - 1:
#             dataNames += ","
#     # print(dataNames)
#     sql = "select * from electric_data where grain = '{}' and area = '{}' and datatime >= '{}' and datatime <= '{}'  and kind = '{}' and dataname in ({}); ".format(
#         grain, area, startTime, endTime, kind, dataNames)
#     # print(sql)
#     cur.execute(sql)
#     resultDict =cur.fetchall()
#     conn.commit()
#     conn.close()
#     # print(len(dataNamelist))
#     if len(dataNamelist) > 1:
#         return resultDict
#     elif len(dataNamelist) <= 1:
#         newDict = {}
#         for r in resultDict:
#             # print(r)
#             newDict[r[0]] = r[2]
#         resultJsonStr = json.dumps(newDict)
#         return resultJsonStr


#新增metadata操作
def getMetaData(area = None, kind = None, grain=None):
    conn = psycopg2.connect(dbname="electric", user="postgresadmin", password="admin123", host="dclab.club",
                            port="32345")
    cur = conn.cursor()
    whe = formatMetadataCondition(grain, kind, area)
    wherestr = " and ".join(whe)
    sql = "select id, area, kind,  grain from metadata where " + wherestr + ";"
    cur.execute(sql)
    result = cur.fetchall()
    conn.commit()
    conn.close()
    return result

def insertMetadata(area, kind, grain):
    conn = psycopg2.connect(dbname="electric", user="postgresadmin", password="admin123", host="dclab.club",
                            port="32345")
    cur = conn.cursor()
    if area is None or kind is None or grain is None:
        return None
    re = getMetaData(area, kind, grain)
    if len(re) > 0:
        return True
    else:
        sql = "INSERT INTO metadata(area, kind, grain) VALUES('{}', '{}', '{}')".format(area, kind, grain)
        # print(sql)
        cur.execute(sql)
    conn.commit()
    conn.close()
    return True

def insertPowerData(value):
    print("inserting")
    conn = psycopg2.connect(dbname="electric", user="postgresadmin", password="admin123", host="dclab.club",
                            port="32345")
    cur = conn.cursor()
    insertjoin = " "
    insert = insertjoin.join(value)
    # print(insert)
    cur.execute(insert)
    conn.commit()
    conn.close()

def addPowerData(data, area, grain, kind):
    insertMetadata(area, kind, grain)
    metadata = getMetaData(area, kind, grain)
    metadataId = metadata[0][0]
    conn = psycopg2.connect(dbname="electric", user="postgresadmin", password="admin123", host="dclab.club", port="32345")
    cur = conn.cursor()
    values = []
    insertjoin = " "
    header = [i for i in data.columns]
    # print(header)
    for index, row in data.iterrows():
        # print(row)
        datatime = row[header[0]]
        for i in range(1, len(header)):
            v = row[header[i]]
            if np.isnan(v):
                continue
            values.append(
                "INSERT INTO electric_data_test(datatime, dataname, datavalue, metadataid) VALUES(to_timestamp('{}','YYYY/MM/DD HH24:MI:SS'), '{}', {}, '{}') on conflict on constraint unique_cons do update set datavalue={};".format(
                    datatime, header[i], v, metadataId, v))
            if len(values) >= 50000:
                t = threading.Thread(target=insertPowerData, args=(values,))
                values = []
                t.start()

    if len(values) != 0:
        insert = insertjoin.join(values)
        # print(insert)
        cur.execute(insert)
    conn.commit()
    conn.close()

def getData(location, dataName, startTime, endTime):
    l = location.split("_")
    grain = l[1]
    area = l[0]
    kind = l[2]
    metadata = getMetaData(area, kind, grain)
    metadataId = metadata[0][0]
    conn = psycopg2.connect(dbname="electric", user="postgresadmin", password="admin123", host="192.168.1.108",
                            port="32345")
    cur = conn.cursor()
    startTime = formateTimeString(startTime, grain, 0)
    endTime = formateTimeString(endTime, grain, 1)
    dataNamelist = dataName.split(',')
    dataNames = ""
    for i in range(len(dataNamelist)):
        dataNames += "'" + dataNamelist[i] + "'"
        if i != len(dataNamelist) - 1:
            dataNames += ","

    if grain == "year":
        sql = "select to_char(datatime::TIMESTAMP, 'yyyy') as datatime, dataname, datavalue, metadataid, id from electric_data_test where metadataid = {} and dataname in ({}) and datatime >= '{}' and datatime <= '{}'; ".format(
           metadataId,  dataNames, startTime, endTime)
    elif grain == "month":
        sql = "select to_char(datatime::TIMESTAMP, 'yyyy/mm') as datatime, dataname, datavalue, metadataid, id from electric_data_test where metadataid = {} and dataname in ({}) and datatime >= '{}' and datatime <= '{}'; ".format(
           metadataId,  dataNames, startTime, endTime)
    elif grain == "day":
        sql = "select to_char(datatime::TIMESTAMP , 'yyyy/mm/dd') as datatime, dataname, datavalue, metadataid, id from electric_data_test where metadataid = {} and dataname in ({}) and datatime >= '{}' and datatime <= '{}'; ".format(
           metadataId,  dataNames, startTime, endTime)
    elif grain == "hour":
        sql = "select to_char(datatime::TIMESTAMP, 'yyyy/mm/dd hh') as datatime, dataname, datavalue, metadataid, id from electric_data_test where metadataid = {} and dataname in ({}) and datatime >= '{}' and datatime <= '{}'; ".format(
           metadataId,  dataNames, startTime, endTime)
    elif grain == "min":
        sql = "select to_char(datatime::TIMESTAMP, 'yyyy/mm/dd hh:mi') as datatime, dataname, datavalue, metadataid, id from electric_data_test where metadataid = {} and dataname in ({}) and datatime >= '{}' and datatime <= '{}'; ".format(
           metadataId,  dataNames, startTime, endTime)
    elif grain == "sec":
        sql = "select to_char(datatime::TIMESTAMP, 'yyyy/mm/dd hh:mi:ss') as datatime, dataname, datavalue, metadataid, id from electric_data_test where metadataid = {} and dataname in ({}) and datatime >= '{}' and datatime <= '{}'; ".format(
           metadataId,  dataNames, startTime, endTime)

    # print(sql)
    cur.execute(sql)
    resultDict =cur.fetchall()
    conn.commit()
    conn.close()
    # print(resultDict)
    if len(dataNamelist) > 1:
        return resultDict
    elif len(dataNamelist) <= 1:
        newDict = {}
        for r in resultDict:
            # print(r)
            newDict[r[0]] = r[2]
        resultJsonStr = json.dumps(newDict)
        return resultJsonStr



def getUserByPsAndName(username, password):
    conn = psycopg2.connect(dbname="electric", user="postgresadmin", password="admin123", host="192.168.1.108", port="32345")
    cur = conn.cursor()
    cur.execute("select count(*) from electric where username = '{}' and password = '{}'".format(username, password))
    rows = cur.fetchall()
    conn.commit()
    conn.close()
    if rows > 0:
        return True
    else:
        return False



def insertAlgorithmResult(result, tag):
    cur = conn.cursor()
    result = json.dumps(result)
    sql = "INSERT INTO program (tag, content) VALUES('{}', '{}') on conflict on constraint unique_tag do update set content='{}';".format(tag, result, result)
    # print(sql)
    cur.execute(sql)
    conn.commit()
    conn.close()
    return

def getAlgorithmResultByTag(tags):
    cur = conn.cursor()
    tagslist = tags.split(',')
    tag = ""
    for i in range(len(tagslist)):
        tag += "'" + tagslist[i] + "'"
        if i != len(tagslist) - 1:
            tag += ","
    sql = "select tag, content from program where tag in ({})".format(tag)
    # print(sql)
    cur.execute(sql)
    rows = cur.fetchall()
    conn.commit()
    conn.close()
    return rows


def checkPerson(username, password):
    conn = psycopg2.connect(dbname="electric", user="postgresadmin", password="admin123", host="dclab.club",
                                port="32345")
    try:
        cur = conn.cursor()
        sql = "select * from person where username = '{}' and password = '{}';".format(username, password)
        cur.execute(sql)
        rows = cur.fetchall()
        conn.commit()
        if len(rows) >= 1:
            return True
        else:
            return False
    except:
        return False
    finally:

        conn.close()


def addPerson(username, password):

    conn = psycopg2.connect(dbname="electric", user="postgresadmin", password="admin123", host="dclab.club",
                                port="32345")
    try:
        cur = conn.cursor()
        sql = "select * from person where username = '{}' ;".format(username)
        cur.execute(sql)
        rows = cur.fetchall()
        conn.commit()
        if len(rows) >= 1:
            msg = "用户名已存在"
        else:
            sql = "insert into person values ('{}','{}');".format(username, password)
            cur.execute(sql)
            msg = "创建成功"
    except:
        msg = "创建失败"
    finally:
        conn.close()
    return msg

def insertAlgorithmContent(tag, kind, content):

    conn = psycopg2.connect(dbname="electric", user="postgresadmin", password="admin123", host="dclab.club",
                                port="32345")
    try:
        cur = conn.cursor()
        result = json.dumps(content)
        sql = "INSERT INTO program (tag, content, kind) VALUES('{}', '{}', '{}') on conflict on constraint unique_tag do update set content='{}';".format(tag, result, kind, result)
        # print(sql)
        cur.execute(sql)
        conn.commit()
        re = {
            "code": 200
        }
    except:
        re = {
            "msg":"fail",
            "code": -1
        }

    finally:
        conn.close()
    return re

def getAlgorithmContentByTag(tags):
    conn = psycopg2.connect(dbname="electric", user="postgresadmin", password="admin123", host="dclab.club",
                                port="32345")
    try:
        cur = conn.cursor()
        tagslist = tags.split(',')
        tag = ""
        for i in range(len(tagslist)):
            tag += "'" + tagslist[i] + "'"
            if i != len(tagslist) - 1:
                tag += ","
        sql = "select tag, content, kind from program where tag in ({})".format(tag)
        # print(sql)
        cur.execute(sql)
        rows = cur.fetchall()
        conn.commit()

        resultdata = []
        for r in rows:
            temp = {}
            temp['tag'] = r[0]
            temp['content'] = r[1]
            temp['kind'] = r[2]
            resultdata.append(temp)
        re = resultdata
    except:
        re = None

    finally:
        conn.close()
    return re

def getAllTag():
    conn = psycopg2.connect(dbname="electric", user="postgresadmin", password="admin123", host="dclab.club",
                                port="32345")
    try:
        cur = conn.cursor()
        sql = "select tag, kind from program"
        # print(sql)
        cur.execute(sql)
        resultDict = cur.fetchall()
        conn.commit()

        result = []
        for i in resultDict:
            temp = {}
            temp['id'] = i[0]
            temp['tagType'] = i[1]
            result.append(temp)

        re = result
    except:
        re = None
    finally:
        conn.close()
    return re


def getTagByKind(kind):
    conn = psycopg2.connect(dbname="electric", user="postgresadmin", password="admin123", host="dclab.club",
                                port="32345")
    try:
        cur = conn.cursor()
        sql = "select tag from program where kind = '{}'".format(kind)
        # print(sql)
        cur.execute(sql)
        rows = cur.fetchall()
        result = []
        conn.commit()
        for i in rows:
            temp = {}
            temp['id'] = i[0]
            temp['tagType'] = kind
            result.append(temp)
        re = result
    except:
        re = None
    finally:
        conn.close()
    return re

def renameTag(oldtag, newtag):
    conn = psycopg2.connect(dbname="electric", user="postgresadmin", password="admin123", host="dclab.club",
                                port="32345")
    try:
        cur = conn.cursor()
        sql = "update program set tag = '{}' where tag = '{}'".format(newtag, oldtag)
        # print(sql)
        cur.execute(sql)
        conn.commit()

        re = {
            "msg": "更新成功",
            "code": 200
        }
    except:
        re = {
            "msg": "更新失败",
            "code": -1
        }
    finally:
        conn.close()
    return re

def checkTag(tag):
    conn = psycopg2.connect(dbname="electric", user="postgresadmin", password="admin123", host="dclab.club",
                                port="32345")
    try:
        cur = conn.cursor()
        sql = "select * from program where tag = '{}';".format(tag)
        cur.execute(sql)
        rows = cur.fetchall()
        conn.commit()

        if len(rows) >= 1:
            re =  True
        else:
            re = False
    finally:
        conn.close()
    return re

def deleteTag(tag):
    conn = psycopg2.connect(dbname="electric", user="postgresadmin", password="admin123", host="dclab.club",
                                port="32345")
    try:
        cur = conn.cursor()
        sql = "delete from program where tag = '{}'".format(tag)
        # print(sql)
        cur.execute(sql)
        conn.commit()

        re = {
            "msg": "已删除",
            "code": 200
        }
    except:
        re = {
            "msg": "删除失败",
            "code": -1
        }
    finally:
        conn.close()
    return re

def getDataByCondition(grain = None, startTime = None, endTime = None, kind = None, dataName = None, area = None):
    conn = psycopg2.connect(dbname="electric", user="postgresadmin", password="admin123", host="dclab.club",
                                port="32345")
    meta = getMetaData(area, kind, grain)
    metadataIds = []
    for i in meta:
        metadataIds.append(str(i[0]))

    whe = formatDataCondition(startTime, endTime, dataName, grain, metadataIds)
    try:
        cur = conn.cursor()
        wherestr = " and ".join(whe)
        sql = "select datatime, dataname, datavalue, metadataid from electric_data_test where " + wherestr + ";"
        # print(sql)
        cur.execute(sql)
        resultDict = cur.fetchall()
        conn.commit()
        re = resultDict

    except:
        re =  None
    finally:
        conn.close()
    return re

def modifyDataByCondition (newdata, grain = None, startTime = None, endTime = None, kind = None, dataName = None, area = None):
    conn = psycopg2.connect(dbname="electric", user="postgresadmin", password="admin123", host="dclab.club",
                                port="32345")
    whe = formatDataCondition(grain, startTime, endTime, kind, dataName, area)
    try:
        cur = conn.cursor()
        wherestr = " and ".join(whe)
        sql = "update electric_data set datavalue = {} where ".format(newdata) + wherestr + ";"
        # print(sql)
        cur.execute(sql)
        conn.commit()

        re =  {
            "msg": "更新成功",
            "code": 200
        }
    except:
        re =  {
            "msg": "更新失败",
            "code": -1
        }
    finally:
        conn.close()
    return re

def deleteDataByCondition (grain = None, startTime = None, endTime = None, kind = None, dataName = None, area = None):
    conn = psycopg2.connect(dbname="electric", user="postgresadmin", password="admin123", host="dclab.club",
                                port="32345")
    whe = formatDataCondition(grain, startTime, endTime, kind, dataName, area)
    try:
        cur = conn.cursor()
        wherestr = " and ".join(whe)
        sql = "delete from  electric_data where " + wherestr + ";"
        print(sql)
        cur.execute(sql)
        conn.commit()
        re =  {
            "msg": "删除成功",
            "code": 200
        }
    except:
        re =  {
            "msg": "删除失败",
            "code": -1
        }
    finally:

        conn.close()
    return re

def getArea():
    conn = psycopg2.connect(dbname="electric", user="postgresadmin", password="admin123", host="dclab.club",
                                port="32345")
    try:
        cur = conn.cursor()
        sql = "select distinct area from electric_data;"
        # print(sql)
        cur.execute(sql)
        resultDict = cur.fetchall()
        conn.commit()
        result = []
        for i in resultDict:
            result.append(i[0])

        re =  {
            "msg": "success",
            "data": result,
            "code": 200
        }
    except:
        re =  {
            "msg": "fail",
            "data": None,
            "code": -1
        }
    finally:

        conn.close()
    return re

def getKind():
    conn = psycopg2.connect(dbname="electric", user="postgresadmin", password="admin123", host="dclab.club",
                                port="32345")
    try:
        cur = conn.cursor()
        sql = "select distinct kind from electric_data;"
        # print(sql)
        cur.execute(sql)
        resultDict = cur.fetchall()
        conn.commit()

        result = []
        for i in resultDict:
            result.append(i[0])
        re =  {
            "msg": "success",
            "data": result,
            "code": 200
        }
    except:
        re =  {
            "msg": "fail",
            "data": None,
            "code": -1
        }
    finally:
        conn.close()
    return re

def getGrain():
    conn = psycopg2.connect(dbname="electric", user="postgresadmin", password="admin123", host="dclab.club",
                                port="32345")
    try:
        cur = conn.cursor()
        sql = "select distinct grain from electric_data;"
        # print(sql)
        cur.execute(sql)
        resultDict = cur.fetchall()
        result = []
        conn.commit()

        for i in resultDict:
            result.append(i[0])

        re =  {
            "msg": "success",
            "data": result,
            "code": 200
        }
    except:
        re =  {
            "msg": "fail",
            "data": None,
            "code": -1
        }
    finally:
        conn.close()
    return re

if __name__ == '__main__':
    conn = psycopg2.connect(dbname="electric", user="postgresadmin", password="admin123", host="192.168.1.108",
                            port="32345")
    cur = conn.cursor()
    grain = "year"
    area = "yunnan"
    kind = "test"
    data = [('2018', 'GDPperpop', 37136.0, 'year', 'yunnan', 'test'), ('2018', 'GDP', 17881.12, 'year', 'yunnan', 'test'), ('2018', 'population', 4829.5, 'year', 'yunnan', 'test'), ('2020', 'populations', 4829.5, 'year', 'yunnan', 'test')]
    sql = "SELECT * FROM electric_data where grain = '{}' and area = '{}' and kind = '{}'".format(
        grain, area, kind)
    cur.execute(sql)
    rows = cur.fetchall()

    print(rows)