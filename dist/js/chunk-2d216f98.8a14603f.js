(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d216f98"],{c56f:function(a,t,e){"use strict";e.r(t);var n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("el-row",{attrs:{type:"flex",justify:"center"}},[e("el-col",{attrs:{span:11,offset:1}},[e("DynamicSelectForm",{attrs:{type:"saturation",placeOrIndustry:"place",longTerm:"","graph-data":a.graphData,"table-one-data":a.tableOneData,"table-two-data":a.tableTwoData,"wired-method":"饱和曲线法"},on:{"update:graphData":function(t){a.graphData=t},"update:graph-data":function(t){a.graphData=t},"update:tableOneData":function(t){a.tableOneData=t},"update:table-one-data":function(t){a.tableOneData=t},"update:tableTwoData":function(t){a.tableTwoData=t},"update:table-two-data":function(t){a.tableTwoData=t}}})],1),e("el-col",{attrs:{span:12}},[e("el-row",[e("ResultChart",{ref:"resultChart"})],1)],1)],1),e("el-row",[e("el-col",{attrs:{span:22,offset:1}},[e("ResultTable",{ref:"resultTable"})],1)],1)],1)},r=[],l=e("c3ab"),o=e("f70a"),s=e("6dee"),u={name:"LongTermBaohePredict",components:{DynamicSelectForm:s["a"],ResultTable:o["a"],ResultChart:l["a"]},data:function(){return{graphData:[],tableOneData:[],tableTwoData:[]}},watch:{graphData:function(a){this.$refs.resultChart.graphData=a,this.$refs.resultChart.refreshChart()},tableOneData:function(a){this.$refs.resultTable.tableOneData=a},tableTwoData:function(a){this.$refs.resultTable.tableTwoData=a}}},c=u,f=e("2877"),p=Object(f["a"])(c,n,r,!1,null,"09dd07c6",null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d216f98.8a14603f.js.map