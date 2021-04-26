function forecast_result=Fractal_main(load,power,max_load)
%------------------����------------------
%load������ʷ�긺������(����3�����ݣ�����ע�⣺load�ĵ�λ��MW��Ϊn*24�ľ���n��ʾ��ʷ�������У���24��ʾ24��ʱ�̣��У�
%power����Ԥ����������õ���Ԥ��ֵ   ����ע�⣺power�ĵ�λ����ǧ��
%max_load����Ԥ�����������󸺺�Ԥ��ֵ  ����ע�⣺power�ĵ�λ��MW
%------------------����------------------
%forecast_result����Ԥ��������ո������� ����ע�⣺forecast_result�ĵ�λ��MW

section=3; %��Ϊ���Σ�ÿ�����ɵ㶼�ǲ�ֵ��
[year_num,hour_num]=size(load); %��ȡ��ʷ������ո������ߵ�ά��
forecast1=zeros(1,year_num); %
n=hour_num/section; %8Сʱһ��
x=ones(year_num,1)*(1:n); %9*8����Ԫ��ֵ��1��8
IFS_num=n-1;  %��������ϵ����������˵����任�ĸ�����7
y=zeros(year_num,n); %9*8���󣬲�ֵ���Ӧ����ֵ����
a=zeros(year_num,IFS_num); %����任�Ĳ�����ÿһ������任��Ӧһ��������ÿ���Ӧһ����������
c=zeros(year_num,IFS_num);
d=zeros(year_num,IFS_num);
e=zeros(year_num,IFS_num);
f=zeros(year_num,IFS_num);
interation_num=4; %Nmax�����������ʱ������������
k=0;
for j=2:(year_num*n-1)
    if mod(year_num*n,j)==0
        k=k+1;
        GYueShu(k)=j;
        %Edit by PHQ
%         n(k)=j;
    end
end %n(k)Ϊ9*8��Լ��
num_n=length(GYueShu);  %9*8���ж��ٸ�Լ�������ж����ֲ�ͬʱ��߶ȵķַ�
% Hurst=zeros(num_n-1,2);%����OLS�����
 Hurst=zeros(num_n,2);%����OLS�����
load_Hurst=reshape(load(1:year_num,:)',1,[]);%���һ����ʱ�����У�һά
RS=zeros(1,num_n); %RS������
for i=1:num_n
    num_Ia=hour_num*year_num/GYueShu(i);
    Ia=zeros(num_Ia,GYueShu(i));
    RIa=zeros(num_Ia,1);
    SIa=zeros(num_Ia,1);
    for j=1:num_Ia
        Ia(j,:)=load_Hurst((j-1)*GYueShu(i)+1:j*GYueShu(i));
        ea=mean(Ia(j,:));
        Xka=Ia(j,:)*triu(ones(GYueShu(i),GYueShu(i)),0)-ea*(1:GYueShu(i));
        RIa(j)=max(Xka)-min(Xka);
        SIa(j)=std(Ia(j,:),1);
    end
    ID0=find(SIa==0);
    SIa(ID0)=1;
    RIa(ID0)=0;
    RS(i)=sum(RIa./SIa)/(num_Ia-length(ID0));
    if i>1
        Hurst(i-1,:)=polyfit(log(GYueShu(1:i)),log(RS(1:i)),1);
    end
end
disp(Hurst)
H=max(Hurst(:,1));

for j=1:section %�Ը��ν��з��β�ֵ
    %initial_point=load(year_num,(j-1)*n+1)
 %   [forecast1((j-1)*n+1:j*n),~,~,~,~,~,~]=interation(load(:,(j-1)*n+1:j*n),1:n,4,[1,load(year_num,(j-1)*n+1)]);
     [forecast1((j-1)*n+1:j*n),~,~,~,~,~,~]=interation(load(:,(j-1)*n+1:j*n),1:n,interation_num,[1;load(year_num,(j-1)*n+1) ]);
end
forecast2=forecast1.*max_load/max(forecast1); %����󸺺�����
forecast_result=forecast2.*(1+(power-sum(forecast2))/sum(forecast2)); %���������õ���Ԥ��ֵ����
end



