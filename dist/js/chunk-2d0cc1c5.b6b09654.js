(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cc1c5"],{"4d10":function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("el-row",{attrs:{type:"flex",justify:"center"}},[l("el-col",{attrs:{span:5}},[l("el-form",[l("el-form-item",{attrs:{label:"方案选择："}},[l("el-select",{attrs:{placeholder:"请选择"},model:{value:e.selectedPlan,callback:function(t){e.selectedPlan=t},expression:"selectedPlan"}},e._l(e.miningResults,(function(e){return l("el-option",{key:e.id,attrs:{label:e.id,value:e.id}})})),1)],1),l("el-form-item",[l("el-button",{attrs:{type:"primary",disabled:0===e.selectedPlan.length},on:{click:e.updateTableDisplay}},[e._v("确定")]),l("el-button",{attrs:{disabled:0===e.displayTable.length},on:{click:e.exportTableSheet}},[e._v("表格导出")])],1)],1)],1),l("el-col",{attrs:{offset:2,span:12}},[l("el-table",{attrs:{data:e.displayTable}},[l("el-table-column",{attrs:{prop:"planName",label:"方案"}}),l("el-table-column",{attrs:{prop:"factors",label:"挖掘结果"}})],1)],1)],1)],1)},n=[],s=l("f59f"),i=l("21a6"),o={name:"MiningResult",data:function(){return{selectedPlan:"",miningResults:[],displayTable:[]}},mounted:function(){this.loadMiningResults()},methods:{loadMiningResults:function(){var e=this;this.$axios.get("/mining/results").then((function(t){e.$data.miningResults=t.data.data}))},updateTableDisplay:function(){this.$axios.get("/predict/results/detail",{params:{tag:this.$data.selectedPlan}}).then((function(e){console.log(e)}))},exportTableSheet:function(){var e=s["parse"](this.$data.displayTable,{fields:["planName","factors"]}),t=new Blob([e],{type:"text/csv"});Object(i["saveAs"])(t,"mining_result.csv")}}},c=o,r=l("2877"),d=Object(r["a"])(c,a,n,!1,null,"397bedd1",null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0cc1c5.b6b09654.js.map