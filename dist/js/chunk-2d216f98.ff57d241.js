(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d216f98"],{c56f:function(a,t,e){"use strict";e.r(t);var r=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("el-row",{attrs:{type:"flex",justify:"center"}},[e("el-col",{attrs:{span:11,offset:1}},[e("MutableForm",{attrs:{"tag-type":"LONGTERM","graph-data":a.graphData,"table-one-data":a.tableOneData,"table-two-data":a.tableTwoData,"wired-method":"饱和曲线法"},on:{"update:graphData":function(t){a.graphData=t},"update:graph-data":function(t){a.graphData=t},"update:tableOneData":function(t){a.tableOneData=t},"update:table-one-data":function(t){a.tableOneData=t},"update:tableTwoData":function(t){a.tableTwoData=t},"update:table-two-data":function(t){a.tableTwoData=t}}})],1),e("el-col",{attrs:{span:12}},[e("el-row",[e("ResultChart",{ref:"resultChart"})],1)],1)],1),e("el-row",[e("el-col",{attrs:{span:22,offset:1}},[e("ResultTable",{ref:"resultTable"})],1)],1)],1)},l=[],n=e("c3ab"),o=e("f70a"),s=e("7d63"),u={name:"LongTermBaohePredict",components:{MutableForm:s["a"],ResultTable:o["a"],ResultChart:n["a"]},data:function(){return{graphData:[],tableOneData:[],tableTwoData:[]}},watch:{graphData:function(a){this.$refs.resultChart.graphData=a,this.$refs.resultChart.refreshChart()},tableOneData:function(a){this.$refs.resultTable.tableOneData=a},tableTwoData:function(a){this.$refs.resultTable.tableTwoData=a}}},b=u,f=e("2877"),c=Object(f["a"])(b,r,l,!1,null,"34888b54",null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d216f98.ff57d241.js.map