(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e6879"],{"98ae":function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("el-row",{attrs:{type:"flex",justify:"center"}},[e("el-col",{attrs:{span:5,offset:1}},[e("el-form",{attrs:{"label-position":"right","label-width":"auto"}},[e("el-form-item",{attrs:{label:"对比方案标签："}},[e("el-select",{attrs:{multiple:""},model:{value:t.postParams.tags,callback:function(a){t.$set(t.postParams,"tags",a)},expression:"postParams.tags"}},t._l(t.knownTags,(function(a){return e("el-option",{key:a.id,attrs:{value:a.id}},[e("span",{staticStyle:{float:"left"}},[t._v(t._s(a.id))]),e("span",{staticStyle:{float:"right",color:"#8492a6"}},[t._v(t._s(t.typeName[a.tagType]))])])})),1)],1),e("el-form-item",{attrs:{label:"对比特征："}},[e("el-select",{model:{value:t.postParams.trait,callback:function(a){t.$set(t.postParams,"trait",a)},expression:"postParams.trait"}},t._l(t.knownTraits,(function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),e("el-form-item",[e("el-button",{attrs:{type:"primary",disabled:!t.canCommitQuery},on:{click:t.performCompare}},[t._v("对比")])],1)],1)],1),e("el-col",{attrs:{span:17,offset:1}},[e("el-row",[e("div",{staticStyle:{height:"500px"},attrs:{id:"compareChart"}})]),e("el-row",[e("el-form",[e("el-form-item",[e("el-button",{on:{click:t.exportImage}},[t._v("导出图像")])],1),e("el-form-item",{attrs:{label:"显示方式："}},[e("el-select",{attrs:{placeholder:"请选择"},model:{value:t.currentDisplayMethod,callback:function(a){t.currentDisplayMethod=a},expression:"currentDisplayMethod"}},t._l(t.displayMethods,(function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1)],1)],1)],1)],1)},l=[],s=(e("1276"),e("ac1f"),e("5cc6"),e("9a8c"),e("a975"),e("735e"),e("c1ac"),e("d139"),e("3a7b"),e("d5d6"),e("82f8"),e("e91f"),e("60bd"),e("5f96"),e("3280"),e("3fcc"),e("ca91"),e("25a1"),e("cd26"),e("3c5d"),e("2954"),e("649e"),e("219c"),e("170b"),e("b39a"),e("72f7"),e("d3b7"),e("159b"),e("313e")),i=e("21a6");function n(t){for(var a=t.split(";base64,"),e=a[0].split(":")[1],r=window.atob(a[1]),l=r.length,s=new Uint8Array(l),i=0;i<l;++i)s[i]=r.charCodeAt(i);return new Blob([s],{type:e})}var o={name:"PredictResultDisplay",data:function(){return{postParams:{tags:[],trait:null},currentChart:void 0,displayData:[],displayMethods:[{label:"折线图",value:"line"},{label:"柱状图",value:"bar"},{label:"散点图",value:"scatter"}],knownTags:[],knownTraits:[{label:"R2 值",value:"R2"},{label:"MAPE 值",value:"MAPE"},{label:"RMSE 值",value:"RMSE"},{label:"预测功率值（MW）",value:"predictMVW"}],typeName:{MINING:"数据挖掘方案",STATIC_REGIONAL:"地区单预测方案",DYNAMIC_INDUSTRIAL:"行业单预测方案",MIX:"组合预测方案",LONGTERM:"远期规划预测方案",BIGUSER:"大用户预测方案",SOKU:"负荷特性预测方案",CLAMP:"负荷特性预测方案",INTERP:"负荷特性预测方案",YEARCONT:"负荷特性预测方案"},currentDisplayMethod:"line"}},mounted:function(){this.loadTags()},computed:{canCommitQuery:function(){var t=this.$data.postParams;return!(t.tags.length<2||null===t.trait)}},methods:{exportImage:function(){if(this.currentChart){var t=this.currentChart.getDataURL(),a=n(t);Object(i["saveAs"])(a,"预测图像.png")}},loadTags:function(){var t=this;this.$axios.get("/predict/results/query").then((function(a){t.$data.knownTags=a.data.data}))},refreshChart:function(){var t=this,a=this.$data.displayData;void 0===this.currentChart&&(this.currentChart=s["init"](document.getElementById("compareChart")),window.onresize=this.currentChart.resize);var e=[];a.yData.forEach((function(a){e.push({data:a.data,name:a.tag,type:t.$data.currentDisplayMethod})}));var r={color:["#3398DB"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},xAxis:{type:"category",name:a.xName,data:a.xData,axisTick:{alignWithLabel:!0}},yAxis:{type:"value",name:a.yName},series:e,legend:{orient:"horizontal",x:"center",y:"top"}};this.currentChart.setOption(r,!0),this.currentChart.style.width="".concat(.6*document.body.clientWidth,"px")},performCompare:function(){var t=this;this.$axios.post("/predict/results/compare",this.$data.postParams).then((function(a){t.$data.displayData=a.data.data,t.refreshChart()}))}},watch:{currentDisplayMethod:function(){this.refreshChart()}}},c=o,u=e("2877"),p=Object(u["a"])(c,r,l,!1,null,"7247f128",null);a["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d0e6879.c6d364ca.js.map