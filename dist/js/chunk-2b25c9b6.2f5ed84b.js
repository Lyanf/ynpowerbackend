(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b25c9b6"],{"21c9":function(e,a,t){"use strict";var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("el-row",{style:e.mainStyle,attrs:{type:"flex",justify:"left"}},[t("el-col",[t("el-date-picker",{attrs:{type:"year",placeholder:"起始年份"},on:{change:e.beginChange},model:{value:e.beginYearInternal,callback:function(a){e.beginYearInternal=a},expression:"beginYearInternal"}})],1),t("el-col",{staticStyle:{margin:"auto","text-align":"center",color:"lightgray","font-size":"12px"}},[e._v(" 至 ")]),t("el-col",[t("el-date-picker",{attrs:{type:"year",placeholder:"终止年份"},on:{change:e.endChange},model:{value:e.endYearInternal,callback:function(a){e.endYearInternal=a},expression:"endYearInternal"}})],1)],1)},n=[],l={name:"YearRangeSelector",props:["beginYear","endYear","expand"],data:function(){return{beginYearInternal:this.beginYear,endYearInternal:this.endYear}},methods:{beginChange:function(e){null===e?this.$emit("update:beginYear",null):this.$emit("update:beginYear",e.getFullYear())},endChange:function(e){null===e?this.$emit("update:endYear",null):this.$emit("update:endYear",e.getFullYear())}},watch:{beginYearInternal:function(e){null!==e?this.$emit("update:beginYear",e.getFullYear()):this.$emit("update:beginYear",null)},endYearInternal:function(e){null!==e?this.$emit("update:endYear",e.getFullYear()):this.$emit("update:endYear",null)},beginYear:function(e){this.beginYearInternal=null!==e?new Date(e,1,1):null},endYear:function(e){this.endYearInternal=null!==e?new Date(e,1,1):null}},computed:{mainStyle:function(){return this.expand?"":"width: 55%"}}},i=l,s=(t("6e83"),t("2877")),o=Object(s["a"])(i,r,n,!1,null,"7bfa7c13",null);a["a"]=o.exports},"47ef":function(e,a,t){"use strict";var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("el-form",{attrs:{"label-position":"right","label-width":"auto"}},[t("el-form-item",{attrs:{label:"预测方法："}},[t("el-select",{attrs:{placeholder:"请选择",disabled:null!==e.wiredMethod},model:{value:e.postParams.method,callback:function(a){e.$set(e.postParams,"method",a)},expression:"postParams.method"}},e._l(e.allMethods,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),t("el-form-item",{attrs:{label:"预测年份："}},[t("year-range-selector",{attrs:{"begin-year":e.postParams.beginYear,"end-year":e.postParams.endYear},on:{"update:beginYear":function(a){return e.$set(e.postParams,"beginYear",a)},"update:begin-year":function(a){return e.$set(e.postParams,"beginYear",a)},"update:endYear":function(a){return e.$set(e.postParams,"endYear",a)},"update:end-year":function(a){return e.$set(e.postParams,"endYear",a)}}})],1),e._l(e.requiredParams,(function(a){return t("div",{key:a.key},[t("el-form-item",{attrs:{label:a.label+"："}},["int"===a.kind?t("el-input",{attrs:{step:1,type:"number",min:a.limits.min_value,max:a.limits.max_value,clearable:"",placeholder:"请输入整数数字"},model:{value:e.postParams[a.key],callback:function(t){e.$set(e.postParams,a.key,t)},expression:"postParams[param.key]"}}):"float"===a.kind?t("el-input",{attrs:{step:.01,type:"number",min:a.limits.min_value,max:a.limits.max_value,clearable:"",placeholder:"请输入数字"},model:{value:e.postParams[a.key],callback:function(t){e.$set(e.postParams,a.key,t)},expression:"postParams[param.key]"}}):a.kind.startsWith("option")?t("el-select",{attrs:{placeholder:"请选择一项"},model:{value:e.postParams[a.key],callback:function(t){e.$set(e.postParams,a.key,t)},expression:"postParams[param.key]"}},e._l(a.value,(function(e){return t("el-option",{key:e,attrs:{label:e,value:e}})})),1):a.kind.startsWith("multioption")?t("el-select",{attrs:{multiple:"",placeholder:"请选择数项","multiple-limit":a.limits.max_choice},model:{value:e.postParams[a.key],callback:function(t){e.$set(e.postParams,a.key,t)},expression:"postParams[param.key]"}},e._l(a.value,(function(e){return t("el-option",{key:e,attrs:{label:e,value:e}})})),1):"file"===a.kind?t("el-upload",{ref:"upload",refInFor:!0,attrs:{action:"/","on-change":e.getUploader(a.key,e.rawFileNames,e.rawFiles),"auto-upload":!1,multiple:!1,"list-type":"text","show-file-list":!1}},[t("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[e._v("选择文件")]),e.rawFileNames[a.key]?t("div",[e._v(" "+e._s(e.rawFileNames[a.key])+" ")]):e._e()],1):"bool"===a.kind?t("el-checkbox",{attrs:{"true-label":1,"false-label":0},model:{value:e.postParams[a.key],callback:function(t){e.$set(e.postParams,a.key,t)},expression:"postParams[param.key]"}}):t("el-input",{attrs:{placeholder:"请输入"},model:{value:e.postParams[a.key],callback:function(t){e.$set(e.postParams,a.key,t)},expression:"postParams[param.key]"}})],1)],1)})),t("el-form-item",{attrs:{label:"方案标签："}},[t("el-input",{attrs:{clearable:"",placeholder:"可留空"},model:{value:e.postParams.tag,callback:function(a){e.$set(e.postParams,"tag",a)},expression:"postParams.tag"}})],1),t("el-form-item",{attrs:{label:"加载方案："}},[t("el-select",{staticStyle:{width:"50%"},attrs:{placeholder:"选择标签",size:"small"},model:{value:e.currentTag,callback:function(a){e.currentTag=a},expression:"currentTag"}},e._l(e.knownTags,(function(e){return t("el-option",{key:e.tag,attrs:{label:e.tag,value:e.tag}})})),1),t("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",disabled:null===e.currentTag},on:{click:e.loadParameters}},[e._v("加载")])],1),t("el-form-item",[t("el-button",{attrs:{type:"primary",disabled:!e.canCommitQuery},on:{click:e.performPrediction}},[e._v("预测")])],1)],2)},n=[],l=(t("b0c0"),t("159b"),t("b64b"),t("21c9")),i={name:"SinglePredictSelectForm",components:{YearRangeSelector:l["a"]},data:function(){return{graphDataInternal:[],tableOneDataInternal:[],tableTwoDataInternal:[],requiredParams:[],rawFiles:{},rawFileNames:{},allMethods:[],postParams:{beginYear:null,endYear:null,method:"",tag:null,tagType:this.tagType},knownTags:[],currentTag:null}},computed:{canCommitQuery:function(){var e=this.$data.postParams;return null!==e.beginYear&&null!==e.endYear}},mounted:function(){this.$data.postParams.method=this.wiredMethod,this.loadTags()},methods:{getUploader:function(e,a,t){var r=this;return function(n){a[e]=n.name,t[e]=n.raw,r._watcher.update()}},loadTags:function(){var e=this;this.$axios.get("/tags/query",{params:{tagType:this.tagType}}).then((function(a){e.$data.knownTags=a.data.data}))},performPrediction:function(){var e=this,a=new FormData;Object.keys(this.$data.postParams).forEach((function(t){a.append(t,e.$data.postParams[t])})),a.append("PreStartYear",this.$data.postParams.beginYear),a.append("PreEndYear",this.$data.postParams.endYear),a.append("StartYear",this.$data.postParams.beginYear),a.append("EndYear",this.$data.postParams.endYear),Object.keys(this.$data.rawFiles).forEach((function(t){a.append(t,e.$data.rawFiles[t])})),this.$axios.post("/predict/region/single",a).then((function(a){e.$data.graphDataInternal=a.data.data.tableTwoData,e.$data.tableOneDataInternal=a.data.data.tableOneData,e.$data.tableTwoDataInternal=a.data.data.tableTwoData}))},loadParameters:function(){var e=this;this.$axios.get("/params/predict/static/region",{params:{tag:this.$data.currentTag}}).then((function(a){e.$data.postParams=a.data.data}))}},watch:{graphDataInternal:function(e){this.$emit("update:graphData",e)},tableOneDataInternal:function(e){this.$emit("update:tableOneData",e)},tableTwoDataInternal:function(e){this.$emit("update:tableTwoData",e)},"postParams.method":function(e){var a=this;this.$data.requiredParams=[],this.$axios.get("/get/args",{params:{method:e}}).then((function(e){e.data.data.para.forEach((function(e){"StartYear"===e.key||"EndYear"===e.key||"PreStartYear"===e.key||"PreEndYear"===e.key||(a.$data.requiredParams.push(e),void 0!==e.default&&a.$set(a.postParams,e.key,e.default))}))}))}},props:["graphData","tableOneData","tableTwoData","wiredMethod","tagType"]},s=i,o=(t("d0b3"),t("2877")),u=Object(o["a"])(s,r,n,!1,null,"91e3ae52",null);a["a"]=u.exports},"6e83":function(e,a,t){"use strict";t("e4af")},"79dd":function(e,a,t){"use strict";var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{directives:[{name:"show",rawName:"v-show",value:0!==e.xData.length,expression:"xData.length !== 0"}],staticStyle:{"margin-left":"20px"}},[t("el-row",[t("div",{staticStyle:{width:"680px",height:"300px"},attrs:{id:e.uniqueId}})]),t("el-row",[t("el-form",[t("el-form-item",[t("el-button",{on:{click:e.exportImage}},[e._v("导出图像")])],1),t("el-form-item",{attrs:{label:"显示方式："}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.currentDisplayMethod,callback:function(a){e.currentDisplayMethod=a},expression:"currentDisplayMethod"}},e._l(e.displayMethods,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1)],1)],1)},n=[],l=(t("1276"),t("ac1f"),t("5cc6"),t("9a8c"),t("a975"),t("735e"),t("c1ac"),t("d139"),t("3a7b"),t("d5d6"),t("82f8"),t("e91f"),t("60bd"),t("5f96"),t("3280"),t("3fcc"),t("ca91"),t("25a1"),t("cd26"),t("3c5d"),t("2954"),t("649e"),t("219c"),t("170b"),t("b39a"),t("72f7"),t("d3b7"),t("159b"),t("b0c0"),t("313e")),i=t("21a6");function s(e){for(var a=e.split(";base64,"),t=a[0].split(":")[1],r=window.atob(a[1]),n=r.length,l=new Uint8Array(n),i=0;i<n;++i)l[i]=r.charCodeAt(i);return new Blob([l],{type:t})}var o={data:function(){return{currentChart:void 0,xName:"",xData:[],yName:"",yData:[],displayMethods:[{label:"折线图",value:"line"},{label:"柱状图",value:"bar"},{label:"散点图",value:"scatter"}],currentDisplayMethod:"line"}},methods:{refreshChart:function(){var e=this;void 0===this.currentChart&&(this.currentChart=l["init"](document.getElementById(this.uniqueId)));var a=[];this.$data.yData.forEach((function(t){a.push({data:t.data,name:t.name,type:e.$data.currentDisplayMethod})}));var t={color:["#3398DB"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},xAxis:{type:"category",name:this.$data.xName,data:this.$data.xData,axisTick:{alignWithLabel:!0}},yAxis:{type:"value",name:this.$data.yName},series:a,legend:{orient:"horizontal",x:"center",y:"top"}};this.currentChart.setOption(t,!0)},exportImage:function(){if(this.currentChart){var e=this.currentChart.getDataURL(),a=s(e);Object(i["saveAs"])(a,"预测图像.png")}}},watch:{currentDisplayMethod:function(){this.refreshChart()}},computed:{uniqueId:function(){return void 0!==this.uid?this.uid:"globalChart"}},props:["uid"]},u=o,c=t("2877"),d=Object(c["a"])(u,r,n,!1,null,"19fb6b08",null);a["a"]=d.exports},"99af":function(e,a,t){"use strict";var r=t("23e7"),n=t("d039"),l=t("e8b5"),i=t("861d"),s=t("7b0b"),o=t("50c4"),u=t("8418"),c=t("65f0"),d=t("1dde"),p=t("b622"),m=t("2d00"),h=p("isConcatSpreadable"),b=9007199254740991,f="Maximum allowed index exceeded",g=m>=51||!n((function(){var e=[];return e[h]=!1,e.concat()[0]!==e})),y=d("concat"),v=function(e){if(!i(e))return!1;var a=e[h];return void 0!==a?!!a:l(e)},k=!g||!y;r({target:"Array",proto:!0,forced:k},{concat:function(e){var a,t,r,n,l,i=s(this),d=c(i,0),p=0;for(a=-1,r=arguments.length;a<r;a++)if(l=-1===a?i:arguments[a],v(l)){if(n=o(l.length),p+n>b)throw TypeError(f);for(t=0;t<n;t++,p++)t in l&&u(d,p,l[t])}else{if(p>=b)throw TypeError(f);u(d,p++,l)}return d.length=p,d}})},a994:function(e,a,t){},b64b:function(e,a,t){var r=t("23e7"),n=t("7b0b"),l=t("df75"),i=t("d039"),s=i((function(){l(1)}));r({target:"Object",stat:!0,forced:s},{keys:function(e){return l(n(e))}})},d0b3:function(e,a,t){"use strict";t("a994")},e4af:function(e,a,t){},f70a:function(e,a,t){"use strict";var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("el-form",[t("el-form-item",{attrs:{label:"评价指标表："}},[t("el-table",{attrs:{data:e.tableOneData}},[t("el-table-column",{attrs:{prop:"mape",label:"MAPE（%）"}}),t("el-table-column",{attrs:{prop:"rmse",label:"RMSE"}})],1)],1),t("el-form-item",[t("el-button",{attrs:{disabled:0===e.tableOneData.length},on:{click:e.exportTableOneSheet}},[e._v("导出评价指标表")])],1),t("el-form-item",{attrs:{label:"年份 − 预测值表："}},[t("el-table",{attrs:{data:e.tableTwoData}},[t("el-table-column",{attrs:{prop:"year",label:"年份"}}),t("el-table-column",{attrs:{prop:"predict",label:"预测值（MW）"}})],1)],1),t("el-form-item",[t("el-button",{attrs:{disabled:0===e.tableTwoData.length},on:{click:e.exportTableTwoSheet}},[e._v("导出预测结果表")])],1)],1)},n=[],l=t("f59f"),i=t("21a6"),s={name:"ResultTable",data:function(){return{tableOneData:[],tableTwoData:[]}},methods:{exportTableSheet:function(e,a){var t=l["parse"](e,{fields:a}),r=new Blob([t],{type:"text/csv"});Object(i["saveAs"])(r,"database.csv")},exportTableOneSheet:function(){this.exportTableSheet(this.$data.tableOneData,["index","r2","mape","rmse"])},exportTableTwoSheet:function(){this.exportTableSheet(this.$data.tableTwoData,["year","predict"])}}},o=s,u=t("2877"),c=Object(u["a"])(o,r,n,!1,null,"3a193e44",null);a["a"]=c.exports}}]);
//# sourceMappingURL=chunk-2b25c9b6.2f5ed84b.js.map