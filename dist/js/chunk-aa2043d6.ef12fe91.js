(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aa2043d6"],{3311:function(a,t,e){"use strict";e.r(t);var r=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("el-row",{attrs:{type:"flex",justify:"center"}},[e("el-col",{attrs:{span:11,offset:1}},[e("PredictSelectForm",{attrs:{placeOrIndustry:"place","graph-data":a.graphData,"table-one-data":a.tableOneData,"table-two-data":a.tableTwoData},on:{"update:graphData":function(t){a.graphData=t},"update:graph-data":function(t){a.graphData=t},"update:tableOneData":function(t){a.tableOneData=t},"update:table-one-data":function(t){a.tableOneData=t},"update:tableTwoData":function(t){a.tableTwoData=t},"update:table-two-data":function(t){a.tableTwoData=t}}})],1),e("el-col",{attrs:{span:12}},[e("el-row",[e("ResultChart",{ref:"resultChart"})],1)],1)],1),e("el-row",[e("el-col",{attrs:{span:22,offset:1}},[e("ResultTable",{ref:"resultTable"})],1)],1)],1)},n=[],s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("el-form",{attrs:{"label-position":"right","label-width":"auto"}},[a.longTerm?a._e():e("el-form-item",{attrs:{label:"预测方法："}},[e("el-select",{attrs:{placeholder:"请选择"},model:{value:a.postParams.method,callback:function(t){a.$set(a.postParams,"method",t)},expression:"postParams.method"}},a._l(a.allMethods,(function(a){return e("el-option",{key:a.value,attrs:{label:a.label,value:a.value}})})),1)],1),e("el-form-item",{attrs:{label:"历史年份："}},[e("year-range-selector",{attrs:{"begin-year":a.postParams.historyBeginYear,"end-year":a.postParams.historyEndYear},on:{"update:beginYear":function(t){return a.$set(a.postParams,"historyBeginYear",t)},"update:begin-year":function(t){return a.$set(a.postParams,"historyBeginYear",t)},"update:endYear":function(t){return a.$set(a.postParams,"historyEndYear",t)},"update:end-year":function(t){return a.$set(a.postParams,"historyEndYear",t)}}})],1),e("el-form-item",{attrs:{label:"预测年份："}},[e("year-range-selector",{attrs:{"begin-year":a.postParams.beginYear,"end-year":a.postParams.endYear},on:{"update:beginYear":function(t){return a.$set(a.postParams,"beginYear",t)},"update:begin-year":function(t){return a.$set(a.postParams,"beginYear",t)},"update:endYear":function(t){return a.$set(a.postParams,"endYear",t)},"update:end-year":function(t){return a.$set(a.postParams,"endYear",t)}}})],1),a._l(a.requiredParams,(function(t){return e("div",{key:t.key},[e("el-form-item",{attrs:{label:t.label+"："}},["int"===t.kind?e("el-input",{attrs:{step:1,type:"number",min:t.limits.min_value,max:t.limits.max_value,clearable:"",placeholder:"请输入整数数字",disabled:a.judgeDepends(t.limits.depends)},model:{value:a.postParams[t.key],callback:function(e){a.$set(a.postParams,t.key,e)},expression:"postParams[param.key]"}}):"float"===t.kind?e("el-input",{attrs:{step:.01,type:"number",min:t.limits.min_value,max:t.limits.max_value,clearable:"",placeholder:"请输入数字",disabled:a.judgeDepends(t.limits.depends)},model:{value:a.postParams[t.key],callback:function(e){a.$set(a.postParams,t.key,e)},expression:"postParams[param.key]"}}):t.kind.startsWith("option")?e("el-select",{attrs:{placeholder:"请选择一项",disabled:a.judgeDepends(t.limits.depends)},model:{value:a.postParams[t.key],callback:function(e){a.$set(a.postParams,t.key,e)},expression:"postParams[param.key]"}},a._l(t.value,(function(a){return e("el-option",{key:a,attrs:{label:a,value:a}})})),1):t.kind.startsWith("multioption")?e("el-select",{attrs:{multiple:"",placeholder:"请选择数项",disabled:a.judgeDepends(t.limits.depends),"multiple-limit":t.limits.max_choice},model:{value:a.postParams[t.key],callback:function(e){a.$set(a.postParams,t.key,e)},expression:"postParams[param.key]"}},a._l(t.value,(function(a){return e("el-option",{key:a,attrs:{label:a,value:a}})})),1):"bool"===t.kind?e("el-checkbox",{attrs:{"true-label":1,"false-label":0,disabled:a.judgeDepends(t.limits.depends)},model:{value:a.postParams[t.key],callback:function(e){a.$set(a.postParams,t.key,e)},expression:"postParams[param.key]"}}):e("el-input",{attrs:{placeholder:"请输入",disabled:a.judgeDepends(t.limits.depends)},model:{value:a.postParams[t.key],callback:function(e){a.$set(a.postParams,t.key,e)},expression:"postParams[param.key]"}})],1)],1)})),e("el-form-item",{attrs:{label:"方案标签："}},[e("el-input",{attrs:{clearable:"",placeholder:"可留空"},model:{value:a.postParams.tag,callback:function(t){a.$set(a.postParams,"tag",t)},expression:"postParams.tag"}})],1),e("el-form-item",{attrs:{label:"加载方案："}},[e("el-select",{staticStyle:{width:"50%"},attrs:{placeholder:"选择标签",size:"small"},model:{value:a.currentTag,callback:function(t){a.currentTag=t},expression:"currentTag"}},a._l(a.knownTags,(function(a){return e("el-option",{key:a.id,attrs:{label:a.id,value:a.id}})})),1),e("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",disabled:null===a.currentTag},on:{click:a.loadParameters}},[a._v("加载")])],1),e("el-form-item",[e("el-button",{attrs:{type:"primary",disabled:!a.canCommitQuery},on:{click:a.performPrediction}},[a._v("预测")])],1)],2)},l=[];e("159b"),e("d81d");function i(a){return a.map((function(a){return{key:a,label:a,value:a}}))}var o=e("21c9"),d={name:"SinglePredictSelectForm",components:{YearRangeSelector:o["a"]},data:function(){return{predictRegions:[],predictIndustries:[],variadicFactors:[],graphDataInternal:[],tableOneDataInternal:[],tableTwoDataInternal:[],requiredParams:[],parameters:{},postParams:{historyBeginYear:null,historyEndYear:null,beginYear:null,endYear:null,region:"",industry:"",method:"",factor1:{name:"",hasValue:!0,value:.5},factor2:{name:"",hasValue:!0,value:.5},tag:null,tagType:"STATIC_REGIONAL"},originalAllMethodsForPlace:[],originalAllMethodsForIndustry:[],knownTags:[],currentTag:null}},computed:{allMethods:function(){return"place"===this.placeOrIndustry?i(this.originalAllMethodsForPlace):"industry"===this.placeOrIndustry?i(this.originalAllMethodsForIndustry):[]},canCommitQuery:function(){var a=this.$data.postParams;return null!==a.beginYear&&null!==a.endYear&&(null!==a.historyBeginYear&&null!==a.historyEndYear)},shouldDisplaySecondFactor:function(){return"二元一次函数"===this.$data.postParams.method}},mounted:function(){"place"===this.placeOrIndustry?(this.loadRegions(),this.loadRegionalMethods()):(this.loadIndustries(),this.loadIndustrialMethods()),this.loadFactors(),this.loadTags()},methods:{loadTags:function(){var a=this;this.$axios.get("/tags/query",{params:{tagType:"STATIC_REGIONAL"}}).then((function(t){a.$data.knownTags=t.data.data}))},loadParameters:function(){var a=this;this.$axios.get("/params/predict/static/region",{params:{tag:this.$data.currentTag}}).then((function(t){a.$data.postParams=t.data.data}))},loadRegions:function(){var a=this;this.$axios.get("/region/query").then((function(t){a.$data.predictRegions=t.data.data}))},loadIndustries:function(){var a=this;this.$axios.get("/industry/query").then((function(t){a.$data.predictIndustries=t.data.data}))},loadFactors:function(){var a=this;this.$axios.get("/factor/query").then((function(t){a.$data.variadicFactors=t.data.data}))},loadIndustrialMethods:function(){var a=this;this.$axios.get("/method/industry/query").then((function(t){a.$data.originalAllMethodsForIndustry=t.data.data}))},loadRegionalMethods:function(){var a=this;this.$axios.get("/method/region/query").then((function(t){a.$data.originalAllMethodsForPlace=t.data.data}))},judgeDepends:function(a){return void 0!==a&&null!==a&&!this.$data.postParams[a]},performPrediction:function(){var a=this,t=Object.assign(this.$data.postParams,this.$data.parameters);t.StartYear=t.historyBeginYear,t.EndYear=t.historyEndYear,t.PreStartYear=t.beginYear,t.PreEndYear=t.endYear,this.$axios.post("/predict/region/single",t).then((function(t){a.$data.graphDataInternal=t.data.data.tableTwoData,a.$data.tableOneDataInternal=t.data.data.tableOneData,a.$data.tableTwoDataInternal=t.data.data.tableTwoData}))}},watch:{graphDataInternal:function(a){this.$emit("update:graphData",a)},tableOneDataInternal:function(a){this.$emit("update:tableOneData",a)},tableTwoDataInternal:function(a){this.$emit("update:tableTwoData",a)},postParams:{handler:function(){this._watcher.update()},deep:!0},"postParams.method":function(a){var t=this;this.$data.requiredParams=[],this.$axios.get("/get/args",{params:{method:a}}).then((function(a){a.data.data.para.forEach((function(a){"StartYear"===a.key||"EndYear"===a.key||"PreStartYear"===a.key||"PreEndYear"===a.key||(t.$data.requiredParams.push(a),void 0!==a.default&&t.$set(t.postParams,a.key,a.default))}))}))}},props:["placeOrIndustry","longTerm","graphData","tableOneData","tableTwoData"]},u=d,c=(e("8823"),e("2877")),p=Object(c["a"])(u,s,l,!1,null,"2841952c",null),h=p.exports,f=e("c3ab"),m=e("f70a"),y={name:"PlaceSinglePrediction",components:{ResultTable:m["a"],ResultChart:f["a"],PredictSelectForm:h},data:function(){return{graphData:[],tableOneData:[],tableTwoData:[]}},watch:{graphData:function(a){this.$refs.resultChart.graphData=a,this.$refs.resultChart.refreshChart()},tableOneData:function(a){this.$refs.resultTable.tableOneData=a},tableTwoData:function(a){this.$refs.resultTable.tableTwoData=a}}},b=y,g=Object(c["a"])(b,r,n,!1,null,"7c44ffc0",null);t["default"]=g.exports},8823:function(a,t,e){"use strict";e("c715")},c3ab:function(a,t,e){"use strict";var r=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{directives:[{name:"show",rawName:"v-show",value:0!==a.graphData.length||void 0!==a.graphData.yData,expression:"graphData.length !== 0 || graphData.yData !== undefined"}],staticStyle:{"margin-left":"20px"}},[e("el-row",[e("div",{staticStyle:{width:"680px",height:"300px"},attrs:{id:a.uniqueId}})]),e("el-row",[e("el-form",[e("el-form-item",[e("el-button",{on:{click:a.exportImage}},[a._v("导出图像")])],1),e("el-form-item",{attrs:{label:"显示方式："}},[e("el-select",{attrs:{placeholder:"请选择"},model:{value:a.currentDisplayMethod,callback:function(t){a.currentDisplayMethod=t},expression:"currentDisplayMethod"}},a._l(a.displayMethods,(function(a){return e("el-option",{key:a.value,attrs:{label:a.label,value:a.value}})})),1)],1)],1)],1)],1)},n=[],s=(e("1276"),e("ac1f"),e("5cc6"),e("9a8c"),e("a975"),e("735e"),e("c1ac"),e("d139"),e("3a7b"),e("d5d6"),e("82f8"),e("e91f"),e("60bd"),e("5f96"),e("3280"),e("3fcc"),e("ca91"),e("25a1"),e("cd26"),e("3c5d"),e("2954"),e("649e"),e("219c"),e("170b"),e("b39a"),e("72f7"),e("d3b7"),e("159b"),e("313e")),l=e("21a6");function i(a){for(var t=a.split(";base64,"),e=t[0].split(":")[1],r=window.atob(t[1]),n=r.length,s=new Uint8Array(n),l=0;l<n;++l)s[l]=r.charCodeAt(l);return new Blob([s],{type:e})}var o={data:function(){return{currentChart:void 0,graphData:[],params1st:{xTag:"xName",yTag:"yValue",xName:"",yName:""},params2nd:{xTag:"",yTag1st:"",yTag2nd:"",xName:"",yName:"",yName1st:"",yName2nd:""},displayMethods:[{label:"折线图",value:"line"},{label:"柱状图",value:"bar"},{label:"散点图",value:"scatter"}],currentDisplayMethod:"line"}},methods:{refreshChartDirty:function(){var a=this.$data.params1st;void 0===this.currentChart&&(this.currentChart=s["init"](document.getElementById(this.uniqueId)));var t=this.graphData.xData,e=this.graphData.yData[0].data,r={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},xAxis:{type:"category",name:a.xName,data:t,axisTick:{alignWithLabel:!0},boundaryGap:"bar"===this.$data.currentDisplayMethod,onZero:!0,axisLabel:{show:!0,textStyle:{color:"#ffffff",fontSize:14}},axisLine:{lineStyle:{color:"#ffffff"}}},yAxis:{type:"value",name:a.yName,axisLabel:{show:!0,textStyle:{color:"#ffffff",fontSize:14}},axisLine:{lineStyle:{color:"#ffffff"}}},series:[{data:e,name:a.yName,type:this.$data.currentDisplayMethod}],legend:{orient:"horizontal",x:"center",y:"top",textStyle:{color:"#ffffff",fontSize:16}}};this.currentChart.setOption(r,!0)},refreshChart:function(){var a=this.$data.params1st;void 0===this.currentChart&&(this.currentChart=s["init"](document.getElementById(this.uniqueId)));var t=[],e=[];this.graphData.forEach((function(a){a.year?t.push(a.year):a.time&&t.push(a.time),void 0!==a.predict?e.push(a.predict):void 0!==a.payload&&e.push(a.payload)}));var r={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},xAxis:{type:"category",name:a.xName,data:t,axisTick:{alignWithLabel:!0},axisLabel:{show:!0,textStyle:{color:"#ffffff",fontSize:14}},axisLine:{lineStyle:{color:"#ffffff"}},boundaryGap:"bar"===this.$data.currentDisplayMethod,onZero:!0},yAxis:{type:"value",name:a.yName,axisLabel:{show:!0,textStyle:{color:"#ffffff",fontSize:14}},axisLine:{lineStyle:{color:"#ffffff"}}},series:[{data:e,name:a.yName,type:this.$data.currentDisplayMethod}],legend:{orient:"horizontal",x:"center",y:"top",textStyle:{color:"#ffffff",fontSize:16}}};this.currentChart.setOption(r,!0)},refreshChart2nd:function(){var a=this.$data.params2nd;void 0===this.currentChart&&(this.currentChart=s["init"](document.getElementById(this.uniqueId)));var t=[],e=[],r=[];this.$data.graphData.forEach((function(n){t.push(n[a.xTag]),e.push(n[a.yTag1st]),r.push(n[a.yTag2nd])}));var n={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},xAxis:{type:"category",name:a.xName,data:t,axisTick:{alignWithLabel:!0},boundaryGap:"bar"===this.$data.currentDisplayMethod,onZero:!0,axisLabel:{show:!0,textStyle:{color:"#ffffff",fontSize:14}},axisLine:{lineStyle:{color:"#ffffff"}}},yAxis:{type:"value",name:a.yName,axisLabel:{show:!0,textStyle:{color:"#ffffff",fontSize:14}},axisLine:{lineStyle:{color:"#ffffff"}}},series:[{data:e,name:a.yName1st,type:this.$data.currentDisplayMethod},{data:r,name:a.yName2nd,type:this.$data.currentDisplayMethod}],legend:{orient:"horizontal",x:"center",y:"top",textStyle:{color:"#ffffff",fontSize:16}}};this.currentChart.setOption(n,!0)},exportImage:function(){if(this.currentChart){var a=this.currentChart.getDataURL(),t=i(a);Object(l["saveAs"])(t,"预测图像.png")}}},watch:{currentDisplayMethod:function(){"2nd"===this.typee?this.refreshChart2nd():"dirty"===this.typee?this.refreshChartDirty():this.refreshChart()}},computed:{uniqueId:function(){return void 0!==this.uid?this.uid:"globalChart"}},props:["typee","uid","title"]},d=o,u=e("2877"),c=Object(u["a"])(d,r,n,!1,null,"1df56db1",null);t["a"]=c.exports},c715:function(a,t,e){},d81d:function(a,t,e){"use strict";var r=e("23e7"),n=e("b727").map,s=e("1dde"),l=s("map");r({target:"Array",proto:!0,forced:!l},{map:function(a){return n(this,a,arguments.length>1?arguments[1]:void 0)}})},f70a:function(a,t,e){"use strict";var r=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("el-form",[void 0===a.nomapermse?e("el-form-item",{attrs:{label:"评价指标表："}},[e("el-table",{attrs:{data:a.tableOneData}},[e("el-table-column",{attrs:{prop:"mape",label:"MAPE（%）"}}),e("el-table-column",{attrs:{prop:"rmse",label:"RMSE"}})],1)],1):a._e(),void 0===a.nomapermse?e("el-form-item",[e("el-button",{attrs:{disabled:0===a.tableOneData.length},on:{click:a.exportTableOneSheet}},[a._v("导出评价指标表")])],1):a._e(),e("el-form-item",{attrs:{label:"年份 − 预测值表："}},[e("el-table",{attrs:{data:a.tableTwoData}},[e("el-table-column",{attrs:{prop:"year",label:"年份"}}),e("el-table-column",{attrs:{prop:"predict",label:"预测值（MW）"}})],1)],1),e("el-form-item",[e("el-button",{attrs:{disabled:0===a.tableTwoData.length},on:{click:a.exportTableTwoSheet}},[a._v("导出预测结果表")])],1)],1)},n=[],s=e("f59f"),l=e("21a6"),i={name:"ResultTable",props:["nomapermse"],data:function(){return{tableOneData:[],tableTwoData:[]}},methods:{exportTableSheet:function(a,t){var e=s["parse"](a,{fields:t}),r=new Blob([e],{type:"text/csv"});Object(l["saveAs"])(r,"database.csv")},exportTableOneSheet:function(){this.exportTableSheet(this.$data.tableOneData,["index","r2","mape","rmse"])},exportTableTwoSheet:function(){this.exportTableSheet(this.$data.tableTwoData,["year","predict"])}}},o=i,d=e("2877"),u=Object(d["a"])(o,r,n,!1,null,"41b33e72",null);t["a"]=u.exports}}]);
//# sourceMappingURL=chunk-aa2043d6.ef12fe91.js.map