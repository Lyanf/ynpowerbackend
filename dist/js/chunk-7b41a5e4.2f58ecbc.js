(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b41a5e4"],{"21c9":function(a,e,t){"use strict";var r=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("el-row",{style:a.mainStyle,attrs:{type:"flex",justify:"left"}},[t("el-col",[t("el-date-picker",{attrs:{type:"year",placeholder:"起始年份"},on:{change:a.beginChange},model:{value:a.beginYearInternal,callback:function(e){a.beginYearInternal=e},expression:"beginYearInternal"}})],1),t("el-col",{staticStyle:{margin:"auto","text-align":"center",color:"lightgray","font-size":"12px"}},[a._v(" 至 ")]),t("el-col",[t("el-date-picker",{attrs:{type:"year",placeholder:"终止年份"},on:{change:a.endChange},model:{value:a.endYearInternal,callback:function(e){a.endYearInternal=e},expression:"endYearInternal"}})],1)],1)},n=[],l={name:"YearRangeSelector",props:["beginYear","endYear","expand"],data:function(){return{beginYearInternal:this.beginYear,endYearInternal:this.endYear}},methods:{beginChange:function(a){null===a?this.$emit("update:beginYear",null):this.$emit("update:beginYear",a.getFullYear())},endChange:function(a){null===a?this.$emit("update:endYear",null):this.$emit("update:endYear",a.getFullYear())}},watch:{beginYearInternal:function(a){null!==a?this.$emit("update:beginYear",a.getFullYear()):this.$emit("update:beginYear",null)},endYearInternal:function(a){null!==a?this.$emit("update:endYear",a.getFullYear()):this.$emit("update:endYear",null)},beginYear:function(a){this.beginYearInternal=null!==a?new Date(a,1,1):null},endYear:function(a){this.endYearInternal=null!==a?new Date(a,1,1):null}},computed:{mainStyle:function(){return this.expand?"":"width: 55%"}}},s=l,i=(t("6e83"),t("2877")),o=Object(i["a"])(s,r,n,!1,null,"7bfa7c13",null);e["a"]=o.exports},"47ef":function(a,e,t){"use strict";var r=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("el-form",{attrs:{"label-position":"right","label-width":"auto"}},[t("el-form-item",{attrs:{label:"预测方法："}},[t("el-select",{attrs:{placeholder:"请选择",disabled:null!==a.wiredMethod},model:{value:a.postParams.method,callback:function(e){a.$set(a.postParams,"method",e)},expression:"postParams.method"}},a._l(a.allMethods,(function(a){return t("el-option",{key:a.value,attrs:{label:a.label,value:a.value}})})),1)],1),t("el-form-item",{attrs:{label:"预测年份："}},[t("year-range-selector",{attrs:{"begin-year":a.postParams.beginYear,"end-year":a.postParams.endYear},on:{"update:beginYear":function(e){return a.$set(a.postParams,"beginYear",e)},"update:begin-year":function(e){return a.$set(a.postParams,"beginYear",e)},"update:endYear":function(e){return a.$set(a.postParams,"endYear",e)},"update:end-year":function(e){return a.$set(a.postParams,"endYear",e)}}})],1),a._l(a.requiredParams,(function(e){return t("div",{key:e.key},[t("el-form-item",{attrs:{label:e.label+"："}},["int"===e.kind?t("el-input",{attrs:{step:1,type:"number",min:e.limits.min_value,max:e.limits.max_value,clearable:"",placeholder:"请输入整数数字"},model:{value:a.postParams[e.key],callback:function(t){a.$set(a.postParams,e.key,t)},expression:"postParams[param.key]"}}):"float"===e.kind?t("el-input",{attrs:{step:.01,type:"number",min:e.limits.min_value,max:e.limits.max_value,clearable:"",placeholder:"请输入数字"},model:{value:a.postParams[e.key],callback:function(t){a.$set(a.postParams,e.key,t)},expression:"postParams[param.key]"}}):e.kind.startsWith("option")?t("el-select",{attrs:{placeholder:"请选择一项"},model:{value:a.postParams[e.key],callback:function(t){a.$set(a.postParams,e.key,t)},expression:"postParams[param.key]"}},a._l(e.value,(function(a){return t("el-option",{key:a,attrs:{label:a,value:a}})})),1):e.kind.startsWith("multioption")?t("el-select",{attrs:{multiple:"",placeholder:"请选择数项","multiple-limit":e.limits.max_choice},model:{value:a.postParams[e.key],callback:function(t){a.$set(a.postParams,e.key,t)},expression:"postParams[param.key]"}},a._l(e.value,(function(a){return t("el-option",{key:a,attrs:{label:a,value:a}})})),1):"file"===e.kind?t("el-upload",{ref:"upload",refInFor:!0,attrs:{action:"/","on-change":a.getUploader(e.key,a.rawFileNames,a.rawFiles),"auto-upload":!1,multiple:!1,"list-type":"text","show-file-list":!1}},[t("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[a._v("选择文件")]),a.rawFileNames[e.key]?t("div",[a._v(" "+a._s(a.rawFileNames[e.key])+" ")]):a._e()],1):"bool"===e.kind?t("el-checkbox",{attrs:{"true-label":1,"false-label":0},model:{value:a.postParams[e.key],callback:function(t){a.$set(a.postParams,e.key,t)},expression:"postParams[param.key]"}}):t("el-input",{attrs:{placeholder:"请输入"},model:{value:a.postParams[e.key],callback:function(t){a.$set(a.postParams,e.key,t)},expression:"postParams[param.key]"}})],1)],1)})),t("el-form-item",{attrs:{label:"方案标签："}},[t("el-input",{attrs:{clearable:"",placeholder:"可留空"},model:{value:a.postParams.tag,callback:function(e){a.$set(a.postParams,"tag",e)},expression:"postParams.tag"}})],1),t("el-form-item",{attrs:{label:"加载方案："}},[t("el-select",{staticStyle:{width:"50%"},attrs:{placeholder:"选择标签",size:"small"},model:{value:a.currentTag,callback:function(e){a.currentTag=e},expression:"currentTag"}},a._l(a.knownTags,(function(a){return t("el-option",{key:a.tag,attrs:{label:a.tag,value:a.tag}})})),1),t("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",disabled:null===a.currentTag},on:{click:a.loadParameters}},[a._v("加载")])],1),t("el-form-item",[t("el-button",{attrs:{type:"primary",disabled:!a.canCommitQuery},on:{click:a.performPrediction}},[a._v("预测")])],1)],2)},n=[],l=(t("b0c0"),t("159b"),t("b64b"),t("21c9")),s={name:"SinglePredictSelectForm",components:{YearRangeSelector:l["a"]},data:function(){return{graphDataInternal:[],tableOneDataInternal:[],tableTwoDataInternal:[],requiredParams:[],rawFiles:{},rawFileNames:{},allMethods:[],postParams:{beginYear:null,endYear:null,method:"",tag:null,tagType:this.tagType},knownTags:[],currentTag:null}},computed:{canCommitQuery:function(){var a=this.$data.postParams;return null!==a.beginYear&&null!==a.endYear}},mounted:function(){this.$data.postParams.method=this.wiredMethod,this.loadTags()},methods:{getUploader:function(a,e,t){var r=this;return function(n){e[a]=n.name,t[a]=n.raw,r._watcher.update()}},loadTags:function(){var a=this;this.$axios.get("/tags/query",{params:{tagType:this.tagType}}).then((function(e){a.$data.knownTags=e.data.data}))},performPrediction:function(){var a=this,e=new FormData;Object.keys(this.$data.postParams).forEach((function(t){e.append(t,a.$data.postParams[t])})),e.append("PreStartYear",this.$data.postParams.beginYear),e.append("PreEndYear",this.$data.postParams.endYear),e.append("StartYear",this.$data.postParams.beginYear),e.append("EndYear",this.$data.postParams.endYear),Object.keys(this.$data.rawFiles).forEach((function(t){e.append(t,a.$data.rawFiles[t])})),this.$axios.post("/predict/region/single",e).then((function(e){a.$data.graphDataInternal=e.data.data.tableTwoData,a.$data.tableOneDataInternal=e.data.data.tableOneData,a.$data.tableTwoDataInternal=e.data.data.tableTwoData}))},loadParameters:function(){var a=this;this.$axios.get("/params/predict/static/region",{params:{tag:this.$data.currentTag}}).then((function(e){a.$data.postParams=e.data.data}))}},watch:{graphDataInternal:function(a){this.$emit("update:graphData",a)},tableOneDataInternal:function(a){this.$emit("update:tableOneData",a)},tableTwoDataInternal:function(a){this.$emit("update:tableTwoData",a)},"postParams.method":function(a){var e=this;this.$data.requiredParams=[],this.$axios.get("/get/args",{params:{method:a}}).then((function(a){a.data.data.para.forEach((function(a){"StartYear"===a.key||"EndYear"===a.key||"PreStartYear"===a.key||"PreEndYear"===a.key||(e.$data.requiredParams.push(a),void 0!==a.default&&e.$set(e.postParams,a.key,a.default))}))}))}},props:["graphData","tableOneData","tableTwoData","wiredMethod","tagType"]},i=s,o=(t("d0b3"),t("2877")),u=Object(o["a"])(i,r,n,!1,null,"91e3ae52",null);e["a"]=u.exports},"6e83":function(a,e,t){"use strict";t("e4af")},"79dd":function(a,e,t){"use strict";var r=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{directives:[{name:"show",rawName:"v-show",value:0!==a.xData.length,expression:"xData.length !== 0"}],staticStyle:{"margin-left":"20px"}},[t("el-row",[t("div",{staticStyle:{width:"680px",height:"300px"},attrs:{id:a.uniqueId}})]),t("el-row",[t("el-form",[t("el-form-item",[t("el-button",{on:{click:a.exportImage}},[a._v("导出图像")])],1),t("el-form-item",{attrs:{label:"显示方式："}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:a.currentDisplayMethod,callback:function(e){a.currentDisplayMethod=e},expression:"currentDisplayMethod"}},a._l(a.displayMethods,(function(a){return t("el-option",{key:a.value,attrs:{label:a.label,value:a.value}})})),1)],1)],1)],1)],1)},n=[],l=(t("1276"),t("ac1f"),t("5cc6"),t("9a8c"),t("a975"),t("735e"),t("c1ac"),t("d139"),t("3a7b"),t("d5d6"),t("82f8"),t("e91f"),t("60bd"),t("5f96"),t("3280"),t("3fcc"),t("ca91"),t("25a1"),t("cd26"),t("3c5d"),t("2954"),t("649e"),t("219c"),t("170b"),t("b39a"),t("72f7"),t("d3b7"),t("159b"),t("b0c0"),t("313e")),s=t("21a6");function i(a){for(var e=a.split(";base64,"),t=e[0].split(":")[1],r=window.atob(e[1]),n=r.length,l=new Uint8Array(n),s=0;s<n;++s)l[s]=r.charCodeAt(s);return new Blob([l],{type:t})}var o={data:function(){return{currentChart:void 0,xName:"",xData:[],yName:"",yData:[],displayMethods:[{label:"折线图",value:"line"},{label:"柱状图",value:"bar"},{label:"散点图",value:"scatter"}],currentDisplayMethod:"line"}},methods:{refreshChart:function(){var a=this;void 0===this.currentChart&&(this.currentChart=l["init"](document.getElementById(this.uniqueId)));var e=[];this.$data.yData.forEach((function(t){e.push({data:t.data,name:t.name,type:a.$data.currentDisplayMethod})}));var t={xAxis:{type:"category",name:this.$data.xName,data:this.$data.xData,axisTick:{alignWithLabel:!0}},yAxis:{type:"value",name:this.$data.yName},series:e,legend:{orient:"horizontal",x:"center",y:"top"}};this.currentChart.setOption(t,!0)},exportImage:function(){if(this.currentChart){var a=this.currentChart.getDataURL(),e=i(a);Object(s["saveAs"])(e,"预测图像.png")}}},watch:{currentDisplayMethod:function(){this.refreshChart()}},computed:{uniqueId:function(){return void 0!==this.uid?this.uid:"globalChart"}},props:["uid"]},u=o,c=t("2877"),d=Object(c["a"])(u,r,n,!1,null,"8628477a",null);e["a"]=d.exports},a3e9:function(a,e,t){"use strict";t.r(e);var r=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[t("el-row",{attrs:{type:"flex",justify:"center"}},[t("el-col",{attrs:{span:11,offset:1}},[t("MutableForm",{attrs:{"wired-method":"地区组合预测模型","tag-type":"MIX","graph-data":a.graphData,"table-one-data":a.tableOneData,"table-two-data":a.tableTwoData},on:{"update:graphData":function(e){a.graphData=e},"update:graph-data":function(e){a.graphData=e},"update:tableOneData":function(e){a.tableOneData=e},"update:table-one-data":function(e){a.tableOneData=e},"update:tableTwoData":function(e){a.tableTwoData=e},"update:table-two-data":function(e){a.tableTwoData=e}}})],1),t("el-col",{attrs:{span:12}},[t("el-row",[t("ResultChart",{ref:"resultChart"})],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:22,offset:1}},[t("ResultTable",{ref:"resultTable"})],1)],1)],1)},n=[],l=(t("159b"),t("99af"),t("d3b7"),t("25f0"),t("b0c0"),t("47ef")),s=t("79dd"),i=t("f70a"),o={name:"PlaceMixPrediction",components:{ResultTable:i["a"],ResultChart:s["a"],MutableForm:l["a"]},data:function(){return{graphData:[],tableOneData:[],tableTwoData:[]}},watch:{graphData:function(a){console.log(a),this.$refs.resultChart.xName="年份",this.$refs.resultChart.yName="预测值（MW）",this.$refs.resultChart.xData=a.xData,this.$refs.resultChart.yData=a.yData,this.$refs.resultChart.refreshChart()},tableOneData:function(a){this.$refs.resultTable.tableOneData=a},tableTwoData:function(a){for(var e=[],t=function(t){var r=0;a.yData[t].data.forEach((function(n){e.push({year:"".concat(a.xData[r].toString(),"（").concat(a.yData[t].name,"）"),predict:n}),r+=1}))},r=0;r<a.yData.length;r+=1)t(r);this.$refs.resultTable.tableTwoData=e}}},u=o,c=t("2877"),d=Object(c["a"])(u,r,n,!1,null,"ae654c9e",null);e["default"]=d.exports},a994:function(a,e,t){},b64b:function(a,e,t){var r=t("23e7"),n=t("7b0b"),l=t("df75"),s=t("d039"),i=s((function(){l(1)}));r({target:"Object",stat:!0,forced:i},{keys:function(a){return l(n(a))}})},d0b3:function(a,e,t){"use strict";t("a994")},e4af:function(a,e,t){},f70a:function(a,e,t){"use strict";var r=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("el-form",[t("el-form-item",{attrs:{label:"评价指标表："}},[t("el-table",{attrs:{data:a.tableOneData}},[t("el-table-column",{attrs:{prop:"mape",label:"MAPE（%）"}}),t("el-table-column",{attrs:{prop:"rmse",label:"RMSE"}})],1)],1),t("el-form-item",[t("el-button",{attrs:{disabled:0===a.tableOneData.length},on:{click:a.exportTableOneSheet}},[a._v("导出评价指标表")])],1),t("el-form-item",{attrs:{label:"年份 − 预测值表："}},[t("el-table",{attrs:{data:a.tableTwoData}},[t("el-table-column",{attrs:{prop:"year",label:"年份"}}),t("el-table-column",{attrs:{prop:"predict",label:"预测值（MVW）"}})],1)],1),t("el-form-item",[t("el-button",{attrs:{disabled:0===a.tableTwoData.length},on:{click:a.exportTableTwoSheet}},[a._v("导出预测结果表")])],1)],1)},n=[],l=t("f59f"),s=t("21a6"),i={name:"ResultTable",data:function(){return{tableOneData:[],tableTwoData:[]}},methods:{exportTableSheet:function(a,e){var t=l["parse"](a,{fields:e}),r=new Blob([t],{type:"text/csv"});Object(s["saveAs"])(r,"database.csv")},exportTableOneSheet:function(){this.exportTableSheet(this.$data.tableOneData,["index","r2","mape","rmse"])},exportTableTwoSheet:function(){this.exportTableSheet(this.$data.tableTwoData,["year","predict"])}}},o=i,u=t("2877"),c=Object(u["a"])(o,r,n,!1,null,"04ec998c",null);e["a"]=c.exports}}]);
//# sourceMappingURL=chunk-7b41a5e4.2f58ecbc.js.map