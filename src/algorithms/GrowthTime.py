# -*- coding: utf-8 -*-
"""
Created on Sat Jan  9 19:48:00 2021

@author: ZR_YL
"""

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression
from sklearn import metrics
from scipy.optimize import leastsq
from algorithms.evaluation import RMSE,MAPE
import algorithms.io_csv as ic
from dao.interface import getData
import json 
import math

def GrowthTime(StartYear,EndYear,PreStartYear,PreEndYear,pretype="全社会用电量",city="云南省",planflag=0,plan=0):

    
    def func3(params, x):
        a, b, c = params
        return np.exp (a / x + b ) + c
    
    def error3(params, x, y):
        return func3(params, x) - y
    
    def slovePara3(x,y):
        p0 = [1, 0.02, 0]
        Para = leastsq(error3, p0, args=(x, y))
        return Para   
    


    
    if city=="云南省":
        name=[pretype]
        finaldata=[]
        
        #读取历史负荷数据
        datajson=getData("云南省_year_电力电量类", pretype, StartYear, EndYear)
        # print(datajson)
        data=json.loads(datajson)
        finaldata.append(data)
        
        
        #获取最终数据DataFrame
        final=pd.DataFrame(finaldata,index=name)
        final=final.T
        
        realyear = np.arange(int(StartYear),int(EndYear)+1)     

        final["time"]=realyear

        x = final["time"].values*(1+plan*0.01)
        y = final[pretype].values        #load
        

        x = x.reshape(-1,1)
        y = y.reshape(-1,1)


        #区分训练数据和预测数据
        preyear = np.arange(int(PreStartYear),int(PreEndYear)+1)*(1+plan*0.01)
        year=len(preyear)
        #区分训练数据和预测数据
        num=len(x)
        if num<3+year:
            raise ValueError("历史数据过少或预测年份过长，请重新选择")
        elif year<2:
            raise ValueError("该算法不支持两年以下的预测")
        else:
            trainx=x[num-2-year-1:num-2].squeeze()
            trainy=y[num-2-year-1:num-2].squeeze()
            
            testx=x[num-1-year:num].squeeze()
            testy=y[num-1-year:num].squeeze()
        
            #建立模型
            Para = slovePara3(trainx,trainy)
            a, b, c = Para[0]
            
            testp = ic.getpred(testx,year+1,planflag,plan)
            testp = np.array(testp).T
            testpm = []
            for i in range(51):
                testpm.append(np.mean(testp[i]))
            testpmm = testpm.index(np.median(testpm))
            testpredx = testp[testpmm]
            testpredx = [k * testx[-1] for k in testpredx]
            testpredy = [np.exp (a / x + b ) + c for x in testx]
    
    
            trainyear=realyear[num-1-year:num]   
                    
            #误差
            mape=MAPE(testpredy,testy)
            rmse=RMSE(testpredy,testy)
            
            #预测
            x=x.squeeze()
            y=y.squeeze()
            Parapre = slovePara3(x,y)
            ap, bp, cp = Parapre[0]
            
            
            p = ic.getpred(preyear,year,planflag,plan)
            p = np.array(p).T
            pm = []
            for i in range(51):
                pm.append(np.mean(p[i]))
            pmm = pm.index(np.median(pm))
            predx = p[pmm]
            predx = [k * x[-1] for k in predx]
                
            predy = [np.exp (ap / x0 + bp ) + cp for x0 in preyear]
            predy=np.array(predy).squeeze()    
    
            #存储
            ytrain=np.array(testpredy).squeeze()
            ypre=np.array(predy).squeeze()
            result={"trainfromyear":trainyear[0],"traintoyear":trainyear[-1],"trainresult":ytrain.tolist(),"prefromyear":PreStartYear,"pretoyear":PreEndYear,"preresult":ypre.tolist(),"MAPE":mape,"RMSE":rmse}
            return result
        
if __name__ == '__main__':
    StartYear="2000"
    EndYear="2019"
    PreStartYear="2020"
    PreEndYear="2023"
    pretype="全社会用电量"
    city="云南省"
    
    result=GrowthTime(StartYear,EndYear,PreStartYear,PreEndYear,pretype,city)      