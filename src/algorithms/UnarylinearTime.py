# -*- coding: utf-8 -*-
"""
Created on Sat Jan  9 17:16:40 2021

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

def UnarylinearTime(StartYear,EndYear,PreStartYear,PreEndYear,pretype="全社会用电量",city="云南省",planflag=0,plan=0):

    
    """一元一次外推"""
    
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

        preyear = np.arange(int(PreStartYear),int(PreEndYear)+1)
        year=len(preyear)
        #区分训练数据和预测数据
        num=len(x)
        if num<2+year:
            raise ValueError("历史数据过少或预测年份过长，请重新选择")
        elif year<2:
            raise ValueError("该算法不支持两年以下的预测")
        else:
            trainx=x[num-2-year:num-2]
            trainy=y[num-2-year:num-2]
            
            testx=x[num-1-year:num-1]
            testy=y[num-1-year:num-1]
            
            
            # trainp = ic.getpred(trainx,year,planflag,plan)
            # trainp = np.array(trainp).T
            # trainpm = []
            # for i in range(51):
            #     trainpm.append(np.mean(trainp[i]))
            # trainpmm = trainpm.index(np.median(trainpm))
            # trainpredx = trainp[trainpmm]
            # trainpredx = [k * trainx[-1] for k in trainpredx]           
            
            # print(trainx)
            # print(trainpredx)
            reg = LinearRegression().fit(trainx, trainy)
            
            # reg = LinearRegression().fit(x, y)
            
            # testp = ic.getpred(testx,year,planflag,plan)
            # testp = np.array(testp).T
            # testpm = []
            # for i in range(51):
            #     testpm.append(np.mean(testp[i]))
            # testpmm = testpm.index(np.median(testpm))
            # testpredx = testp[testpmm]
            # testpredx = [k * testx[-1] for k in testpredx]
            testpredy = [testx * reg.coef_[0][0] + reg.intercept_[0] for testx in testx]
            
            # loadp = reg.predict(testx)#趋势外推
            
            mape=MAPE(testpredy,testy)
            rmse=RMSE(testpredy,testy)
    
    
    
            trainyear=realyear[num-1-year:num-1]
    
            
            preyear = np.arange(int(PreStartYear),int(PreEndYear)+1)*(1+plan*0.01)
            
            reg1 = LinearRegression().fit(x, y)
            
            # p = ic.getpred(preyear,year,planflag,plan)
            # p = np.array(p).T
            # pm = []
            # for i in range(51):
            #     pm.append(np.mean(p[i]))
            # pmm = pm.index(np.median(pm))
            # predx = p[pmm]
            # predx = [k * x[-1] for k in predx]

            predy = [x * reg1.coef_[0][0] + reg1.intercept_[0] for x in preyear]
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
    
    result=UnarylinearTime(StartYear,EndYear,PreStartYear,PreEndYear,pretype,city,0,0)