# -*- coding: utf-8 -*-
"""
Created on Fri Jan 22 12:24:04 2021

@author: ZR_YL
"""



import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import math
from dao.interface import getData
import json
from datetime import datetime 


def Outlier(StartYear,EndYear, datatype="电力电量类", pretype="全社会用电量",city="云南省"):
    #读取数据
    name=[pretype]
    finaldata=[]
    year=np.arange(int(StartYear),int(EndYear)+1,1)
    
    datajson=getData("云南省_year_%s"%datatype, pretype, StartYear, EndYear)
    
    data=json.loads(datajson)
    if len(data)==0:
        raise ValueError("%s 中不存在 %s-%s 年的%s 数据"%(datatype,StartYear,EndYear,pretype))
    else:
        
        finaldata.append(data)
        final=pd.DataFrame(finaldata,index=name)
        final=final.T
        
        t=final[pretype]
        #print(t[abs(t-t.mean())> 1.0*t.std()])
        tnp=np.array(t.values)
        sigma=t[abs(t-t.mean())> 1.5*t.std()]
        #out=sigma.dropna(how="all")#异常值
        if len(sigma.values) == 0:
            result={"outlier":[],"year":[], "correction":[]}
            return result
        else:
            out=np.array(sigma.values).tolist()
            
            index_out=[]
            for o in out:
                ind=0-1
                for k in tnp:
                    ind+=1
                    if k==o:
                        index_out.append(ind)
                        break
                        
            #index_out=np.where(tnp==out)[0]#异常值下标
            outyear=[]
            outcorrect=[]
            for i in index_out:
                outyear.append(year[i])
                if i==0:
                    correct=(tnp[i+1]+tnp[i])/2
                elif i==len(tnp)-1:
                    correct=(tnp[i]+tnp[i-1])/2
                else:
                    correct=(tnp[i+1]+tnp[i-1])/2
                outcorrect.append(correct)
                
                
            result={"outlier":out,"year":outyear, "correction":outcorrect}
            return result

if __name__ == '__main__':
    StartYear="2015"
    EndYear="2019"
    datatype="电力电量类"
    o=Outlier(StartYear,EndYear,datatype=datatype,pretype="年最大负荷")
