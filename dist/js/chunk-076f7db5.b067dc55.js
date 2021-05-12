(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-076f7db5"],{"3be6":function(e,a,t){"use strict";t("b2c8")},"7d63":function(e,a,t){"use strict";var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("el-form",{attrs:{"label-position":"right","label-width":"auto"}},[t("el-form-item",{attrs:{label:"预测方法："}},[t("el-select",{attrs:{placeholder:"请选择",disabled:null!==e.wiredMethod},model:{value:e.postParams.method,callback:function(a){e.$set(e.postParams,"method",a)},expression:"postParams.method"}},e._l(e.allMethods,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),t("el-form-item",{attrs:{label:"历史年份："}},[t("year-range-selector",{attrs:{"begin-year":e.postParams.historyBeginYear,"end-year":e.postParams.historyEndYear},on:{"update:beginYear":function(a){return e.$set(e.postParams,"historyBeginYear",a)},"update:begin-year":function(a){return e.$set(e.postParams,"historyBeginYear",a)},"update:endYear":function(a){return e.$set(e.postParams,"historyEndYear",a)},"update:end-year":function(a){return e.$set(e.postParams,"historyEndYear",a)}}})],1),t("el-form-item",{attrs:{label:"预测年份："}},[t("year-range-selector",{attrs:{"begin-year":e.postParams.beginYear,"end-year":e.postParams.endYear},on:{"update:beginYear":function(a){return e.$set(e.postParams,"beginYear",a)},"update:begin-year":function(a){return e.$set(e.postParams,"beginYear",a)},"update:endYear":function(a){return e.$set(e.postParams,"endYear",a)},"update:end-year":function(a){return e.$set(e.postParams,"endYear",a)}}})],1),e._l(e.requiredParams,(function(a){return t("div",{key:a.key},[t("el-form-item",{attrs:{label:a.label+"："}},["int"===a.kind?t("el-input",{attrs:{step:1,type:"number",min:a.limits.min_value,max:a.limits.max_value,clearable:"",placeholder:"请输入整数数字"},model:{value:e.postParams[a.key],callback:function(t){e.$set(e.postParams,a.key,t)},expression:"postParams[param.key]"}}):"float"===a.kind?t("el-input",{attrs:{step:.01,type:"number",min:a.limits.min_value,max:a.limits.max_value,clearable:"",placeholder:"请输入数字"},model:{value:e.postParams[a.key],callback:function(t){e.$set(e.postParams,a.key,t)},expression:"postParams[param.key]"}}):a.kind.startsWith("option")?t("el-select",{attrs:{placeholder:"请选择一项"},model:{value:e.postParams[a.key],callback:function(t){e.$set(e.postParams,a.key,t)},expression:"postParams[param.key]"}},e._l(a.value,(function(e){return t("el-option",{key:e,attrs:{label:e,value:e}})})),1):a.kind.startsWith("multioption")?t("div",[t("el-select",{attrs:{multiple:"",placeholder:"请选择数项","multiple-limit":a.limits.max_choice},model:{value:e.postParams[a.key],callback:function(t){e.$set(e.postParams,a.key,t)},expression:"postParams[param.key]"}},e._l(a.value,(function(e){return t("el-option",{key:e,attrs:{label:e,value:e}})})),1),"要剔除的行业名单"===a.label?t("el-button",{staticStyle:{"margin-left":"20px"},attrs:{disabled:null===e.postParams.beginYear||null===e.postParams.endYear},on:{click:e.generateTemplate}},[e._v("生成模版")]):e._e()],1):"file"===a.kind?t("el-upload",{ref:"upload",refInFor:!0,attrs:{action:"/","on-change":e.getUploader(a.key,e.rawFileNames,e.rawFiles),"auto-upload":!1,multiple:!1,"list-type":"text","show-file-list":!1}},[t("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[e._v("选择文件")]),e.rawFileNames[a.key]?t("div",[e._v(" "+e._s(e.rawFileNames[a.key])+" ")]):e._e()],1):"bool"===a.kind?t("el-checkbox",{attrs:{"true-label":1,"false-label":0},model:{value:e.postParams[a.key],callback:function(t){e.$set(e.postParams,a.key,t)},expression:"postParams[param.key]"}}):t("el-input",{attrs:{placeholder:"请输入"},model:{value:e.postParams[a.key],callback:function(t){e.$set(e.postParams,a.key,t)},expression:"postParams[param.key]"}})],1)],1)})),t("el-form-item",{attrs:{label:"方案标签："}},[t("el-input",{attrs:{clearable:"",placeholder:"可留空"},model:{value:e.postParams.tag,callback:function(a){e.$set(e.postParams,"tag",a)},expression:"postParams.tag"}})],1),t("el-form-item",{attrs:{label:"加载方案："}},[t("el-select",{staticStyle:{width:"50%"},attrs:{placeholder:"选择标签",size:"small"},model:{value:e.currentTag,callback:function(a){e.currentTag=a},expression:"currentTag"}},e._l(e.knownTags,(function(e){return t("el-option",{key:e.tag,attrs:{label:e.tag,value:e.tag}})})),1),t("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",disabled:null===e.currentTag},on:{click:e.loadParameters}},[e._v("加载")])],1),t("el-form-item",[t("el-button",{attrs:{type:"primary",disabled:!e.canCommitQuery},on:{click:e.performPrediction}},[e._v("预测")])],1)],2)},n=[],l=(t("99af"),t("159b"),t("b0c0"),t("b64b"),t("21c9")),s=t("f59f"),o=t("21a6"),i={name:"SinglePredictSelectForm",components:{YearRangeSelector:l["a"]},data:function(){return{graphDataInternal:[],tableOneDataInternal:[],tableTwoDataInternal:[],requiredParams:[],rawFiles:{},rawFileNames:{},allMethods:[],postParams:{historyBeginYear:null,historyEndYear:null,beginYear:null,endYear:null,method:"",tag:null,tagType:this.tagType},knownTags:[],currentTag:null}},computed:{canCommitQuery:function(){var e=this.$data.postParams;return null!==e.beginYear&&null!==e.endYear&&(null!==e.historyBeginYear&&null!==e.historyEndYear)}},mounted:function(){this.$data.postParams.method=this.wiredMethod,this.loadTags()},methods:{generateTemplate:function(){for(var e=[],a=this.$data.postParams,t=function(t){var r={year:t};a.rejectlsit.forEach((function(e){r[e]=null})),e.push(r)},r=a.beginYear;r<=a.endYear;r+=1)t(r);console.log(e),console.log(["year"]+a.rejectlsit);var n=s["parse"](e,{fields:["year"].concat(a.rejectlsit)}),l=new Blob(["\ufeff".concat(n)],{type:"text/csv;charset=utf-8"});Object(o["saveAs"])(l,"剔除数据模版.csv")},getUploader:function(e,a,t){var r=this;return function(n){a[e]=n.name,t[e]=n.raw,r._watcher.update()}},loadTags:function(){var e=this;this.$axios.get("/tags/query",{params:{tagType:this.tagType}}).then((function(a){e.$data.knownTags=a.data.data}))},performPrediction:function(){var e=this,a=new FormData;Object.keys(this.$data.postParams).forEach((function(t){a.append(t,e.$data.postParams[t])})),a.append("StartYear",this.$data.postParams.historyBeginYear),a.append("EndYear",this.$data.postParams.historyEndYear),a.append("PreStartYear",this.$data.postParams.beginYear),a.append("PreEndYear",this.$data.postParams.endYear),Object.keys(this.$data.rawFiles).forEach((function(t){a.append(t,e.$data.rawFiles[t])})),this.$axios.post("/predict/region/single",a).then((function(a){e.$data.graphDataInternal=a.data.data.tableTwoData,e.$data.tableOneDataInternal=a.data.data.tableOneData,e.$data.tableTwoDataInternal=a.data.data.tableTwoData}))},loadParameters:function(){var e=this;this.$axios.get("/params/predict/static/region",{params:{tag:this.$data.currentTag}}).then((function(a){e.$data.postParams=a.data.data}))}},watch:{graphDataInternal:function(e){this.$emit("update:graphData",e)},tableOneDataInternal:function(e){this.$emit("update:tableOneData",e)},tableTwoDataInternal:function(e){this.$emit("update:tableTwoData",e)},"postParams.method":function(e){var a=this;this.$data.requiredParams=[],this.$axios.get("/get/args",{params:{method:e}}).then((function(e){e.data.data.para.forEach((function(e){"StartYear"===e.key||"EndYear"===e.key||"PreStartYear"===e.key||"PreEndYear"===e.key||(a.$data.requiredParams.push(e),void 0!==e.default&&a.$set(a.postParams,e.key,e.default))}))}))}},props:["graphData","tableOneData","tableTwoData","wiredMethod","tagType"]},c=i,p=(t("3be6"),t("2877")),u=Object(p["a"])(c,r,n,!1,null,"265926ff",null);a["a"]=u.exports},b2c8:function(e,a,t){},c3ab:function(e,a,t){"use strict";var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{directives:[{name:"show",rawName:"v-show",value:0!==e.graphData.length||void 0!==e.graphData.yData,expression:"graphData.length !== 0 || graphData.yData !== undefined"}],staticStyle:{"margin-left":"20px"}},[t("el-row",[t("div",{staticStyle:{width:"680px",height:"300px"},attrs:{id:e.uniqueId}})]),t("el-row",[t("el-form",[t("el-form-item",[t("el-button",{on:{click:e.exportImage}},[e._v("导出图像")])],1),t("el-form-item",{attrs:{label:"显示方式："}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.currentDisplayMethod,callback:function(a){e.currentDisplayMethod=a},expression:"currentDisplayMethod"}},e._l(e.displayMethods,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1)],1)],1)},n=[],l=(t("1276"),t("ac1f"),t("5cc6"),t("9a8c"),t("a975"),t("735e"),t("c1ac"),t("d139"),t("3a7b"),t("d5d6"),t("82f8"),t("e91f"),t("60bd"),t("5f96"),t("3280"),t("3fcc"),t("ca91"),t("25a1"),t("cd26"),t("3c5d"),t("2954"),t("649e"),t("219c"),t("170b"),t("b39a"),t("72f7"),t("d3b7"),t("159b"),t("313e")),s=t("21a6");function o(e){for(var a=e.split(";base64,"),t=a[0].split(":")[1],r=window.atob(a[1]),n=r.length,l=new Uint8Array(n),s=0;s<n;++s)l[s]=r.charCodeAt(s);return new Blob([l],{type:t})}var i={data:function(){return{currentChart:void 0,graphData:[],params1st:{xTag:"xName",yTag:"yValue",xName:"",yName:""},params2nd:{xTag:"",yTag1st:"",yTag2nd:"",xName:"",yName:"",yName1st:"",yName2nd:""},displayMethods:[{label:"折线图",value:"line"},{label:"柱状图",value:"bar"},{label:"散点图",value:"scatter"}],currentDisplayMethod:"line"}},methods:{refreshChartDirty:function(){var e=this.$data.params1st;void 0===this.currentChart&&(this.currentChart=l["init"](document.getElementById(this.uniqueId)));var a=this.graphData.xData,t=this.graphData.yData[0].data,r={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},xAxis:{type:"category",name:e.xName,data:a,axisTick:{alignWithLabel:!0},boundaryGap:"bar"===this.$data.currentDisplayMethod,onZero:!0,axisLabel:{show:!0,textStyle:{color:"#ffffff",fontSize:14}},axisLine:{lineStyle:{color:"#ffffff"}}},yAxis:{type:"value",name:e.yName,axisLabel:{show:!0,textStyle:{color:"#ffffff",fontSize:14}},axisLine:{lineStyle:{color:"#ffffff"}}},series:[{data:t,name:e.yName,type:this.$data.currentDisplayMethod}],legend:{orient:"horizontal",x:"center",y:"top",textStyle:{color:"#ffffff",fontSize:16}}};this.currentChart.setOption(r,!0)},refreshChart:function(){var e=this.$data.params1st;void 0===this.currentChart&&(this.currentChart=l["init"](document.getElementById(this.uniqueId)));var a=[],t=[];this.graphData.forEach((function(e){e.year?a.push(e.year):e.time&&a.push(e.time),void 0!==e.predict?t.push(e.predict):void 0!==e.payload&&t.push(e.payload)}));var r={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},xAxis:{type:"category",name:e.xName,data:a,axisTick:{alignWithLabel:!0},axisLabel:{show:!0,textStyle:{color:"#ffffff",fontSize:14}},axisLine:{lineStyle:{color:"#ffffff"}},boundaryGap:"bar"===this.$data.currentDisplayMethod,onZero:!0},yAxis:{type:"value",name:e.yName,axisLabel:{show:!0,textStyle:{color:"#ffffff",fontSize:14}},axisLine:{lineStyle:{color:"#ffffff"}}},series:[{data:t,name:e.yName,type:this.$data.currentDisplayMethod}],legend:{orient:"horizontal",x:"center",y:"top",textStyle:{color:"#ffffff",fontSize:16}}};this.currentChart.setOption(r,!0)},refreshChart2nd:function(){var e=this.$data.params2nd;void 0===this.currentChart&&(this.currentChart=l["init"](document.getElementById(this.uniqueId)));var a=[],t=[],r=[];this.$data.graphData.forEach((function(n){a.push(n[e.xTag]),t.push(n[e.yTag1st]),r.push(n[e.yTag2nd])}));var n={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},xAxis:{type:"category",name:e.xName,data:a,axisTick:{alignWithLabel:!0},boundaryGap:"bar"===this.$data.currentDisplayMethod,onZero:!0,axisLabel:{show:!0,textStyle:{color:"#ffffff",fontSize:14}},axisLine:{lineStyle:{color:"#ffffff"}}},yAxis:{type:"value",name:e.yName,axisLabel:{show:!0,textStyle:{color:"#ffffff",fontSize:14}},axisLine:{lineStyle:{color:"#ffffff"}}},series:[{data:t,name:e.yName1st,type:this.$data.currentDisplayMethod},{data:r,name:e.yName2nd,type:this.$data.currentDisplayMethod}],legend:{orient:"horizontal",x:"center",y:"top",textStyle:{color:"#ffffff",fontSize:16}}};this.currentChart.setOption(n,!0)},exportImage:function(){if(this.currentChart){var e=this.currentChart.getDataURL(),a=o(e);Object(s["saveAs"])(a,"预测图像.png")}}},watch:{currentDisplayMethod:function(){"2nd"===this.typee?this.refreshChart2nd():"dirty"===this.typee?this.refreshChartDirty():this.refreshChart()}},computed:{uniqueId:function(){return void 0!==this.uid?this.uid:"globalChart"}},props:["typee","uid","title"]},c=i,p=t("2877"),u=Object(p["a"])(c,r,n,!1,null,"1df56db1",null);a["a"]=u.exports},f70a:function(e,a,t){"use strict";var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("el-form",[void 0===e.nomapermse&&0!==e.tableOneData.length?t("el-form-item",{attrs:{label:"评价指标表："}},[t("el-table",{attrs:{data:e.tableOneData}},[t("el-table-column",{attrs:{prop:"mape",label:"MAPE（%）"},scopedSlots:e._u([{key:"default",fn:function(a){return[e._v(" "+e._s(a.row.mape.toFixed(2))+" ")]}}],null,!1,3612083124)}),t("el-table-column",{attrs:{prop:"rmse",label:"RMSE"},scopedSlots:e._u([{key:"default",fn:function(a){return[e._v(" "+e._s(a.row.rmse.toFixed(2))+" ")]}}],null,!1,616966500)})],1)],1):e._e(),void 0===e.nomapermse&&0!==e.tableOneData.length?t("el-form-item",[t("el-button",{on:{click:e.exportTableOneSheet}},[e._v("导出评价指标表")])],1):e._e(),0!==e.tableTwoData.length?t("el-form-item",{attrs:{label:"年份 − 预测值表："}},[t("el-table",{attrs:{data:e.tableTwoData}},[t("el-table-column",{attrs:{prop:"year",label:"年份"}}),t("el-table-column",{attrs:{prop:"predict",label:"预测值（MW）"},scopedSlots:e._u([{key:"default",fn:function(a){return[e._v(" "+e._s(a.row.predict.toFixed(0))+" ")]}}],null,!1,4170251218)})],1)],1):e._e(),0!==e.tableTwoData.length?t("el-form-item",[t("el-button",{on:{click:e.exportTableTwoSheet}},[e._v("导出预测结果表")])],1):e._e()],1)},n=[],l=t("f59f"),s=t("21a6"),o={name:"ResultTable",props:["nomapermse"],data:function(){return{tableOneData:[],tableTwoData:[]}},methods:{exportTableSheet:function(e,a){var t=l["parse"](e,{fields:a}),r=new Blob([t],{type:"text/csv"});Object(s["saveAs"])(r,"预测结果表.csv")},exportTableOneSheet:function(){this.exportTableSheet(this.$data.tableOneData,["mape","rmse"])},exportTableTwoSheet:function(){this.exportTableSheet(this.$data.tableTwoData,["year","predict"])}}},i=o,c=t("2877"),p=Object(c["a"])(i,r,n,!1,null,"22e16c68",null);a["a"]=p.exports}}]);
//# sourceMappingURL=chunk-076f7db5.b067dc55.js.map