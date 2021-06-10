from flask import Flask, request, render_template
from flask_cors import CORS
from flask_restful import Resource, Api
from pprint import pprint, pformat

from dao.interface import *

# print(getUnit('测试', '煤炭'))
# validateLDM({
#     'buildingarea': open('./algorithms/yunnan_building.csv'),
#     'loaddensity': open('./algorithms/yunnan_loaddensity.csv'),
#     'pretype*': '全社会用电量',
#     'city*': '云南省'
# })
# pprint(majorMetaDataToId("电力电量类"))
# print(' or '.join(['metadataid=%d' % i for i in majorMetaDataToId("电力电量类")]))




# print(get_missing_list(2010, 2019))

from Controller import *
from utils import methodNameZhToEn
from math import isnan


# _dir = './apis'
# if not os.path.exists(_dir):
#     os.makedirs(_dir)

app = Flask(__name__, static_folder = "./dist", template_folder = "./dist", static_url_path="")

cors = CORS(app, resources='*', supports_credentials=True)

api = Api(app)
filename = os.path.join(app.root_path, 'algorithms', 'args.xls')

def try_print_args():
    try:
        pprint(request.args)
    except RuntimeError:
        pass

def try_print_json():
    try:
        pprint(request.json)
    except RuntimeError:
        pass

def try_print_files():
    try:
        pprint(request.files)
    except RuntimeError:
        pass



class UploadCSV(Resource):
    def post(self):
        file = request.files['file']
        print(file.filename.split('.')[0])
        l = file.filename.split('.')[0].split('_')
        area = l[0]
        grain = l[1]
        kind = l[2]

        datatype = {'Year': 'S', 'year': 'S','datetime':'S', 'DT':'S'}
        data = pd.read_csv(file, encoding='utf-8', dtype=datatype)
        print('###< upload csv content')
        print(data)
        print('upload csv content >###')
        uploadData(data, area, grain, kind)
        re = {
            "message": 'success'
        }
        return re


class UploadCSVAndAutoCreate(Resource):
    def post(self):
        file = request.files['file']
        print(file.filename.split('.')[0])
        l = file.filename.split('.')[0].split('_')
        area = l[0]
        grain = l[1]
        kind = l[2]

        datatype = {'Year': 'S', 'year': 'S','datetime':'S', 'DT':'S'}
        data = pd.read_csv(file, encoding='utf-8', dtype=datatype)
        print('###< upload csv content')
        print(data)
        print('upload csv content >###')
        uploadData(data, area, grain, kind)

        for minor in list(data.columns.values)[1:]:
            if '（' in minor and minor.endswith('）'):
                minor, unit = str(minor).split('（', maxsplit=1)
                createBrandNewMetadata(kind, minor, unit.replace('）', ''))
            else:
                createBrandNewMetadata(kind, minor)

        re = {
            "message": 'success'
        }
        return re

class insertAlgorithmResult(Resource):
    def post(self):
        content = request.json['result']
        tag = request.json['tag']
        if (not tag) or tag.strip() == '':
            return {
                "message": 'empty request'
            }
        print(content)
        re = insertAlgorithmReusltController(content, tag)
        re = {
            "message": 'success'
        }
        return re
class getAlgorithmResult(Resource):
    def post(self):
        tags = request.json['tags'].strip()
        results = getAlgorithmReusltController(tags)
        re = {
            "results": results
        }
        return json.dumps(re, allow_nan=False)

class DataRangeError(Exception):
    ...

class GetDataJson(Resource):
    def post(self):
        dataName = request.json['dataName']
        startTime = request.json['startTime'].strip()
        endTime = request.json['endTime'].strip()
        grain = request.json['grain'].strip()
        area = request.json['area'].strip()
        kind = request.json['kind'].strip()

        try:
            re = getDatas(area + "_" + grain + "_" + kind, dataName, startTime, endTime)
            return re
        except:
            return repr(DataRangeError("「%s」→「%s」下没有 %s 到 %s 时期的数据。" % (kind, dataName, startTime, endTime)))

    def get(self):
        dataName = request.args.get('dataName')
        startTime = request.args.get('startTime')
        endTime = request.args.get('endTime')
        location = request.args.get('location')
        try:
            data = getDatas(location, dataName, startTime, endTime)
            re = {
                "data": data,
                "status": '200'
            }
            return re
        except:
            raise DataRangeError("「%s」下没有对应年份 %s 到 %s 的数据。" % (dataName, startTime, endTime))

class TestAlgorithm(Resource):
    def post(self):
        return ""

"""
BEGIN
fore-end related http apis
dummy version, not functional yet
"""

from random import randint, random
from uuid import uuid4 as get_uuid

def register(*url):
    def url_param(cls):
        target_url = '/api/' + '/'.join(url)
        print('bind', cls, 'to', target_url)
        api.add_resource(cls, target_url)
        return cls
    return url_param

@register('login')
class Login(Resource):
    def post(self):
        try:
            username = request.json['username'].strip()
            password = request.json['password']
            # dummy judgement
            if login(username, password):
                re = {
                    "msg": "success",
                    "code": 200
                }
            else:
                re = {
                    "msg": "fail",
                    "code": -1
                }
            return re
        except RuntimeError:
            return {
                    "msg": "fail",
                    "code": -1
                }

@register('logout')
class Logout(Resource):
    def post(self):
        return {
            "msg": "success",
            "code": 200
        }

@register('recent')
class LoadRecent(Resource):
    def get(self):
        return {
            "msg": "success",
            "code": 200,
            "data": [
                {
                    'name': '预测软件页面初步设计方案',
                    'url': 'https://th.bing.com/th/id/OIP.iLmhNJwXEioFCxt2cisBGgHaES?w=274&h=180&c=7&o=5&dpr=2&pid=1.7'
                },
                {
                    'name': '问题回复',
                    'url': 'https://th.bing.com/th/id/OIP.LE7rdh-q39ceZfXtus1ifAHaE7?w=270&h=180&c=7&o=5&dpr=2&pid=1.7'
                }
            ]
        } 

# 简化起见，value 就是 label，label 就是 value，不作区分。N16_15


#  N14_30
#  N21_15
_metadata = [
                {
                    "value": "电力电量类-测试1",
                    "label": "电力电量类-测试1",
                    "children": [
                        {
                            "value": "N16_15",
                            "label": "N16_15",
                        },
                        {
                            "value": "N14_30",
                            "label": "N14_30",
                        }
                    ]
                }

            ]

@register('db', 'metadata')
class GetMetadata(Resource):
    def get(self):
        metadata = getBrandNewMetadata()
        normalized_metadata = []
        for name, children in metadata.items():
            normalized_metadata.append({
                'value': name,
                'label': name,
                'children': [{
                    'value': subname,
                    'label': (subname + '（%s）' % subunit) if subunit.strip() else subname,
                    'unit': subunit
                } for subname, subunit in children]
            })
        return {
            "msg": "success",
            "code": 200,
            "data": normalized_metadata
        }

@register('db', 'metadata', 'create')
class CreateMetadata(Resource):
    def post(self):
        path, minor_name, unit = request.json['path'], request.json['name'], request.json['unit']
        if unit.strip() == '':
            # fallback unit
            unit = ''
        if len(path) > 2:
            return {
                "msg": "只能新建根节点或二级节点",
                "code": -1
            }
        elif len(path) == 2:
            major_name = path[1]
            createBrandNewMetadata(major_name, minor_name, unit)
            return {
                "msg": "success",
                "code": 200
            }
        else:
            createBrandNewMetadata(minor_name, '', '')
            return {
                "msg": "success",
                "code": 200
            }

@register('db', 'metadata', 'rename')
class RenameMetadata(Resource):
    def post(self):
        try_print_json()
        path, new_minor_name = request.json['path'], request.json['name']
        if len(path) != 2:
            return {
                "msg": "只能对二级节点更名",
                "code": -1
            } 
        major_name, old_minor_name = path
        renameBrandNewMetadata(major_name, old_minor_name, new_minor_name)
        return {
            "msg": "success",
            "code": 200
        }

@register('db', 'metadata', 'delete')
class DeleteMetadata(Resource):
    def post(self):
        path = request.json['path']
        if len(path) != 2:
            return {
                "msg": "只能删除二级节点",
                "code": -1
            }
        major_name, minor_name = path
        deleteBrandNewMetadata(major_name, minor_name)
        return {
            "msg": "success",
            "code": 200
        }

@register('db', 'metadata', 'upload')
class UploadMetadata(Resource):
    def post(self):
        try_print_files()
        return {
            "msg": "success",
            "code": 200
        }

@register('db', 'query')
class PerformQuery(Resource):
    def post(self):
        grain1 = ['年', '月', '日', '时']
        grain2 = ["year", "month",  "day","hour"]
        startTime = request.json['beginYear']
        endTime = request.json['endYear']
        grain = request.json['grain'].strip()
        for i in range(len(grain1)):
            if grain1[i] == grain:
                grain = grain2[i]
                break
        area = request.json['region'].strip()
        category = request.json['category']
        data = getDataByCondition(grain = grain, startTime = str(startTime), endTime = str(endTime), kind = category[0], dataName = category[1] if len(category) > 1 else None, area = area)
        # print(data)
        datalist = []
        if data is not None:
            for d in data:
                temp = {}
                temp["metadataid"] = d[3]
                temp["key"] = d[0]
                temp['value'] = d[2]
                datalist.append(temp)
        re = {
            "msg": "success",
            "code": 200,
            "data":datalist
        }
        return re
        # {
        #     "msg": "success",
        #     "code": 200,
        #     "data": [
        #         {
        #             "key": "2021-1-8",
        #             "value": "陈瑞球"
        #         },
        #         {
        #             "key": "2021-1-7",
        #             "value": "杨咏曼"
        #         },
        #         {
        #             "key": "2021-1-5",
        #             "value": "蔡翠菊"
        #         },
        #         {
        #             "key": "2021-1-3",
        #             "value": "包玉刚"
        #         }
        #     ]
        # }

@register('db', 'create')
class PerformCreate(Resource):
    def post(self):
        grain1 = ['年', '月', '日', '时']
        grain2 = ["year", "month", "day", "hour"]
        area = request.json['context']["region"]
        kind = request.json['context']["category"][0]
        grain = request.json["context"]['grain'].strip()
        for i in range(len(grain1)):
            if grain1[i] == grain:
                grain = grain2[i]
                break
        dataname = request.json['context']["category"][1]
        datatime = request.json["newData"]["key"]
        datavalue = request.json["newData"]["value"]
        meta = getMetaData(area, kind, grain)
        metadataid = str(meta[0][0])

        createDataByMetadataid(datavalue=float(datavalue), dataname=dataname, datatime=datatime, metadataid=metadataid)
        return {
            "msg": "success",
            "code": 200
        }

@register('db', 'update')
class PerformUpdate(Resource):
    def post(self):
        # try_print_json()
        originData = request.json['originData']
        modifiedData = request.json['modifiedData']
        category = request.json["category"]

        re = modifyDataByCondition(modifiedData['value'], startTime=originData['key'], endTime= originData["key"], dataName=category[1], metadataid = modifiedData["metadataid"])

        return re


@register('db', 'delete')
class PerformDelete(Resource):
    def post(self):
        # try_print_json()
        originData = request.json['originData']
        category = request.json["category"]

        re = deleteDataByCondition(startTime=originData['key'],
                                   endTime=originData['key'], dataName=category[1], metadataid = originData["metadataid"])

        return re
        #         {
        #     "msg": "success",
        #     "code": 200
        # }



@register('db', 'except', 'query')
class ExceptionQuery(Resource):
    def post(self):
        try:
            try_print_json()
            grain1 = ['年', '月', '日', '时']
            grain2 = ["year", "month", "day", "hour"]
            grain = request.json['grain'].strip()
            for i in range(len(grain1)):
                if grain1[i] == grain:
                    grain = grain2[i]
                    break
            category = request.json['category']
            startTime = request.json['beginYear']
            endTime = request.json['endYear']
            area = request.json['region'].strip()
            result = exceptQuery(category, str(startTime), str(endTime), grain, area)
            re = {
                "msg": "success",
                "code": 200,
                "data": result
            }
            return re
        except Exception as e:
            print(e)
            return {
                "msg": '%s' % repr(e),
                "code": -1
            }


@register('db', 'except', 'resolve')
class ExceptionResolve(Resource):

    def post(self):
        # try_print_json()
        originData = request.json['originData']
        modifiedData = request.json['modifiedData']
        result = exceptResolve(originData, modifiedData)
        return result

@register('db', 'except', 'accept')
class ExceptionAccept(Resource):
    def post(self):
        # try_print_json()
        acceptData = request.json['acceptData']
        result = exceptAccept(acceptData)
        return result

_versions = ['v1.0', 'v1.1', 'v1.2', 'v2.0', 'v2.1a', 'v2.1b']

_categories = ['MINING', 'STATIC_REGIONAL', 'DYNAMIC_INDUSTRIAL', 'MIX', 'LONGTERM', 'BIGUSER', 'SOKU', 'CLAMP', 'INTERP', 'YEARCONT']
_categories_count = len(_categories)

@register('tags', 'query')
class TagsQuery(Resource):
    def get(self):
        try:
            tagType = request.args['tagType']
            result = tagsQuery(tagType)
        except:
            result = tagsQuery()
        re = {
            "msg": "success",
            "code": 200,
            "data": result
        }
        return re

        # {
        #     "msg": "success",
        #     "code": 200,
        #     "data": [
        # #         {
        #             'id': tag,
        #             'tagType': _categories[randint(0, _categories_count - 1)]
        #         } for tag in sorted(_versions)
        #     ]
        # }

@register('tags', 'detail')
class TagsDetail(Resource):
    def get(self):
        return {
            "msg": "success",
            "code": 200,
            "data": {
                'tagType': 'MIX',
                'params': {
                    'param1': ...,
                    'param2': ...
                },
                'graphData': [
                    {
                        'xName': '横轴标签',
                        'yValue': '纵轴数字值'
                    }, ...
                ],
                'tableOneData': [
                    {
                        'index': '评价指标',
                        'r2': '就是 R2',
                        'mape': '就是 MAPE',
                        'rmse': '就是 RMSE'
                    }, ...
                ],
                'tableTwoData': [
                    {
                        'year': '年份',
                        'predict': '预测值（MVW）'
                    }, ...
                ]
            }
        }


# @register('tags', 'create')
# class TagsCreate(Resource):
#     def post(self):
#         try_print_json()
#         try:
#             new_name = request.json['newSchemaName'].strip()
#             if new_name in _versions:
#                 return {
#                 "msg": "key existed",
#                 "code": -1
#             }
#             _versions.append(new_name)
#             return {
#                 "msg": "success",
#                 "code": 200
#             }
#         except RuntimeError:
#             return {
#                 "msg": "success",
#                 "code": 200
#             } 

@register('tags', 'rename')
class TagsRename(Resource):
    def post(self):
        # try_print_json()
        try:
            current_name = request.json['tag'].strip()
            new_name = request.json['newTag'].strip()
            re = tagsRename(current_name, new_name)
            return re
        except RuntimeError:
            return {
                "msg": "fail",
                "code": -1
            }


@register('tags', 'delete')
class TagsDelete(Resource):
    def post(self):
        # try_print_json()
        try:
            current_name = request.json['tag'].strip()
            re = tagDelete(current_name)
            return re
        except RuntimeError:
            return {
                "msg": "fail",
                "code": -1,
            }


@register('mining', 'request')
class MiningRequest(Resource):
    def post(self):
        try:
            validateRegion(request.json, int(request.json['StartYear']), int(request.json['EndYear']))
        except Exception as e:
            print(e)
            return {
                "msg": '%s' % repr(e),
                "code": -1
            }
        re = miningRequest(request.json)
        return _handle_response(re)

@register('mining', 'factor', 'kmeans', 'suggest')
class MiningKMeansSuggestCategoryCount(Resource):
    def get(self):
        try_print_args()
        factors = request.args['factors']
        factorslist = factors.split(",")
        re = {
            "msg": "success",
            "code": 200,
            "data": {
                "count": len(factorslist)
            }
        }
        return re
        # {
        #     "msg": "success",
        #     "code": 200,
        #     "data": {
        #         "count": 2
        #     }
        # }

@register('mining', 'results')
class MiningResults(Resource):
    def get(self):

        # tagType = request.args["tagType"]
        result = miningResults("MINING")
        re = {
            "msg": "success",
            "code":200,
            "data": result
        }
        return re
        # {
        #     "msg": "success",
        #     "code": 200,
        #     "data": [
        #         {
        #             'plan': '某个挖掘计划',
        #             'results': ['阳光', '空气', '水']
        #         },
        #         {
        #             'plan': '另一个挖掘计划',
        #             'results': ['光风', '霁月']
        #         },
        #         {
        #             'plan': '最后一个挖掘计划',
        #             'results': ['阴雨', '晦冥']
        #         },
        #     ]
        # }


_regions = ['仰光', '丽江市', '红河州', '内比都']

@register('region', 'query')
class RegionQuery(Resource):
    def get(self):
        region = regionQueryCon()
        re = {
            "msg": "success",
            "code": 200,
            "data": region
        }
        return re



_industries = ['工业', '农业', '医疗业', '餐饮业']

@register('industry', 'query')
class IndustryQuery(Resource):
    def get(self):
        re = industryQuery()
        # re = {
        #     "msg": "success",
        #     "code": 200,
        #     "data": industry
        # }
        return re
        # {
        #     "msg": "success",
        #     "code": 200,
        #     "data": _industries
        # }

_industrial_methods = ['基于ARIMA季节分解的行业电量预测', '基于EEMD的行业用电量预测', '基于主成分因子的行业用电量预测', '基于随机森林的行业用电量预测', '基于神经网络的行业用电量预测']

@register('method', 'industry', 'query')
class IndustrialMethodQuery(Resource):
    def get(self):
        filename = os.path.join(app.root_path, 'algorithms', 'args.xls')
        a, b = getAlgorithmName(filename, "industrypre")
        return {
            "msg": "success",
            "code": 200,
            "data": a
        }

_regional_methods = ['逐步回归模型', '灰色滑动平均模型', '分数阶灰色模型',
        '改进的滚动机理灰色预测', '高斯混合回归模型', '模糊线性回归模型',
        '模糊指数平滑模型', '梯度提升模型', '支持向量机模型', '循环神经网络模型',
        '长短期神经网络模型', '扩展索洛模型', '分位数回归模型', '分行业典型日负荷曲线叠加法',
        '负荷最大利用小时数模型', '季节趋势模型', '考虑温度和节假日分布影响的电量预测模型',
        '一元线性函数', '一元二次函数', '幂函数', '生长函数', '指数函数', '对数函数', '二元一次函数']

@register('method', 'region', 'query')
class RegionalMethodQuery(Resource):
    def get(self):
        filename = os.path.join(app.root_path, 'algorithms', 'args.xls')
        a, b = getAlgorithmName(filename, "regionpre")
        return {
            "msg": "success",
            "code": 200,
            "data": a
        }

@register('grain', 'query')
class GrainQuery(Resource):
    def get(self):
        # re = grainQuery()
        return {
            "msg": "success",
            "code": 200,
            "data": ['年', '月', '日', '时']
        }

_factors = ['GDP', 'GNP', 'GPPPP', 'GNPPP']

@register('factor', 'query')
class MiningFactorQuery(Resource):
    def get(self):
        re = getDataNameByAreaAndKind(area="云南省", kind="社会经济类")
        return {
            "msg": "success",
            "code": 200,
            "data": re
        }

def _handle_response(result):
    if result == None:
        re = {
            "msg": "未知错误",
            "code": -1,
            "data": None
        }
    elif type(result) == tuple and isinstance(result[0], Exception):
        file_name, line_code = result[1:]
        re = {
            "msg": '(%s: line %d) %s' % (file_name, line_code, repr(result[0])),
            "code": -1,
            "data": None
        }
    else:
        re = {
            "msg": "success",
            "code": 200,
            "data": result
        }
    return re

@register('predict', 'region', 'single')
class RegionSinglePredict(Resource):
    def post(self):
        print("request.files: ", request.files)
        full_params = request.json if request.json != None else dict(request.form)
        for name, content in request.files.items():
            full_params.update({
                name: content
            })

        try:
            if full_params['method'] == '负荷密度法':
                validateLDM(full_params)
            elif full_params['method'] == '大用户法':
                validateForIndustry(full_params)
            elif full_params['method'] == '地区组合预测模型' or full_params['method'] == '行业组合预测模型':
                ...
            else:
                validateRegion(full_params, int(full_params['StartYear']), int(full_params['EndYear']))
        except Exception as e:
            print(e)
            return {
                "msg": '%s' % repr(e),
                "code": -1
            }
        re = regionSinglePredict(full_params)
        return _handle_response(re)

@register('predict', 'region', 'mix', 'validate')
class RegionMixModelValidate(Resource):
    def post(self):
        # try_print_json()
        methods = request.json['methods']
        re = regionMixModelValidate(methods)
        return _handle_response(re)


@register('predict', 'region', 'mix')
class RegionMixPredict(Resource):
    def post(self):
        # try_print_json()
        re = regionMixPredict(request.json)
        return _handle_response(re)


@register('predict', 'industry', 'single')
class IndustrySinglePredict(Resource):
    def post(self):
        try:
            full_params = dict(request.json)
            validateIndustry(full_params, int(full_params['StartYear']), int(full_params['EndYear']))

            if full_params['method'] == '基于ARIMA季节分解的行业电量预测':
                validateSARIMA(full_params, int(full_params['StartYear']), int(full_params['EndYear']))
        except Exception as e:
            print(e)
            return {
                "msg": '%s' % repr(e),
                "code": -1
            }
        re = industrySinglePredict(request.json)
        return _handle_response(re)

@register('predict', 'industry', 'mix', 'validate')
class IndustryMixModelValidate(Resource):
    def post(self):
        # try_print_json()
        methods = request.json['methods']
        re = industryMixModelValidate(methods)
        return _handle_response(re)

@register('predict', 'industry', 'mix')
class IndustryMixPredict(Resource):
    def post(self):
        # try_print_json()
        re = industryMixPredict(request.json)
        return _handle_response(re)

@register('predict', 'saturation')
class SaturationCurvePredict(Resource):
    def post(self):
        # try_print_json()
        re = saturationCurvePredict(request.json)
        return _handle_response(re)

@register('predict', 'payload')
class PayloadDensityPredict(Resource):
    def post(self):
        # try_print_json()
        args = {}
        args["buildingarea"] = request.files["buildingarea"]
        args["loaddensity"] = request.files["loaddensity"]
        arg = {**args, **request.form}
        
        re = payloadDensityPredict(arg)
        print(re)
        return _handle_response(re)

_files = []

@register('predict', 'munidata', 'upload')
class MunicipalDataUpload(Resource):
    def post(self):
        try_print_files()

        _files.append(request.files.get('file').filename)
        return {
            "msg": "success",
            "code": 200
        }

@register('predict', 'munidata', 'files')
class MunicipalDataQuery(Resource):
    def get(self):
        return {
            "msg": "success",
            "code": 200,
            "data": _files
        }

@register('predict', 'provmuni')
class ProvincialAndMunicipalPredict(Resource):
    def post(self):
        # try_print_json()
        # year = request.json["Cooryear"]
        args = {}
        args["File"] = request.files["file"]
        arg = {**args, **request.form}
        result = provincialAndMunicipalPredict(arg)

        return {
            "msg": 'success',
            "code": 200,
            "data": {
                'series': list(result),
                'values': [[round(i, 2) for i in x] for x in result.values.tolist()]
            }
        }
       
#大用户预测
@register('predict', 'bigdata')
class BigDataPredict(Resource):
    def post(self):
        # try_print_json()
        args = {}
        args["proposedata"] = request.files["proposedata"]
        arg = {**args, **request.form}

        try:
            validateForIndustry(arg)
        except Exception as e:
            print(e)
            return {
                "msg": '%s' % repr(e),
                "code": -1
            }
        print(arg)
        re = bigDataPredict(arg)
        return _handle_response(re)
        # payload = {
        #     'graphData': [
        #         {
        #             'xName': str(i),
        #             'yValue': randint(0, 1000)
        #         } for i in range(1, 18)
        #     ],
        #     'tableOneData': [
        #         {
        #             'index': '评价指标 %d' % i,
        #             'r2': random(),
        #             'mape': random(),
        #             'rmse': random()
        #         } for i in range(1, 18)
        #     ],
        #     'tableTwoData': [
        #         {
        #             'year': i + 2010,
        #             'predict': random() * randint(300, 500)
        #         } for i in range(17)
        #     ]
        # }
        return re
        # {
        #     "msg": "success",
        #     "code": 200,
        #     "data": payload
        # }

_bigdata_methods = ['随机森林模型', '支持向量机模型', '梯度提升模型', '模糊线性回归模型', "模糊指数平滑模型", "基于滚动机制的灰色预测模型", "对数函数外推", "一元线性外推", "生长函数外推", "灰色滑动平均模型", "指数函数外推"]

@register('method', 'bigdata', 'query')
class BigDataMethodQuery(Resource):
    def get(self):
        return {
            "msg": "success",
            "code": 200,
            "data": _bigdata_methods
        }

@register('payload', 'traits', 'daily')
class DailyPayloadTraits(Resource):
    def get(self):
        try:
            result = dailyPayloadTraits(request.args)
            return {
                "msg": "success",
                "code": 200,
                "data": result
            }
        except DataRangeError as e:
            return {
                "msg": repr(e),
                "code": -1
            }
        except Exception as e:
            return {
                "msg": repr(e),
                "code": -1
            }


@register('payload', 'traits', 'monthly')
class MonthlyPayloadTraits(Resource):
    def get(self):
        try:
            result = monthlyPayloadTraits(request.args)
            return {
                "msg":"success",
                "code": 200,
                "data" : result
            }
        except DataRangeError as e:
            return {
                "msg": repr(e),
                "code": -1
            }
        except Exception as e:
            return {
                "msg": repr(e),
                "code": -1
            }

@register('payload', 'traits', 'yearly')
class YearlyPayloadTraits(Resource):
    def get(self):
        try:
            result = yearlyPayloadTraits(request.args)
            return {
                "msg": "success",
                "code": 200,
                "data": result
            }
        except DataRangeError as e:
            return {
                "msg": repr(e),
                "code": -1
            }
        except Exception as e:
            return {
                "msg": repr(e),
                "code": -1
            }

@register('payload', 'predict', 'dbquery')
class SokuPayloadPredict(Resource):
    def post(self):
        try:
            result = sokuPayloadPredict(request.json)
            payload = {
                'xName': '小时',
                'xData': list(range(0, 24)),
                'yName': '单位：MW',
                'yData': [
                    {
                        'tag': '预测负荷',
                        'data': [int(v) for v in result["result"]]
                    }
                ]
            }
            return {
                "msg": "success",
                "code": 200,
                "data": payload
            }
        except DataRangeError as e:
            return {
                "msg": repr(e),
                "code": -1
            }
        except Exception as e:
            return {
                "msg": repr(e),
                "code": -1
            }

@register('payload', 'predict', 'clamping')
class ClampingPayloadPredict(Resource):
    def post(self):
        try:
            result = clampingPayloadPredict(request.json)
            print(result)
            payload = {
                'xName': '小时',
                'xData': list(range(0, 24)),
                'yName': '单位：MW',
                'yData': [
                    {
                        'tag': '预测负荷',
                        'data': [int(v) for v in result["result"]]
                    }
                ]
            }
            return {
                "msg": "success",
                "code": 200,
                "data": payload
            }
        except DataRangeError as e:
            return {
                "msg": repr(e),
                "code": -1
            }
        except Exception as e:
            return {
                "msg": repr(e),
                "code": -1
            }

@register('payload', 'predict', 'interp')
class InterpolatingPayloadPredict(Resource):
    def post(self):
        try:
            result = interpolatingPayloadPredict(request.json)
            payload = {
                'xName': "小时",
                'xData': list(range(0, 24)),
                'yName': '单位：MW',
                'yData': [
                    {
                        'tag': '预测负荷',
                        'data': [int(v) for v in result["result"]]
                    }
                ]
            }
            return {
                "msg": "success",
                "code": 200,
                "data": payload
            }
        except DataRangeError as e:
            return {
                "msg": repr(e),
                "code": -1
            }
        except Exception as e:
            return {
                "msg": repr(e),
                "code": -1
            }

@register('payload', 'predict', 'yearly')
class YearlyContinuousPayloadPredict(Resource):
    def post(self):
        try:
            result = yearlyContinuousPayloadPredict(request.json)
            length = len(result['result'])
            payload = {
                'xName': "小时数",
                'xData': list(range(0, length)),
                'yName': '单位：MW',
                'yData': [
                    {
                        'tag': '预测负荷',
                        'data': [int(v) for v in sorted(result["result"], reverse=True)]
                    }
                ]
            }
            return {
                "msg": "success",
                "code": 200,
                "data": payload
            }
        except DataRangeError as e:
            return {
                "msg": repr(e),
                "code": -1
            }
        except Exception as e:
            return {
                "msg": repr(e),
                "code": -1
            }

@register('params', 'mining')
class DataMiningParameters(Resource):
    def get(self):
        tag = request.args['tag']
        result = getAlgorithmContentByTag(tag)
        contentstr = result[0]["content"]
        content = json.loads(contentstr)
        arg = content["arg"]
        re = {
            "msg": "success",
            "code": 200,
            "data": arg
        }
        return re
        # {
        #     "msg": "success",
        #     "code": 200,
        #     "data": {
        #         "region": '地域',
        #         "factors": ['factor 1', 'factor 2', 'factor 3'],
        #         "method": '方法',
        #         "pearson": {
        #             "threshold": 0.77777
        #         },
        #         "kMeans": {
        #             "categoryCount": 2
        #         },
        #         "PCA": {
        #             "absThreshold": 0.77777
        #         },
        #         "ARL": {
        #             "minSupport": 0.11111,
        #             "minConfidence": 0.11111
        #         },
        #         "beginYear": 2024,
        #         "endYear": 2029,
        #         "tag": request.args['tag']
        #     }
        # }

@register('params', 'predict', 'static', 'region')
class StaticRegionalPredictionParameters(Resource):
    def get(self):
        tag = request.args['tag']
        result = getAlgorithmContentByTag(tag)
        contentstr = result[0]["content"]
        content = json.loads(contentstr)
        arg = content["arg"]
        re = {
            "msg": "success",
            "code": 200,
            "data": arg
        }
        return re
        # {
        #     "msg": "success",
        #     "code": 200,
        #     "data": {
        #         "historyBeginYear": 1999,
        #         "historyEndYear": 2009,
        #         'beginYear': 2023,
        #         'endYear': 2033,
        #         'region': '地域',
        #         'industry': '行业',
        #         'method': '方法',
        #         'factor1': {
        #             'name': 'MINGZI',
        #             'hasValue': True,
        #             'value': 0.1
        #         },
        #         'factor2': {
        #             'name': 'MINGZI2',
        #             'hasValue': True,
        #             'value': 0.9
        #         },
        #         'tag': request.args['tag']
        #     }
        # }

@register('params', 'predict', 'dynamic', 'industry')
class DynamicIndustrialPredictionParameters(Resource):
    def get(self):
        tag = request.args['tag']
        result = getAlgorithmContentByTag(tag)
        contentstr = result[0]["content"]
        content = json.loads(contentstr)
        arg = content["arg"]
        re = {
            "msg": "success",
            "code": 200,
            "data": arg
        }
        return re
        # {
        #     "msg": "success",
        #     "code": 200,
        #     "data": {
        #         'industry': '行业',
        #         'method': '方法',
        #         'parameters': ['paramA', 'paramB', '...'],
        #         'beginYear': 1995,
        #         'endYear': 2006,
        #         'historyBeginYear': 2012,
        #         'historyEndYear': 2055,
        #         'tag': request.args['tag']
        #     }
        # }

@register('params', 'predict', 'mix')
class MixPredictionParameters(Resource):
    def get(self):
        tag = request.args['tag']
        result = getAlgorithmContentByTag(tag)
        if result is not None:
            contentstr = result[0]["content"]
            content = json.loads(contentstr)
            arg = content["arg"]
        else:
            arg = None
        re = {
            "msg": "success",
            "code": 200,
            "data": arg
        }
        return re
        # {
        #     "msg": "success",
        #     "code": 200,
        #     "data": {
        #         'historyBeginYear': 2012,
        #         'historyEndYear': 2066,
        #         'beginYear': 2012,
        #         'endYear': 2022,
        #         'region': '地域',
        #         'industry': '工业',
        #         'selectedMethods': ['methodA', 'methodB', '...'],
        #         'tag': request.args['tag']
        #     }
        # }

@register('params', 'predict', 'dynamic', 'region')
class LongTermPredictionParameters(Resource):
    def get(self):
        tag = request.args['tag']
        print("test")
        result = getAlgorithmContentByTag(tag)
        contentstr = result[0]["content"]
        content = json.loads(contentstr)
        arg = content["arg"]
        re = {
            "msg": "success",
            "code": 200,
            "data": arg
        }
        return re
        # {
        #     "msg": "success",
        #     "code": 200,
        #     "data": {
        #         'region': '地域',
        #         'method': '行业',
        #         'parameters': ['1', '2', '...'],
        #         'beginYear': 1993,
        #         'endYear': 2013,
        #         'historyBeginYear': 2012,
        #         'historyEndYear': 2022,
        #         'tag': request.args['tag']
        #     }
        # }


@register('params', 'predict', 'biguser')
class BigUserPredictionParameters(Resource):
    def get(self):
        tag = request.args['tag']
        result = getAlgorithmContentByTag(tag)
        contentstr = result[0]["content"]
        content = json.loads(contentstr)
        arg = content["arg"]
        re = {
            "msg": "success",
            "code": 200,
            "data": arg
        }
        return re
        # {
        #     "msg": "success",
        #     "code": 200,
        #     "data": {
        #         'historyBeginYear': 1966,
        #         'historyEndYear': 1997,
        #         'beginYear': 1994,
        #         'endYear': 2004,
        #         'method': '测试方法',
        #         'region': '测试地域',
        #         'patches': [
        #             {
        #                 'metaData': ['a', 'b', 'c'],
        #                 'grain': '粒度（总是「年」）',
        #                 'year': '年份',
        #                 'value': '42',
        #             }, '...'
        #         ],
        #         'tag': request.args['tag']
        #     }
        # }

@register('params', 'predict', 'soku')
class SokuPayloadPredictionParameters(Resource):
    def get(self):
        tag = request.args['tag']
        result = getAlgorithmContentByTag(tag)
        contentstr = result[0]["content"]
        content = json.loads(contentstr)
        arg = content["arg"]
        re = {
            "msg": "success",
            "code": 200,
            "data": arg
        }
        return re
        # {
        #     "msg": "success",
        #     "code": 200,
        #     "data": {
        #         'beginYear': 1955,
        #         'endYear': 2055,
        #         'season': 3,
        #         'maxPayload': 2033,
        #         'dailyAmount': 1000,
        #         'gamma': 0.555,
        #         'beta': 0.777,
        #         'tag': request.args['tag']
        #     }
        # }


@register('params', 'predict', 'clamping')
class ClampingPayloadPredictionParameters(Resource):
    def get(self):
        tag = request.args['tag']
        result = getAlgorithmContentByTag(tag)
        contentstr = result[0]["content"]
        content = json.loads(contentstr)
        arg = content["arg"]
        re = {
            "msg": "success",
            "code": 200,
            "data": arg
        }
        return re
        # {
        #     "msg": "success",
        #     "code": 200,
        #     "data": {
        #         'beginYear': 2021,
        #         'endYear': 2022,
        #         'season': 3,
        #         'maxPayload': 2013,
        #         'dailyAmount': 155,
        #         'tag': request.args['tag']
        #     }
        # }


@register('params', 'predict', 'interp')
class InterpolatingPayloadPredictionParameters(Resource):
    def get(self):
        tag = request.args['tag']
        result = getAlgorithmContentByTag(tag)
        contentstr = result[0]["content"]
        content = json.loads(contentstr)
        arg = content["arg"]
        re = {
            "msg": "success",
            "code": 200,
            "data": arg
        }
        return re
        # {
        #     "msg": "success",
        #     "code": 200,
        #     "data": {
        #         'beginYear': 2012,
        #         'endYear': 2022,
        #         'season': 3,
        #         'maxPayload': 14444,
        #         'dailyAmount': 28888,
        #         'tag': request.args['tag']
        #     }
        # }


@register('params', 'predict', 'yearcont')
class YearlyContinuousPayloadPredictionParameters(Resource):
    def get(self):
        tag = request.args['tag']
        result = getAlgorithmContentByTag(tag)
        contentstr = result[0]["content"]
        content = json.loads(contentstr)
        arg = content["arg"]
        re = {
            "msg": "success",
            "code": 200,
            "data": arg
        }
        return re
        # {
        #     "msg": "success",
        #     "code": 200,
        #     "data": {
        #         'beginYear': 2023,
        #         'endYear': 2033,
        #         'maxPayload': 98768,
        #         'tag': request.args['tag']
        #     }
        # }
@register('predict', 'results', 'query', 'compare')
class PredictionResultsQueryForComparison(Resource):
    def get(self):
        re = {
            "msg": "success",
            "code": 200,
            "data": []
        }
        re1 = getTagByKind("STATIC_REGIONAL")
        if re1 is not None:
            for t in re1:
                re["data"].append(t)
        re2 = getTagByKind("DYNAMIC_INDUSTRIAL")
        if re2 is not None:
            for t in re2:
                re["data"].append(t)
        re3 = getTagByKind("LONGTERM")
        if re3 is not None:
            for t in re3:
                re["data"].append(t)
        re4 = getTagByKind("BIGUSER")
        if re4 is not None:
            for t in re4:
                re["data"].append(t)
        return re


@register('predict', 'results', 'query')
class PredictionResultsQuery(Resource):
    def get(self):
        re = {
            "msg": "success",
            "code": 200,
            "data": []
        }
        re1 = getTagByKind("STATIC_REGIONAL")
        if re1 is not None:
            for t in re1:
                re["data"].append(t)
        re2 = getTagByKind("DYNAMIC_INDUSTRIAL")
        if re2 is not None:
            for t in re2:
                re["data"].append(t)
        re3 = getTagByKind("LONGTERM")
        if re3 is not None:
            for t in re3:
                re["data"].append(t)
        re4 = getTagByKind("BIGUSER")
        if re4 is not None:
            for t in re4:
                re["data"].append(t)
        return re
        # {
        #     "msg": "success",
        #     "code": 200,
        #     "data": [
        #         {
        #             'id': tag,
        #             'tagType': _categories[randint(0, _categories_count - 1)]
        #         } for tag in sorted(_versions)
        #     ]
        # }

@register('predict', 'results', 'detail')
class PredictionResultDetail(Resource):
    def get(self):
        try:
            tag = request.args['tag']
            result = getAlgorithmContentByTag(tag)
            print('\nplan get: ', result)
            contentstr = result[0]["content"]
            content = json.loads(contentstr)
            return {
                "msg": "success",
                "code": 200,
                "data": content
            }
        except Exception as e:
            return {
                "msg": repr(e),
                "code": -1
            }


def _padding_empty_years(data: list, start, end, total_start, total_end) -> list:
    padding_data = []
    for year in range(total_start, total_end + 1):
        if start <= year <= end:
            padding_data.append(data[year - start])
        else:
            padding_data.append(None)
    return padding_data

@register('predict', 'results', 'compare')
class PredictionResultComparison(Resource):
    def post(self):
        try:
            tags = request.json['tags']
            trait = request.json['trait']

            contents = []
            for tag in tags:
                try:
                    contents.append(json.loads(getAlgorithmContentByTag(tag)[0]['content']))
                except:
                    raise ValueError('无法读取 %s 方案的信息。请删除后重新尝试。' % tag)

            if len(contents) < 2:
                raise ValueError('请选择至少两个方案以进行对比。')

            if trait == 'MAPE':
                data = {
                    'xName': '',
                    'xData': [''],
                    'yName': 'MAPE 值',
                    'yData': [
                        {
                            'tag': content['arg']['tag'],
                            'data': [content['result']['MAPE']]
                        } for content in contents
                    ]
                }
                return {
                    'msg': "ok",
                    'code': 200,
                    'data': data
                }
            elif trait == 'RMSE':
                data = {
                    'xName': '',
                    'xData': [''],
                    'yName': 'RMSE 值',
                    'yData': [
                        {
                            'tag': content['arg']['tag'],
                            'data': [content['result']['RMSE']]
                        } for content in contents
                    ]
                }
                return {
                    'msg': "ok",
                    'code': 200,
                    'data': data
                }
            elif trait == 'predictMVW':
                start = min([int(cont['arg']['PreStartYear']) for cont in contents])
                end = max([int(cont['arg']['PreEndYear']) for cont in contents])

                data = {
                    'xName': '年份',
                    'xData': [str(year) for year in range(start, end + 1)],
                    'yName': '预测功率值（MW）',
                    'yData': [
                        {
                            'tag': content['arg']['tag'],
                            'data': _padding_empty_years(
                                content['result']['preresult'],
                                int(content['arg']['PreStartYear']), 
                                int(content['arg']['PreEndYear']),
                                start, end)
                        } for content in contents
                    ]
                }
                return {
                    'msg': "ok",
                    'code': 200,
                    'data': data
                }
            else:
                raise LookupError('未知的比对特征 %s。' % trait)
        except Exception as e:
            return {
                "msg": repr(e),
                "code": -1
            }

@register('payload', 'charts', 'daily')
class PayloadChartsDaily(Resource):
    def get(self):
        # try_print_args()
        day = request.args['day']
        result = payloadChartsDaily(day)
        payload = {
            'xName': '小时',
            'xData': list(range(0, 24)),
            'yName': '单位：MW',
            'yData': [
                {
                    'tag': '负荷（MW）',
                    'data': result
                }
            ]
        }
        re = {
            "msg": "success",
            "code": 200,
            "data": payload
        }
        # payload = {
        #     'metaData': [
        #         {
        #             'key': '日最大负载',
        #             'value': 42.4
        #         },
        #         {
        #             'key': '日平均负载',
        #             'value': 11.6
        #         },
        #         {
        #             'key': '日负载率',
        #             'value': '50.5%'
        #         },
        #         {
        #             'key': '日峰谷差',
        #             'value': 3000
        #         },
        #         {
        #             'key': '日峰谷差率',
        #             'value': '50%'
        #         }
        #     ],
        #     'xName': '小时',
        #     'xData': list(range(0, 24, 2)),
        #     'yName': '单位：MW',
        #     'yData': [
        #         {
        #             'tag': '原始负荷',
        #             'data': [random() for _ in range(12)]
        #         },
        #         {
        #             'tag': '预测负荷',
        #             'data': [random() for _ in range(12)]
        #         }
        #     ]
        # }
        return re


@register('payload', 'charts', 'daily', 'typical')
class PayloadChartsDailyTypical(Resource):
    def get(self):
        try:
            year = request.args['year']
            period = request.args['period']  # 丰水期、汛前枯期、汛后枯期
            category = request.args['category'] # 最大负荷、最小负荷、中位负荷
            if period == "丰水期":
                periodnum = 1
            elif period == "汛前枯期":
                periodnum = 0
            else:
                periodnum = 2
            result = DailyTypicalOp(year,periodnum,category)
            payload = {
                'xName': '小时',
                'xData': list(range(0, 24)),
                'yName': '单位：MW',
                'yData': [
                    {
                        'tag': '典型负荷（MW）',
                        'data': result["re"]
                    }
                ]
            }
            re = {
                "msg": "success",
                "code": 200,
                "data": payload
            }
            return re
        except DataRangeError as e:
            return {
                "msg": repr(e),
                "code": -1
            }
        except Exception as e:
            return {
                "msg": repr(e),
                "code": -1
            }

@register('payload', 'charts', 'monthly')
class PayloadChartsMonthly(Resource):
    def get(self):
        try:
            year = request.args['year']
            category = request.args['category']
            result = ChartMonthlyOp(year, category)
            payload = {
                    'xName': '月份',
                    'xData': list(range(1, 13)),
                    'yName': '单位：MW' if not '率' in category else '',
                    'yData': [
                        {
                            'tag': category,
                            'data': result
                        }
                    ]
                }
            re = {
                "msg": "success",
                "code": 200,
                "data": payload
            }

            return re
        except DataRangeError as e:
            return {
                "msg": repr(e),
                "code": -1
            }
        except Exception as e:
            return {
                "msg": repr(e),
                "code": -1
            }

@register('brand', 'new', 'metadata', 'get')
class GetBrandNewMetadata(Resource):
    def get(self):
        return {
            "msg": "success",
            "code": 200,
            "data": getBrandNewMetadata()
        }

@register('payload', 'charts', 'yearly')
class PayloadChartsYearly(Resource):
    def get(self):
        try:
            result = payloadChartsYearly(request.args)

            begin_year = request.args['beginYear']
            end_year = request.args['endYear']

            payload = {
                'xName': '年份',
                'xData': list(range(int(begin_year), int(end_year) + 1)),
                'yName': '单位：MW' if not '率' in request.args['category'] else '',
                'yData': [
                    {
                        'tag': request.args['category'],
                        'data': result
                    }
                ]
            }
            re = {
                "msg": "success",
                "code": 200,
                "data": payload
            }
            return re
        except DataRangeError as e:
            return {
                "msg": repr(e),
                "code": -1
            }
        except Exception as e:
            return {
                "msg": repr(e),
                "code": -1
            }

@register('danger', 'remove', 'all', 'data')
class RemoveAllData(Resource):
    def post(self):
        removeAllData()
        re = {
            "msg": "success",
            "code": 200
        }
        return re

@register('danger', 'remove', 'whl', 'data')
class RemoveWenHonglinData(Resource):
    def post(self):
        removeWHLData()
        re = {
            "msg": "success",
            "code": 200
        }
        return re

@register('danger', 'init', 'db')
class InitializeDatabase(Resource):
    def post(self):
        initDatabase()
        re = {
            "msg": "success",
            "code": 200
        }
        return re

"""
fore-end related http apis
END
"""

def _parse_limits():
    limits_filename = os.path.join(app.root_path, 'algorithms', 'limits.csv')
    titles = ['算法名', '参数名', '最小值', '最大值', '最少选择', '最多选择', '依赖于']
    data = pd.read_csv(limits_filename).values.tolist()

    limits = dict()
    for method_name, args_name, min_value, max_value, min_choice, max_choice, depends in data:
        limits.update({
            (method_name, args_name): (min_value, max_value, min_choice, max_choice, depends)
        })
        print('set!', (method_name, args_name))
    return limits

def _s_isnan(o):
    return isinstance(o, float) and isnan(o)

class getAlgorithmArg(Resource):
    def get(self):
        method = request.args["method"]
        filename = os.path.join(app.root_path, 'algorithms', 'args.xls')

        args = getAlgorithmArgs(method=method, filename=filename)

        a, b = getAlgorithmName(filename)
        method_eng_name = methodNameZhToEn(a, b, method)
        limits = _parse_limits()
        
        for arg in args['para']:
            chunk = (method_eng_name, arg['key'])
            if chunk in limits:
                min_value, max_value, min_choice, max_choice, depends = limits[chunk]
                arg.update({
                    'limits': {
                        'min_value': min_value if not _s_isnan(min_value) else None,
                        'max_value': max_value if not _s_isnan(max_value) else None,
                        'min_choice': min_choice if not _s_isnan(min_choice) else None,
                        'max_choice': max_choice if not _s_isnan(max_choice) else None,
                        'depends': depends if not _s_isnan(depends) else None
                    }
                })
            else:
                arg.update({
                    'limits': dict()
                })
                print('not hit!', chunk)
        re = {
            "msg": "success",
            "code": 200,
            "data": args
        }
        return re
class testExecuteAlgorithm(Resource):
    def post(self):
        method = request.json['method']
        result = executeAlgorithm(method, request.json)
        return result
class addData(Resource):
    def post(self):
        data = request.json['data']
        area = request.json['area']
        grain = request.json['grain']
        kind = request.json['kind']
        # print(data)
        data = pd.read_json(data, orient='split')
        # print(data)

        uploadData(data, area, grain, kind)
        re = {
            "msg": "success",
            "code":200
        }
        return re

class getDefaultOfLoadPre(Resource):
    def get(self):
        try:
            start = request.args["start"]
            end = request.args["end"]

            # 所有的 getDefault 用的都是一个 fengshui-souku-max…
            # @ReveStar 你写的什么烂代码…
            kind = 'fengshui-souku-max'
                    
            missing = get_missing_list(int(start), int(end), 'yunnan', 'year', kind)
            print("丢失的年份：", repr(missing))
            for year in missing:
                print("准备填充", year, "年")

                m, typee = parse_msg(kind)
                jiabi_result = typ_souku("yunnan_day_电力电量类", year, m, typee)
                insert_data(jiabi_result, kind=kind)
                print("填充了", jiabi_result)
            result = getDefault(start, end)
            return {
                "msg":"success",
                "code": 200,
                "data": result
            }
        except DataRangeError as e:
            return {
                "msg": "还没有对应的差值数据，请先做一次预测，再加载默认参数",
                "code": -1
            }
        except KeyError as e:
            return {
                "msg": "Key Error!" + str(e),
                "code": -1
            }
        except Exception as e:
            return {
                "msg": repr(e),
                "code": -1
            }


api.add_resource(UploadCSV, "/api/db/upload")
api.add_resource(UploadCSVAndAutoCreate, "/api/db/upload/autocreate")
api.add_resource(GetDataJson, '/getDataJson')
api.add_resource(TestAlgorithm, "/interface")
api.add_resource(insertAlgorithmResult, "/api/insert/result")
api.add_resource(getAlgorithmResult, "/api/get/result")
api.add_resource(getAlgorithmArg, "/api/get/args")
api.add_resource(testExecuteAlgorithm, "/api/test")

api.add_resource(addData, "/api/add/data")
api.add_resource(getDefaultOfLoadPre, "/api/get/default")

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return render_template("index.html")



if __name__ == '__main__':
    app.run(host="0.0.0.0", port=18000)
