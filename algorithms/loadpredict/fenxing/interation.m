function [forecast_result,H,A,C,D,E,F]=interation(load_peryear_adjusted,x1,interation_num,initial_point)
[year_num,hour_num]=size(load_peryear_adjusted); %��ȡ��ʷ����Լ��ֶ�Сʱ��������hour_num =8;
n=length(x1); %��ֵ��ĳ���
x=ones(year_num,1)*x1; %9*8����ÿ��Ĳ�ֵ�������
IFS_num=n-1; %��������ϵ�ĸ�����N-1��
y=zeros(year_num,n); %9*8���󣬶�Ӧ��ֵ��ĸ���ֵ
a=zeros(year_num,IFS_num); %����任�Ĳ���
c=zeros(year_num,IFS_num);
d=zeros(year_num,IFS_num);
e=zeros(year_num,IFS_num);
f=zeros(year_num,IFS_num);
H=Hurst_calculation(load_peryear_adjusted); %������ϵ��

%% ��� ����任����
for i=1:year_num
    y(i,:)=load_peryear_adjusted(i,x(i,:));
    [a(i,:),c(i,:),d(i,:),e(i,:),f(i,:)]=fractal_IFS(x(i,:),y(i,:),H(1));
end
%% ͨ���Ը��з���任������ƽ�����õ��ܵĵ�������ϵ
A=mean(a,1);
C=mean(c,1);
D=mean(d,1);
E=mean(e,1);
F=mean(f,1);
%% ������
attrator_before=initial_point;
attractor_num=1;
% attrator_after =[];
for k=1:interation_num
    attrator_after=zeros(2,attractor_num*IFS_num);
    for i=1:IFS_num
        attrator_after(:,((i-1)*attractor_num+1):(i*attractor_num))=[A(i),0;C(i),D(i)]*attrator_before+[E(i);F(i)]*ones(1,attractor_num);%һ���㽫��չ��IFS_num����          
    end
    attrator_before=attrator_after;
    %Edit by phq
    %attrator_after = [attrator_before,attrator_after];
    attractor_num=size(attrator_before,2); %���غ��������ӵ�����
end
%% �����ӵ�һ��Ϊx���꣬�ڶ���Ϊy����
attractor_num=size(attrator_after,2); %���غ��������ӵ�����
attrator_x=attrator_after(1,:);
attrator_y=attrator_after(2,:);

hour_temp=zeros(1,attractor_num);
load_temp=zeros(1,attractor_num);
forecast_result=zeros(1,hour_num);
hour_max=max(attrator_x);
for i=1:attractor_num
    [hour_temp(i),ID]=min(attrator_x);
    load_temp(i)=attrator_y(ID);
    attrator_x(ID)=hour_max+1;
end
forecast_result(1)=load_temp(1);
% hour_temp
for i=2:hour_num
    ID1=find(hour_temp<=i);
    forecast_result(i)=load_temp(ID1(length(ID1)));
end

    


    
    
