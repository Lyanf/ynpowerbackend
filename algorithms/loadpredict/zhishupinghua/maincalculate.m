clc;
clear;
% global Tyear startyear endyear
% %%������Ϣ����
% %%infoΪ8760*N�ľ���NΪ��ʷ�����Ŀ��cityname=��������premaxloadΪԤ�����󸺺ɣ�MW��
% cityname=input('������������ƣ�','s');
info=xlsread('E:\��Ŀ\����\����Ԥ��������ݣ�Matlab��\ָ��ƽ��������\yunnan_8760.xlsx').';
info = info(2:8761,2:8);
% startyear=input('���������ݿ���ʼ��ݣ�');
% xyear=find(2013==info(1,:));
% endyear=input('���������ݿ��ֹ��ݣ�');
% yyear=find(2019==info(1,:));
%numyear=endyear-startyear+1;
Tyear=2020;
%T=Tyear-endyear;
premaxload=70000;
%%�������
P1=seek41(info,'����',premaxload,Tyear,2013,2019);%%������,������Ϊ8760*1��������
% xlswrite('C:\Users\oodil\Desktop\��Ŀ\����\����Ԥ��������ݣ�Matlab��\ָ��ƽ��������\����Ԥ��.xlsx',P1,cityname,'A1:A8760');