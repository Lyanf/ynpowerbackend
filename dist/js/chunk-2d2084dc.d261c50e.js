(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2084dc"],{a3e9:function(a,t,e){"use strict";e.r(t);var l=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("el-row",{attrs:{type:"flex",justify:"center"}},[e("el-col",{attrs:{span:11,offset:1}},[e("MutableForm",{attrs:{"wired-method":"地区组合预测模型","tag-type":"MIX","graph-data":a.graphData,"table-one-data":a.tableOneData,"table-two-data":a.tableTwoData},on:{"update:graphData":function(t){a.graphData=t},"update:graph-data":function(t){a.graphData=t},"update:tableOneData":function(t){a.tableOneData=t},"update:table-one-data":function(t){a.tableOneData=t},"update:tableTwoData":function(t){a.tableTwoData=t},"update:table-two-data":function(t){a.tableTwoData=t}}})],1),e("el-col",{attrs:{span:12}},[e("el-row",[e("ResultChart",{ref:"resultChart"})],1)],1)],1),e("el-row",[e("el-col",{attrs:{span:22,offset:1}},[e("ResultTable",{ref:"resultTable"})],1)],1)],1)},n=[],r=e("7d63"),o=e("c3ab"),s=e("f70a"),u={name:"PlaceMixPrediction",components:{ResultTable:s["a"],ResultChart:o["a"],MutableForm:r["a"]},data:function(){return{graphData:[],tableOneData:[],tableTwoData:[]}},watch:{graphData:function(a){this.$refs.resultChart.graphData=a,this.$refs.resultChart.refreshChart()},tableOneData:function(a){this.$refs.resultTable.tableOneData=a},tableTwoData:function(a){this.$refs.resultTable.tableTwoData=a}}},b=u,c=e("2877"),f=Object(c["a"])(b,l,n,!1,null,"777e5cb4",null);t["default"]=f.exports}}]);
//# sourceMappingURL=chunk-2d2084dc.d261c50e.js.map