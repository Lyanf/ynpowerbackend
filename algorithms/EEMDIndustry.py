# -*- coding: utf-8 -*-
"""
Created on Mon Apr 15 16:41:37 2021

@author: ZR_YL
"""



import sklearn
from sklearn.svm import SVR
import numpy as np
import pandas as pd
import os
import matplotlib.pyplot as plt
from PyEMD import EEMD,EMD
from sklearn.multioutput import MultiOutputRegressor

import algorithms.predict_economic as preeco

from algorithms.evaluation import RMSE,MAPE
from dao.interface import getData
import json 
import math
import xgboost as xgb

def EEMDIndustry(StartYear,EndYear,PreStartYear,PreEndYear,pretype,city="云南省"):
#判定当前的时间序列是否是单调序列

    #读取年度数据
    yeardatajson=getData("云南省_year_电力电量类-行业", pretype, StartYear, EndYear)
    yeardata=json.loads(yeardatajson)
    pdyeardata=pd.DataFrame(yeardata,index=[pretype])
    pdyeardata=pdyeardata.T
    
    totalyear=int(EndYear)-int(StartYear)+1
    timestep=int(PreEndYear)-int(PreStartYear)+1
    
    
    trainyear=math.floor(totalyear-totalyear*0.45)
    delay=totalyear-trainyear-timestep+1
    testyear=trainyear+delay
    if trainyear+2+timestep>totalyear:
        raise ValueError("历史数据时间间隔过短或预测年份过长")
    else:
        train_x=pdyeardata[pretype].values[:trainyear]
        train_y=pdyeardata[pretype].values[trainyear:trainyear+timestep]
        train_x=train_x.reshape(1,-1)
        train_y=train_y.reshape(1,-1)
        
        test_x=pdyeardata[pretype].values[delay:testyear]
        test_y=pdyeardata[pretype].values[testyear:testyear+timestep]
        test_x=test_x.reshape(1,-1)
        test_y=test_y.reshape(1,-1)
        
        testdata=pdyeardata[pretype].values
        finalpre=np.array(np.flipud(testdata[-1:-(trainyear+1):-1])).reshape(1,-1)
        
        eemd=EMD()
        IMFs = eemd(train_x.squeeze())#
        testIMFs=eemd(test_x.squeeze())
        preIMFs=eemd(finalpre.squeeze())
        
        gbdt=xgb.XGBRegressor(max_depth=5, learning_rate=0.1, n_estimators=100, 
                      silent=True, objective='reg:linear', booster='gblinear', n_jobs=50, 
                      nthread=None, gamma=0, min_child_weight=1, max_delta_step=0, subsample=1, 
                      colsample_bytree=1, colsample_bylevel=1, reg_alpha=0, reg_lambda=1,
                      scale_pos_weight=1, base_score=0.5, random_state=0, seed=None,
                      missing=None, importance_type='gain')#
    
        multi_model = MultiOutputRegressor(gbdt)
        
        # svr=SVR(kernel="poly",gamma="scale",C= 0.001)#kernel="linear","poly"
        # multi_model = MultiOutputRegressor(svr)
        multi_model.fit(IMFs,train_y)
        
        testpredict=multi_model.predict(testIMFs) 
        ypre=multi_model.predict(preIMFs)
        
        
        mape=MAPE(testpredict,test_y)
        rmse=RMSE(testpredict,test_y)
        
        teststarty=int(StartYear)+testyear-1
        testendy=teststarty+timestep-1
        ytrain=testpredict.flatten()
        ypre=ypre.reshape(-1,1).squeeze()
        
        result={"trainfromyear":teststarty,"traintoyear":testendy,"trainresult":ytrain.tolist(),"prefromyear":PreStartYear,"pretoyear":PreEndYear,"preresult":ypre.tolist(),"MAPE":mape,"RMSE":rmse}
        return result

if __name__ == '__main__':
    pretype="电石用电量"
    StartYear="2008"
    EndYear="2019"
    PreStartYear="2020"
    PreEndYear="2021"
    
    result=EEMDIndustry(StartYear,EndYear,PreStartYear,PreEndYear,pretype,city="云南省")