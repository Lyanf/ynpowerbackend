
from .algorithm import y_character, typical_day, y_load, y_load_cons, multi_y_character
from .day import d_character, day_plot, multi_d_character
from .month import m_character, multi_m_character


class DataRangeError(Exception):
    ...

#年负荷特性
def yearfeature(start, end, datasource="yunnan_day_电力电量类"):
    try:
        result = multi_y_character(datasource, start, end)
        print(result)
        re = []
        for i in range(len(result[0])):
            temp = {
                'year': result[0][i],
                'yearMaxPayload': int(result[1][i][0]),
                'yearMinPayload': int(result[1][i][1]),
                'yearAveragePayload': int(result[1][i][2]),  # ,
                'yearMaxPeekValleyDiff': round(result[1][i][3],3),  # ,
                'yearRate': round(result[1][i][4],3),  # ,
                'seasonImbaRate': round(result[1][i][5],3),  # ,
                'monthImbaRate': round(result[1][i][6],3),  #
            }
            re.append(temp)
        return re
    except:
        raise DataRangeError("「%s」下没有 %s 到 %s 时期的数据。" % (datasource, start, end))
#典型日
def typicalDay(start, end, season, datasource="yunnan_day_电力电量类"):
    try:
        return typical_day(datasource, start, end, season)
    except:
        raise DataRangeError("「%s」下没有 %s 到 %s 时期的数据。" % (datasource, start, end))

#年负荷曲线
def yearLoad(start, end, datasource="yunnan_day_电力电量类"):
    try:
        result = y_load(datasource, start, end)
        return result
    except:
        raise DataRangeError("「%s」下没有 %s 到 %s 时期的数据。" % (datasource, start, end))

#年持续负荷曲线
def yearLoadCon(start, end, datasource="yunnan_day_电力电量类"):
    try:
        result = y_load_cons(datasource, start, end)
        return result
    except:
        raise DataRangeError("「%s」下没有 %s 到 %s 时期的数据。" % (datasource, start, end))


#日负荷特征
def dayFeature(start, end, datasource="yunnan_day_电力电量类"):
    try:
        result = multi_d_character(datasource, start, end)
        # print(result[0].tolist())
        re = [] #d_max, d_mean, d_min, d_r, d_m_r, peak, peak_r
        for i in range(len(result[0].tolist())):
            temp = {
                'day': result[0][i][0],
                'dayMaxPayload': int(result[1][i][0]),
                'dayMinPayload': int(result[1][i][2]), #d_min,
                'dayAveragePayload': int(result[1][i][1]), #d_mean,
                'dayPayloadRate': round(result[1][i][3], 3), #d_r,
                'dayMinPayloadRate': round(result[1][i][4],3), #d_m_r,
                'dayPeekValleyDiff': int(result[1][i][5]), #peak,
                'dayPeekValleyDiffRate': round(result[1][i][6],3), #peak_r
            }
            re.append(temp)
        return sorted(re, key=lambda x: tuple(x['day'].split('/')))
    except:
        raise DataRangeError("「%s」下没有 %s 到 %s 时期的数据。" % (datasource, start, end))
#日负荷曲线
def dayLoad(start, end, datasource="yunnan_day_电力电量类"):
    try:
        result = day_plot(datasource, start, end)
        return result.tolist()
    except:
        raise DataRangeError("「%s」下没有 %s 到 %s 时期的数据。" % (datasource, start, end))

#月负荷特性
def monthFeature(start, end, datasource="yunnan_day_电力电量类"):
    try:
        result = multi_m_character(datasource, start, end)
        re = []
        for i in range(len(result[0])):
            temp = {
                'month': str(result[0][i][0]) + "/" +str(result[0][i][1]),
                'monthAverageDailyPayload': int(result[1][i][0]),
                'monthMaxPeekValleyDiff': int(result[1][i][1]),
                'monthAverageDailyPayloadRate': round(result[1][i][2],3),
                'monthMinPayloadRate': round(result[1][i][3],3),
                'monthMaxPeekValleyDiffRate': round(result[1][i][4],3),
            }
            re.append(temp)
        return re
    except:
        raise DataRangeError("「%s」下没有 %s 到 %s 时期的数据。" % (datasource, start, end))

