clc;
clear;
%%������Ϣ����
% global season cityname startyear endyear Tyear
% season=input('������sheet���ƣ�','s');
% cityname=input('������������ƣ�','s');
% startyear=input('���������ݿ���ʼ��ݣ�');
% endyear=input('���������ݿ��ֹ��ݣ�');
% Tyear=input('�������Ԥ�����ݣ�');
%%��󸺺ɡ���С���ɡ�Ԥ���յ���Ԥ��%%
premaxload=65000;
pretotal=1300000;
pregamma=0.9;
prebeta=0.7;
%%���ݿ��ȡ
actress1='E:\��Ŀ\����\����Ԥ��������ݣ�Matlab��\�ѿⷨ����\yunnan_year_loadchara_souku';
% path1=strcat(actress1,cityname);
%%����������Ϣ����info��

% info=xlsread(path1,season);
info = xlsread(actress1);
% [item year]=size(info);
startyearNum=find(2013==info(:,1));
endyearNum=find(2018==info(:,1));
numyear=endyearNum-startyearNum+1;
Maxload=info(startyearNum:endyearNum,26).';
Total=info(startyearNum:endyearNum,27).';
gamma=info(startyearNum:endyearNum,28).';
beta=info(startyearNum:endyearNum,29).';
info=info(startyearNum:endyearNum,1:25).';
%%���ú�������
load=seek22(info,premaxload,gamma,pregamma,prebeta);
%%�������
% xlswrite('E:\��Ŀ\����\����Ԥ��������ݣ�Matlab��\�ѿⷨ����\����Ԥ��_����.xlsx',load,season,'A1:A24');