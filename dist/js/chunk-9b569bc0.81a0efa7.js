(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9b569bc0"],{1148:function(a,t,e){"use strict";var r=e("a691"),n=e("1d80");a.exports="".repeat||function(a){var t=String(n(this)),e="",o=r(a);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(t+=t))1&o&&(e+=t);return e}},"3d6c":function(a,t,e){"use strict";e("8d7a")},"408a":function(a,t,e){var r=e("c6b6");a.exports=function(a){if("number"!=typeof a&&"Number"!=r(a))throw TypeError("Incorrect invocation");return+a}},"47ef":function(a,t,e){"use strict";var r=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("el-form",{attrs:{"label-position":"right","label-width":"auto"}},[e("el-form-item",{attrs:{label:"预测方法："}},[e("el-select",{attrs:{placeholder:"请选择",disabled:null!==a.wiredMethod},model:{value:a.postParams.method,callback:function(t){a.$set(a.postParams,"method",t)},expression:"postParams.method"}},a._l(a.allMethods,(function(a){return e("el-option",{key:a.value,attrs:{label:a.label,value:a.value}})})),1)],1),e("el-form-item",{attrs:{label:"预测年份："}},[e("year-range-selector",{attrs:{"begin-year":a.postParams.beginYear,"end-year":a.postParams.endYear},on:{"update:beginYear":function(t){return a.$set(a.postParams,"beginYear",t)},"update:begin-year":function(t){return a.$set(a.postParams,"beginYear",t)},"update:endYear":function(t){return a.$set(a.postParams,"endYear",t)},"update:end-year":function(t){return a.$set(a.postParams,"endYear",t)}}})],1),a._l(a.requiredParams,(function(t){return e("div",{key:t.key},[e("el-form-item",{attrs:{label:t.label+"："}},["int"===t.kind?e("el-input",{attrs:{step:1,type:"number",min:t.limits.min_value,max:t.limits.max_value,clearable:"",placeholder:"请输入整数数字"},model:{value:a.postParams[t.key],callback:function(e){a.$set(a.postParams,t.key,e)},expression:"postParams[param.key]"}}):"float"===t.kind?e("el-input",{attrs:{step:.01,type:"number",min:t.limits.min_value,max:t.limits.max_value,clearable:"",placeholder:"请输入数字"},model:{value:a.postParams[t.key],callback:function(e){a.$set(a.postParams,t.key,e)},expression:"postParams[param.key]"}}):t.kind.startsWith("option")?e("el-select",{attrs:{placeholder:"请选择一项"},model:{value:a.postParams[t.key],callback:function(e){a.$set(a.postParams,t.key,e)},expression:"postParams[param.key]"}},a._l(t.value,(function(a){return e("el-option",{key:a,attrs:{label:a,value:a}})})),1):t.kind.startsWith("multioption")?e("el-select",{attrs:{multiple:"",placeholder:a.generateMultipleChoicePlaceholder(t.limits),"multiple-limit":t.limits.max_choice},model:{value:a.postParams[t.key],callback:function(e){a.$set(a.postParams,t.key,e)},expression:"postParams[param.key]"}},a._l(t.value,(function(a){return e("el-option",{key:a,attrs:{label:a,value:a}})})),1):"file"===t.kind?e("el-upload",{ref:"upload",refInFor:!0,attrs:{action:"/","on-change":a.getUploader(t.key,a.rawFileNames,a.rawFiles),"auto-upload":!1,multiple:!1,"list-type":"text","show-file-list":!1}},[e("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[a._v("选择文件")]),a.rawFileNames[t.key]?e("div",[a._v(" "+a._s(a.rawFileNames[t.key])+" ")]):a._e()],1):"bool"===t.kind?e("el-checkbox",{attrs:{"true-label":1,"false-label":0},model:{value:a.postParams[t.key],callback:function(e){a.$set(a.postParams,t.key,e)},expression:"postParams[param.key]"}}):e("el-input",{attrs:{placeholder:"请输入"},model:{value:a.postParams[t.key],callback:function(e){a.$set(a.postParams,t.key,e)},expression:"postParams[param.key]"}})],1)],1)})),e("el-form-item",{attrs:{label:"方案标签："}},[e("el-input",{attrs:{clearable:"",placeholder:"可留空"},model:{value:a.postParams.tag,callback:function(t){a.$set(a.postParams,"tag",t)},expression:"postParams.tag"}})],1),e("el-form-item",{attrs:{label:"加载方案："}},[e("el-select",{staticStyle:{width:"50%"},attrs:{placeholder:"选择标签",size:"small"},model:{value:a.currentTag,callback:function(t){a.currentTag=t},expression:"currentTag"}},a._l(a.knownTags,(function(a){return e("el-option",{key:a.tag,attrs:{label:a.tag,value:a.tag}})})),1),e("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",disabled:null===a.currentTag},on:{click:a.loadParameters}},[a._v("加载")])],1),e("el-form-item",[e("el-button",{attrs:{type:"primary",disabled:!a.canCommitQuery},on:{click:a.performPrediction}},[a._v("预测")])],1)],2)},n=[],o=(e("b0c0"),e("159b"),e("b64b"),e("99af"),e("caad"),e("2532"),e("21c9")),l={name:"SinglePredictSelectForm",components:{YearRangeSelector:o["a"]},data:function(){return{graphDataInternal:[],tableOneDataInternal:[],tableTwoDataInternal:[],requiredParams:[],rawFiles:{},rawFileNames:{},allMethods:[],onlyThosePostParams:{beginYear:null,endYear:null,method:"",tag:null,tagType:this.tagType},postParams:{beginYear:null,endYear:null,method:"",tag:null,tagType:this.tagType},knownTags:[],currentTag:null}},computed:{canCommitQuery:function(){var a=this.$data.postParams;return null!==a.beginYear&&null!==a.endYear}},mounted:function(){this.$data.postParams.method=this.wiredMethod,this.loadTags()},methods:{getUploader:function(a,t,e){var r=this;return function(n){t[a]=n.name,e[a]=n.raw,r._watcher.update()}},loadTags:function(){var a=this;this.$axios.get("/tags/query",{params:{tagType:this.tagType}}).then((function(t){a.$data.knownTags=t.data.data}))},performPrediction:function(){var a=this,t=new FormData;Object.keys(this.$data.postParams).forEach((function(e){t.append(e,a.$data.postParams[e])})),t.append("PreStartYear",this.$data.postParams.beginYear),t.append("PreEndYear",this.$data.postParams.endYear),t.append("StartYear",this.$data.postParams.beginYear),t.append("EndYear",this.$data.postParams.endYear),Object.keys(this.$data.rawFiles).forEach((function(e){t.append(e,a.$data.rawFiles[e])})),this.$axios.post("/predict/region/single",t).then((function(t){a.$data.graphDataInternal=t.data.data.tableTwoData,a.$data.tableOneDataInternal=t.data.data.tableOneData,a.$data.tableTwoDataInternal=t.data.data.tableTwoData}))},loadParameters:function(){var a=this;this.$axios.get("/params/predict/static/region",{params:{tag:this.$data.currentTag}}).then((function(t){a.$data.postParams=t.data.data}))},generateMultipleChoicePlaceholder:function(a){return a.min_choice&&a.max_choice?a.min_choice===a.max_choice?"请选择 ".concat(a.max_choice," 项"):"请选择 ".concat(a.min_choice," 到 ").concat(a.max_choice," 项"):a.max_choice?"请选择不超过 ".concat(a.max_choice," 项"):a.min_choice?"请选择至少 ".concat(a.min_choice," 项"):"请选择至少 1 项"}},watch:{graphDataInternal:function(a){this.$emit("update:graphData",a)},tableOneDataInternal:function(a){this.$emit("update:tableOneData",a)},tableTwoDataInternal:function(a){this.$emit("update:tableTwoData",a)},"postParams.method":function(a){var t=this,e=Object.keys(this.$data.onlyThosePostParams);Object.keys(this.$data.postParams).forEach((function(a){e.includes(a)||t.$delete(t.postParams,a)})),this.$data.requiredParams=[],this.$axios.get("/get/args",{params:{method:a}}).then((function(a){a.data.data.para.forEach((function(a){"StartYear"===a.key||"EndYear"===a.key||"PreStartYear"===a.key||"PreEndYear"===a.key||(t.$data.requiredParams.push(a),void 0!==a.default&&t.$set(t.postParams,a.key,a.default))}))}))}},props:["graphData","tableOneData","tableTwoData","wiredMethod","tagType"]},i=l,s=(e("3d6c"),e("2877")),c=Object(s["a"])(i,r,n,!1,null,"0cf60430",null);t["a"]=c.exports},"5b3c":function(a,t,e){"use strict";e.r(t);var r=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("el-row",{attrs:{type:"flex",justify:"center"}},[e("el-col",{attrs:{span:11,offset:1}},[e("MutableForm",{attrs:{"tag-type":"LONGTERM","graph-data":a.graphData,"table-one-data":a.tableOneData,"table-two-data":a.tableTwoData,"wired-method":"负荷密度法"},on:{"update:graphData":function(t){a.graphData=t},"update:graph-data":function(t){a.graphData=t},"update:tableOneData":function(t){a.tableOneData=t},"update:table-one-data":function(t){a.tableOneData=t},"update:tableTwoData":function(t){a.tableTwoData=t},"update:table-two-data":function(t){a.tableTwoData=t}}})],1),e("el-col",{attrs:{span:12}},[e("el-row",[e("ResultChart",{ref:"resultChart"})],1)],1)],1),e("el-row",[e("el-col",{attrs:{span:22,offset:1}},[e("ResultTable",{ref:"resultTable"})],1)],1)],1)},n=[],o=e("c3ab"),l=e("f70a"),i=e("47ef"),s={name:"LongTermMiduPredict",components:{ResultTable:l["a"],ResultChart:o["a"],MutableForm:i["a"]},data:function(){return{graphData:[],tableOneData:[],tableTwoData:[]}},watch:{graphData:function(a){this.$refs.resultChart.graphData=a,this.$refs.resultChart.refreshChart()},tableOneData:function(a){this.$refs.resultTable.tableOneData=a},tableTwoData:function(a){this.$refs.resultTable.tableTwoData=a}}},c=s,u=e("2877"),d=Object(u["a"])(c,r,n,!1,null,"7f0885a2",null);t["default"]=d.exports},"8d7a":function(a,t,e){},b680:function(a,t,e){"use strict";var r=e("23e7"),n=e("a691"),o=e("408a"),l=e("1148"),i=e("d039"),s=1..toFixed,c=Math.floor,u=function(a,t,e){return 0===t?e:t%2===1?u(a,t-1,e*a):u(a*a,t/2,e)},d=function(a){var t=0,e=a;while(e>=4096)t+=12,e/=4096;while(e>=2)t+=1,e/=2;return t},p=function(a,t,e){var r=-1,n=e;while(++r<6)n+=t*a[r],a[r]=n%1e7,n=c(n/1e7)},f=function(a,t){var e=6,r=0;while(--e>=0)r+=a[e],a[e]=c(r/t),r=r%t*1e7},h=function(a){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==a[t]){var r=String(a[t]);e=""===e?r:e+l.call("0",7-r.length)+r}return e},m=s&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!i((function(){s.call({})}));r({target:"Number",proto:!0,forced:m},{toFixed:function(a){var t,e,r,i,s=o(this),c=n(a),m=[0,0,0,0,0,0],b="",y="0";if(c<0||c>20)throw RangeError("Incorrect fraction digits");if(s!=s)return"NaN";if(s<=-1e21||s>=1e21)return String(s);if(s<0&&(b="-",s=-s),s>1e-21)if(t=d(s*u(2,69,1))-69,e=t<0?s*u(2,-t,1):s/u(2,t,1),e*=4503599627370496,t=52-t,t>0){p(m,0,e),r=c;while(r>=7)p(m,1e7,0),r-=7;p(m,u(10,r,1),0),r=t-1;while(r>=23)f(m,1<<23),r-=23;f(m,1<<r),p(m,1,1),f(m,2),y=h(m)}else p(m,0,e),p(m,1<<-t,0),y=h(m)+l.call("0",c);return c>0?(i=y.length,y=b+(i<=c?"0."+l.call("0",c-i)+y:y.slice(0,i-c)+"."+y.slice(i-c))):y=b+y,y}})},c3ab:function(a,t,e){"use strict";var r=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{directives:[{name:"show",rawName:"v-show",value:0!==a.graphData.length||void 0!==a.graphData.yData,expression:"graphData.length !== 0 || graphData.yData !== undefined"}],staticStyle:{"margin-left":"20px"}},[e("el-row",[e("div",{staticStyle:{width:"680px",height:"300px"},attrs:{id:a.uniqueId}})]),e("el-row",[e("el-form",[e("el-form-item",[e("el-button",{on:{click:a.exportImage}},[a._v("导出图像")])],1),e("el-form-item",{attrs:{label:"显示方式："}},[e("el-select",{attrs:{placeholder:"请选择"},model:{value:a.currentDisplayMethod,callback:function(t){a.currentDisplayMethod=t},expression:"currentDisplayMethod"}},a._l(a.displayMethods,(function(a){return e("el-option",{key:a.value,attrs:{label:a.label,value:a.value}})})),1)],1)],1)],1)],1)},n=[],o=(e("1276"),e("ac1f"),e("5cc6"),e("9a8c"),e("a975"),e("735e"),e("c1ac"),e("d139"),e("3a7b"),e("d5d6"),e("82f8"),e("e91f"),e("60bd"),e("5f96"),e("3280"),e("3fcc"),e("ca91"),e("25a1"),e("cd26"),e("3c5d"),e("2954"),e("649e"),e("219c"),e("170b"),e("b39a"),e("72f7"),e("d3b7"),e("99af"),e("b680"),e("159b"),e("313e")),l=e("21a6");function i(a){for(var t=a.split(";base64,"),e=t[0].split(":")[1],r=window.atob(t[1]),n=r.length,o=new Uint8Array(n),l=0;l<n;++l)o[l]=r.charCodeAt(l);return new Blob([o],{type:e})}var s={data:function(){return{currentChart:void 0,graphData:[],params1st:{xTag:"xName",yTag:"yValue",xName:"",yName:""},params2nd:{xTag:"",yTag1st:"",yTag2nd:"",xName:"",yName:"",yName1st:"",yName2nd:""},displayMethods:[{label:"折线图",value:"line"},{label:"柱状图",value:"bar"},{label:"散点图",value:"scatter"}],currentDisplayMethod:"line"}},methods:{refreshChartDirty:function(){var a=this.$data.params1st;void 0===this.currentChart&&(this.currentChart=o["init"](document.getElementById(this.uniqueId)));var t=this.graphData.xData,e=this.graphData.yData[0].data,r={tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:function(a){for(var t="",e=0;e<a.length;e+=1)if(""!==a[e].seriesName&&void 0!==a[e].value){var r=a[e].color;t+='<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background:'.concat(r,'"></span>'),t+="".concat(a[e].seriesName," - ").concat(parseFloat(a[e].value).toFixed(2),"</br>")}return t}},xAxis:{type:"category",name:a.xName,data:t,axisTick:{alignWithLabel:!0},boundaryGap:"bar"===this.$data.currentDisplayMethod,onZero:!0,axisLabel:{show:!0,textStyle:{color:"#ffffff",fontSize:14}},axisLine:{lineStyle:{color:"#ffffff"}}},yAxis:{type:"value",name:a.yName,axisLabel:{show:!0,textStyle:{color:"#ffffff",fontSize:14}},axisLine:{lineStyle:{color:"#ffffff"}}},series:[{data:e,name:a.yName,type:this.$data.currentDisplayMethod}],legend:{orient:"horizontal",x:"center",y:"top",textStyle:{color:"#ffffff",fontSize:16}}};this.currentChart.setOption(r,!0)},refreshChart:function(){var a=this.$data.params1st;void 0===this.currentChart&&(this.currentChart=o["init"](document.getElementById(this.uniqueId)));var t=[],e=[];this.graphData.forEach((function(a){a.year?t.push(a.year):a.time&&t.push(a.time),void 0!==a.predict?e.push(a.predict):void 0!==a.payload&&e.push(a.payload)}));var r={tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:function(a){for(var t="",e=0;e<a.length;e+=1)if(""!==a[e].seriesName&&void 0!==a[e].value){var r=a[e].color;t+='<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background:'.concat(r,'"></span>'),t+="".concat(a[e].seriesName," - ").concat(parseFloat(a[e].value).toFixed(2),"</br>")}return t}},xAxis:{type:"category",name:a.xName,data:t,axisTick:{alignWithLabel:!0},axisLabel:{show:!0,textStyle:{color:"#ffffff",fontSize:14}},axisLine:{lineStyle:{color:"#ffffff"}},boundaryGap:"bar"===this.$data.currentDisplayMethod,onZero:!0},yAxis:{type:"value",name:a.yName,axisLabel:{show:!0,textStyle:{color:"#ffffff",fontSize:14}},axisLine:{lineStyle:{color:"#ffffff"}}},series:[{data:e,name:a.yName,type:this.$data.currentDisplayMethod}],legend:{orient:"horizontal",x:"center",y:"top",textStyle:{color:"#ffffff",fontSize:16}}};this.currentChart.setOption(r,!0)},refreshChart2nd:function(){var a=this.$data.params2nd;void 0===this.currentChart&&(this.currentChart=o["init"](document.getElementById(this.uniqueId)));var t=[],e=[],r=[];this.$data.graphData.forEach((function(n){t.push(n[a.xTag]),e.push(n[a.yTag1st]),r.push(n[a.yTag2nd])}));var n={tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:function(a){for(var t="",e=0;e<a.length;e+=1)if(""!==a[e].seriesName&&void 0!==a[e].value){var r=a[e].color;t+='<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background:'.concat(r,'"></span>'),t+="".concat(a[e].seriesName," - ").concat(parseFloat(a[e].value).toFixed(2),"</br>")}return t}},xAxis:{type:"category",name:a.xName,data:t,axisTick:{alignWithLabel:!0},boundaryGap:"bar"===this.$data.currentDisplayMethod,onZero:!0,axisLabel:{show:!0,textStyle:{color:"#ffffff",fontSize:14}},axisLine:{lineStyle:{color:"#ffffff"}}},yAxis:{type:"value",name:a.yName,axisLabel:{show:!0,textStyle:{color:"#ffffff",fontSize:14}},axisLine:{lineStyle:{color:"#ffffff"}}},series:[{data:e,name:a.yName1st,type:this.$data.currentDisplayMethod},{data:r,name:a.yName2nd,type:this.$data.currentDisplayMethod}],legend:{orient:"horizontal",x:"center",y:"top",textStyle:{color:"#ffffff",fontSize:16}}};this.currentChart.setOption(n,!0)},exportImage:function(){if(this.currentChart){var a=this.currentChart.getDataURL(),t=i(a);Object(l["saveAs"])(t,"预测图像.png")}}},watch:{currentDisplayMethod:function(){"2nd"===this.typee?this.refreshChart2nd():"dirty"===this.typee?this.refreshChartDirty():this.refreshChart()}},computed:{uniqueId:function(){return void 0!==this.uid?this.uid:"globalChart"}},props:["typee","uid","title"]},c=s,u=e("2877"),d=Object(u["a"])(c,r,n,!1,null,"b6b52bdc",null);t["a"]=d.exports},f70a:function(a,t,e){"use strict";var r=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("el-form",[void 0===a.nomapermse&&0!==a.tableOneData.length?e("el-form-item",{attrs:{label:"评价指标表："}},[e("el-table",{attrs:{data:a.tableOneData}},[e("el-table-column",{attrs:{prop:"mape",label:"MAPE（%）"},scopedSlots:a._u([{key:"default",fn:function(t){return[a._v(" "+a._s(t.row.mape.toFixed(2))+" ")]}}],null,!1,3612083124)}),e("el-table-column",{attrs:{prop:"rmse",label:"RMSE"},scopedSlots:a._u([{key:"default",fn:function(t){return[a._v(" "+a._s(t.row.rmse.toFixed(2))+" ")]}}],null,!1,616966500)})],1)],1):a._e(),void 0===a.nomapermse&&0!==a.tableOneData.length?e("el-form-item",[e("el-button",{on:{click:a.exportTableOneSheet}},[a._v("导出评价指标表")])],1):a._e(),0!==a.tableTwoData.length?e("el-form-item",{attrs:{label:"年份 − 预测值表："}},[e("el-table",{attrs:{data:a.tableTwoData}},[e("el-table-column",{attrs:{prop:"year",label:"年份"}}),e("el-table-column",{attrs:{prop:"predict",label:"预测值（MW）"},scopedSlots:a._u([{key:"default",fn:function(t){return[a._v(" "+a._s(t.row.predict.toFixed(0))+" ")]}}],null,!1,4170251218)})],1)],1):a._e(),0!==a.tableTwoData.length?e("el-form-item",[e("el-button",{on:{click:a.exportTableTwoSheet}},[a._v("导出预测结果表")])],1):a._e()],1)},n=[],o=e("f59f"),l=e("21a6"),i={name:"ResultTable",props:["nomapermse"],data:function(){return{tableOneData:[],tableTwoData:[]}},methods:{exportTableSheet:function(a,t){var e=o["parse"](a,{fields:t}),r=new Blob([e],{type:"text/csv"});Object(l["saveAs"])(r,"预测结果表.csv")},exportTableOneSheet:function(){this.exportTableSheet(this.$data.tableOneData,["mape","rmse"])},exportTableTwoSheet:function(){this.exportTableSheet(this.$data.tableTwoData,["year","predict"])}}},s=i,c=e("2877"),u=Object(c["a"])(s,r,n,!1,null,"22e16c68",null);t["a"]=u.exports}}]);
//# sourceMappingURL=chunk-9b569bc0.81a0efa7.js.map