function P1=seek41(info,cityname,premaxload,Tyear,startyear,endyear)
numyear=endyear-startyear+1;
T=Tyear-endyear;
%%ϵ��ѡ��
flaga=strcmp(cityname,'����');
flagb=strcmp(cityname,'�Ϻ�');
flagc=strcmp(cityname,'����');
flagd=strcmp(cityname,'�㽭');
flage=strcmp(cityname,'����');
flagf=strcmp(cityname,'����');
if(flaga)
    kk=1.31;
    mm=0.0015;
end
if(flagb)
    kk=0.9;
    mm=0.015;
end
if(flagc)
    kk=1.2;
    mm=0.015;
end
if(flagd)
    kk=1.2;
    mm=0.015;
end
if(flage)
    kk=0.8;
    mm=0.015;
end
if(flagf)
    kk=1.0;
    mm=0.015;
end
for ii=1:numyear
    info1(:,ii)=dsort(info(1:8760,ii));
end
%%��8769������Ϣ��¼��������
for k=1:numyear
    yt(:,k)=info1(:,k);
end
%%������ָ��ƽ������Ԥ��
alpha=0.15;
for j=1:8760
    st1_0=mean(yt(j,:),2);
    st2_0=st1_0;
    st3_0=st1_0;
    st1(1)=alpha*yt(j,1)+(1-alpha)*st1_0;
    st2(1)=alpha*st1(1)+(1-alpha)*st2_0;
    st3(1)=alpha*st2(1)+(1-alpha)*st3_0;
    for i=2:numyear
        st1(i)=alpha*yt(j,i)+(1-alpha)*st1(i-1);
        st2(i)=alpha*st1(i)+(1-alpha)*st2(i-1);
        st3(i)=alpha*st2(i)+(1-alpha)*st3(i-1);
    end
    st1=[st1_0,st1];
    st2=[st2_0,st2];
    st3=[st3_0,st3];
    a=3*st1-3*st2+st3;
    b=0.5*alpha/(1-alpha)^2*((6-5*alpha)*st1-2*(5-4*alpha)*st2+(4-3*alpha)*st3);
    c=0.5*alpha^2/(1-alpha)^2*(st1-2*st2+st3);
    yhat=a+b+c;
    xishu=[c(numyear+1),b(numyear+1),a(numyear+1)];
    P(j,1)=polyval(xishu,T);
end
%%��С���ɣ�ƽ������Ԥ��%%
Maxload=info1(1,:);
Minload=info1(8760,:);
Meanload=sum(info1)/8760;
preminload=predict(Minload,Tyear,endyear)*kk;
premeanload=0.5*(premaxload+preminload);
%%�����߽�������
for i2=1:8760
    P1(i2,1)=P(i2,1)*premaxload/P(1,1);
end
Pm=sum(P1)/8760;
Pe=abs(P1-Pm*ones(8760,1));
num=find(Pe==min(Pe));
num=num(1);
b=0;
e=0;
ab=100000;
pan=premeanload*mm;
while (ab>pan)
    if e<premeanload
        b=b+premeanload*0.0002;
    else
        b=b-premeanload*0.0002;
    end
    for i4=1:8760
        if i4<=num
            P1(i4,1)=P1(i4,1)+(i4-1)*b/num;
        else
            P1(i4,1)=P1(i4,1)+(8760-i4)*b/num;
        end
    end
    e=sum(P1)/8760;
    ab=abs(e-premeanload);
end




