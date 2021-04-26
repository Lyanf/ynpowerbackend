clc
clear
start = 2013;
ending = 2019;
year = ending - start;
array = zeros(year,24);
power = 1476433;
maxload = 72442;
columns = ["m_01", "m_02", "m_03","m_04","m_05","m_06","m_07","m_08","m_09","m_10","m_11","m_12","m_13","m_14","m_15","m_16","m_17","m_18","m_19","m_20","m_21","m_22","m_23","m_24"
];
col = 'm_01,m_02,m_03,m_04,m_05,m_06,m_07,m_08,m_09,m_10,m_11,m_12,m_13,m_14,m_15,m_16,m_17,m_18,m_19,m_20,m_21,m_22,m_23,m_24,loadmax,electricity';



s = getData("yunnan_year_test",col,num2str(start),num2str(ending));
num = length(s);
for i = 1:num
    a = s(i);
    x = str2num(a{1,1}{1,1})-start+1;
    y = str2num(a{1,1}{2,1}(3:4));  
    array(x,y) = a{1,1}{3,1};
end


forecast_result=Fractal_main(array,power,maxload);
