# -*- coding: utf-8 -*-
"""
Created on Thu Mar  4 11:16:09 2021

@author: ZR_YL
"""


from algorithms.evaluation import RMSE,MAPE
from dao.interface import getData, insertData
import json 
import pandas as pd
import numpy as np
import statsmodels.api as sm
import statsmodels.tsa.stattools as ts
import matplotlib.pyplot as plt
import math

from algorithms.ExponentTime import ExponentTime
from algorithms.GrowthTime import GrowthTime
from algorithms.UnarylinearTime import UnarylinearTime
from algorithms.LogarithmTime import LogarithmTime
from algorithms.GM import GM
from algorithms.GPRM import GPRM
from algorithms.GBDT import GBDT
from algorithms.RandomForest import RandomForest
from algorithms.SVM import SVM
from algorithms.FER import FER
from algorithms.FLR import FLR

def ForIndustry(StartYear,EndYear,PreStartYear,PreEndYear,rejectlsit,proposedata,Premethod):

    pretype="全社会用电量"
    propose = pd.read_csv(proposedata, encoding="UTF-8")
    column=propose.columns
    
    if len(propose.values) != int(PreEndYear)-int(PreStartYear)+1:
        raise ValueError("上传数据的年限与预测年限不符，请重新上传.")
    elif len(column)-1 != len(rejectlsit):
        raise ValueError("大用户导入的数据名称与要剔除的行业名单不符，请重新上传.")
    elif set(column[1:])!=set(rejectlsit):
        raise ValueError("大用户导入的数据名称与要剔除的行业名单不符，请重新上传.")
    
    else:
        #读取年度数据
        name=[pretype]
        finaldata=[]
        yeardatajson=getData("云南省_year_电力电量类", pretype, StartYear, EndYear)
        yeardata=json.loads(yeardatajson)
        finaldata.append(yeardata)
        
        #读取行业数据
        for i in range(len(rejectlsit)):
            
            inddatajson=getData("云南省_year_电力电量类-行业", rejectlsit[i], StartYear, EndYear)
            inddata=json.loads(inddatajson)
            print(inddata)
            if len(inddata)==0:
                raise ValueError("%s 中不存在 %s-%s 年的%s 数据"%("电力电量类-行业",StartYear,EndYear,rejectlsit[i]))
            else:
                finaldata.append(inddata)
                name.append(rejectlsit[i])
            
        #获取最终数据DataFrame
        final=pd.DataFrame(finaldata,index=name)
        final=final.T
        final[pretype]=final[pretype].values*10000
        
        year=final.index.tolist()
        forpredata=[]
        for i in range(len(final)):
            drop=final[pretype].values[i]
            for j in range(len(rejectlsit)):
                drop=drop-final[rejectlsit[j]].values[i]
            forpredata.append(drop)
        
        
        savetype="剔除大用户的社会用电量"
        savetourl=pd.DataFrame()
        savetourl["year"]=year
        savetourl[savetype]=forpredata
        r=insertData(savetourl, "year","云南省", "电力电量类")
        
        
        if Premethod=="指数函数外推":
            result=ExponentTime.ExponentTime(StartYear,EndYear,PreStartYear,PreEndYear,pretype = savetype, city="云南省")
        elif Premethod=="灰色滑动平均模型":
            T=math.floor(len(forpredata)/3)
            result=GM.GM(StartYear,EndYear,PreStartYear,PreEndYear,timestep=T,pretype=savetype,city="云南省")
        elif Premethod== "生长函数外推":
            result=GrowthTime.GrowthTime(StartYear,EndYear,PreStartYear,PreEndYear,pretype=savetype,city="云南省")
        elif Premethod== "一元线性外推":
            result=UnarylinearTime.UnarylinearTime(StartYear,EndYear,PreStartYear,PreEndYear,pretype=savetype,city="云南省")
        elif Premethod== "对数函数外推":
            result=LogarithmTime.LogarithmTime(StartYear,EndYear,PreStartYear,PreEndYear,pretype=savetype,city="云南省")
        elif Premethod=="基于滚动机制的灰色预测模型":
            T=math.floor(len(forpredata)/3)
            result=GPRM.GPRM(StartYear,EndYear,PreStartYear,PreEndYear,T,pretype=savetype,city="云南省")
        elif Premethod== "模糊指数平滑模型":
            T=math.floor(len(forpredata)/3)
            result=FER.FER(StartYear,EndYear,PreStartYear,PreEndYear,T,pretype=savetype,city="云南省")
        elif Premethod=="模糊线性回归模型":
            T=math.floor(len(forpredata)/3)
            result=FLR.FLR(StartYear,EndYear,PreStartYear,PreEndYear,T,pretype=savetype,city="云南省")   
        elif Premethod == "梯度提升模型":
            T=math.floor(len(forpredata)/3)
            result=GBDT.GBDT(StartYear,EndYear,PreStartYear,PreEndYear,T,pretype=savetype,city="云南省")
        elif Premethod == "支持向量机模型":
            T=math.floor(len(forpredata)/3)
            result=SVM.SVM(StartYear,EndYear,PreStartYear,PreEndYear,T,pretype=savetype,city="云南省")
        elif Premethod == "随机森林模型":
            T=math.floor(len(forpredata)/3)
            result=RandomForest.RandomForest(StartYear,EndYear,PreStartYear,PreEndYear,T,pretype=savetype,n_estimators=50,city="云南省")
            
        if isinstance(result["preresult"],str):
            raise ValueError("预测失败，请重新选择预测方法.")
        else:
            ypre=[]
            for k in range(len(propose.values)):
                power=result["preresult"][k]
                for n in range(len(rejectlsit)):
                    power=power+propose[rejectlsit[n]].values[k]
                ypre.append(power)
        result={"prefromyear":PreStartYear,"pretoyear":PreEndYear,"preresult":ypre}
        return result





if __name__=="__main__":
    rejectlsit=["第一产业用电量","第二产业用电量"]
    proposedata="D:/lab/Yunnan_Pre/code_for_soft/联调/proposedata.csv"
    StartYear="2008"
    EndYear="2019"
    PreStartYear="2020"
    PreEndYear="2021"
    Premethod="灰色滑动平均模型"
    result=ForIndustry(StartYear,EndYear,PreStartYear,PreEndYear,rejectlsit,proposedata,Premethod)
    

