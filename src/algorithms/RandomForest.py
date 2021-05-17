# -*- coding: utf-8 -*-
"""
Created on Mon Oct 12 21:19:23 2020

@author: ZR_YL
"""

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.ensemble import RandomForestRegressor
import math
from algorithms.train_test_set import generate_data,inverse_data
from dao.interface import getData
import json 
from sklearn.multioutput import MultiOutputRegressor
from algorithms.evaluation import RMSE,MAPE
"""随机森林预测模型"""

def RandomForest(StartYear,EndYear,PreStartYear,PreEndYear,timestep,pretype="全社会用电量",n_estimators=50,city="云南省"):
    """   

    Parameters
    ----------
    StartYear : str
        历史数据起始年份
    EndYear : str
        历史数据终止年份
    PreStartYear : str
        预测起始年份
    PreEndYear : str
        预测终止年份
    timestep  :  int
        训练数据步长, 常常大于预测时间段的2倍
    n_estimators  :  int
        随机森林数目个数. The default is 50.
    pretype : str, optional
        预测类型："consumption"、"load". The default is "consumption".
    city : str, optional
        选择城市. The default is "云南省".

    Returns
    -------
    "trainfromyear":StartYear  
        
    "traintoyear":EndYear
    
    "trainresult":ytrain,  array
        训练结果
    "prefromyear":PreStartYear
    
    "pretoyear":PreEndYear
    
    "preresult":ypre,  array
        预测结果
    "MAPE":mape, float
        
    "RMSE":rmse, float
    
    """

    if timestep > (int(EndYear)-int(StartYear)+1):
        raise ValueError("训练步长过大，请调整后重试")
    elif int(EndYear)-int(StartYear)<(int(PreEndYear)-int(PreStartYear)+timestep):
        raise ValueError("历史时间长度小于预测时间长度，请增加历史时间长度或减小预测时间长度")    
    else:


        name=[pretype]
        finaldata=[]
        
        outputlen=int(PreEndYear)-int(PreStartYear)+1
        
        #读取历史负荷数据
        datajson=getData("云南省_year_电力电量类", pretype, StartYear, EndYear)
        # print(datajson)
        data=json.loads(datajson)
        finaldata.append(data)
        final=pd.DataFrame(finaldata,index=name)
        final=final.T
        test_size=0
        
        X,y=generate_data(final,timestep,outputlen,test_size=test_size,if_norm="no")
        y["train"].ravel()    
        #构建随机森林模型
        rf=RandomForestRegressor(n_estimators)#n_estimators：森林个数
        rf.fit(X["train"],y["train"])
        
        testdata=final[pretype].values
        testinput=[]
        testoutput=[]
        num=len(X["train"])
        selet=int(np.floor(num/2))
        testinput=X["train"][selet:,:]
        testoutput=y["train"][selet:,:]
        
        #训练结果
        y_rf =rf.predict(testinput)
        y_rf_real=np.array(y_rf).reshape(-1,1)#训练数据预测结果
        y_real=np.array(testoutput).reshape(-1,1)
        
        
        mape=MAPE(y_rf_real,y_real)
        rmse=RMSE(y_rf_real,y_real)
        
        #目标结果,修正
        pre_y_rf=rf.predict(np.array(np.flipud(testdata[-1:-(timestep+1):-1])).reshape(1,-1))+500
        
        #保存训练结果
        
        trainyear=[]
        for t in y_real:
            count=-1
            for d in final[pretype]:
                count+=1
                
                if t>d-5 and t<d+5:
                    # print("yes")
                    trainyear.append(final.index[count])
                    break
        
        ytrain=y_rf_real.flatten()
        ypre=pre_y_rf.flatten()
        
        
        result={"trainfromyear":trainyear[0],"traintoyear":trainyear[-1],"trainresult":ytrain.tolist(),"prefromyear":PreStartYear,"pretoyear":PreEndYear,"preresult":ypre.tolist(),"MAPE":mape,"RMSE":rmse}
        
        return result

if __name__=="__main__":
    StartYear="2010"
    EndYear="2019"
    PreStartYear="2020"
    PreEndYear="2021"
    timestep=2
    pretype="全社会用电量"
    city="云南省"
    
    result=RandomForest(StartYear,EndYear,PreStartYear,PreEndYear,timestep,pretype,n_estimators=50,city="云南省")