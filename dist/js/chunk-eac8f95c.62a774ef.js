(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eac8f95c"],{"21c9":function(a,e,t){"use strict";var r=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("el-row",{style:a.mainStyle,attrs:{type:"flex",justify:"left"}},[t("el-col",[t("el-date-picker",{attrs:{type:"year",placeholder:"起始年份"},on:{change:a.beginChange},model:{value:a.beginYearInternal,callback:function(e){a.beginYearInternal=e},expression:"beginYearInternal"}})],1),t("el-col",{staticStyle:{margin:"auto","text-align":"center",color:"lightgray","font-size":"12px"}},[a._v(" 至 ")]),t("el-col",[t("el-date-picker",{attrs:{type:"year",placeholder:"终止年份"},on:{change:a.endChange},model:{value:a.endYearInternal,callback:function(e){a.endYearInternal=e},expression:"endYearInternal"}})],1)],1)},l=[],n={name:"YearRangeSelector",props:["beginYear","endYear","expand"],data:function(){return{beginYearInternal:this.beginYear,endYearInternal:this.endYear}},methods:{beginChange:function(a){null===a?this.$emit("update:beginYear",null):this.$emit("update:beginYear",a.getFullYear())},endChange:function(a){null===a?this.$emit("update:endYear",null):this.$emit("update:endYear",a.getFullYear())}},watch:{beginYearInternal:function(a){null!==a?this.$emit("update:beginYear",a.getFullYear()):this.$emit("update:beginYear",null)},endYearInternal:function(a){null!==a?this.$emit("update:endYear",a.getFullYear()):this.$emit("update:endYear",null)},beginYear:function(a){this.beginYearInternal=null!==a?new Date(a,1,1):null},endYear:function(a){this.endYearInternal=null!==a?new Date(a,1,1):null}},computed:{mainStyle:function(){return this.expand?"":"width: 55%"}}},s=n,i=(t("6e83"),t("2877")),o=Object(i["a"])(s,r,l,!1,null,"7bfa7c13",null);e["a"]=o.exports},"6e83":function(a,e,t){"use strict";t("e4af")},b64b:function(a,e,t){var r=t("23e7"),l=t("7b0b"),n=t("df75"),s=t("d039"),i=s((function(){n(1)}));r({target:"Object",stat:!0,forced:i},{keys:function(a){return n(l(a))}})},c3ab:function(a,e,t){"use strict";var r=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{directives:[{name:"show",rawName:"v-show",value:0!==a.graphData.length||void 0!==a.graphData.yData,expression:"graphData.length !== 0 || graphData.yData !== undefined"}],staticStyle:{"margin-left":"20px"}},[t("el-row",[t("div",{staticStyle:{width:"680px",height:"300px"},attrs:{id:a.uniqueId}})]),t("el-row",[t("el-form",[t("el-form-item",[t("el-button",{on:{click:a.exportImage}},[a._v("导出图像")])],1),t("el-form-item",{attrs:{label:"显示方式："}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:a.currentDisplayMethod,callback:function(e){a.currentDisplayMethod=e},expression:"currentDisplayMethod"}},a._l(a.displayMethods,(function(a){return t("el-option",{key:a.value,attrs:{label:a.label,value:a.value}})})),1)],1)],1)],1)],1)},l=[],n=(t("1276"),t("ac1f"),t("5cc6"),t("9a8c"),t("a975"),t("735e"),t("c1ac"),t("d139"),t("3a7b"),t("d5d6"),t("82f8"),t("e91f"),t("60bd"),t("5f96"),t("3280"),t("3fcc"),t("ca91"),t("25a1"),t("cd26"),t("3c5d"),t("2954"),t("649e"),t("219c"),t("170b"),t("b39a"),t("72f7"),t("d3b7"),t("159b"),t("313e")),s=t("21a6");function i(a){for(var e=a.split(";base64,"),t=e[0].split(":")[1],r=window.atob(e[1]),l=r.length,n=new Uint8Array(l),s=0;s<l;++s)n[s]=r.charCodeAt(s);return new Blob([n],{type:t})}var o={data:function(){return{currentChart:void 0,graphData:[],params1st:{xTag:"xName",yTag:"yValue",xName:"",yName:""},params2nd:{xTag:"",yTag1st:"",yTag2nd:"",xName:"",yName:"",yName1st:"",yName2nd:""},displayMethods:[{label:"折线图",value:"line"},{label:"柱状图",value:"bar"},{label:"散点图",value:"scatter"}],currentDisplayMethod:"line"}},methods:{refreshChartDirty:function(){var a=this.$data.params1st;void 0===this.currentChart&&(this.currentChart=n["init"](document.getElementById(this.uniqueId)));var e=this.graphData.xData,t=this.graphData.yData[0].data,r={color:["#3398DB"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},xAxis:{type:"category",name:a.xName,data:e,axisTick:{alignWithLabel:!0}},yAxis:{type:"value",name:a.yName},series:[{data:t,name:a.yName,type:this.$data.currentDisplayMethod}],legend:{orient:"horizontal",x:"center",y:"top"}};this.currentChart.setOption(r,!0)},refreshChart:function(){var a=this.$data.params1st;void 0===this.currentChart&&(this.currentChart=n["init"](document.getElementById(this.uniqueId)));var e=[],t=[];this.graphData.forEach((function(a){a.year?e.push(a.year):a.time&&e.push(a.time),void 0!==a.predict?t.push(a.predict):void 0!==a.payload&&t.push(a.payload)}));var r={color:["#3398DB"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},xAxis:{type:"category",name:a.xName,data:e,axisTick:{alignWithLabel:!0}},yAxis:{type:"value",name:a.yName},series:[{data:t,name:a.yName,type:this.$data.currentDisplayMethod}],legend:{orient:"horizontal",x:"center",y:"top"}};this.currentChart.setOption(r,!0)},refreshChart2nd:function(){var a=this.$data.params2nd;void 0===this.currentChart&&(this.currentChart=n["init"](document.getElementById(this.uniqueId)));var e=[],t=[],r=[];this.$data.graphData.forEach((function(l){e.push(l[a.xTag]),t.push(l[a.yTag1st]),r.push(l[a.yTag2nd])}));var l={color:["#3398DB"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},xAxis:{type:"category",name:a.xName,data:e,axisTick:{alignWithLabel:!0}},yAxis:{type:"value",name:a.yName},series:[{data:t,name:a.yName1st,type:this.$data.currentDisplayMethod},{data:r,name:a.yName2nd,type:this.$data.currentDisplayMethod}],legend:{orient:"horizontal",x:"center",y:"top"}};this.currentChart.setOption(l,!0)},exportImage:function(){if(this.currentChart){var a=this.currentChart.getDataURL(),e=i(a);Object(s["saveAs"])(e,"预测图像.png")}}},watch:{currentDisplayMethod:function(){"2nd"===this.typee?this.refreshChart2nd():"dirty"===this.typee?this.refreshChartDirty():this.refreshChart()}},computed:{uniqueId:function(){return void 0!==this.uid?this.uid:"globalChart"}},props:["typee","uid","title"]},u=o,m=t("2877"),c=Object(m["a"])(u,r,l,!1,null,"7a3566a5",null);e["a"]=c.exports},e47d:function(a,e,t){"use strict";t.r(e);var r=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("el-tabs",{attrs:{"tab-position":"left"}},[t("el-tab-pane",{attrs:{label:"搜库法"}},[t("el-row",[t("el-col",{attrs:{span:8,offset:1}},[t("el-form",{attrs:{"label-width":"124px"}},[t("el-form-item",{attrs:{label:"历史年份："}},[t("year-range-selector",{attrs:{"begin-year":a.sokuParams.beginYear,"end-year":a.sokuParams.endYear,expand:!0},on:{"update:beginYear":function(e){return a.$set(a.sokuParams,"beginYear",e)},"update:begin-year":function(e){return a.$set(a.sokuParams,"beginYear",e)},"update:endYear":function(e){return a.$set(a.sokuParams,"endYear",e)},"update:end-year":function(e){return a.$set(a.sokuParams,"endYear",e)}}})],1),t("el-form-item",[t("el-button",{attrs:{size:"mini",disabled:null===a.sokuParams.beginYear||null===a.sokuParams.endYear},on:{click:a.loadSokuDefault}},[a._v(" 加载默认参数 ")])],1),t("el-form-item",{attrs:{label:"季节："}},[t("el-select",{model:{value:a.sokuParams.season,callback:function(e){a.$set(a.sokuParams,"season",e)},expression:"sokuParams.season"}},a._l(a.seasons,(function(a){return t("el-option",{key:a.value,attrs:{label:a.label,value:a.value}})})),1)],1),t("el-form-item",{attrs:{label:"类型："}},[t("el-select",{model:{value:a.sokuParams.type,callback:function(e){a.$set(a.sokuParams,"type",e)},expression:"sokuParams.type"}},a._l(a.types,(function(a){return t("el-option",{key:a.value,attrs:{label:a.label,value:a.value}})})),1)],1),t("el-form-item",{attrs:{label:"预测最大负荷："}},[t("el-input",{attrs:{step:1,clearable:"",type:"number",placeholder:"请输入"},model:{value:a.sokuParams.maxPayload,callback:function(e){a.$set(a.sokuParams,"maxPayload",e)},expression:"sokuParams.maxPayload"}})],1),t("el-form-item",{attrs:{label:"预测日电量："}},[t("el-input",{attrs:{step:1,clearable:"",type:"number",placeholder:"请输入"},model:{value:a.sokuParams.dailyAmount,callback:function(e){a.$set(a.sokuParams,"dailyAmount",e)},expression:"sokuParams.dailyAmount"}})],1),t("el-form-item",{attrs:{label:"Gamma 值："}},[t("el-input",{attrs:{step:.001,clearable:"",type:"number",placeholder:"请输入"},model:{value:a.sokuParams.gamma,callback:function(e){a.$set(a.sokuParams,"gamma",e)},expression:"sokuParams.gamma"}})],1),t("el-form-item",{attrs:{label:"Beta 值："}},[t("el-input",{attrs:{step:.001,clearable:"",type:"number",placeholder:"请输入"},model:{value:a.sokuParams.beta,callback:function(e){a.$set(a.sokuParams,"beta",e)},expression:"sokuParams.beta"}})],1),t("el-form-item",{attrs:{label:"方案标签："}},[t("el-input",{attrs:{clearable:"",placeholder:"可留空"},model:{value:a.sokuParams.tag,callback:function(e){a.$set(a.sokuParams,"tag",e)},expression:"sokuParams.tag"}})],1),t("el-form-item",{attrs:{label:"加载方案："}},[t("el-select",{staticStyle:{width:"50%"},attrs:{placeholder:"选择标签",size:"small"},model:{value:a.currentSokuTag,callback:function(e){a.currentSokuTag=e},expression:"currentSokuTag"}},a._l(a.knownSokuTags,(function(a){return t("el-option",{key:a.id,attrs:{label:a.id,value:a.id}})})),1),t("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",disabled:null===a.currentSokuTag},on:{click:a.loadSokuParameters}},[a._v("加载")])],1),t("el-form-item",[t("el-button",{attrs:{disabled:!a.sokuSubmittable},on:{click:a.sokuPredict}},[a._v("计算")])],1)],1)],1),t("el-col",{attrs:{span:14,offset:1}},[t("ResultChart",{ref:"sokuResultChart",attrs:{typee:"dirty",uid:"sokuChart"}})],1)],1),t("el-form",[t("el-form-item",[t("el-button",{attrs:{disabled:0===a.sokuTableData.length},on:{click:function(e){return a.exportTableSheet(a.sokuTableData,"搜库法预测结果.csv")}}},[a._v(" 导出表格 ")])],1),t("el-form-item",[t("el-table",{attrs:{data:a.sokuTableData}},[t("el-table-column",{attrs:{prop:"time",label:"时间"}}),t("el-table-column",{attrs:{prop:"payload",label:"负荷"}})],1)],1)],1)],1),t("el-tab-pane",{attrs:{label:"双向夹逼法"}},[t("el-row",[t("el-col",{attrs:{span:8,offset:1}},[t("el-form",{attrs:{"label-width":"124px"}},[t("el-row",[t("el-form-item",{attrs:{label:"历史年份："}},[t("year-range-selector",{attrs:{"begin-year":a.clampParams.beginYear,"end-year":a.clampParams.endYear,expand:!0},on:{"update:beginYear":function(e){return a.$set(a.clampParams,"beginYear",e)},"update:begin-year":function(e){return a.$set(a.clampParams,"beginYear",e)},"update:endYear":function(e){return a.$set(a.clampParams,"endYear",e)},"update:end-year":function(e){return a.$set(a.clampParams,"endYear",e)}}})],1),t("el-form-item",[t("el-button",{attrs:{size:"mini",disabled:null===a.clampParams.beginYear||null===a.clampParams.endYear},on:{click:a.loadClampDefault}},[a._v(" 加载默认参数 ")])],1),t("el-form-item",{attrs:{label:"季节："}},[t("el-select",{model:{value:a.clampParams.season,callback:function(e){a.$set(a.clampParams,"season",e)},expression:"clampParams.season"}},a._l(a.seasons,(function(a){return t("el-option",{key:a.value,attrs:{label:a.label,value:a.value}})})),1)],1),t("el-form-item",{attrs:{label:"类型："}},[t("el-select",{model:{value:a.clampParams.type,callback:function(e){a.$set(a.clampParams,"type",e)},expression:"clampParams.type"}},a._l(a.types,(function(a){return t("el-option",{key:a.value,attrs:{label:a.label,value:a.value}})})),1)],1),t("el-form-item",{attrs:{label:"预测最大负荷："}},[t("el-input",{attrs:{clearable:"",type:"number",step:1,placeholder:"请输入"},model:{value:a.clampParams.maxPayload,callback:function(e){a.$set(a.clampParams,"maxPayload",e)},expression:"clampParams.maxPayload"}})],1),t("el-form-item",{attrs:{label:"预测日电量："}},[t("el-input",{attrs:{clearable:"",type:"number",step:1,placeholder:"请输入"},model:{value:a.clampParams.dailyAmount,callback:function(e){a.$set(a.clampParams,"dailyAmount",e)},expression:"clampParams.dailyAmount"}})],1),t("el-form-item",{attrs:{label:"方案标签："}},[t("el-input",{attrs:{clearable:"",placeholder:"可留空"},model:{value:a.clampParams.tag,callback:function(e){a.$set(a.clampParams,"tag",e)},expression:"clampParams.tag"}})],1),t("el-form-item",{attrs:{label:"加载方案："}},[t("el-select",{staticStyle:{width:"50%"},attrs:{placeholder:"选择标签",size:"small"},model:{value:a.currentClampTag,callback:function(e){a.currentClampTag=e},expression:"currentClampTag"}},a._l(a.knownClampTags,(function(a){return t("el-option",{key:a.id,attrs:{label:a.id,value:a.id}})})),1),t("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",disabled:null===a.currentClampTag},on:{click:a.loadClampParameters}},[a._v("加载")])],1),t("el-form-item",[t("el-button",{attrs:{disabled:!a.clampSubmittable},on:{click:a.clampPredict}},[a._v("计算")])],1)],1)],1)],1),t("el-col",{attrs:{span:14,offset:1}},[t("ResultChart",{ref:"clampResultChart",attrs:{typee:"dirty",uid:"clampChart"}})],1)],1),t("el-form",[t("el-form-item",[t("el-button",{attrs:{disabled:0===a.clampTableData.length},on:{click:function(e){return a.exportTableSheet(a.clampTableData,"夹逼法预测结果.csv")}}},[a._v(" 导出表格 ")])],1),t("el-form-item",[t("el-table",{attrs:{data:a.clampTableData}},[t("el-table-column",{attrs:{prop:"time",label:"时间"}}),t("el-table-column",{attrs:{prop:"payload",label:"负荷"}})],1)],1)],1)],1),t("el-tab-pane",{attrs:{label:"分形插值法"}},[t("el-row",[t("el-col",{attrs:{span:8,offset:1}},[t("el-form",{attrs:{"label-width":"124px"}},[t("el-row",[t("el-form-item",{attrs:{label:"历史年份："}},[t("year-range-selector",{attrs:{"begin-year":a.interpParams.beginYear,"end-year":a.interpParams.endYear,expand:!0},on:{"update:beginYear":function(e){return a.$set(a.interpParams,"beginYear",e)},"update:begin-year":function(e){return a.$set(a.interpParams,"beginYear",e)},"update:endYear":function(e){return a.$set(a.interpParams,"endYear",e)},"update:end-year":function(e){return a.$set(a.interpParams,"endYear",e)}}})],1),t("el-form-item",[t("el-button",{attrs:{size:"mini",disabled:null===a.interpParams.beginYear||null===a.interpParams.endYear},on:{click:a.loadInterpDefault}},[a._v(" 加载默认参数 ")])],1),t("el-form-item",{attrs:{label:"季节："}},[t("el-select",{model:{value:a.interpParams.season,callback:function(e){a.$set(a.interpParams,"season",e)},expression:"interpParams.season"}},a._l(a.seasons,(function(a){return t("el-option",{key:a.value,attrs:{label:a.label,value:a.value}})})),1)],1),t("el-form-item",{attrs:{label:"类型："}},[t("el-select",{model:{value:a.interpParams.type,callback:function(e){a.$set(a.interpParams,"type",e)},expression:"interpParams.type"}},a._l(a.types,(function(a){return t("el-option",{key:a.value,attrs:{label:a.label,value:a.value}})})),1)],1),t("el-form-item",{attrs:{label:"预测最大负荷："}},[t("el-input",{attrs:{clearable:"",type:"number",step:1,placeholder:"请输入"},model:{value:a.interpParams.maxPayload,callback:function(e){a.$set(a.interpParams,"maxPayload",e)},expression:"interpParams.maxPayload"}})],1),t("el-form-item",{attrs:{label:"预测日电量："}},[t("el-input",{attrs:{clearable:"",type:"number",step:1,placeholder:"请输入"},model:{value:a.interpParams.dailyAmount,callback:function(e){a.$set(a.interpParams,"dailyAmount",e)},expression:"interpParams.dailyAmount"}})],1),t("el-form-item",{attrs:{label:"方案标签："}},[t("el-input",{attrs:{clearable:"",placeholder:"可留空"},model:{value:a.interpParams.tag,callback:function(e){a.$set(a.interpParams,"tag",e)},expression:"interpParams.tag"}})],1),t("el-form-item",{attrs:{label:"加载方案："}},[t("el-select",{staticStyle:{width:"50%"},attrs:{placeholder:"选择标签",size:"small"},model:{value:a.currentInterpTag,callback:function(e){a.currentInterpTag=e},expression:"currentInterpTag"}},a._l(a.knownInterpTags,(function(a){return t("el-option",{key:a.id,attrs:{label:a.id,value:a.id}})})),1),t("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",disabled:null===a.currentInterpTag},on:{click:a.loadInterpParameters}},[a._v("加载")])],1),t("el-form-item",[t("el-button",{attrs:{disabled:!a.interpSubmittable},on:{click:a.interpPredict}},[a._v("计算")])],1)],1)],1)],1),t("el-col",{attrs:{span:14,offset:1}},[t("ResultChart",{ref:"interpResultChart",attrs:{typee:"dirty",uid:"interpChart"}})],1)],1),t("el-form",[t("el-form-item",[t("el-button",{attrs:{disabled:0===a.interpTableData.length},on:{click:function(e){return a.exportTableSheet(a.interpTableData,"分形插值法预测结果.csv")}}},[a._v(" 导出表格 ")])],1),t("el-form-item",[t("el-table",{attrs:{data:a.interpTableData}},[t("el-table-column",{attrs:{prop:"time",label:"时间"}}),t("el-table-column",{attrs:{prop:"payload",label:"负荷"}})],1)],1)],1)],1),t("el-tab-pane",{attrs:{label:"年持续负荷曲线预测"}},[t("el-row",[t("el-col",{attrs:{span:8,offset:1}},[t("el-form",{attrs:{"label-width":"124px"}},[t("el-row",[t("el-form-item",{attrs:{label:"历史年份："}},[t("year-range-selector",{attrs:{"begin-year":a.yearContParams.beginYear,"end-year":a.yearContParams.endYear,expand:!0},on:{"update:beginYear":function(e){return a.$set(a.yearContParams,"beginYear",e)},"update:begin-year":function(e){return a.$set(a.yearContParams,"beginYear",e)},"update:endYear":function(e){return a.$set(a.yearContParams,"endYear",e)},"update:end-year":function(e){return a.$set(a.yearContParams,"endYear",e)}}})],1),t("el-form-item",{attrs:{label:"预测最大负荷："}},[t("el-input",{attrs:{clearable:"",type:"number",step:1,placeholder:"请输入"},model:{value:a.yearContParams.maxPayload,callback:function(e){a.$set(a.yearContParams,"maxPayload",e)},expression:"yearContParams.maxPayload"}})],1),t("el-form-item",{attrs:{label:"方案标签："}},[t("el-input",{attrs:{clearable:"",placeholder:"可留空"},model:{value:a.yearContParams.tag,callback:function(e){a.$set(a.yearContParams,"tag",e)},expression:"yearContParams.tag"}})],1),t("el-form-item",{attrs:{label:"加载方案："}},[t("el-select",{staticStyle:{width:"50%"},attrs:{placeholder:"选择标签",size:"small"},model:{value:a.currentYearContTag,callback:function(e){a.currentYearContTag=e},expression:"currentYearContTag"}},a._l(a.knownYearContTags,(function(a){return t("el-option",{key:a.id,attrs:{label:a.id,value:a.id}})})),1),t("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",disabled:null===a.currentYearContTag},on:{click:a.loadYearContParameters}},[a._v("加载")])],1),t("el-form-item",[t("el-button",{attrs:{disabled:!a.yearContSubmittable},on:{click:a.yearContPredict}},[a._v("计算")])],1)],1)],1)],1),t("el-col",{attrs:{span:14,offset:1}},[t("ResultChart",{ref:"yearContResultChart",attrs:{uid:"yearContChart"}})],1)],1),t("el-form",[t("el-form-item",[t("el-button",{attrs:{disabled:0===a.yearContTableData.length},on:{click:function(e){return a.exportTableSheet(a.yearContTableData,"年持续负荷预测结果.csv")}}},[a._v(" 导出表格 ")])],1),t("el-form-item",[t("el-table",{attrs:{data:a.yearContTableData}},[t("el-table-column",{attrs:{prop:"time",label:"时间"}}),t("el-table-column",{attrs:{prop:"payload",label:"负荷"}})],1)],1)],1)],1)],1)},l=[],n=(t("159b"),t("b64b"),t("c3ab")),s=t("f59f"),i=t("21a6"),o=t("21c9"),u={name:"FuHeTeXingPredict",components:{ResultChart:n["a"],YearRangeSelector:o["a"]},data:function(){return{seasons:[{label:"丰水期",value:"丰水期"},{label:"汛前枯期",value:"汛前枯期"},{label:"汛后枯期",value:"汛后枯期"}],types:[{label:"最大值",value:"最大值"},{label:"最小值",value:"最小值"},{label:"中位值",value:"中位值"}],sokuParams:{beginYear:null,endYear:null,season:null,type:null,maxPayload:null,dailyAmount:null,gamma:null,beta:null,tag:null,tagType:"SOKU"},sokuTableData:[],knownSokuTags:[],currentSokuTag:null,clampParams:{beginYear:null,endYear:null,season:null,type:null,maxPayload:null,dailyAmount:null,tag:null,tagType:"CLAMP"},clampTableData:[],knownClampTags:[],currentClampTag:null,interpParams:{beginYear:null,endYear:null,season:null,type:null,maxPayload:null,dailyAmount:null,tag:null,tagType:"INTERP"},interpTableData:[],knownInterpTags:[],currentInterpTag:null,yearContParams:{beginYear:null,endYear:null,maxPayload:null,tag:null,tagType:"YEARCONT"},yearContTableData:[],knownYearContTags:[],currentYearContTag:null}},mounted:function(){this.loadSokuTags(),this.loadClampTags(),this.loadInterpTags(),this.loadYearContTags()},methods:{loadSokuTags:function(){var a=this;this.$axios.get("/tags/query",{params:{tagType:"SOKU"}}).then((function(e){a.$data.knownSokuTags=e.data.data}))},loadSokuParameters:function(){var a=this;this.$axios.get("/params/predict/soku",{params:{tag:this.$data.currentSokuTag}}).then((function(e){a.$data.sokuParams=e.data.data}))},sokuPredict:function(){var a=this;this.$axios.post("/payload/predict/dbquery",this.$data.sokuParams).then((function(e){a.$data.sokuTableData=a.parseToTable(e.data.data),a.$refs.sokuResultChart.graphData=e.data.data,a.$refs.sokuResultChart.params1st={xTag:"xData",yTag:"yData",xName:"时间",yName:"负载（单位：MW）"},a.$refs.sokuResultChart.refreshChartDirty()}))},loadClampTags:function(){var a=this;this.$axios.get("/tags/query",{params:{tagType:"CLAMP"}}).then((function(e){a.$data.knownClampTags=e.data.data}))},loadClampParameters:function(){var a=this;this.$axios.get("/params/predict/clamping",{params:{tag:this.$data.currentClampTag}}).then((function(e){a.$data.clampParams=e.data.data}))},clampPredict:function(){var a=this;this.$axios.post("/payload/predict/clamping",this.$data.clampParams).then((function(e){a.$data.clampTableData=a.parseToTable(e.data.data),a.$refs.clampResultChart.graphData=e.data.data,a.$refs.clampResultChart.params1st={xTag:"time",yTag:"payload",xName:"时间",yName:"负载（单位：MW）"},a.$refs.clampResultChart.refreshChartDirty()}))},loadInterpTags:function(){var a=this;this.$axios.get("/tags/query",{params:{tagType:"INTERP"}}).then((function(e){a.$data.knownInterpTags=e.data.data}))},loadInterpParameters:function(){var a=this;this.$axios.get("/params/predict/interp",{params:{tag:this.$data.currentInterpTag}}).then((function(e){a.$data.interpParams=e.data.data}))},interpPredict:function(){var a=this;this.$axios.post("/payload/predict/interp",this.$data.interpParams).then((function(e){a.$data.interpTableData=a.parseToTable(e.data.data),a.$refs.interpResultChart.graphData=e.data.data,a.$refs.interpResultChart.params1st={xTag:"time",yTag:"payload",xName:"时间",yName:"负载（单位：MW）"},a.$refs.interpResultChart.refreshChartDirty()}))},loadYearContTags:function(){var a=this;this.$axios.get("/tags/query",{params:{tagType:"YEARCONT"}}).then((function(e){a.$data.knownYearContTags=e.data.data}))},loadYearContParameters:function(){var a=this;this.$axios.get("/params/predict/yearcont",{params:{tag:this.$data.currentYearContTag}}).then((function(e){a.$data.yearContParams=e.data.data}))},yearContPredict:function(){var a=this;this.$axios.post("/payload/predict/yearly",this.$data.yearContParams).then((function(e){for(var t=[],r=0;r<e.data.data.xData.length;r+=1)t.push({time:e.data.data.xData[r],payload:e.data.data.yData[0].data[r]});a.$data.yearContTableData=t,a.$refs.yearContResultChart.graphData=t,a.$refs.yearContResultChart.params1st={xTag:"time",yTag:"payload",xName:"时间",yName:"负载（单位：MW）"},a.$refs.yearContResultChart.refreshChart()}))},parseToTable:function(a){for(var e=[],t=0;t<a.xData.length;t+=1)e.push({time:a.xData[t],payload:a.yData[0].data[t]});return e},loadSokuDefault:function(){var a=this;this.$axios.get("/get/default",{params:{start:this.$data.sokuParams.beginYear,end:this.$data.sokuParams.endYear}}).then((function(e){Object.keys(e.data.data.souku).forEach((function(t){a.$data.sokuParams[t]=e.data.data.souku[t]}))}))},loadClampDefault:function(){var a=this;this.$axios.get("/get/default",{params:{start:this.$data.clampParams.beginYear,end:this.$data.clampParams.endYear}}).then((function(e){Object.keys(e.data.data.jiabi).forEach((function(t){a.$data.clampParams[t]=e.data.data.jiabi[t]}))}))},loadInterpDefault:function(){var a=this;this.$axios.get("/get/default",{params:{start:this.$data.interpParams.beginYear,end:this.$data.interpParams.endYear}}).then((function(e){Object.keys(e.data.data.fenxing).forEach((function(t){a.$data.interpParams[t]=e.data.data.fenxing[t]}))}))},loadYearContDefault:function(){},exportTableSheet:function(a){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"database.csv",t=s["parse"](a,{fields:["time","payload"]}),r=new Blob([t],{type:"text/csv"});Object(i["saveAs"])(r,e)}},computed:{sokuSubmittable:function(){var a=this.$data.sokuParams,e=!0;return[a.beginYear,a.endYear,a.maxPayload,a.dailyAmount,a.gamma,a.beta].forEach((function(a){null===a&&(e=!1)})),e},clampSubmittable:function(){var a=this.$data.clampParams,e=!0;return[a.beginYear,a.endYear,a.season,a.type,a.maxPayload,a.dailyAmount].forEach((function(a){null===a&&(e=!1)})),e},interpSubmittable:function(){var a=this.$data.interpParams,e=!0;return[a.beginYear,a.endYear,a.season,a.type,a.maxPayload,a.dailyAmount].forEach((function(a){null===a&&(e=!1)})),e},yearContSubmittable:function(){var a=this.$data.yearContParams,e=!0;return[a.beginYear,a.endYear,a.maxPayload].forEach((function(a){null===a&&(e=!1)})),e}}},m=u,c=t("2877"),d=Object(c["a"])(m,r,l,!1,null,"a88c952a",null);e["default"]=d.exports},e4af:function(a,e,t){}}]);
//# sourceMappingURL=chunk-eac8f95c.62a774ef.js.map