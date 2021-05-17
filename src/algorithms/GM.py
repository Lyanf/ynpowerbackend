# -*- coding: utf-8 -*-
"""
Created on Mon Nov 23 15:14:57 2020

@author: ZR_YL
"""



import matplotlib.pyplot as plt
import pandas as pd
import numpy as np
from algorithms.train_test_set import generate_data,inverse_data

from algorithms.evaluation import RMSE,MAPE
from dao.interface import getData
import json 
"""
灰色预测模型
"""
def GM(StartYear,EndYear,PreStartYear,PreEndYear,timestep,pretype="全社会用电量",city="云南省"):
    def RGM(x,n):
        '''
        x为原始序列
        n为往后预测的个数
        '''
        x1 = x.cumsum()#一次累加  
        z1 = (x1[:len(x1) - 1] + x1[1:])/2.0#紧邻均值  
        z1 = z1.reshape((len(z1),1))  
        B = np.append(-z1,np.ones_like(z1),axis=1)  
        Y = x[1:].reshape((len(x) - 1,1))
        #a为发展系数 b为灰色作用量
        try:
            [[a],[b]] = np.dot(np.dot(np.linalg.inv(np.dot(B.T, B)), B.T), Y)#计算参数  
        except:
            raise ValueError("中间矩阵不可逆，请重新调整历史数据时间或步长")
        imitate = list()
        predict = list()
        der = list()
        for index in range(0,x.shape[0]):
            imitate.append((x[0]-b/a)*np.exp(-a*(index))*(-a)) 
        for index in range(x.shape[0]+1,x.shape[0]+n+1):
            predict.append((x[0]-b/a)*np.exp(-a*(index-1))*(-a)) 
        for index in range(0,x.shape[0]+n):
            der.append((x[0]-b/a)*np.exp(-a*index)*(pow(a,2)))
        # return {
        #         'a':{'value':a,'desc':'发展系数'},
        #         'b':{'value':b,'desc':'灰色作用量'},
        #         'imitate':{'value':imitate,'desc':'模拟值'},
        #         'predict':{'value':predict,'desc':'预测值'},
        #         'der':{'value':der,'desc':'x0斜率'}
        # } 
            return predict,a,b
    def RGMpre(x,n,a,b):
        predict = list()
        for index in range(x.shape[0]+1,x.shape[0]+n+1):
            predict.append((x[0]-b/a)*np.exp(-a*(index-1))*(-a))
        predict = np.array(predict)
        return predict


    if timestep > (int(EndYear)-int(StartYear)+1):
        raise ValueError("训练步长过大，请调整后重试.")
    elif timestep<(int(PreEndYear)-int(PreStartYear)+2):
        raise ValueError("训练步长小于预测年份区间长度，请增加训练步长.") 
    else:
        """负荷预测"""
        name=[pretype]
        finaldata=[]
        
        datayear=np.arange(int(StartYear),int(EndYear)+1)
        
        #读取历史负荷数据
        datajson=getData("云南省_year_电力电量类", pretype, StartYear, EndYear)
        # print(datajson)
        data=json.loads(datajson)
        finaldata.append(data)
        final=pd.DataFrame(finaldata,index=name)
        final=final.T
    
        
        datafinalyear=int(EndYear)
        trainyear=timestep
        testyear=int(PreEndYear)-int(PreStartYear)+1
        
        y = final.values  
        y = y.reshape(-1,1)
    
        #区分训练数据和预测数据
        num=len(y)
        #训练集
        trainx=y[num-testyear-1-trainyear:num-testyear-1].squeeze()
        trainy=y[num-testyear-1:num-1].squeeze()

        #测试集
        testx=y[num-testyear-trainyear:num-testyear].squeeze()
        testy=y[num-testyear:].squeeze()

        #开始训练
        trainpre,a,b=RGM(trainx,testyear)
        #获得测试结果
        testpre=RGMpre(testx,testyear,a,b)
        
        #获得最终预测
        testpredx=np.array(np.flipud(y[-1:-(trainyear+1):-1]))
        finalpre=RGMpre(testpredx,testyear,a,b)
        
    
        mape=MAPE(testpre,testy)
        rmse=RMSE(testpre,testy)
    
        
        ypre=finalpre.reshape(1,-1).squeeze()
    
        trainyear=datayear[num-testyear:]
        # for t in testy:
        #     count=-1
        #     for d in final[pretype]:
        #         count+=1
                
        #         if t>d-5 and t<d+5:
        #             # print("yes")
        #             trainyear.append(final.index[count])
        #             break
        result={"trainfromyear":trainyear[0],"traintoyear":trainyear[-1],"trainresult":trainpre,"prefromyear":PreStartYear,"pretoyear":PreEndYear,"preresult":ypre.tolist(),"MAPE":mape,"RMSE":rmse}
        #保存
        return result

if __name__ == '__main__':
    StartYear="1995"
    EndYear="2010"
    PreStartYear="2011"
    PreEndYear="2014"
    timestep=5
    city="云南省"
    result=GM(StartYear,EndYear,PreStartYear,PreEndYear,timestep,pretype="全社会用电量",city="云南省")



