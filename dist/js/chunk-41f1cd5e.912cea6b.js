(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41f1cd5e"],{1600:function(a,t,e){"use strict";e.r(t);var l=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("el-tabs",{attrs:{"tab-position":"left","label-width":"100px"}},[e("el-tab-pane",{attrs:{label:"日负荷特性指标计算"}},[e("el-form",[e("el-form-item",[e("el-date-picker",{staticStyle:{width:"300px"},attrs:{type:"daterange","range-separator":"至","start-placeholder":"起始日期","end-placeholder":"终止日期"},model:{value:a.dayParams.dayRange,callback:function(t){a.$set(a.dayParams,"dayRange",t)},expression:"dayParams.dayRange"}}),e("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary",disabled:null===a.dayParams.dayRange},on:{click:a.dayDataRequest}},[a._v("计算")])],1)],1),e("el-row",[e("el-table",{attrs:{title:"日负荷特性指标表",data:a.dayTableData},on:{"current-change":a.clickChange}},[e("el-table-column",{attrs:{label:"选择",width:"55"},scopedSlots:a._u([{key:"default",fn:function(t){return[e("el-radio",{attrs:{label:t.row},model:{value:a.selectedDayEntry,callback:function(t){a.selectedDayEntry=t},expression:"selectedDayEntry"}},[e("i")])]}}])}),e("el-table-column",{attrs:{prop:"day",label:"日期"}}),e("el-table-column",{attrs:{prop:"dayMaxPayload",label:"日最大负荷（MW）"}}),e("el-table-column",{attrs:{prop:"dayAveragePayload",label:"日平均负荷（MW）"}}),e("el-table-column",{attrs:{prop:"dayPayloadRate",label:"日负荷率"}}),e("el-table-column",{attrs:{prop:"dayMinPayloadRate",label:"日最小负荷率"}}),e("el-table-column",{attrs:{prop:"dayPeekValleyDiff",label:"日峰谷差（MW）"}}),e("el-table-column",{attrs:{prop:"dayPeekValleyDiffRate",label:"日峰谷差率"}})],1)],1),e("el-form",[e("el-form-item",[e("el-button",{attrs:{disabled:null===a.selectedDayEntry||0===a.dayTableData.length},on:{click:a.clickDailyChart}},[a._v("日负荷曲线")]),e("el-button",{attrs:{disabled:0===a.dayTableData.length},on:{click:function(t){a.dailyTypicalChartVisible=!0,a.dailyTypicalChart=void 0}}},[a._v("典型日负荷曲线")]),e("el-button",{attrs:{disabled:0===a.dayTableData.length},on:{click:a.exportDayTableData}},[a._v("导出表格")]),e("el-button",{directives:[{name:"print",rawName:"v-print"}]},[a._v("打印")])],1)],1),e("el-dialog",{attrs:{visible:!1,width:"50%"}},[e("ResultChart")],1)],1),e("el-tab-pane",{attrs:{label:"月负荷特性指标计算"}},[e("el-form",[e("el-form-item",[e("el-date-picker",{staticStyle:{width:"300px"},attrs:{type:"monthrange","range-separator":"至","start-placeholder":"起始月份","end-placeholder":"终止月份"},model:{value:a.monthParams.monthRange,callback:function(t){a.$set(a.monthParams,"monthRange",t)},expression:"monthParams.monthRange"}}),e("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary",disabled:null===a.monthParams.monthRange},on:{click:a.monthDataRequest}},[a._v("计算")])],1)],1),e("el-row",[e("el-table",{attrs:{title:"月负荷特性指标表",data:a.monthTableData}},[e("el-table-column",{attrs:{prop:"month",label:"月份"}}),e("el-table-column",{attrs:{prop:"monthAverageDailyPayload",label:"月平均日负荷（MW）"}}),e("el-table-column",{attrs:{prop:"monthMaxPeekValleyDiff",label:"月最大峰谷差（MW）"}}),e("el-table-column",{attrs:{prop:"monthAverageDailyPayloadRate",label:"月平均日负荷率"}}),e("el-table-column",{attrs:{prop:"monthMinPayloadRate",label:"月最小负荷率"}}),e("el-table-column",{attrs:{prop:"monthMaxPeekValleyDiffRate",label:"月平均峰谷差率"}})],1)],1),e("el-form",[e("el-form-item",[e("el-button",{attrs:{disabled:0===a.monthTableData.length},on:{click:function(t){a.monthlyChartVisible=!0,a.monthlyChart=void 0}}},[a._v("月负荷曲线")]),e("el-button",{directives:[{name:"print",rawName:"v-print"}]},[a._v("打印")]),e("el-button",{attrs:{disabled:0===a.monthTableData.length},on:{click:a.exportMonthTableData}},[a._v("导出表格")])],1)],1)],1),e("el-tab-pane",{attrs:{label:"年负荷特性指标计算"}},[e("el-form",[e("el-form-item",[e("el-date-picker",{staticStyle:{width:"122px"},attrs:{type:"year",placeholder:"起始年份"},model:{value:a.yearParams.beginYear,callback:function(t){a.$set(a.yearParams,"beginYear",t)},expression:"yearParams.beginYear"}}),e("el-badge",{staticStyle:{"margin-left":"20px","margin-right":"20px"}},[a._v("至")]),e("el-date-picker",{staticStyle:{width:"124px"},attrs:{type:"year",placeholder:"终止年份"},model:{value:a.yearParams.endYear,callback:function(t){a.$set(a.yearParams,"endYear",t)},expression:"yearParams.endYear"}}),e("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary",disabled:null===a.yearParams.beginYear||null===a.yearParams.endYear},on:{click:a.yearDataRequest}},[a._v("计算")])],1)],1),e("el-row",[e("el-table",{attrs:{title:"年负荷特性指标表",data:a.yearTableData}},[e("el-table-column",{attrs:{prop:"year",label:"年份"}}),e("el-table-column",{attrs:{prop:"yearMaxPayload",label:"年最大负荷（MW）"}}),e("el-table-column",{attrs:{prop:"yearRate",label:"年负载率"}}),e("el-table-column",{attrs:{prop:"yearAveragePayload",label:"年平均负荷（MW）"}}),e("el-table-column",{attrs:{prop:"seasonImbaRate",label:"季不均衡系数"}}),e("el-table-column",{attrs:{prop:"monthImbaRate",label:"月不均衡系数"}}),e("el-table-column",{attrs:{prop:"yearMaxPeekValleyDiff",label:"年最大峰谷差率"}}),e("el-table-column",{attrs:{prop:"yearMinPayload",label:"年最小负荷（MW）"}})],1)],1),e("el-form",[e("el-form-item",[e("el-button",{attrs:{disabled:0===a.yearTableData.length},on:{click:function(t){a.yearlyChartVisible=!0,a.yearlyChart=void 0}}},[a._v("年负荷曲线")]),e("el-button",{directives:[{name:"print",rawName:"v-print"}]},[a._v("打印")]),e("el-button",{attrs:{disabled:0===a.yearTableData.length},on:{click:a.exportYearTableData}},[a._v("导出表格")])],1)],1)],1)],1),e("el-dialog",{attrs:{title:"日负荷曲线",visible:a.dailyChartVisible},on:{"update:visible":function(t){a.dailyChartVisible=t}}},[e("el-form",[e("el-form-item",{directives:[{name:"show",rawName:"v-show",value:void 0!==a.dailyChart,expression:"dailyChart !== undefined"}]},[e("div",{staticStyle:{width:"680px",height:"300px"},attrs:{id:"dailyChart"}})]),e("el-form-item",[e("el-date-picker",{attrs:{type:"date",format:"yyyy 年 MM 月 dd 日","value-format":"yyyy/MM/dd"},model:{value:a.dailyChartParams.day,callback:function(t){a.$set(a.dailyChartParams,"day",t)},expression:"dailyChartParams.day"}})],1),e("el-form-item",[e("el-button",{attrs:{type:"primary",disabled:null===a.dailyChartParams.day},on:{click:a.showDailyChart}},[a._v("显示")]),e("el-button",{attrs:{disabled:void 0===a.dailyChart},on:{click:function(t){return a.exportImage(a.dailyChart,"日负荷曲线.png")}}},[a._v("导出图像")]),e("el-button",{attrs:{disabled:void 0===a.dailyChart},on:{click:function(t){return a.exportImageAsTable(a.dailyChartData,"日负荷曲线.csv")}}},[a._v("导出数据")])],1)],1),e("el-form",{attrs:{inline:""}},a._l(a.dailyChartMetaData,(function(t){return e("el-form-item",{key:t.key,attrs:{label:t.key+"："}},[e("a",[a._v(a._s(t.value))])])})),1)],1),e("el-dialog",{attrs:{title:"典型日负荷曲线",visible:a.dailyTypicalChartVisible},on:{"update:visible":function(t){a.dailyTypicalChartVisible=t}}},[e("el-form",[e("el-form-item",{directives:[{name:"show",rawName:"v-show",value:void 0!==a.dailyTypicalChart,expression:"dailyTypicalChart !== undefined"}]},[e("div",{staticStyle:{width:"680px",height:"300px"},attrs:{id:"dailyTypicalChart"}})]),e("el-form-item",{attrs:{label:"年份："}},[e("el-date-picker",{attrs:{type:"year",format:"yyyy 年","value-format":"yyyy"},model:{value:a.dailyTypicalChartParams.year,callback:function(t){a.$set(a.dailyTypicalChartParams,"year",t)},expression:"dailyTypicalChartParams.year"}})],1),e("el-form-item",{attrs:{label:"时期："}},[e("el-select",{model:{value:a.dailyTypicalChartParams.period,callback:function(t){a.$set(a.dailyTypicalChartParams,"period",t)},expression:"dailyTypicalChartParams.period"}},a._l(a.knownPeriods,(function(a){return e("el-option",{key:a,attrs:{label:a,value:a}})})),1)],1),e("el-form-item",{attrs:{label:"类型："}},[e("el-select",{model:{value:a.dailyTypicalChartParams.category,callback:function(t){a.$set(a.dailyTypicalChartParams,"category",t)},expression:"dailyTypicalChartParams.category"}},a._l(a.knownCategories,(function(a){return e("el-option",{key:a,attrs:{label:a,value:a}})})),1)],1),e("el-form-item",[e("el-button",{attrs:{type:"primary",disabled:null===a.dailyTypicalChartParams.category||null===a.dailyTypicalChartParams.period||null===a.dailyTypicalChartParams.year},on:{click:a.showDailyTypicalChart}},[a._v("显示")]),e("el-button",{attrs:{disabled:void 0===a.dailyTypicalChart},on:{click:function(t){return a.exportImage(a.dailyTypicalChart,"典型日负荷曲线.png")}}},[a._v("导出图像")]),e("el-button",{attrs:{disabled:void 0===a.dailyTypicalChart},on:{click:function(t){return a.exportImageAsTable(a.dailyTypicalChartData,"典型日负荷曲线.csv")}}},[a._v("导出数据")])],1)],1)],1),e("el-dialog",{attrs:{title:"月负荷曲线",visible:a.monthlyChartVisible},on:{"update:visible":function(t){a.monthlyChartVisible=t}}},[e("el-form",[e("el-form-item",{directives:[{name:"show",rawName:"v-show",value:void 0!==a.monthlyChart,expression:"monthlyChart !== undefined"}]},[e("div",{staticStyle:{width:"680px",height:"300px"},attrs:{id:"monthlyChart"}})]),e("el-form-item",{attrs:{label:"年份："}},[e("el-date-picker",{attrs:{type:"year",format:"yyyy 年","value-format":"yyyy"},model:{value:a.monthlyChartParams.year,callback:function(t){a.$set(a.monthlyChartParams,"year",t)},expression:"monthlyChartParams.year"}})],1),e("el-form-item",{attrs:{label:"类型："}},[e("el-select",{model:{value:a.monthlyChartParams.category,callback:function(t){a.$set(a.monthlyChartParams,"category",t)},expression:"monthlyChartParams.category"}},a._l(a.knownMonthCategories,(function(a){return e("el-option",{key:a,attrs:{label:a,value:a}})})),1)],1),e("el-form-item",[e("el-button",{attrs:{type:"primary",disabled:null===a.monthlyChartParams.category||null===a.monthlyChartParams.year},on:{click:a.showMonthlyChart}},[a._v("显示")]),e("el-button",{attrs:{disabled:void 0===a.monthlyChart},on:{click:function(t){return a.exportImage(a.monthlyChart,"月负荷曲线.png")}}},[a._v("导出图像")]),e("el-button",{attrs:{disabled:void 0===a.monthlyChart},on:{click:function(t){return a.exportImageAsTable(a.monthlyChartData,"月负荷曲线.csv")}}},[a._v("导出数据")])],1)],1)],1),e("el-dialog",{attrs:{title:"年负荷曲线",visible:a.yearlyChartVisible},on:{"update:visible":function(t){a.yearlyChartVisible=t}}},[e("el-form",[e("el-form-item",{directives:[{name:"show",rawName:"v-show",value:void 0!==a.yearlyChart,expression:"yearlyChart !== undefined"}]},[e("div",{staticStyle:{width:"680px",height:"300px"},attrs:{id:"yearlyChart"}})]),e("el-form-item",{attrs:{label:"年份："}},[e("year-range-selector",{attrs:{"begin-year":a.yearlyChartParams.beginYear,"end-year":a.yearlyChartParams.endYear},on:{"update:beginYear":function(t){return a.$set(a.yearlyChartParams,"beginYear",t)},"update:begin-year":function(t){return a.$set(a.yearlyChartParams,"beginYear",t)},"update:endYear":function(t){return a.$set(a.yearlyChartParams,"endYear",t)},"update:end-year":function(t){return a.$set(a.yearlyChartParams,"endYear",t)}}})],1),e("el-form-item",{attrs:{label:"类型："}},[e("el-select",{model:{value:a.yearlyChartParams.category,callback:function(t){a.$set(a.yearlyChartParams,"category",t)},expression:"yearlyChartParams.category"}},a._l(a.knownYearCategories,(function(a){return e("el-option",{key:a,attrs:{label:a,value:a}})})),1)],1),e("el-form-item",[e("el-button",{attrs:{type:"primary",disabled:null===a.yearlyChartParams.category||null===a.yearlyChartParams.beginYear||null===a.yearlyChartParams.endYear},on:{click:a.showYearlyChart}},[a._v("显示")]),e("el-button",{attrs:{disabled:void 0===a.yearlyChart},on:{click:function(t){return a.exportImage(a.yearlyChart,"年负荷曲线.png")}}},[a._v("导出图像")]),e("el-button",{attrs:{disabled:void 0===a.yearlyChart},on:{click:function(t){return a.exportImageAsTable(a.yearlyChartData,"年复合曲线.csv")}}},[a._v("导出数据")])],1)],1)],1)],1)},r=[],n=(e("1276"),e("ac1f"),e("5cc6"),e("9a8c"),e("a975"),e("735e"),e("c1ac"),e("d139"),e("3a7b"),e("d5d6"),e("82f8"),e("e91f"),e("60bd"),e("5f96"),e("3280"),e("3fcc"),e("ca91"),e("25a1"),e("cd26"),e("3c5d"),e("2954"),e("649e"),e("219c"),e("170b"),e("b39a"),e("72f7"),e("d3b7"),e("159b"),e("c3ab")),i=e("313e"),o=e("21a6"),s=e("21c9"),y=e("f59f");function d(a){for(var t=a.split(";base64,"),e=t[0].split(":")[1],l=window.atob(t[1]),r=l.length,n=new Uint8Array(r),i=0;i<r;++i)n[i]=l.charCodeAt(i);return new Blob([n],{type:e})}var h={name:"FuHeTeXingCompute",components:{YearRangeSelector:s["a"],ResultChart:n["a"]},data:function(){return{dailyChartData:[],dailyChartVisible:!1,dailyChart:void 0,dailyChartParams:{day:null},dailyChartMetaData:[],dailyTypicalChartData:[],dailyTypicalChartVisible:!1,dailyTypicalChart:void 0,dailyTypicalChartParams:{year:null,period:null,category:null},knownPeriods:["丰水期","汛前枯期","汛后枯期"],knownCategories:["最大负荷","最小负荷","中位负荷"],monthlyChartData:[],monthlyChartVisible:!1,monthlyChart:void 0,monthlyChartParams:{year:null,category:null},knownMonthCategories:["月平均日负荷曲线","月平均日负荷率曲线","月最大峰谷差曲线","月最大峰谷差率曲线"],yearlyChartData:[],yearlyChartVisible:!1,yearlyChart:void 0,yearlyChartParams:{beginYear:null,endYear:null,category:null},knownYearCategories:["历年最大负荷曲线","历年平均负荷曲线","历年最大峰谷差率曲线","历年季不平衡曲线","历年月不平衡曲线"],selectedDayEntry:null,dayParams:{dayRange:null},dayTableData:[],monthParams:{monthRange:null},monthTableData:[],yearParams:{beginYear:null,endYear:null},yearTableData:[]}},methods:{clickChange:function(a){this.selectedDayEntry=a},clickDailyChart:function(){this.$data.dailyChartVisible=!0,this.$data.dailyChartParams.day!==this.$data.selectedDayEntry.day&&(this.$data.dailyChartParams.day=this.$data.selectedDayEntry.day,this.$data.dailyChart=void 0,this.$data.dailyChartMetaData=[])},showDailyChart:function(){var a=this;void 0===this.$data.dailyChart&&(this.$data.dailyChart=i["init"](document.getElementById("dailyChart"))),this.$axios.get("/payload/charts/daily",{params:this.$data.dailyChartParams}).then((function(t){a.refreshChart(t.data.data,a.$data.dailyChart),a.$data.dailyChartData=t.data.data}))},showDailyTypicalChart:function(){var a=this;void 0===this.$data.dailyTypicalChart&&(this.$data.dailyTypicalChart=i["init"](document.getElementById("dailyTypicalChart"))),this.$axios.get("/payload/charts/daily/typical",{params:this.$data.dailyTypicalChartParams}).then((function(t){a.refreshChart(t.data.data,a.$data.dailyTypicalChart),a.$data.dailyTypicalChartData=t.data.data}))},showMonthlyChart:function(){var a=this;void 0===this.$data.monthlyChart&&(this.$data.monthlyChart=i["init"](document.getElementById("monthlyChart"))),this.$axios.get("/payload/charts/monthly",{params:this.$data.monthlyChartParams}).then((function(t){a.refreshChart(t.data.data,a.$data.monthlyChart),a.$data.monthlyChartData=t.data.data}))},showYearlyChart:function(){var a=this;void 0===this.$data.yearlyChart&&(this.$data.yearlyChart=i["init"](document.getElementById("yearlyChart"))),this.$axios.get("/payload/charts/yearly",{params:this.$data.yearlyChartParams}).then((function(t){a.refreshChart(t.data.data,a.$data.yearlyChart),a.$data.yearlyChartData=t.data.data}))},exportDayTableData:function(){this.exportTableSheet(this.$data.dayTableData,["day","dayMaxPayload","dayAveragePayload","dayMinPayloadRate","dayPeekValleyDiff","dayPeekValleyDiffRate"],"日负荷数据.csv")},exportMonthTableData:function(){this.exportTableSheet(this.$data.monthTableData,["month","monthAverageDailyPayload","monthMaxPeekValleyDiff","monthAverageDailyPayloadRate","monthMinPayloadRate","monthMaxPeekValleyDiffRate"],"月负荷数据.csv")},exportYearTableData:function(){this.exportTableSheet(this.$data.yearTableData,["year","yearMaxPayload","yearAveragePayload","seasonImbaRate","yearMaxPeekValleyDiff","yearMaxPeekValleyDiffRate","yearMaxPayloadUsageHours"],"年负荷数据.csv")},exportTableSheet:function(a,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"database.csv",l=y["parse"](a,{fields:t}),r=new Blob([l],{type:"text/csv"});Object(o["saveAs"])(r,e)},dayDataRequest:function(){var a=this,t=this.$data.dayParams,e=t.dayRange[0],l=t.dayRange[1];this.$axios.get("/payload/traits/daily",{params:{beginDay:e.format("yyyy/MM/dd"),endDay:l.format("yyyy/MM/dd")}}).then((function(t){a.dayTableData=t.data.data}))},monthDataRequest:function(){var a=this,t=this.$data.monthParams,e=t.monthRange[0],l=t.monthRange[1];this.$axios.get("/payload/traits/monthly",{params:{beginMonth:e.format("yyyy/MM"),endMonth:l.format("yyyy/MM")}}).then((function(t){a.monthTableData=t.data.data}))},yearDataRequest:function(){var a=this,t=this.$data.yearParams;this.$axios.get("/payload/traits/yearly",{params:{beginYear:t.beginYear.getFullYear(),endYear:t.endYear.getFullYear()}}).then((function(t){a.yearTableData=t.data.data}))},refreshChart:function(a,t){console.log(a),console.log(t);var e=[];a.yData.forEach((function(a){e.push({data:a.data,name:a.tag,type:"line"})}));var l={xAxis:{type:"category",name:a.xName,data:a.xData,axisTick:{alignWithLabel:!0}},yAxis:{type:"value",name:a.yName},series:e,legend:{orient:"horizontal",x:"center",y:"top"}};t.setOption(l,!0)},exportImage:function(a){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"预测图像.png",e=a.getDataURL(),l=d(e);Object(o["saveAs"])(l,t)},exportImageAsTable:function(a){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"数据表.csv";console.log(a);for(var e=[],l=0;l<a.xData.length;l+=1)e.push({time:a.xData[l],payload:a.yData[0].data[l]});var r=y["parse"](e,{fields:["time","payload"]}),n=new Blob([r],{type:"text/csv"});Object(o["saveAs"])(n,t)}}},c=h,m=(e("8475"),e("2877")),u=Object(m["a"])(c,l,r,!1,null,"f00a3b2c",null);t["default"]=u.exports},"21c9":function(a,t,e){"use strict";var l=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("el-row",{style:a.mainStyle,attrs:{type:"flex",justify:"left"}},[e("el-col",[e("el-date-picker",{attrs:{type:"year",placeholder:"起始年份"},on:{change:a.beginChange},model:{value:a.beginYearInternal,callback:function(t){a.beginYearInternal=t},expression:"beginYearInternal"}})],1),e("el-col",{staticStyle:{margin:"auto","text-align":"center",color:"lightgray","font-size":"12px"}},[a._v(" 至 ")]),e("el-col",[e("el-date-picker",{attrs:{type:"year",placeholder:"终止年份"},on:{change:a.endChange},model:{value:a.endYearInternal,callback:function(t){a.endYearInternal=t},expression:"endYearInternal"}})],1)],1)},r=[],n={name:"YearRangeSelector",props:["beginYear","endYear","expand"],data:function(){return{beginYearInternal:this.beginYear,endYearInternal:this.endYear}},methods:{beginChange:function(a){null===a?this.$emit("update:beginYear",null):this.$emit("update:beginYear",a.getFullYear())},endChange:function(a){null===a?this.$emit("update:endYear",null):this.$emit("update:endYear",a.getFullYear())}},watch:{beginYearInternal:function(a){null!==a?this.$emit("update:beginYear",a.getFullYear()):this.$emit("update:beginYear",null)},endYearInternal:function(a){null!==a?this.$emit("update:endYear",a.getFullYear()):this.$emit("update:endYear",null)},beginYear:function(a){this.beginYearInternal=null!==a?new Date(a,1,1):null},endYear:function(a){this.endYearInternal=null!==a?new Date(a,1,1):null}},computed:{mainStyle:function(){return this.expand?"":"width: 55%"}}},i=n,o=(e("6e83"),e("2877")),s=Object(o["a"])(i,l,r,!1,null,"7bfa7c13",null);t["a"]=s.exports},"6e83":function(a,t,e){"use strict";e("e4af")},"7db1":function(a,t,e){},8475:function(a,t,e){"use strict";e("7db1")},c3ab:function(a,t,e){"use strict";var l=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{directives:[{name:"show",rawName:"v-show",value:0!==a.graphData.length||void 0!==a.graphData.yData,expression:"graphData.length !== 0 || graphData.yData !== undefined"}],staticStyle:{"margin-left":"20px"}},[e("el-row",[e("div",{staticStyle:{width:"680px",height:"300px"},attrs:{id:a.uniqueId}})]),e("el-row",[e("el-form",[e("el-form-item",[e("el-button",{on:{click:a.exportImage}},[a._v("导出图像")])],1),e("el-form-item",{attrs:{label:"显示方式："}},[e("el-select",{attrs:{placeholder:"请选择"},model:{value:a.currentDisplayMethod,callback:function(t){a.currentDisplayMethod=t},expression:"currentDisplayMethod"}},a._l(a.displayMethods,(function(a){return e("el-option",{key:a.value,attrs:{label:a.label,value:a.value}})})),1)],1)],1)],1)],1)},r=[],n=(e("1276"),e("ac1f"),e("5cc6"),e("9a8c"),e("a975"),e("735e"),e("c1ac"),e("d139"),e("3a7b"),e("d5d6"),e("82f8"),e("e91f"),e("60bd"),e("5f96"),e("3280"),e("3fcc"),e("ca91"),e("25a1"),e("cd26"),e("3c5d"),e("2954"),e("649e"),e("219c"),e("170b"),e("b39a"),e("72f7"),e("d3b7"),e("159b"),e("313e")),i=e("21a6");function o(a){for(var t=a.split(";base64,"),e=t[0].split(":")[1],l=window.atob(t[1]),r=l.length,n=new Uint8Array(r),i=0;i<r;++i)n[i]=l.charCodeAt(i);return new Blob([n],{type:e})}var s={data:function(){return{currentChart:void 0,graphData:[],params1st:{xTag:"xName",yTag:"yValue",xName:"",yName:""},params2nd:{xTag:"",yTag1st:"",yTag2nd:"",xName:"",yName:"",yName1st:"",yName2nd:""},displayMethods:[{label:"折线图",value:"line"},{label:"柱状图",value:"bar"},{label:"散点图",value:"scatter"}],currentDisplayMethod:"line"}},methods:{refreshChartDirty:function(){var a=this.$data.params1st;void 0===this.currentChart&&(this.currentChart=n["init"](document.getElementById(this.uniqueId)));var t=this.graphData.xData,e=this.graphData.yData[0].data,l={xAxis:{type:"category",name:a.xName,data:t,axisTick:{alignWithLabel:!0}},yAxis:{type:"value",name:a.yName},series:[{data:e,name:a.yName,type:this.$data.currentDisplayMethod}],legend:{orient:"horizontal",x:"center",y:"top"}};this.currentChart.setOption(l,!0)},refreshChart:function(){var a=this.$data.params1st;void 0===this.currentChart&&(this.currentChart=n["init"](document.getElementById(this.uniqueId)));var t=[],e=[];this.graphData.forEach((function(a){a.year?t.push(a.year):a.time&&t.push(a.time),void 0!==a.predict?e.push(a.predict):void 0!==a.payload&&e.push(a.payload)}));var l={xAxis:{type:"category",name:a.xName,data:t,axisTick:{alignWithLabel:!0}},yAxis:{type:"value",name:a.yName},series:[{data:e,name:a.yName,type:this.$data.currentDisplayMethod}],legend:{orient:"horizontal",x:"center",y:"top"}};this.currentChart.setOption(l,!0)},refreshChart2nd:function(){var a=this.$data.params2nd;void 0===this.currentChart&&(this.currentChart=n["init"](document.getElementById(this.uniqueId)));var t=[],e=[],l=[];this.$data.graphData.forEach((function(r){t.push(r[a.xTag]),e.push(r[a.yTag1st]),l.push(r[a.yTag2nd])}));var r={xAxis:{type:"category",name:a.xName,data:t,axisTick:{alignWithLabel:!0}},yAxis:{type:"value",name:a.yName},series:[{data:e,name:a.yName1st,type:this.$data.currentDisplayMethod},{data:l,name:a.yName2nd,type:this.$data.currentDisplayMethod}],legend:{orient:"horizontal",x:"center",y:"top"}};this.currentChart.setOption(r,!0)},exportImage:function(){if(this.currentChart){var a=this.currentChart.getDataURL(),t=o(a);Object(i["saveAs"])(t,"预测图像.png")}}},watch:{currentDisplayMethod:function(){"2nd"===this.typee?this.refreshChart2nd():"dirty"===this.typee?this.refreshChartDirty():this.refreshChart()}},computed:{uniqueId:function(){return void 0!==this.uid?this.uid:"globalChart"}},props:["typee","uid","title"]},y=s,d=e("2877"),h=Object(d["a"])(y,l,r,!1,null,"c6d74b70",null);t["a"]=h.exports},e4af:function(a,t,e){}}]);
//# sourceMappingURL=chunk-41f1cd5e.912cea6b.js.map