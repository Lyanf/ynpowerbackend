clc;
clear;
%%������Ϣ����
global numyear
% global season cityname startyear endyear Tyear info numyear
% season=input('������sheet���ƣ�','s');
% cityname=input('������������ƣ�','s');
% startyear=input('���������ݿ���ʼ��ݣ�');
% endyear=input('���������ݿ��ֹ��ݣ�');
% numyear=endyear-startyear+1;
% Tyear=input('�������Ԥ�����ݣ�');
actress1='E:\��Ŀ\����\����Ԥ��������ݣ�Matlab��\˫��бƷ�����\yunnan_year_loadchara_jiabi';
% path1=strcat(actress1,cityname);
%%���ݿ������
info=xlsread(actress1);
info = info.';
numyear=7;
%%��󸺺ɡ���С���ɡ�Ԥ���յ���Ԥ��%%
premaxload=65000;
pretotal=1300000;
%%���ú�������
load=seek32(info,premaxload,pretotal);
%%�������
% xlswrite('C:\Users\oodil\Desktop\��Ŀ\����\����Ԥ��������ݣ�Matlab��\˫��бƷ�����\����Ԥ��_����.xlsx',load,season,'A1:A24');