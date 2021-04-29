# -*- coding: utf-8 -*-
"""
Created on Wed Feb 24 12:17:51 2021

@author: ZR_YL
"""

from scipy.stats import pearsonr
from scipy.spatial.distance import pdist, squareform

import algorithms.predict_economic as preeco
from dao.interface import getData
import json 

from sklearn.decomposition import PCA as sklearnPCA

import numpy as np
import pandas as pd
import copy


def PCA(StartYear,EndYear,pretype,econamelist,pmin = 0.9,city="云南省"):

    if pmin>=1 or pmin<=0:
        raise ValueError ("皮尔森因数阈值应当在0到1之间选取")
    elif len(econamelist)<2:
        raise ValueError ("至少选择2个影响因素")
    else:
        period=int(EndYear)-int(StartYear)+1
        #读取历史负荷数据
        finaldata=[]
        name=[]
        if pretype == None:
            pass
        else:
            for i in range(len(pretype)):
                datajson = getData("云南省_year_电力电量类", pretype[i], StartYear, EndYear)
                data=json.loads(datajson)
                finaldata.append(data)
                name.append(pretype[i])
        
        if econamelist == None:
            pass
        else:
            #读取经济数据
            for i in range(len(econamelist)):
                ecodatajson=getData("云南省_year_社会经济类", econamelist[i], StartYear, EndYear)
                ecodata=json.loads(ecodatajson)
                finaldata.append(ecodata)
                name.append(econamelist[i])
    
        #获取最终数据DataFrame
        final=pd.DataFrame(finaldata,index=name)
        final=final
        
        data=final.values
    
        data2 = []
        dmean = []
        dstd = []
        data3 = []
        

        zerofactor=[]
        for i in range(1,len(data)):
            pccs = pearsonr(data[i], data[0])
            if pccs[0] > pmin:
                data2 = np.r_[data2,data[i]]
            else:
                zerofactor.append(i)
        

        if data2==[] or len(data2)==0:
            raise ValueError("皮尔逊系数过大或历史数据时间过短,无法进行分析")
        else:
            data2 = np.array(data2).reshape(-1,period)
        
            
            data3 = copy.deepcopy(data2)
            
            
            for i in range(len(data2)):
                dmean.append(np.mean(data2[i]))
                dstd.append(np.std(data2[i], ddof = 1))
                data3[i] = [(x - dmean[i]) / dstd[i] for x in data2[i]]
                
            
            cov = np.cov(data3)
            
            eig_val, eig_vec = np.linalg.eig(cov)
            s = sum(eig_val)
            p = [x / s for x in eig_val]
            
            vector=[]
            variance_ratio=[]
            for i in range(len(p)):
                if p[i]>0.1:
                    if len(zerofactor)==0:
                        pass
                    else:
                        v=np.round(eig_vec[i],2).tolist()
                        for k in zerofactor: 
                            v.insert(k,0)
                        vector.append(v)
                        variance_ratio.append(np.round(np.array(p[i]),2).tolist())

                    
            n_components=[i for i in range(1,len(variance_ratio)+1)]

            name= final.index[1:].tolist()
            
            #获取合适的PCA维度
            # pca = sklearnPCA(0.9)
            # principalComponents = pca.fit_transform(data)
            # #print("n_components = ",pca.n_components_)
            # print(pca.explained_variance_ratio_)
            # print(pca.explained_variance_)
            
            return {"N_components":n_components,"ComponetRatio":variance_ratio,"FactorName":name,"Vectors":vector}

if __name__ == '__main__':
    StartYear="2013"
    EndYear="2018"
    pretype=["全社会用电量"]
    econamelist=["GDP","第一产业GDP","第二产业GDP","人口","人均GDP","能源生产总值","能源消费总值","第二产业产值","第三产业GDP"]
    
    result=PCA(StartYear,EndYear,pretype,econamelist,0.9)