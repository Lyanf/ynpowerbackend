(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2084dc"],{a3e9:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("el-row",{attrs:{type:"flex",justify:"center"}},[e("el-col",{attrs:{span:11,offset:1}},[e("MutableForm",{attrs:{"wired-method":"地区组合预测模型","tag-type":"MIX","graph-data":t.graphData,"table-one-data":t.tableOneData,"table-two-data":t.tableTwoData,unit:t.unit},on:{"update:graphData":function(a){t.graphData=a},"update:graph-data":function(a){t.graphData=a},"update:tableOneData":function(a){t.tableOneData=a},"update:table-one-data":function(a){t.tableOneData=a},"update:tableTwoData":function(a){t.tableTwoData=a},"update:table-two-data":function(a){t.tableTwoData=a},"update:unit":function(a){t.unit=a}}})],1),e("el-col",{attrs:{span:12}},[e("el-row",[e("ResultChart",{ref:"resultChart"})],1)],1)],1),e("el-row",[e("el-col",{attrs:{span:22,offset:1}},[e("ResultTable",{ref:"resultTable"})],1)],1)],1)},r=[],l=(e("159b"),e("b0c0"),e("15f5")),u=e("79dd"),s=e("9ec8"),o={name:"PlaceMixPrediction",components:{ResultTable:s["a"],ResultChart:u["a"],MutableForm:l["a"]},data:function(){return{graphData:[],tableOneData:[],tableTwoData:[],unit:""}},watch:{graphData:function(t){console.log(t),this.$refs.resultChart.xName="年份",this.$refs.resultChart.yName="预测值（MW）",this.$refs.resultChart.xData=t.xData,this.$refs.resultChart.yData=t.yData,this.$refs.resultChart.refreshChart()},tableOneData:function(t){this.$refs.resultTable.tableOneData=t},tableTwoData:function(t){for(var a=[],e=function(e){var n=0;t.yData[e].data.forEach((function(r){a.push({year:t.xData[n],tag:t.yData[e].name,predict:r}),n+=1}))},n=0;n<t.yData.length;n+=1)e(n);this.$refs.resultTable.tableTwoData=a},unit:function(t){this.$refs.resultChart.unit=t,this.$refs.resultTable.unit=t}}},i=o,f=e("2877"),c=Object(f["a"])(i,n,r,!1,null,"b39a0a2c",null);a["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d2084dc.c7b56dfd.js.map