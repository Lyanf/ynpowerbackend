(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a2365e7e"],{1148:function(t,e,a){"use strict";var r=a("a691"),n=a("1d80");t.exports="".repeat||function(t){var e=String(n(this)),a="",i=r(t);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(e+=e))1&i&&(a+=e);return a}},3311:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{span:11,offset:1}},[a("PredictSelectForm",{attrs:{placeOrIndustry:"place","graph-data":t.graphData,"table-one-data":t.tableOneData,"table-two-data":t.tableTwoData,unit:t.unit},on:{"update:graphData":function(e){t.graphData=e},"update:graph-data":function(e){t.graphData=e},"update:tableOneData":function(e){t.tableOneData=e},"update:table-one-data":function(e){t.tableOneData=e},"update:tableTwoData":function(e){t.tableTwoData=e},"update:table-two-data":function(e){t.tableTwoData=e},"update:unit":function(e){t.unit=e}}})],1),a("el-col",{attrs:{span:12}},[a("el-row",[a("ResultChart",{ref:"resultChart"})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:22,offset:1}},[a("ResultTable",{ref:"resultTable"})],1)],1)],1)},n=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-form",{attrs:{"label-position":"right","label-width":"auto"}},[t.longTerm?t._e():a("el-form-item",{attrs:{label:"预测方法："}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.postParams.method,callback:function(e){t.$set(t.postParams,"method",e)},expression:"postParams.method"}},t._l(t.allMethods,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),a("el-form-item",{attrs:{label:"历史年份："}},[a("year-range-selector",{attrs:{"begin-year":t.postParams.historyBeginYear,"end-year":t.postParams.historyEndYear},on:{"update:beginYear":function(e){return t.$set(t.postParams,"historyBeginYear",e)},"update:begin-year":function(e){return t.$set(t.postParams,"historyBeginYear",e)},"update:endYear":function(e){return t.$set(t.postParams,"historyEndYear",e)},"update:end-year":function(e){return t.$set(t.postParams,"historyEndYear",e)}}})],1),a("el-form-item",{attrs:{label:"预测年份："}},[a("year-range-selector",{attrs:{"begin-year":t.postParams.beginYear,"end-year":t.postParams.endYear},on:{"update:beginYear":function(e){return t.$set(t.postParams,"beginYear",e)},"update:begin-year":function(e){return t.$set(t.postParams,"beginYear",e)},"update:endYear":function(e){return t.$set(t.postParams,"endYear",e)},"update:end-year":function(e){return t.$set(t.postParams,"endYear",e)}}})],1),t._l(t.requiredParams,(function(e){return a("div",{key:e.key},[a("el-form-item",{attrs:{label:e.label+"："}},["int"===e.kind?a("el-input",{attrs:{step:1,type:"number",min:e.limits.min_value,max:e.limits.max_value,clearable:"",placeholder:"请输入整数数字",disabled:t.judgeDepends(e.limits.depends)},model:{value:t.postParams[e.key],callback:function(a){t.$set(t.postParams,e.key,a)},expression:"postParams[param.key]"}}):"float"===e.kind?a("el-input",{attrs:{step:.01,type:"number",min:e.limits.min_value,max:e.limits.max_value,clearable:"",placeholder:"请输入数字",disabled:t.judgeDepends(e.limits.depends)},model:{value:t.postParams[e.key],callback:function(a){t.$set(t.postParams,e.key,a)},expression:"postParams[param.key]"}}):e.kind.startsWith("option")?a("el-select",{attrs:{placeholder:"请选择一项",disabled:t.judgeDepends(e.limits.depends)},model:{value:t.postParams[e.key],callback:function(a){t.$set(t.postParams,e.key,a)},expression:"postParams[param.key]"}},t._l(e.value,(function(t){return a("el-option",{key:t,attrs:{label:t,value:t}})})),1):e.kind.startsWith("multioption")?a("el-select",{attrs:{multiple:"",placeholder:t.generateMultipleChoicePlaceholder(e.limits),disabled:t.judgeDepends(e.limits.depends),"multiple-limit":e.limits.max_choice},model:{value:t.postParams[e.key],callback:function(a){t.$set(t.postParams,e.key,a)},expression:"postParams[param.key]"}},t._l(e.value,(function(t){return a("el-option",{key:t,attrs:{label:t,value:t}})})),1):"bool"===e.kind?a("el-checkbox",{attrs:{"true-label":1,"false-label":0,disabled:t.judgeDepends(e.limits.depends)},model:{value:t.postParams[e.key],callback:function(a){t.$set(t.postParams,e.key,a)},expression:"postParams[param.key]"}}):a("el-input",{attrs:{placeholder:"请输入",disabled:t.judgeDepends(e.limits.depends)},model:{value:t.postParams[e.key],callback:function(a){t.$set(t.postParams,e.key,a)},expression:"postParams[param.key]"}})],1)],1)})),a("el-form-item",{attrs:{label:"方案标签："}},[a("el-input",{attrs:{clearable:"",placeholder:"可留空"},model:{value:t.postParams.tag,callback:function(e){t.$set(t.postParams,"tag",e)},expression:"postParams.tag"}})],1),a("el-form-item",{attrs:{label:"加载方案："}},[a("el-select",{staticStyle:{width:"60%"},attrs:{placeholder:"选择标签",size:"small"},model:{value:t.currentTag,callback:function(e){t.currentTag=e},expression:"currentTag"}},t._l(t.knownTags,(function(t){return a("el-option",{key:t.tag,attrs:{label:t.tag,value:t.tag}})})),1),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",disabled:null===t.currentTag},on:{click:t.loadParameters}},[t._v("加载")])],1),a("el-form-item",[a("el-button",{attrs:{type:"primary",disabled:!t.canCommitQuery},on:{click:t.performPrediction}},[t._v("预测")])],1)],2)},o=[];a("99af"),a("b64b"),a("159b"),a("caad"),a("2532"),a("d81d");function s(t){return t.map((function(t){return{key:t,label:t,value:t}}))}var l=a("21c9"),u={name:"SinglePredictSelectForm",components:{YearRangeSelector:l["a"]},data:function(){return{predictRegions:[],predictIndustries:[],variadicFactors:[],graphDataInternal:[],tableOneDataInternal:[],tableTwoDataInternal:[],requiredParams:[],parameters:{},onlyThosePostParams:{historyBeginYear:null,historyEndYear:null,beginYear:null,endYear:null,region:"",industry:"",method:"",tag:null,tagType:"STATIC_REGIONAL"},postParams:{historyBeginYear:null,historyEndYear:null,beginYear:null,endYear:null,region:"",industry:"",method:"",tag:null,tagType:"STATIC_REGIONAL"},originalAllMethodsForPlace:[],originalAllMethodsForIndustry:[],knownTags:[],currentTag:null}},computed:{allMethods:function(){return"place"===this.placeOrIndustry?s(this.originalAllMethodsForPlace):"industry"===this.placeOrIndustry?s(this.originalAllMethodsForIndustry):[]},canCommitQuery:function(){var t=this.$data.postParams;return null!==t.beginYear&&null!==t.endYear&&(null!==t.historyBeginYear&&null!==t.historyEndYear)},shouldDisplaySecondFactor:function(){return"二元一次函数"===this.$data.postParams.method}},mounted:function(){"place"===this.placeOrIndustry?(this.loadRegions(),this.loadRegionalMethods()):(this.loadIndustries(),this.loadIndustrialMethods()),this.loadFactors(),this.loadTags()},methods:{loadTags:function(){var t=this;this.$axios.get("/tags/query",{params:{tagType:"STATIC_REGIONAL"}}).then((function(e){t.$data.knownTags=e.data.data}))},loadParameters:function(){var t=this;this.$axios.get("/params/predict/static/region",{params:{tag:this.$data.currentTag}}).then((function(e){t.$data.postParams=e.data.data}))},loadRegions:function(){var t=this;this.$axios.get("/region/query").then((function(e){t.$data.predictRegions=e.data.data}))},loadIndustries:function(){var t=this;this.$axios.get("/industry/query").then((function(e){t.$data.predictIndustries=e.data.data}))},loadFactors:function(){var t=this;this.$axios.get("/factor/query").then((function(e){t.$data.variadicFactors=e.data.data}))},loadIndustrialMethods:function(){var t=this;this.$axios.get("/method/industry/query").then((function(e){t.$data.originalAllMethodsForIndustry=e.data.data}))},loadRegionalMethods:function(){var t=this;this.$axios.get("/method/region/query").then((function(e){t.$data.originalAllMethodsForPlace=e.data.data}))},judgeDepends:function(t){return void 0!==t&&null!==t&&!this.$data.postParams[t]},performPrediction:function(){var t=this,e=Object.assign(this.$data.postParams,this.$data.parameters);e.StartYear=e.historyBeginYear,e.EndYear=e.historyEndYear,e.PreStartYear=e.beginYear,e.PreEndYear=e.endYear,this.$axios.post("/predict/region/single",e).then((function(e){t.$data.graphDataInternal=e.data.data.tableTwoData,t.$data.tableOneDataInternal=e.data.data.tableOneData,t.$data.tableTwoDataInternal=e.data.data.tableTwoData,e.data.data.unit&&t.$emit("update:unit",e.data.data.unit)}))},generateMultipleChoicePlaceholder:function(t){return t.min_choice&&t.max_choice?t.min_choice===t.max_choice?"请选择 ".concat(t.max_choice," 项"):"请选择 ".concat(t.min_choice," 到 ").concat(t.max_choice," 项"):t.max_choice?"请选择不超过 ".concat(t.max_choice," 项"):t.min_choice?"请选择至少 ".concat(t.min_choice," 项"):"请选择至少 1 项"}},watch:{graphDataInternal:function(t){this.$emit("update:graphData",t)},tableOneDataInternal:function(t){this.$emit("update:tableOneData",t)},tableTwoDataInternal:function(t){this.$emit("update:tableTwoData",t)},postParams:{handler:function(){this._watcher.update()},deep:!0},"postParams.method":function(t){var e=this,a=Object.keys(this.$data.onlyThosePostParams);Object.keys(this.$data.postParams).forEach((function(t){a.includes(t)||e.$delete(e.postParams,t)})),this.$data.requiredParams=[],this.$axios.get("/get/args",{params:{method:t}}).then((function(t){t.data.data.para.forEach((function(t){"StartYear"===t.key||"EndYear"===t.key||"PreStartYear"===t.key||"PreEndYear"===t.key||(e.$data.requiredParams.push(t),void 0!==t.default&&e.$set(e.postParams,t.key,t.default))}))}))}},props:["placeOrIndustry","longTerm","graphData","tableOneData","tableTwoData","unit"]},d=u,c=(a("d620"),a("2877")),p=Object(c["a"])(d,i,o,!1,null,"062b0c62",null),h=p.exports,f=a("c3ab"),m=a("f70a"),b={name:"PlaceSinglePrediction",components:{ResultTable:m["a"],ResultChart:f["a"],PredictSelectForm:h},data:function(){return{graphData:[],tableOneData:[],tableTwoData:[],unit:""}},watch:{graphData:function(t){this.$refs.resultChart.unit=this.unit,this.$refs.resultChart.graphData=t,this.$refs.resultChart.refreshChart()},tableOneData:function(t){this.$refs.resultTable.tableOneData=t},tableTwoData:function(t){this.$refs.resultTable.tableTwoData=t},unit:function(t){this.$refs.resultChart.unit=t,this.$refs.resultTable.unit=t}}},y=b,g=Object(c["a"])(y,r,n,!1,null,"837488ba",null);e["default"]=g.exports},"408a":function(t,e,a){var r=a("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=r(t))throw TypeError("Incorrect invocation");return+t}},"6e08":function(t,e,a){},b680:function(t,e,a){"use strict";var r=a("23e7"),n=a("a691"),i=a("408a"),o=a("1148"),s=a("d039"),l=1..toFixed,u=Math.floor,d=function(t,e,a){return 0===e?a:e%2===1?d(t,e-1,a*t):d(t*t,e/2,a)},c=function(t){var e=0,a=t;while(a>=4096)e+=12,a/=4096;while(a>=2)e+=1,a/=2;return e},p=function(t,e,a){var r=-1,n=a;while(++r<6)n+=e*t[r],t[r]=n%1e7,n=u(n/1e7)},h=function(t,e){var a=6,r=0;while(--a>=0)r+=t[a],t[a]=u(r/e),r=r%e*1e7},f=function(t){var e=6,a="";while(--e>=0)if(""!==a||0===e||0!==t[e]){var r=String(t[e]);a=""===a?r:a+o.call("0",7-r.length)+r}return a},m=l&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!s((function(){l.call({})}));r({target:"Number",proto:!0,forced:m},{toFixed:function(t){var e,a,r,s,l=i(this),u=n(t),m=[0,0,0,0,0,0],b="",y="0";if(u<0||u>20)throw RangeError("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return String(l);if(l<0&&(b="-",l=-l),l>1e-21)if(e=c(l*d(2,69,1))-69,a=e<0?l*d(2,-e,1):l/d(2,e,1),a*=4503599627370496,e=52-e,e>0){p(m,0,a),r=u;while(r>=7)p(m,1e7,0),r-=7;p(m,d(10,r,1),0),r=e-1;while(r>=23)h(m,1<<23),r-=23;h(m,1<<r),p(m,1,1),h(m,2),y=f(m)}else p(m,0,a),p(m,1<<-e,0),y=f(m)+o.call("0",u);return u>0?(s=y.length,y=b+(s<=u?"0."+o.call("0",u-s)+y:y.slice(0,s-u)+"."+y.slice(s-u))):y=b+y,y}})},c3ab:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:0!==t.graphData.length||void 0!==t.graphData.yData,expression:"graphData.length !== 0 || graphData.yData !== undefined"}],staticStyle:{"margin-left":"20px"}},[t.unit?a("div",[t._v("单位："+t._s(t.unit))]):t._e(),a("el-row",[a("div",{staticStyle:{width:"680px",height:"300px"},attrs:{id:t.uniqueId}})]),a("el-row",[a("el-form",[a("el-form-item",[a("el-button",{on:{click:t.exportImage}},[t._v("导出图像")])],1),a("el-form-item",{attrs:{label:"显示方式："}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.currentDisplayMethod,callback:function(e){t.currentDisplayMethod=e},expression:"currentDisplayMethod"}},t._l(t.displayMethods,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1)],1)],1)},n=[],i=(a("1276"),a("ac1f"),a("5cc6"),a("9a8c"),a("a975"),a("735e"),a("c1ac"),a("d139"),a("3a7b"),a("d5d6"),a("82f8"),a("e91f"),a("60bd"),a("5f96"),a("3280"),a("3fcc"),a("ca91"),a("25a1"),a("cd26"),a("3c5d"),a("2954"),a("649e"),a("219c"),a("170b"),a("b39a"),a("72f7"),a("d3b7"),a("99af"),a("b680"),a("159b"),a("313e")),o=a("21a6");function s(t){for(var e=t.split(";base64,"),a=e[0].split(":")[1],r=window.atob(e[1]),n=r.length,i=new Uint8Array(n),o=0;o<n;++o)i[o]=r.charCodeAt(o);return new Blob([i],{type:a})}var l={data:function(){return{currentChart:void 0,unit:"",graphData:[],params1st:{xTag:"xName",yTag:"yValue",xName:"",yName:""},params2nd:{xTag:"",yTag1st:"",yTag2nd:"",xName:"",yName:"",yName1st:"",yName2nd:""},displayMethods:[{label:"折线图",value:"line"},{label:"柱状图",value:"bar"},{label:"散点图",value:"scatter"}],currentDisplayMethod:"line"}},methods:{refreshChartDirty:function(){var t=this.$data.params1st;void 0===this.currentChart&&(this.currentChart=i["init"](document.getElementById(this.uniqueId)));var e=this.graphData.xData,a=this.graphData.yData[0].data,r={tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:function(t){for(var e="",a=0;a<t.length;a+=1)if(""!==t[a].seriesName&&void 0!==t[a].value){var r=t[a].color;e+='<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background:'.concat(r,'"></span>'),e+="".concat(t[a].seriesName," - ").concat(parseFloat(t[a].value).toFixed(2),"</br>")}return e}},xAxis:{type:"category",name:t.xName,data:e,axisTick:{alignWithLabel:!0},boundaryGap:"bar"===this.$data.currentDisplayMethod,onZero:!0,axisLabel:{show:!0,textStyle:{color:"#ffffff",fontSize:14}},axisLine:{lineStyle:{color:"#ffffff"}}},yAxis:{type:"value",name:this.$data.unit?"预测值（".concat(this.$data.unit,"）"):t.yName,axisLabel:{show:!0,textStyle:{color:"#ffffff",fontSize:14}},axisLine:{lineStyle:{color:"#ffffff"}}},series:[{data:a,name:t.yName,type:this.$data.currentDisplayMethod}],legend:{orient:"horizontal",x:"center",y:"top",textStyle:{color:"#ffffff",fontSize:16}}};this.currentChart.setOption(r,!0)},refreshChart:function(){var t=this.$data.params1st;void 0===this.currentChart&&(this.currentChart=i["init"](document.getElementById(this.uniqueId)));var e=[],a=[];this.graphData.forEach((function(t){t.year?e.push(t.year):t.time&&e.push(t.time),void 0!==t.predict?a.push(t.predict):void 0!==t.payload&&a.push(t.payload)}));var r={tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:function(t){for(var e="",a=0;a<t.length;a+=1)if(""!==t[a].seriesName&&void 0!==t[a].value){var r=t[a].color;e+='<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background:'.concat(r,'"></span>'),e+="".concat(t[a].seriesName," - ").concat(parseFloat(t[a].value).toFixed(2),"</br>")}return e}},xAxis:{type:"category",name:t.xName,data:e,axisTick:{alignWithLabel:!0},axisLabel:{show:!0,textStyle:{color:"#ffffff",fontSize:14}},axisLine:{lineStyle:{color:"#ffffff"}},boundaryGap:"bar"===this.$data.currentDisplayMethod,onZero:!0},yAxis:{type:"value",name:t.yName,axisLabel:{show:!0,textStyle:{color:"#ffffff",fontSize:14}},axisLine:{lineStyle:{color:"#ffffff"}}},series:[{data:a,name:t.yName,type:this.$data.currentDisplayMethod}],legend:{orient:"horizontal",x:"center",y:"top",textStyle:{color:"#ffffff",fontSize:16}}};this.currentChart.setOption(r,!0)},refreshChart2nd:function(){var t=this.$data.params2nd;void 0===this.currentChart&&(this.currentChart=i["init"](document.getElementById(this.uniqueId)));var e=[],a=[],r=[];this.$data.graphData.forEach((function(n){e.push(n[t.xTag]),a.push(n[t.yTag1st]),r.push(n[t.yTag2nd])}));var n={tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:function(t){for(var e="",a=0;a<t.length;a+=1)if(""!==t[a].seriesName&&void 0!==t[a].value){var r=t[a].color;e+='<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background:'.concat(r,'"></span>'),e+="".concat(t[a].seriesName," - ").concat(parseFloat(t[a].value).toFixed(2),"</br>")}return e}},xAxis:{type:"category",name:t.xName,data:e,axisTick:{alignWithLabel:!0},boundaryGap:"bar"===this.$data.currentDisplayMethod,onZero:!0,axisLabel:{show:!0,textStyle:{color:"#ffffff",fontSize:14}},axisLine:{lineStyle:{color:"#ffffff"}}},yAxis:{type:"value",name:t.yName,axisLabel:{show:!0,textStyle:{color:"#ffffff",fontSize:14}},axisLine:{lineStyle:{color:"#ffffff"}}},series:[{data:a,name:t.yName1st,type:this.$data.currentDisplayMethod},{data:r,name:t.yName2nd,type:this.$data.currentDisplayMethod}],legend:{orient:"horizontal",x:"center",y:"top",textStyle:{color:"#ffffff",fontSize:16}}};this.currentChart.setOption(n,!0)},exportImage:function(){if(this.currentChart){var t=this.currentChart.getDataURL(),e=s(t);Object(o["saveAs"])(e,"预测图像.png")}}},watch:{currentDisplayMethod:function(){"2nd"===this.typee?this.refreshChart2nd():"dirty"===this.typee?this.refreshChartDirty():this.refreshChart()}},computed:{uniqueId:function(){return void 0!==this.uid?this.uid:"globalChart"}},props:["typee","uid","title"]},u=l,d=a("2877"),c=Object(d["a"])(u,r,n,!1,null,"66cdf462",null);e["a"]=c.exports},d620:function(t,e,a){"use strict";a("6e08")},d81d:function(t,e,a){"use strict";var r=a("23e7"),n=a("b727").map,i=a("1dde"),o=i("map");r({target:"Array",proto:!0,forced:!o},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},f70a:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-form",[void 0===t.nomapermse&&0!==t.tableOneData.length?a("el-form-item",{attrs:{label:"评价指标表："}},[a("el-table",{attrs:{data:t.tableOneData}},[a("el-table-column",{attrs:{prop:"mape",label:"MAPE（%）"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.mape.toFixed(2))+" ")]}}],null,!1,3612083124)}),a("el-table-column",{attrs:{prop:"rmse",label:"RMSE"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.rmse.toFixed(2))+" ")]}}],null,!1,616966500)})],1)],1):t._e(),void 0===t.nomapermse&&0!==t.tableOneData.length?a("el-form-item",[a("el-button",{on:{click:t.exportTableOneSheet}},[t._v("导出评价指标表")])],1):t._e(),0!==t.tableTwoData.length?a("el-form-item",{attrs:{label:"年份 − 预测值表："}},[a("el-table",{attrs:{data:t.tableTwoData}},[a("el-table-column",{attrs:{prop:"year",label:"年份"}}),a("el-table-column",{attrs:{prop:"predict",label:t.unit?"预测值（"+t.unit+"）":"预测值"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.predict.toFixed(0))+" ")]}}],null,!1,4170251218)})],1)],1):t._e(),0!==t.tableTwoData.length?a("el-form-item",[a("el-button",{on:{click:t.exportTableTwoSheet}},[t._v("导出预测结果表")])],1):t._e()],1)},n=[],i=a("f59f"),o=a("21a6"),s={name:"ResultTable",props:["nomapermse"],data:function(){return{tableOneData:[],tableTwoData:[],unit:""}},methods:{exportTableSheet:function(t,e){var a=i["parse"](t,{fields:e}),r=new Blob([a],{type:"text/csv"});Object(o["saveAs"])(r,"预测结果表.csv")},exportTableOneSheet:function(){this.exportTableSheet(this.$data.tableOneData,["mape","rmse"])},exportTableTwoSheet:function(){this.exportTableSheet(this.$data.tableTwoData,["year","predict"])}}},l=s,u=a("2877"),d=Object(u["a"])(l,r,n,!1,null,"7cd33958",null);e["a"]=d.exports}}]);
//# sourceMappingURL=chunk-a2365e7e.571d2da9.js.map