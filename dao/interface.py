import threading
from  flask import  Flask
import sqlalchemy
import sqlalchemy as db
import json
import pandas as pd
import numpy as np
import psycopg2
import os
from os.path import dirname, realpath
# from app import app
from utils import formatMetadataCondition, formateTimeString, formatDataCondition, methodNameZhToEn, getAlgorithmName, \
    getAlgorithm, getCombinationMethod

filename = os.path.join(os.getcwd(), os.path.dirname(os.path.dirname(__file__)),'algorithms', 'args.xls')
# filename = os.path.join(app.root_path, 'algorithms', 'args.xlsx')
defaultFile = os.path.join(os.getcwd(), os.path.dirname(os.path.dirname(__file__)),'algorithms', 'default.xls')



dbname="electric"
user="postgres"
password="admin123"
host="localhost"
port="5432"

class Database():
    # replace the user, password, hostname and database according to your configuration according to your information
    engine = db.create_engine('postgresql://%s:%s@%s:%s/%s' % (user, password, host, port, dbname))
    #engine = db.create_engine('postgresql://postgres:ynpower@localhost:5432/electric')

    def __init__(self):
        self.connection = self.engine.connect()
        print("DB Instance created")


def getConn():
    conn = psycopg2.connect(dbname=dbname, user=user, password=password, host=host,
                            port=port)
    return conn

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
    engine = db.create_engine('postgresql://%s:%s@%s:%s/%s' % (user, password, host, port, dbname))
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
    conn = getConn()
    cur = conn.cursor()
    whe = formatMetadataCondition(grain, kind, area)
    if len(whe) != 0:
        wherestr = " and ".join(whe)
        sql = "select id, area, kind from metadata where " + wherestr + ";"
    else:
        sql = "select id, area, kind from metadata"
    cur.execute(sql)
    result = cur.fetchall()
    conn.commit()
    conn.close()
    return result

def insertMetadata(area, kind, grain):
    conn = getConn()
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
    conn = getConn()
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
    conn = getConn()
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

class DataRangeError(Exception):
    ...

def getData(location, dataName, startTime, endTime):
    try:
        l = location.split("_", maxsplit=2)
        grain = l[1]
        area = l[0]
        kind = l[2]
        print(area, kind, grain)
        metadata = getMetaData(area, kind, grain)
        print(metadata)
        metadataId = metadata[0][0]
        conn = getConn()
        cur = conn.cursor()
        whe = []
        whe.append("metadataid = {} ".format(metadataId))
        startTime = formateTimeString(startTime, grain, 0)
        endTime = formateTimeString(endTime, grain, 1)
        whe.append("datatime >= '{}' and datatime <= '{}'".format(startTime, endTime))

        if dataName != None:
            dataNamelist = dataName.split(',')
            # print(dataNamelist)
            dataNames = ""
            for i in range(len(dataNamelist)):
                dataNames += "'" + dataNamelist[i] + "'"
                if i != len(dataNamelist) - 1:
                    dataNames += ","
            whe.append("dataname in ({})".format(dataNames))

        wherestr = " and ".join(whe)
        if grain == "year":
            sql = "select to_char(datatime::TIMESTAMP, 'yyyy') as datatime, dataname, datavalue, metadataid, id from electric_data_test where " + wherestr
        elif grain == "month":
            sql = "select to_char(datatime::TIMESTAMP, 'yyyy/mm') as datatime, dataname, datavalue, metadataid, id from electric_data_test where " + wherestr
        elif grain == "day":
            sql = "select to_char(datatime::TIMESTAMP , 'yyyy/mm/dd') as datatime, dataname, datavalue, metadataid, id from electric_data_test where " + wherestr
        elif grain == "hour":
            sql = "select to_char(datatime::TIMESTAMP, 'yyyy/mm/dd hh') as datatime, dataname, datavalue, metadataid, id from electric_data_test where " + wherestr
        elif grain == "min":
            sql = "select to_char(datatime::TIMESTAMP, 'yyyy/mm/dd hh:mi') as datatime, dataname, datavalue, metadataid, id from electric_data_test where " + wherestr
        elif grain == "sec":
            sql = "select to_char(datatime::TIMESTAMP, 'yyyy/mm/dd hh:mi:ss') as datatime, dataname, datavalue, metadataid, id from electric_data_test where " + wherestr

        # print(sql)
        cur.execute(sql)
        resultDict = cur.fetchall()
        conn.commit()
        conn.close()
        # print(resultDict)
        if  dataName == None or len(dataNamelist) > 1:
            return resultDict
        elif len(dataNamelist) <= 1:
            newDict = {}
            for r in resultDict:
                # print(r)
                newDict[r[0]] = r[2]
            resultJsonStr = json.dumps(newDict)
            return resultJsonStr
    except:
        raise DataRangeError("「%s」下没有「%s」%s 到 %s 时期的数据。" % (dataName, location, startTime, endTime))


def getUserByPsAndName(username, password):
    conn = getConn()
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
    conn = getConn()
    cur = conn.cursor()

    result = json.dumps(result)
    sql = "INSERT INTO program (tag, content) VALUES('{}', '{}') on conflict on constraint unique_tag do update set content='{}';".format(tag, result, result)
    # print(sql)
    cur.execute(sql)
    conn.commit()
    conn.close()
    return

def getAlgorithmResultByTag(tags):
    conn = getConn()
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
    conn = getConn()
    cur = conn.cursor()

    try:
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

    conn = getConn()
    cur = conn.cursor()

    try:
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
    print("!!! going to insesrt algorithm !!!", tag, kind, content)
    conn = getConn()
    cur = conn.cursor()

    try:
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
    conn = getConn()
    cur = conn.cursor()

    try:
        tagslist = tags.split(',')
        tag = ""
        for i in range(len(tagslist)):
            tag += "'" + tagslist[i] + "'"
            if i != len(tagslist) - 1:
                tag += ","
        sql = "select tag, content, kind from program where tag in ({})".format(tag)
        print(sql)
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

def getAllTagList():
    conn = getConn()
    cur = conn.cursor()

    try:
        sql = "select tag, kind from program"
        # print(sql)
        cur.execute(sql)
        resultDict = cur.fetchall()
        conn.commit()

        result = []
        for i in resultDict:
            result.append(i[0])

        re = result
    except:
        re = None
    finally:
        conn.close()
    return re

def getAllTag():
    conn = getConn()
    cur = conn.cursor()

    try:
        sql = "select tag, kind from program"
        # print(sql)
        cur.execute(sql)
        resultDict = cur.fetchall()
        conn.commit()

        result = []
        for i in resultDict:
            temp = {}
            temp['tag'] = i[0]
            temp['tagType'] = i[1]
            result.append(temp)

        re = result
    except:
        re = None
    finally:
        conn.close()
    return re


def getTagByKind(kind):
    conn = getConn()
    cur = conn.cursor()

    try:
        sql = "select tag from program where kind = '{}'".format(kind)
        # print(sql)
        cur.execute(sql)
        rows = cur.fetchall()
        result = []
        conn.commit()
        for i in rows:
            temp = {}
            temp['tag'] = i[0]
            temp['tagType'] = kind
            result.append(temp)
        re = result
    except:
        re = None
    finally:
        conn.close()
    return re

def renameTag(oldtag, newtag):
    conn = getConn()
    cur = conn.cursor()

    try:
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
    conn = getConn()
    cur = conn.cursor()

    try:
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
    conn = getConn()
    cur = conn.cursor()

    try:
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
    conn = getConn()
    cur = conn.cursor()
    meta = getMetaData(area, kind, grain)
    metadataIds = []
    for i in meta:
        metadataIds.append(str(i[0]))

    whe = formatDataCondition(startTime=startTime, endTime=endTime, dataName=dataName, metadataIds=metadataIds)
    try:
        wherestr = " and ".join(whe)
        if grain == "year":
            sql = "select to_char(datatime::TIMESTAMP, 'yyyy') as datatime, dataname, datavalue, metadataid from electric_data_test where " + wherestr + ";"
        elif grain == "month":
            sql = "select to_char(datatime::TIMESTAMP, 'yyyy/mm') as datatime, dataname, datavalue, metadataid, id from electric_data_test where " + wherestr
        elif grain == "day":
            sql = "select to_char(datatime::TIMESTAMP , 'yyyy/mm/dd') as datatime, dataname, datavalue, metadataid, id from electric_data_test where " + wherestr
        elif grain == "hour":
            sql = "select to_char(datatime::TIMESTAMP, 'yyyy/mm/dd hh') as datatime, dataname, datavalue, metadataid, id from electric_data_test where " + wherestr
        elif grain == "min":
            sql = "select to_char(datatime::TIMESTAMP, 'yyyy/mm/dd hh:mi') as datatime, dataname, datavalue, metadataid, id from electric_data_test where " + wherestr
        elif grain == "sec":
            sql = "select to_char(datatime::TIMESTAMP, 'yyyy/mm/dd hh:mi:ss') as datatime, dataname, datavalue, metadataid, id from electric_data_test where " + wherestr

        print(sql)
        cur.execute(sql)
        resultDict = cur.fetchall()
        conn.commit()
        re = resultDict

    except:
        print("error getdata")
        re =  None
    finally:
        conn.close()
    return re

def modifyDataByCondition (newdata, grain = None, startTime = None, endTime = None, kind = None, dataName = None, area = None, metadataid=None):
    conn = getConn()
    cur = conn.cursor()

    whe = formatDataCondition(startTime=startTime, endTime=endTime, dataName=dataName, metadataIds=[str(metadataid)])
    try:
        wherestr = " and ".join(whe)
        sql = "update electric_data_test set datavalue = {} where ".format(newdata) + wherestr + ";"
        print(sql)
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

def deleteDataByCondition (grain = None, startTime = None, endTime = None, kind = None, dataName = None, area = None, metadataid=None):
    conn = getConn()
    cur = conn.cursor()

    whe = formatDataCondition(startTime=startTime, endTime=endTime, dataName=dataName, metadataIds=[str(metadataid)])
    try:
        wherestr = " and ".join(whe)
        sql = "delete from  electric_data_test where " + wherestr + ";"
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

def createDataByMetadataid(datavalue, dataname, datatime, metadataid):

    conn = getConn()
    cur = conn.cursor()

    sql = "INSERT INTO electric_data_test(datatime, dataname, datavalue, metadataid) VALUES(to_timestamp('{}','YYYY/MM/DD HH24:MI:SS'), '{}', {}, '{}') on conflict on constraint unique_cons do update set datavalue={};".format(
                    datatime, dataname, datavalue, metadataid, datavalue)
    cur.execute(sql)
    conn.commit()
    conn.close()

def getArea():
    conn = getConn()
    cur = conn.cursor()

    try:
        sql = "select distinct area from metadata;"
        # print(sql)
        cur.execute(sql)
        resultDict = cur.fetchall()
        conn.commit()
        result = []
        for i in resultDict:
            result.append(i[0])

        re = result
    except:
        re = None
    finally:
        conn.close()
    return ["云南省"]


def getKind():
    conn = getConn()
    cur = conn.cursor()

    try:
        sql = "select distinct kind from metadata;"
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
    conn = getConn()
    try:
        cur = conn.cursor()
        sql = "select distinct grain from metadata;"
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

def getAlgorithmArgsDefaultValue():
    data = pd.read_excel(defaultFile, None, index_col=None)
    args = {}
    for row in data.values():
        # print(row)
        x, y = row.shape
        header = [i for i in row.columns]
        for j in range(1, y):
            temp = {}
            for i in range(1, x):
                if row.iloc[i][0] != row.iloc[i][0] or row.iloc[i][j] != row.iloc[i][j]:
                    break
                if i % 3 == 0:
                    temp[row.iloc[i-2][j]] = row.iloc[i][j]
            args[header[j]] = temp
    return args


def getAlgorithmArgs(method = None, filename = None):
    # print(method)
    a, b = getAlgorithmName(filename)
    method = methodNameZhToEn(a, b, method)
    defaultValue = getAlgorithmArgsDefaultValue()
    print(method)
    data = pd.read_excel(filename, None, index_col=None)
    args = {}
    for row in data.values():
        # print(row)
        x, y = row.shape
        header = [i for i in row.columns]
        for j in range(1, y):
            if method != None:
                if header[j] != method:
                    continue
            args[header[j]] = {
                "name": row.iloc[0][j],
            }
            args[header[j]]["para"] = []
            count = 0
            temp = {}
            for i in range(1, x):
                if row.iloc[i][0] != row.iloc[i][0] or row.iloc[i][j] != row.iloc[i][j]:
                    break
                if i % 3 == 0:
                    temp["kind"] = row.iloc[i][j]
                    if row.iloc[i-1][j].startswith("预测省/市"):
                        temp["value"] = getArea()
                    if row.iloc[i - 1][j].startswith("社会经济因素列表"):
                        temp["value"] = getDataNameByAreaAndKind(area="云南省", kind="社会经济类")
                    if row.iloc[i-1][j].startswith("组合方式"):
                        temp["value"] = getCombinationMethod()
                    if row.iloc[i - 1][j].startswith("单预测模型结果") or row.iloc[i - 1][j].startswith("单预测模型标签"):
                        temp["value"] = getAllTagList()
                    if row.iloc[i - 1][j].startswith("电力变量列表") or row.iloc[i - 1][j].startswith("目标关联名称") or row.iloc[i - 1][j].startswith("关联变量列表"):
                        temp["value"] = getDataNameByAreaAndKind(area="云南省", kind="电力电量类")

                    if row.iloc[i - 1][j].startswith("预测数据类型"):
                        if method == 'Combination':
                            temp["value"] = getDataNameByAreaAndKind(area="云南省", kind="电力电量类")
                        elif method == 'CombinationIndustry':
                            temp["value"] = getDataNameByAreaAndKind(area="云南省", kind="电力电量类-行业")
                        elif method == 'LDM':
                            temp["value"] = ["全社会用电量"]
                        else:
                            temp["value"] = getDataNameByAreaAndKind(area="云南省", kind="电力电量类")
                    
                    if row.iloc[i - 1][j].startswith("要剔除的行业名单"):
                        temp["value"] = getDataNameByAreaAndKind(area="云南省", kind="电力电量类-行业")

                    if row.iloc[i - 1][j].startswith("预测行业名称"):
                        temp["value"] = getDataNameByAreaAndKind(area="云南省", kind="电力电量类-行业")

                    if row.iloc[i - 1][j].startswith("预测方法名称") and method == 'ForIndustry':
                        temp["value"] = ['灰色滑动平均模型', '基于滚动机制的灰色预测模型', '生长函数外推', '一元线性外推', '对数函数外推', '模糊指数平滑模型', '模糊线性回归模型', '梯度提升模型', '支持向量机模型', '随机森林模型']

                    if row.iloc[i-1][j].find("计划值指示器") != -1:
                        temp["value"] = [0,1]
                    if header[j] in defaultValue.keys():
                        if temp["key"] in defaultValue[header[j]]:
                            if temp["kind"] == "int":
                                temp["default"] = int(defaultValue[header[j]][temp["key"]])
                            elif temp["kind"] == "float":
                                temp["default"] = float(defaultValue[header[j]][temp["key"]])
                            else:
                                temp["default"] = defaultValue[header[j]][temp["key"]]
                    args[header[j]]["para"].append(temp)
                    temp = {}
                    count += 1
                if i % 3 == 2:
                    temp["label"] = row.iloc[i][j]
                if i % 3 == 1:
                    temp["key"] = row.iloc[i][j]
            args[header[j]]["num"] = count
    if method != None:
        return args[method]
    return args


def executeAlgorithm(method, args):
    print('** exec algorithm **', method, args)
    arg = getAlgorithmArgs(method, filename)
    a, b = getAlgorithmName(filename)
    method = methodNameZhToEn(a, b, method)
    f = getAlgorithm(method)
    argstr = ""
    for v in arg["para"]:
        key = v["key"]
        if key[-1] == "*":
            k = key[:-1]
        else:
            k = key
        if v["kind"].startswith("list"):
            valuelist = args[key].split(",")
            value = []
            if v['kind'].endswith("int"):
                for i in valuelist:
                    value.append(int(i))
            elif v['kind'].endswith("string"):
                value = valuelist
            argstr += "{} = {},".format(k, value)
        elif v["kind"].startswith("file"):
            argstr += "{} = {},".format(k, 'args["'+key+'"]')
        elif v["kind"] == "string":
            argstr += "{} = '{}',".format(k, args[key])
        elif v["kind"] == "option":
            argstr += "{} = '{}',".format(k, args[key])
        elif v["kind"] == "multioption":
            if not args[key]:
                reallist = []
            elif type(args[key]) == str:
                reallist = args[key].split(',')
            else:
                reallist = args[key]
            argstr += "{} = {},".format(k, repr(reallist))
        else:
            argstr += "{} = {},".format(k, args[key])

        # print(v.keys())
        # if v == "method" or v == "name" or v == "num":
        #     continue
    
    print(argstr)

    result = eval("f("+argstr+")")
    return result

def getDataNameByAreaAndKind(area = "云南省", kind = "社会经济类"):
    conn = getConn()

    cur = conn.cursor()
    sql = "select distinct dataname from electric_data_test where metadataid in (select id from metadata where area='{}' and kind = '{}');".format(area, kind)
    # print(sql)
    cur.execute(sql)
    resultDict = cur.fetchall()
    result = []
    conn.commit()
    for i in resultDict:
        result.append(i[0])
    return result


_grain_zh2en_mapper = {
    '年': 'year',
    '月': 'month',
    '日': 'day',
    '时': 'hour'
}

_grain_en2zh_mapper = {
    'year': '年',
    'month': '月',
    'day': '日',
    'hour': '时'
}

def grain_en2zh_mapper(en: str) -> str:
    if en in _grain_en2zh_mapper:
        return _grain_en2zh_mapper[en]
    return en


def getWHLMetadataId():
    sql = "select distinct id from metadata where area='yunnan'"
    conn = getConn()
    cur = conn.cursor()
    cur.execute(sql)
    print(" >>> getWHLMetadataId executes sql")
    print(sql)
    print(" <<< getWHLMetadataId executes sql")
    result = cur.fetchall()
    conn.commit()
    return [v[0] for v in result]


def removeAllData():
    sql1 = "delete from electric_data_test"
    sql2 = "delete from metadata"
    conn = getConn()
    cur = conn.cursor()
    print(" >>> removeAllData executes sql")
    print(sql1)
    print(sql2)
    print(" <<< removeAllData executes sql")
    cur.execute(sql1)
    cur.execute(sql2)
    conn.commit()

def removeWHLData():
    expected_major_ids = getWHLMetadataId()
    print('WHL metadata ids: ', expected_major_ids)
    delete_whl_metadata = "delete from metadata where area='yunnan'"
    conn = getConn()
    cur = conn.cursor()
    print(" >>> removeWHLData executes sql")
    print(delete_whl_metadata)
    cur.execute(delete_whl_metadata)
    if len(expected_major_ids) != 0:
        metadata_limits = ' or '.join(['metadataid=%d' % i for i in expected_major_ids])
        delete_actual_data_sql = "delete from electric_data_test where ({})".format(metadata_limits)
        print(delete_actual_data_sql)
        cur.execute(delete_actual_data_sql)
    
    print(" <<< removeWHLData executes sql")
    conn.commit()

def initDatabase():
    sql1 = "delete from electric_data_test"
    sql2 = "delete from metadata"
    sql3 = "delete from brand_new_metadata"
    conn = getConn()
    cur = conn.cursor()
    print(" >>> initDatabase executes sql")
    print(sql1)
    print(sql2)
    print(sql3)
    print(" <<< initDatabase executes sql")
    cur.execute(sql1)
    cur.execute(sql2)
    cur.execute(sql3)
    conn.commit()

def getBrandNewMetadata():
    sql = "select distinct major_category, minor_category from brand_new_metadata"
    conn = getConn()
    cur = conn.cursor()
    cur.execute(sql)
    result = cur.fetchall()
    conn.commit()

    result_dict = dict()
    for major, minor in result:
        if major in result_dict:
            if minor != '':
                result_dict[major].append(minor)
        else:
            if minor != '':
                result_dict[major] = [minor]
            else:
                result_dict[major] = []

    return result_dict

def majorMetaDataToId(major):
    sql = "select distinct id from metadata where kind='{}'".format(major)
    conn = getConn()
    cur = conn.cursor()
    cur.execute(sql)
    result = cur.fetchall()
    conn.commit()
    return [v[0] for v in result]

def createBrandNewMetadata(major, minor):
    sql = "insert into brand_new_metadata values ('{}', '{}')".format(major, minor)
    conn = getConn()
    cur = conn.cursor()
    cur.execute(sql)
    conn.commit()

def renameBrandNewMetadata(major, old_minor, new_minor):
    conn = getConn()
    cur = conn.cursor()

    rename_metadata_sql = "update brand_new_metadata set minor_category='{}' where major_category='{}' and minor_category='{}'".format(new_minor, major, old_minor)
    cur.execute(rename_metadata_sql)
    expected_major_ids = majorMetaDataToId(major)
    if len(expected_major_ids) != 0:
        metadata_limits = ' or '.join(['metadataid=%d' % i for i in expected_major_ids])
        rename_actual_data_sql = "update electric_data_test set dataname='{}' where dataname='{}' and ({})".format(new_minor, old_minor, metadata_limits)
        cur.execute(rename_actual_data_sql)
    conn.commit()

def deleteBrandNewMetadata(major, minor):

    conn = getConn()
    cur = conn.cursor()

    delete_metadata_sql = "delete from brand_new_metadata where major_category='{}' and minor_category='{}'".format(major, minor)
    cur.execute(delete_metadata_sql)
    expected_major_ids = majorMetaDataToId(major)
    if len(expected_major_ids) != 0:
        metadata_limits = ' or '.join(['metadataid=%d' % i for i in expected_major_ids])
        delete_actual_data_sql = "delete from electric_data_test where dataname='{}' and ({})".format(minor, metadata_limits)
        cur.execute(delete_actual_data_sql)
    conn.commit()


def _intersection(lhs: tuple, rhs: tuple) -> tuple:
    assert(len(lhs) == 2)
    assert(len(rhs) == 2)
    return (max(lhs[0], rhs[0]), min(lhs[1], rhs[1]))

def validateRegion(args, start, end):
    range = (float('-inf'), float('+inf'))
    for k, v in args.items():
        if k.startswith('pretype'):
            if type(v) == str:
                range = _intersection(range, getDataRange('电力电量类', v, args['city*'], '年'))
            elif type(v) == list:
                for subv in v:
                    range = _intersection(range, getDataRange('电力电量类', subv, args['city*'], '年'))
            else:
                raise TypeError('pretype 字段应该是 str 或 list 类型，而不是', str(type(v)))
        elif k.startswith('econamelist'):
            if type(v) == str:
                range = _intersection(range, getDataRange('社会经济类', v, args['city*'], '年'))
            elif type(v) == list:
                for subv in v:
                    range = _intersection(range, getDataRange('社会经济类', subv, args['city*'], '年'))
            else:
                raise TypeError('econame 字段应该是 str 或 list 类型，而不是', str(type(v)))
    act_start, act_end = range
    if act_start > act_end:
        raise ValueError("输入的年份范围（%d～%d）超过了限制，请尝试更换参数组合。" % (start, end))
    if start < act_start or end > act_end:
        raise ValueError("输入的年份范围（%d～%d）超过了限制，合法范围是 %d～%d。" % (start, end, act_start, act_end))
    
def validateIndustry(args, start, end):
    range = (float('-inf'), float('+inf'))
    for k, v in args.items():
        if k.startswith('pretype'):
            range = _intersection(range, getDataRange('电力电量类-行业', v, args['city*'], '年'))
        elif k.startswith('econamelist'):
            if type(v) == str:
                range = _intersection(range, getDataRange('社会经济类', v, args['city*'], '年'))
            elif type(v) == list:
                for subv in v:
                    range = _intersection(range, getDataRange('社会经济类', subv, args['city*'], '年'))
            else:
                raise TypeError('econame list type should be str or list, not', str(type(v)))
    act_start, act_end = range
    if act_start > act_end:
        raise ValueError("选择的参数组合没有公共数据，请尝试更换参数组合。")
    if start < act_start or end > act_end:
        raise ValueError("输入的年份范围（%d～%d）超过了限制，合法范围是 %d～%d。" % (start, end, act_start, act_end))

def validateForIndustry(args):
    range = (float('-inf'), float('+inf'))
    for arg in args['rejectlsit'].split(','):
        range = _intersection(range, getDataRange('电力电量类-行业', arg, '云南省', '年'))
    
    start, end = int(args['StartYear']), int(args['EndYear'])
    act_start, act_end = range
    if act_start > act_end:
        raise ValueError("选择的参数组合没有公共数据，请尝试更换参数组合。")
    if start < act_start or end > act_end:
        raise ValueError("输入的年份范围（%d～%d）超过了限制，合法范围是 %d～%d。" % (start, end, act_start, act_end))


def validateLDM(args):
    building_area = pd.read_csv(args["buildingarea"])
    args["buildingarea"].seek(0)

    load_density = pd.read_csv(args["loaddensity"])
    args["loaddensity"].seek(0)

    ba_years = [int(v[0]) for v in building_area.values]
    ld_years = [int(v[0]) for v in load_density.values]

    if ba_years != ld_years:
        raise ValueError('「建筑用地数据列表」和「建筑用地对应负荷密度列表」的年份不一致。')
    
    f_start, f_end = min(ba_years), max(ld_years)

    start, end = getDataRange('电力电量类', args['pretype*'], args['city*'], '年')

    print(f_start, f_end, start, end)
    if f_start < start or f_end > end:
        raise ValueError('上传文件的年份范围（%d～%d）超过了数据库中的年份范围（%d～%d）。' % (f_start, f_end, start, end))


def getDataRange(major_category: str, minor_category: str, region: str, grain: str) -> tuple:
    try:
        grain = _grain_zh2en_mapper[grain]
    except:
        raise LookupError("未知粒度 %s" % grain)
    print("getDataRange called.", major_category, minor_category, region, grain)
    conn = getConn()
    cur = conn.cursor()
    get_metadata_id_sql = "select distinct id from metadata where area='%s' and grain='%s' and kind='%s'" % (region, grain, major_category)
    cur.execute(get_metadata_id_sql)
    result = cur.fetchall()
    print("result", result)
    target_id = result[0][0]
    print('gotta target_id:', target_id)
    get_actual_data_sql = "select distinct datatime from electric_data_test where metadataid=%d and dataname='%s'" % (target_id, minor_category)
    cur.execute(get_actual_data_sql)

    years = set()
    for time in cur.fetchall():
        years.add(time[0].year)
    print("here's years:", years)
    if len(years) == 0:
        raise ValueError("「%s」→「%s」下没有%s%s粒度的数据。" % (major_category, minor_category, region, grain_en2zh_mapper(grain)))
    
    min_year, max_year = min(years), max(years)
    print("finally, min max =", min_year, max_year)
    return (min_year, max_year)
    
if __name__ == '__main__':
    # conn = psycopg2.connect(dbname="electric", user="postgresadmin", password="admin123", host="192.168.1.108",
    #                         port="32345")
    # cur = conn.cursor()
    # grain = "year"
    # area = "yunnan"
    # kind = "test"
    # data = [('2018', 'GDPperpop', 37136.0, 'year', 'yunnan', 'test'), ('2018', 'GDP', 17881.12, 'year', 'yunnan', 'test'), ('2018', 'population', 4829.5, 'year', 'yunnan', 'test'), ('2020', 'populations', 4829.5, 'year', 'yunnan', 'test')]
    # sql = "SELECT * FROM electric_data where grain = '{}' and area = '{}' and kind = '{}'".format(
    #     grain, area, kind)
    # cur.execute(sql)
    # rows = cur.fetchall()
    re = getAlgorithmArgsDefaultValue()
    print(re)
