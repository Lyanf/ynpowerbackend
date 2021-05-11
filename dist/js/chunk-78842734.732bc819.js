(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-78842734"],{2371:function(a,t,e){},4166:function(a,t,e){"use strict";var n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("el-button",{on:{click:a.addRow}},[a._v("新增")]),e("el-button",{attrs:{disabled:0===a.dataEntryLength},on:{click:a.exportTableSheet}},[a._v("表格导出")]),e("d2-crud",{ref:"d2Crud",attrs:{columns:a.columns,data:a.displayData,"add-template":a.addTemplate,rowHandle:a.rowHandle,"edit-template":a.editTemplate},on:{"row-add":a.handleRowAdd,"dialog-cancel":a.handleDialogCancel,"row-edit":a.handleRowEdit,"row-remove":a.handleRowRemove}}),e("div",{staticStyle:{color:"darkgray","font-size":"12px"}},[a._v(" 共 "+a._s(a.dataEntryLength)+" 条 ")])],1)},o=[],r=(e("159b"),e("f59f")),s=e("21a6"),i={name:"DataCRUDTable",props:["displayData","category","context"],computed:{dataEntryLength:function(){return void 0===this.displayData?0:this.displayData.length}},data:function(){return{columns:[{title:"键",key:"key"},{title:"值",key:"value"}],addTemplate:{key:{title:"键"},value:{title:"值"}},editTemplate:{key:{title:"键"},value:{title:"值"}},rowHandle:{edit:{text:"编辑",size:"small"},remove:{size:"small",fixed:"right",confirm:!0}}}},methods:{addRow:function(){this.$refs.d2Crud.showDialog({mode:"add"})},exportTableSheet:function(){var a=[];this.$data.columns.forEach((function(t){a.push(t.key)})),console.log(a);var t=r["parse"](this.displayData,{fields:a}),e=new Blob([t],{type:"text/csv"});Object(s["saveAs"])(e,"数据库表格.csv")},handleRowAdd:function(a,t){var e=this;this.$axios.post("/db/create",{context:this.context,newData:{key:a.key,value:a.value}}).then((function(n){console.log(n),e.$messenger.success("添加成功。"),e.displayData.push(a),t()}))},handleDialogCancel:function(a){a()},handleRowEdit:function(a,t){var e=this,n=a.index,o=a.row;this.$axios.post("/db/update",{category:this.category,originData:this.displayData[n],modifiedData:o}).then((function(a){console.log(a),e.$messenger.success("编辑成功。"),e.displayData[n]=o,t()}))},handleRowRemove:function(a,t){var e=this,n=a.index;a.row;this.$axios.post("/db/delete",{category:this.category,originData:this.displayData[n]}).then((function(a){console.log(a),e.$messenger.success("删除成功。"),e.displayData.remove(n),t()}))}}},l=i,d=e("2877"),c=Object(d["a"])(l,n,o,!1,null,"8364fa6e",null);t["a"]=c.exports},5257:function(a,t,e){"use strict";e.r(t);var n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("el-card",[e("span",{attrs:{slot:"header"},slot:"header"},[e("span",[a._v("地理气象数据")])]),e("el-row",{attrs:{justify:"space-around"}},[e("MetaDataTree",{attrs:{category:"GeoWeather","data-result":a.tableData},on:{"update:dataResult":function(t){a.tableData=t},"update:data-result":function(t){a.tableData=t}}})],1),e("el-row",[e("DataCRUDTable",{attrs:{category:"GeoWeather","display-data":a.tableData},on:{"update:displayData":function(t){a.tableData=t},"update:display-data":function(t){a.tableData=t}}})],1)],1)],1)},o=[],r=e("8e4a"),s=e("4166"),i={name:"GeoWeatherData",components:{DataCRUDTable:s["a"],MetaDataTree:r["a"]},data:function(){return{tableData:[]}}},l=i,d=e("2877"),c=Object(d["a"])(l,n,o,!1,null,null,null);t["default"]=c.exports},"8e4a":function(a,t,e){"use strict";var n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("el-form",{attrs:{type:"flex",justify:"right"}},[e("el-form-item",{attrs:{label:"数据节点："}},[e("el-cascader",{ref:"cascader",staticStyle:{width:"55%"},attrs:{id:"cascader",options:a.metaDataTree,"change-on-select":""},model:{value:a.postParams.category,callback:function(t){a.$set(a.postParams,"category",t)},expression:"postParams.category"}})],1),e("el-form-item",{attrs:{label:"地区选择："}},[e("el-select",{attrs:{placeholder:"请选择"},model:{value:a.postParams.region,callback:function(t){a.$set(a.postParams,"region",t)},expression:"postParams.region"}},a._l(a.knownRegions,(function(a){return e("el-option",{key:a,attrs:{label:a,value:a}})})),1)],1),e("el-form-item",{attrs:{label:"粒度选择："}},[e("el-select",{attrs:{placeholder:"请选择"},model:{value:a.postParams.grain,callback:function(t){a.$set(a.postParams,"grain",t)},expression:"postParams.grain"}},a._l(a.knownGrains,(function(a){return e("el-option",{key:a,attrs:{label:a,value:a}})})),1)],1),e("el-form-item",{attrs:{label:"年份选择："}},[e("year-range-selector",{attrs:{"begin-year":a.postParams.beginYear,"end-year":a.postParams.endYear},on:{"update:beginYear":function(t){return a.$set(a.postParams,"beginYear",t)},"update:begin-year":function(t){return a.$set(a.postParams,"beginYear",t)},"update:endYear":function(t){return a.$set(a.postParams,"endYear",t)},"update:end-year":function(t){return a.$set(a.postParams,"endYear",t)}}})],1),e("el-form-item",[e("el-button",{attrs:{disabled:!a.canMakeQuery,type:"primary"},on:{click:a.performQuery}},[a._v("查找")])],1)],1)],1)},o=[],r=e("21c9"),s={name:"MetaDataTree",props:["category","dataResult","context"],components:{YearRangeSelector:r["a"]},data:function(){return{metaDataTree:[],knownRegions:[],knownGrains:[],dataResultInternal:this.dataResult,postParams:{category:[],region:"",grain:"",beginYear:null,endYear:null}}},computed:{canMakeQuery:function(){var a=this.$data.postParams;return 0!==a.region.length&&(0!==a.grain.length&&(null!==a.beginYear&&null!==a.endYear&&a.category!==[]))}},watch:{dataResultInternal:function(a){this.$emit("update:dataResult",a)},"postParams.category":function(a){this.$emit("update:category",a)},postParams:{handler:function(a){this.$emit("update:context",a)},deep:!0}},methods:{loadMetaData:function(){var a=this;this.$axios.get("/db/metadata").then((function(t){a.$data.metaDataTree=t.data.data}))},loadRegions:function(){var a=this;this.$axios.get("/region/query").then((function(t){a.$data.knownRegions=t.data.data}))},loadGrains:function(){var a=this;this.$axios.get("/grain/query").then((function(t){a.$data.knownGrains=t.data.data}))},performQuery:function(){var a=this;this.$axios.post("/db/query",this.$data.postParams).then((function(t){a.$data.dataResultInternal=t.data.data}))}},mounted:function(){this.loadMetaData(),this.loadRegions(),this.loadGrains()}},i=s,l=(e("f873"),e("2877")),d=Object(l["a"])(i,n,o,!1,null,"9a465c9a",null);t["a"]=d.exports},f873:function(a,t,e){"use strict";e("2371")}}]);
//# sourceMappingURL=chunk-78842734.732bc819.js.map