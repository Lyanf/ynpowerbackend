(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ba1c47f"],{"21c9":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",{style:e.mainStyle,attrs:{type:"flex",justify:"left"}},[a("el-col",[a("el-date-picker",{attrs:{type:"year",placeholder:"起始年份"},on:{change:e.beginChange},model:{value:e.beginYearInternal,callback:function(t){e.beginYearInternal=t},expression:"beginYearInternal"}})],1),a("el-col",{staticStyle:{margin:"auto","text-align":"center",color:"lightgray","font-size":"12px"}},[e._v(" 至 ")]),a("el-col",[a("el-date-picker",{attrs:{type:"year",placeholder:"终止年份"},on:{change:e.endChange},model:{value:e.endYearInternal,callback:function(t){e.endYearInternal=t},expression:"endYearInternal"}})],1)],1)},r=[],l={name:"YearRangeSelector",props:["beginYear","endYear","expand"],data:function(){return{beginYearInternal:this.beginYear,endYearInternal:this.endYear}},methods:{beginChange:function(e){null===e?this.$emit("update:beginYear",null):this.$emit("update:beginYear",e.getFullYear())},endChange:function(e){null===e?this.$emit("update:endYear",null):this.$emit("update:endYear",e.getFullYear())}},watch:{beginYearInternal:function(e){null!==e?this.$emit("update:beginYear",e.getFullYear()):this.$emit("update:beginYear",null)},endYearInternal:function(e){null!==e?this.$emit("update:endYear",e.getFullYear()):this.$emit("update:endYear",null)},beginYear:function(e){this.beginYearInternal=null!==e?new Date(e,1,1):null},endYear:function(e){this.endYearInternal=null!==e?new Date(e,1,1):null}},computed:{mainStyle:function(){return this.expand?"":"width: 55%"}}},s=l,o=(a("6e83"),a("2877")),i=Object(o["a"])(s,n,r,!1,null,"7bfa7c13",null);t["a"]=i.exports},"2dfa":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",[a("el-col",{staticStyle:{height:"100%"},attrs:{offset:1,span:12}},[a("el-row",[a("el-transfer",{staticStyle:{height:"100%"},attrs:{filterable:"","filter-placeholder":"输入以查找",data:e.knownFactors,titles:["待选择影响因素","已选择影响因素"],"button-texts":["移除","添加"]},model:{value:e.postParams.factors,callback:function(t){e.$set(e.postParams,"factors",t)},expression:"postParams.factors"}})],1),a("el-row",{staticStyle:{"margin-top":"5em"}},[e.miningResults.length>0?a("span",[e._v("挖掘结果")]):e._e()]),a("el-row",{staticStyle:{"margin-top":"2em"}},e._l(e.miningResults,(function(t){return a("el-tag",{key:t,staticStyle:{margin:"5px"}},[e._v(" "+e._s(t)+" ")])})),1)],1),a("el-col",{staticStyle:{"margin-right":"20px"},attrs:{span:9,offset:1}},[a("el-form",{attrs:{"label-position":"right","label-width":"auto"}},[a("el-form-item",{attrs:{label:"数据年份："}},[a("year-range-selector",{attrs:{"begin-year":e.postParams.StartYear,"end-year":e.postParams.EndYear},on:{"update:beginYear":function(t){return e.$set(e.postParams,"StartYear",t)},"update:begin-year":function(t){return e.$set(e.postParams,"StartYear",t)},"update:endYear":function(t){return e.$set(e.postParams,"EndYear",t)},"update:end-year":function(t){return e.$set(e.postParams,"EndYear",t)}}})],1),a("el-form-item",{attrs:{label:"挖掘方法："}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.postParams.method,callback:function(t){e.$set(e.postParams,"method",t)},expression:"postParams.method"}},e._l(e.allMethods,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),e._l(e.requiredParams,(function(t){return a("div",{key:t.key},["econamelist"!==t.key?a("el-form-item",{attrs:{label:t.label+"："}},["int"===t.kind?a("el-input",{attrs:{step:1,type:"number",clearable:"",placeholder:"请输入整数数字"},model:{value:e.postParams[t.key],callback:function(a){e.$set(e.postParams,t.key,a)},expression:"postParams[param.key]"}}):"float"===t.kind?a("el-input",{attrs:{step:.01,type:"number",clearable:"",placeholder:"请输入数字"},model:{value:e.postParams[t.key],callback:function(a){e.$set(e.postParams,t.key,a)},expression:"postParams[param.key]"}}):t.kind.startsWith("option")?a("el-select",{attrs:{placeholder:"请选择一项"},model:{value:e.postParams[t.key],callback:function(a){e.$set(e.postParams,t.key,a)},expression:"postParams[param.key]"}},e._l(t.value,(function(e){return a("el-option",{key:e,attrs:{label:e,value:e}})})),1):t.kind.startsWith("multioption")?a("el-select",{attrs:{multiple:"",placeholder:"请选择数项"},model:{value:e.postParams[t.key],callback:function(a){e.$set(e.postParams,t.key,a)},expression:"postParams[param.key]"}},e._l(t.value,(function(e){return a("el-option",{key:e,attrs:{label:e,value:e}})})),1):a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.postParams[t.key],callback:function(a){e.$set(e.postParams,t.key,a)},expression:"postParams[param.key]"}})],1):e._e()],1)})),a("el-form-item",{attrs:{label:"方案标签："}},[a("el-input",{attrs:{clearable:"",placeholder:"可留空"},model:{value:e.postParams.tag,callback:function(t){e.$set(e.postParams,"tag",t)},expression:"postParams.tag"}})],1),a("el-form-item",{attrs:{label:"加载方案："}},[a("el-select",{staticStyle:{width:"50%"},attrs:{placeholder:"选择标签",size:"small"},model:{value:e.currentTag,callback:function(t){e.currentTag=t},expression:"currentTag"}},e._l(e.knownTags,(function(e){return a("el-option",{key:e.id,attrs:{label:e.id,value:e.id}})})),1),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",disabled:null===e.currentTag},on:{click:e.loadParameters}},[e._v("加载")])],1),a("el-form-item",[a("el-button",{attrs:{type:"primary",disabled:!e.isFormComplete},on:{click:e.commitMining}},[e._v(" 确定 ")]),a("el-button",{on:{click:e.goToResultPage}},[e._v("挖掘结果展示")])],1)],2)],1)],1)},r=[],l=(a("159b"),a("21c9")),s={name:"DataMining",components:{YearRangeSelector:l["a"]},mounted:function(){this.loadFactors(),this.loadTags()},computed:{isFormComplete:function(){var e=this.$data.postParams;return null!==e.StartYear&&null!==e.EndYear&&(0!==e.factors.length&&0!==e.method.length)}},methods:{loadTags:function(){var e=this;this.$axios.get("/tags/query",{params:{tagType:"MINING"}}).then((function(t){e.$data.knownTags=t.data.data}))},loadParameters:function(){var e=this;this.$axios.get("/params/mining",{params:{tag:this.$data.currentTag}}).then((function(t){e.$data.postParams=t.data.data}))},loadFactors:function(){var e=this;this.$axios.get("/factor/query").then((function(t){t.data.data.forEach((function(t){e.$data.knownFactors.push({label:t,key:t})}))}))},commitMining:function(){var e=this,t=this.$data.postParams;t.econamelist=this.$data.postParams.factors,this.$axios.post("/mining/request",t).then((function(t){e.$messenger.success("数据挖掘成功。"),e.$data.miningResults=t.data.data}))},goToResultPage:function(){window.location="/#/miningResult"}},data:function(){return{allMethods:[{label:"K均值算法",value:"K均值算法"},{label:"主成分分析算法",value:"主成分分析算法"},{label:"关联规则分析算法",value:"关联规则分析算法"}],knownFactors:[],knownTags:[],requiredParams:[],currentTag:null,suggestCategoryCount:null,miningResults:[],postParams:{method:"",factors:[],StartYear:null,EndYear:null,tag:"",tagType:"MINING"}}},watch:{"postParams.method":function(e){var t=this;this.$data.requiredParams=[],this.$axios.get("/get/args",{params:{method:e}}).then((function(e){e.data.data.para.forEach((function(e){"StartYear"===e.key||"EndYear"===e.key||"PreStartYear"===e.key||"PreEndYear"===e.key||(t.$data.requiredParams.push(e),void 0!==e.default&&t.$set(t.postParams,e.key,e.default))}))}))}}},o=s,i=(a("4f92"),a("2877")),u=Object(i["a"])(o,n,r,!1,null,"6cb84e7a",null);t["default"]=u.exports},"4f92":function(e,t,a){"use strict";a("ded4")},"6e83":function(e,t,a){"use strict";a("e4af")},ded4:function(e,t,a){},e4af:function(e,t,a){}}]);
//# sourceMappingURL=chunk-1ba1c47f.ba4f27c0.js.map