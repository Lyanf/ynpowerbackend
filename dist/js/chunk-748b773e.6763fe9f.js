(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-748b773e"],{"4d10c":function(a,t,e){"use strict";e.r(t);var l=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("el-row",{attrs:{type:"flex",justify:"center"}},[e("el-col",{attrs:{span:5}},[e("el-form",[e("el-form-item",{attrs:{label:"方案选择："}},[e("el-select",{attrs:{multiple:"",placeholder:"请选择"},model:{value:a.selectedPlans,callback:function(t){a.selectedPlans=t},expression:"selectedPlans"}},a._l(a.miningResults,(function(a){return e("el-option",{key:a.tag,attrs:{label:a.tag,value:a.tag}})})),1)],1),e("el-form-item",[e("el-button",{attrs:{type:"primary",disabled:0===a.selectedPlans.length},on:{click:a.updateTableDisplay}},[a._v("确定")])],1)],1)],1),e("el-col",{attrs:{offset:2,span:12}},[e("el-form",[0!==a.kMeansData.length?e("div",[e("el-form-item",[e("el-button",{attrs:{disabled:0===a.kMeansData.length},on:{click:a.exportKMeansData}},[a._v("导出表格")])],1),e("el-form-item",{attrs:{label:"K 均值挖掘结果表："}},[e("el-table",{attrs:{data:a.kMeansData}},[e("el-table-column",{attrs:{prop:"tag",label:"预测方案"}}),e("el-table-column",{attrs:{prop:"index",label:"类别序号"}}),e("el-table-column",{attrs:{prop:"members",label:"成员"}})],1)],1)],1):a._e(),0!==a.pcaData.length?e("div",[e("el-form-item",[e("el-button",{attrs:{disabled:0===a.pcaData.length},on:{click:a.exportPCAData}},[a._v("导出表格")])],1),e("el-form-item",{attrs:{label:"主成分分析挖掘结果表："}},[e("el-table",{attrs:{data:a.pcaData}},[e("el-table-column",{attrs:{prop:"tag",label:"预测方案"}}),e("el-table-column",{attrs:{prop:"index",label:"主成分编号"}}),e("el-table-column",{attrs:{prop:"percentage",label:"所占比例"}}),e("el-table-column",{attrs:{prop:"name",label:"影响因素名称"}}),e("el-table-column",{attrs:{prop:"factor",label:"影响因素对应系数"}})],1)],1)],1):a._e(),0!==a.aprioriData.length?e("div",[e("el-form-item",[e("el-button",{attrs:{disabled:0===a.aprioriData.length},on:{click:a.exportAprioriData}},[a._v("导出表格")])],1),e("el-form-item",{attrs:{label:"关联规则挖掘结果表："}},[e("el-table",{attrs:{data:a.aprioriData}},[e("el-table-column",{attrs:{prop:"tag",label:"预测方案"}}),e("el-table-column",{attrs:{prop:"name",label:"影响因素名称"}}),e("el-table-column",{attrs:{prop:"score",label:"影响因素强弱得分"}}),e("el-table-column",{attrs:{prop:"confidence",label:"置信度"}})],1)],1)],1):a._e()])],1)],1)],1)},n=[],r=(e("159b"),e("a15b"),e("f59f")),o=e("21a6"),s={name:"MiningResult",data:function(){return{selectedPlans:[],miningResults:[],kMeansData:[],pcaData:[],aprioriData:[]}},mounted:function(){this.loadMiningResults()},methods:{loadMiningResults:function(){var a=this;this.$axios.get("/mining/results").then((function(t){a.$data.miningResults=t.data.data}))},updateTableDisplay:function(){var a=this;this.$data.kMeansData=[],this.$data.pcaData=[],this.$data.aprioriData=[],this.$data.selectedPlans.forEach((function(t){a.$axios.get("/predict/results/detail",{params:{tag:t}}).then((function(e){var l=e.data.data.parameters;a.$axios.post("/mining/request",l).then((function(e){if("K均值算法"===l.method){var n=1;e.data.data.Clusters.forEach((function(e){a.$data.kMeansData.push({tag:t,index:n,members:e.join("、")}),n+=1}))}else if("主成分分析算法"===l.method)for(var r=0;r<e.data.data.N_components.length;r+=1)for(var o=0;o<e.data.data.FactorName.length;o+=1)a.$data.pcaData.push({tag:t,index:r+1,percentage:e.data.data.ComponetRatio[r],name:e.data.data.FactorName[o],factor:e.data.data.Vectors[r][o]});else if("关联规则分析算法"===l.method)for(var s=0;s<e.data.data.FactorsName.length;s+=1)a.$data.aprioriData.push({tag:t,name:e.data.data.FactorsName[s],score:e.data.data.Score[s],confidence:e.data.data.Confidence[s]})}))}))}))},exportTableSheet:function(a,t){var e=r["parse"](a,{fields:t}),l=new Blob([e],{type:"text/csv"});Object(o["saveAs"])(l,"挖掘结果表.csv")},exportKMeansData:function(){this.exportTableSheet(this.$data.kMeansData,["index","members"])},exportPCAData:function(){this.exportTableSheet(this.$data.pcaData,["index","percentage","name","factor"])},exportAprioriData:function(){this.exportTableSheet(this.$data.aprioriData,["name","score","confidence"])}}},i=s,c=e("2877"),d=Object(c["a"])(i,l,n,!1,null,"40a78c3a",null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-748b773e.6763fe9f.js.map