function x=seek32(info,premaxload,pretotal)
global numyear
maxyearload=max(info(2:25,1:numyear));
for k=1:numyear
    loadinfo(:,k)=info(2:25,k)./(maxyearload(1,k)*ones(24,1));
end
%%���費ͬ��ݲ�ͬ��Ȩ��
sumw=sum(1:numyear);
w=[1:numyear]'./(sumw*ones(numyear,1));
%w=1/numyear;
x0=1/max(loadinfo(1:24,:)*w)*(loadinfo(1:24,:)*w);
Maxload=max(info(2:25,1:numyear));
maxtime=find(max(x0)==x0);
Minload=min(info(2:25,1:numyear));
mintime=find(min(x0)==x0);
Total=sum(info(2:25,1:numyear),1);
%%˫��б�Ԥ��
f=[0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;-1;1;];%Ŀ�꺯����ǰ24������Ϊ�������ߣ�25��Ϊ������26��Ϊ������
lb=[0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;1;];%����
ub=[1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;5;];%����
maxl=premaxload;
%minl=preminload;
%���õ�����Լ��
beq=pretotal/maxl;
Aeq=[1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0];
%��С���ɳ���ʱ��Լ��
A1=zeros(23,26);%���ɾ���
A1(:,mintime)=1;%��С�����ڵ�5��
A1(1:mintime-1,1:mintime-1)=-eye(mintime-1,mintime-1);%ǰ4��4�жԽ�Ϊ1����
A1(mintime:23,mintime+1:24)=-eye(24-mintime,24-mintime);
b1=zeros(23,1);
%��󸺺ɳ���ʱ��Լ��
A2=zeros(23,26);
A2(:,maxtime)=-1;
A2(1:maxtime-1,1:maxtime-1)=eye(maxtime-1,maxtime-1);
A2(maxtime:23,maxtime+1:24)=eye(24-maxtime,24-maxtime);
b2=zeros(23,1);
%��׼����λ�������б�����֮��
A3=[eye(24,24) zeros(24,1) -x0];
b3=zeros(24,1);
A4=[-eye(24,24) x0 zeros(24,1)];
b4=zeros(24,1);
A=[A1;A2;A3;A4];
b=[b1;b2;b3;b4];
[x,fval,exitflag,output,lambda]=linprog(f,A,b,Aeq,beq,lb,ub);
x=x(1:24,1);
x=x./(max(x)*ones(24,1))*premaxload;



