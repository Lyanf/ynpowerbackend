(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dc0b629a"],{"860d":function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("el-row",[t("el-col",{attrs:{span:8,offset:1}},[t("el-form",[t("el-form-item",{attrs:{label:"数据节点："}},[t("el-cascader",{ref:"cascader",attrs:{id:"cascader",options:e.metaDataTree,"change-on-select":""},model:{value:e.postParams.category,callback:function(a){e.$set(e.postParams,"category",a)},expression:"postParams.category"}})],1),t("el-form-item",{attrs:{label:"地区选择："}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.postParams.region,callback:function(a){e.$set(e.postParams,"region",a)},expression:"postParams.region"}},e._l(e.knownRegions,(function(e){return t("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),t("el-form-item",{attrs:{label:"粒度选择："}},[t("el-select",{attrs:{placeholder:"请选择",value:"年",disabled:!0}})],1),t("el-form-item",{attrs:{label:"年份选择："}},[t("year-range-selector",{attrs:{"begin-year":e.postParams.beginYear,"end-year":e.postParams.endYear},on:{"update:beginYear":function(a){return e.$set(e.postParams,"beginYear",a)},"update:begin-year":function(a){return e.$set(e.postParams,"beginYear",a)},"update:endYear":function(a){return e.$set(e.postParams,"endYear",a)},"update:end-year":function(a){return e.$set(e.postParams,"endYear",a)}}})],1),t("el-form-item",[t("el-button",{attrs:{disabled:null===e.postParams.beginYear||null===e.postParams.endYear||0===e.postParams.category.length},on:{click:e.loadExceptions}},[e._v(" 异常检测 ")])],1)],1)],1),t("el-col",{attrs:{span:15}},[t("data-patch-table",{attrs:{"display-data":e.tableData}})],1)],1)},o=[],s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("d2-crud",{ref:"d2Crud",attrs:{columns:e.columns,data:e.displayData,rowHandle:e.rowHandle,"edit-template":e.editTemplate},on:{"dialog-cancel":e.handleDialogCancel,"row-edit":e.handleRowResolve,"row-remove":e.handleRowAccept}}),t("div",{staticStyle:{color:"darkgray","font-size":"12px"}},[e._v(" 共 "+e._s(e.dataEntryLength)+" 条 ")])],1)},r=[],i={name:"DataPatchTable",props:["displayData"],computed:{dataEntryLength:function(){return void 0===this.displayData?0:this.displayData.length}},data:function(){return{columns:[{title:"元数据类型",key:"category"},{title:"数据粒度",key:"grain"},{title:"地区",key:"region"},{title:"时间",key:"key"},{title:"当前值",key:"value"},{title:"更正建议",key:"suggest"}],editTemplate:{key:{title:"键"},value:{title:"值"}},rowHandle:{remove:{text:"接受",size:"small",type:"primary",confirm:!1},edit:{text:"更正",size:"small",fixed:"right"}}}},methods:{handleDialogCancel:function(e){e()},handleRowResolve:function(e,a){var t=this,n=e.index,o=e.row;this.$axios.post("/db/except/resolve",{originData:this.displayData[n],modifiedData:o}).then((function(e){console.log(e),t.$messenger.success("手动更正成功。"),t.displayData.remove(n),a()}))},handleRowAccept:function(e,a){var t=this,n=e.index;e.row;this.$axios.post("/db/except/accept",{acceptData:this.displayData[n]}).then((function(e){console.log(e),t.$messenger.success("已接受更正建议。"),t.displayData.remove(n),a()}))}}},l=i,c=t("2877"),d=Object(c["a"])(l,s,r,!1,null,"e5dc3260",null),u=d.exports,p=t("21c9"),m={name:"dataCheck",components:{YearRangeSelector:p["a"],DataPatchTable:u},data:function(){return{tableData:[],metaDataTree:[],knownRegions:[],knownGrains:[],postParams:{category:[],region:null,grain:"年",beginYear:null,endYear:null}}},mounted:function(){this.loadMetaData(),this.loadRegions(),this.loadGrains()},methods:{loadMetaData:function(){var e=this;this.$axios.get("/db/metadata").then((function(a){e.$data.metaDataTree=a.data.data}))},loadExceptions:function(){var e=this;this.$axios.post("/db/except/query",this.$data.postParams).then((function(a){e.tableData=a.data.data}))},loadRegions:function(){var e=this;this.$axios.get("/region/query").then((function(a){e.$data.knownRegions=a.data.data}))},loadGrains:function(){var e=this;this.$axios.get("/grain/query").then((function(a){e.$data.knownGrains=a.data.data}))}}},g=m,h=(t("91b4"),Object(c["a"])(g,n,o,!1,null,"69b679d6",null));a["default"]=h.exports},"90e4":function(e,a,t){},"91b4":function(e,a,t){"use strict";t("90e4")}}]);
//# sourceMappingURL=chunk-dc0b629a.e28314d6.js.map