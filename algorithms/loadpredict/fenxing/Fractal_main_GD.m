%% Step1: ������Ӧ���� ,'b2:Y11'
clc
clear
load = xlsread('���Ϸ�ˮ��2020.xlsx','��λ');
power = 1476433;
maxload = 72442;
forecast_result=Fractal_main(load,power,maxload);