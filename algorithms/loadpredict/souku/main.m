clc
clear

start = 2013;
ending = 2018;
premaxload=65000;
pretotal=1300000;
pregamma=0.9;
prebeta=0.7;

file = "yunnan_year_fengshui-souku-min";
f = s_forecast(start, ending, premaxload, pretotal,pregamma,prebeta,file);


function result = s_forecast(start, ending, premaxload, pretotal,pregamma,prebeta,file)
    global endyear startyear
    startyear = start;
    endyear = ending;
    year = ending-start;
    array = zeros(year,25);
    ga = zeros(year,1);
    
    columns = ["m_01", "m_02", "m_03","m_04","m_05","m_06","m_07","m_08","m_09","m_10","m_11","m_12","m_13","m_14","m_15","m_16","m_17","m_18","m_19","m_20","m_21","m_22","m_23","m_24"];
    col = 'm_01,m_02,m_03,m_04,m_05,m_06,m_07,m_08,m_09,m_10,m_11,m_12,m_13,m_14,m_15,m_16,m_17,m_18,m_19,m_20,m_21,m_22,m_23,m_24,gamma';
    
    for i = 1:year
        array(i,1) = start+i-1;
    end
    s = getData(file,col,num2str(start),num2str(ending));
    disp(s);
    num = length(s);
    
    for i = 1:num
        a = s(i);
        x = str2num(a{1,1}{1,1})-start+1;
        if length(a{1,1}{2,1}) == 4
            y = str2num(a{1,1}{2,1}(3:4))+1;
            array(x,y) = a{1,1}{3,1};
        else
            ga(x,1) = a{1,1}{3,1};
        end   
    end
    info = array.';
    gamma = ga.';
    result = seek22(info,premaxload,gamma,pregamma,prebeta);
end