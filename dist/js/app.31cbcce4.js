(function(e){function t(t){for(var a,i,l=t[0],r=t[1],u=t[2],s=0,d=[];s<l.length;s++)i=l[s],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);h&&h(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(a=!1)}a&&(c.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},i={app:0},o={app:0},c=[];function l(e){return r.p+"js/"+({about:"about"}[e]||e)+"."+{about:"22f56104","chunk-2103203a":"d75b99a1","chunk-2105e775":"19f01f0f","chunk-211807c5":"ac8a8aaa","chunk-21199776":"7b7e4658","chunk-2d215be9":"7b386fbe","chunk-2d22cd12":"f9e64888","chunk-0275634d":"813a7a0b","chunk-164fc8b6":"fe23eadd","chunk-2d0cc1c5":"a0fb231f","chunk-46cea004":"9a9c603e","chunk-474192f2":"4704c565","chunk-639ca778":"43ed2695","chunk-79636c72":"3210cdd9","chunk-0adcdc8c":"3d777385","chunk-193f1004":"2d442b41","chunk-194dd5f4":"5c03f6a4","chunk-21380c70":"df784e63","chunk-2d0ba45f":"0c479c68","chunk-362c560c":"873521da","chunk-2d0d6973":"12b03e98","chunk-2d216f98":"a5028f87","chunk-4493c46a":"6c6368a7","chunk-6ae4eda2":"165afbee","chunk-7b41a5e4":"1dcecc29","chunk-eac8f95c":"62a774ef","chunk-680d89a7":"ff56a981","chunk-6bc7a348":"cc386e8b","chunk-2d0e6879":"c6d364ca","chunk-f425d0d0":"944c5811"}[e]+".js"}function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(e){var t=[],n={"chunk-0275634d":1,"chunk-164fc8b6":1,"chunk-46cea004":1,"chunk-474192f2":1,"chunk-639ca778":1,"chunk-0adcdc8c":1,"chunk-193f1004":1,"chunk-194dd5f4":1,"chunk-362c560c":1,"chunk-4493c46a":1,"chunk-6ae4eda2":1,"chunk-7b41a5e4":1,"chunk-eac8f95c":1,"chunk-6bc7a348":1,"chunk-f425d0d0":1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise((function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-2103203a":"31d6cfe0","chunk-2105e775":"31d6cfe0","chunk-211807c5":"31d6cfe0","chunk-21199776":"31d6cfe0","chunk-2d215be9":"31d6cfe0","chunk-2d22cd12":"31d6cfe0","chunk-0275634d":"b5edc94a","chunk-164fc8b6":"c6cb0587","chunk-2d0cc1c5":"31d6cfe0","chunk-46cea004":"c6cb0587","chunk-474192f2":"c6cb0587","chunk-639ca778":"c6cb0587","chunk-79636c72":"31d6cfe0","chunk-0adcdc8c":"50d2797a","chunk-193f1004":"50d2797a","chunk-194dd5f4":"2e4287a9","chunk-21380c70":"31d6cfe0","chunk-2d0ba45f":"31d6cfe0","chunk-362c560c":"86bcdebf","chunk-2d0d6973":"31d6cfe0","chunk-2d216f98":"31d6cfe0","chunk-4493c46a":"a381cf0b","chunk-6ae4eda2":"9e81e43c","chunk-7b41a5e4":"50d2797a","chunk-eac8f95c":"4f724207","chunk-680d89a7":"31d6cfe0","chunk-6bc7a348":"f467cb80","chunk-2d0e6879":"31d6cfe0","chunk-f425d0d0":"bf4eb54e"}[e]+".css",o=r.p+a,c=document.getElementsByTagName("link"),l=0;l<c.length;l++){var u=c[l],s=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(s===a||s===o))return t()}var d=document.getElementsByTagName("style");for(l=0;l<d.length;l++){u=d[l],s=u.getAttribute("data-href");if(s===a||s===o)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var a=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete i[e],h.parentNode.removeChild(h),n(c)},h.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(h)})).then((function(){i[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=c);var u,s=document.createElement("script");s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.src=l(e);var d=new Error;u=function(t){s.onerror=s.onload=null,clearTimeout(h);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",d.name="ChunkLoadError",d.type=a,d.request=i,n[1](d)}o[e]=void 0}};var h=setTimeout((function(){u({type:"timeout",target:s})}),12e4);s.onerror=s.onload=u,document.head.appendChild(s)}return Promise.all(t)},r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var h=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"09cd":function(e,t,n){"use strict";n("6f82")},"543e":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("d3b7"),n("fb6a"),n("5319"),n("ac1f"),n("4d63"),n("25f0");var a=n("2b0e"),i=n("2f62"),o=n("bc3a"),c=n.n(o),l=n("7b1d"),r=n.n(l),u=n("5c96"),s=n.n(u),d=n("7586"),h=n.n(d),m=n("bfa9"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{attrs:{visible:e.displayLoading,width:"30%",title:"正在加载","show-close":!1}},[e._v("请稍等片刻。")])},p=[],b={name:"LoadingView",computed:{displayLoading:function(){return this.$store.state.isLoading}}},g=b,k=n("2877"),v=Object(k["a"])(g,f,p,!1,null,"11c8d33a",null),w=v.exports,x=(n("3ca3"),n("ddb0"),n("8c4f"));a["default"].use(x["a"]);var y=[{path:"/",redirect:"/logIn"},{path:"/About",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/Manual",name:"Manual",component:function(){return n.e("about").then(n.bind(null,"d500"))}},{path:"/TechSupport",name:"TechSupport",component:function(){return n.e("about").then(n.bind(null,"63e1"))}},{path:"/PlaceSinglePrediction",name:"PlaceSinglePrediction",component:function(){return Promise.all([n.e("chunk-2d22cd12"),n.e("chunk-79636c72"),n.e("chunk-194dd5f4")]).then(n.bind(null,"3311"))}},{path:"/IndustrySinglePrediction",name:"IndustrySinglePrediction",component:function(){return Promise.all([n.e("chunk-2d22cd12"),n.e("chunk-79636c72"),n.e("chunk-6ae4eda2")]).then(n.bind(null,"f448"))}},{path:"/IndustryMixPrediction",name:"IndustryMixPrediction",component:function(){return Promise.all([n.e("chunk-2d22cd12"),n.e("chunk-79636c72"),n.e("chunk-0adcdc8c")]).then(n.bind(null,"14e2"))}},{path:"/PlaceMixPrediction",name:"PlaceMixPrediction",component:function(){return Promise.all([n.e("chunk-2d22cd12"),n.e("chunk-79636c72"),n.e("chunk-7b41a5e4")]).then(n.bind(null,"a3e9"))}},{path:"/LongTermBaohePredict",name:"LongTermBaohePredict",component:function(){return Promise.all([n.e("chunk-2d22cd12"),n.e("chunk-79636c72"),n.e("chunk-362c560c"),n.e("chunk-2d216f98")]).then(n.bind(null,"c56f"))}},{path:"/LongTermMiduPredict",name:"LongTermMiduPredict",component:function(){return Promise.all([n.e("chunk-2d22cd12"),n.e("chunk-79636c72"),n.e("chunk-193f1004")]).then(n.bind(null,"5b3c"))}},{path:"/BigUserPredict",name:"BigUserPredict",component:function(){return Promise.all([n.e("chunk-2d22cd12"),n.e("chunk-79636c72"),n.e("chunk-362c560c"),n.e("chunk-2d0d6973")]).then(n.bind(null,"72ce"))}},{path:"/dataMining",name:"dataMining",component:function(){return Promise.all([n.e("chunk-2d22cd12"),n.e("chunk-0275634d")]).then(n.bind(null,"2dfa"))}},{path:"/Pierxun",name:"Pierxun",component:function(){return n.e("chunk-21199776").then(n.bind(null,"cc5f"))}},{path:"/Kjunzhi",name:"Kjunzhi",component:function(){return n.e("chunk-2105e775").then(n.bind(null,"99b2"))}},{path:"/Zhuchengfen",name:"Zhuchengfen",component:function(){return n.e("chunk-211807c5").then(n.bind(null,"a5f2"))}},{path:"/Guanlianguize",name:"Guanlianguize",component:function(){return n.e("chunk-2103203a").then(n.bind(null,"373d"))}},{path:"/miningResult",name:"miningResult",component:function(){return Promise.all([n.e("chunk-2d22cd12"),n.e("chunk-2d0cc1c5")]).then(n.bind(null,"4d10"))}},{path:"/Coordinate",name:"Coordinate",component:function(){return n.e("chunk-2d215be9").then(n.bind(null,"c006"))}},{path:"/login",name:"login",component:function(){return n.e("chunk-6bc7a348").then(n.bind(null,"9ddf"))}},{path:"/tempData",name:"tempData",component:function(){return n.e("chunk-680d89a7").then(n.bind(null,"2762"))}},{path:"/dataBaseCRUD",name:"dataBaseCRUD",component:function(){return Promise.all([n.e("chunk-2d22cd12"),n.e("chunk-474192f2")]).then(n.bind(null,"0ae5"))}},{path:"/SocialEcoData",name:"SocialEcoData",component:function(){return Promise.all([n.e("chunk-2d22cd12"),n.e("chunk-639ca778")]).then(n.bind(null,"36e4"))}},{path:"/ElectricityPowerData",name:"ElectricityPowerData",component:function(){return Promise.all([n.e("chunk-2d22cd12"),n.e("chunk-46cea004")]).then(n.bind(null,"dc76"))}},{path:"/GeoWeatherData",name:"GeoWeatherData",component:function(){return Promise.all([n.e("chunk-2d22cd12"),n.e("chunk-164fc8b6")]).then(n.bind(null,"5257"))}},{path:"/dataCheck",name:"dataCheck",component:function(){return n.e("chunk-f425d0d0").then(n.bind(null,"860d"))}},{path:"/FuHeTeXingCompute",name:"FuHeTeXingCompute",component:function(){return Promise.all([n.e("chunk-2d22cd12"),n.e("chunk-79636c72"),n.e("chunk-4493c46a")]).then(n.bind(null,"1600"))}},{path:"/FuHeTeXingPredict",name:"FuHeTeXingPredict",component:function(){return Promise.all([n.e("chunk-2d22cd12"),n.e("chunk-79636c72"),n.e("chunk-eac8f95c")]).then(n.bind(null,"e47d"))}},{path:"/PredictResultQuery",name:"PredictResultQuery",component:function(){return Promise.all([n.e("chunk-2d22cd12"),n.e("chunk-79636c72"),n.e("chunk-21380c70")]).then(n.bind(null,"63e4"))}},{path:"/PredictResultDisplay",name:"PredictResultDisplay",component:function(){return Promise.all([n.e("chunk-79636c72"),n.e("chunk-2d0e6879")]).then(n.bind(null,"98ae"))}},{path:"/ProvMuniCoordPredict",name:"ProvMuniCoordPredict",component:function(){return Promise.all([n.e("chunk-2d22cd12"),n.e("chunk-79636c72"),n.e("chunk-2d0ba45f")]).then(n.bind(null,"3705"))}},{path:"*",redirect:"/logIn",hidden:!0}],_=new x["a"]({routes:y}),S=_,$=(n("0fae"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e.$store.state.isLoading?n("LoadingView"):e._e(),n("TopMenu"),n("router-view")],1)}),P=[],M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("input",{attrs:{hidden:"true",type:"file",value:"",id:"file"}}),n("div",{staticClass:"top-warning",staticStyle:{"font-size":"14px"},attrs:{hidden:e.bannerHidden,align:"center"}},[e._v("未登录 "),n("el-button",{staticStyle:{color:"white"},attrs:{type:"text"},on:{click:e.switchToLogin}},[e._v("立即登录")])],1),n("el-menu",{staticClass:"el-menu-demo",staticStyle:{display:"flex","justify-content":"space-between","margin-bottom":"3em",color:"#ffffff","background-color":"#ddddff"},attrs:{"default-active":e.activeIndex,mode:"horizontal"},on:{select:e.handleSelect}},[n("el-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[e._v("开始")]),n("el-menu-item",{attrs:{index:"1-1"}},[e._v("登录")]),n("el-submenu",{attrs:{index:"1-2",disabled:e.menuDisabled}},[n("template",{slot:"title"},[e._v("最近保存文件")]),e._l(e.recentFiles,(function(t){return n("el-menu-item",{key:t.url,attrs:{index:t.url}},[e._v(" "+e._s(t.name)+" ")])})),0===e.recentFiles.length?n("el-menu-item",{attrs:{disabled:!0}},[e._v("无最近文件")]):e._e(),n("el-divider",{attrs:{index:"1-2-2"}}),n("el-menu-item",{attrs:{index:"1-2-3"}},[e._v("刷新")])],2),n("el-menu-item",{attrs:{index:"1-3"}},[e._v("退出")])],2),n("el-submenu",{attrs:{index:"2",disabled:e.menuDisabled}},[n("template",{slot:"title"},[e._v("数据库")]),n("el-menu-item",{attrs:{index:"2-1"}},[e._v("增加元数据节点")]),n("el-menu-item",{attrs:{index:"2-2"}},[e._v("重命名元数据节点")]),n("el-menu-item",{attrs:{index:"2-3"}},[e._v("删除元数据节点")]),n("el-menu-item",{attrs:{index:"2-6"}},[e._v("导入元数据…")]),n("el-divider"),n("el-menu-item",{attrs:{index:"2-4"}},[e._v("全部数据")]),n("el-menu-item",{attrs:{index:"2-5"}},[e._v("数据监测与更正")]),n("el-menu-item",{attrs:{index:"2-7"}},[e._v("导入数据…")])],2),n("el-submenu",{attrs:{index:"3",disabled:e.menuDisabled}},[n("template",{slot:"title"},[e._v("方案标签")]),n("el-menu-item",{attrs:{index:"3-3"}},[e._v("修改方案标签")]),n("el-menu-item",{attrs:{index:"3-4"}},[e._v("删除方案标签")])],2),n("el-submenu",{attrs:{index:"4",disabled:e.menuDisabled}},[n("template",{slot:"title"},[e._v("关联因素挖掘")]),n("el-menu-item",{attrs:{index:"4-1"}},[e._v("数据挖掘")]),n("el-menu-item",{attrs:{index:"4-2"}},[e._v("结果展示")])],2),n("el-submenu",{attrs:{index:"5",disabled:e.menuDisabled}},[n("template",{slot:"title"},[e._v("电力电量预测")]),n("el-submenu",{attrs:{index:"5-1"}},[n("template",{slot:"title"},[e._v("近中期预测")]),n("el-submenu",{attrs:{index:"5-1-1"}},[n("template",{slot:"title"},[e._v("地区预测")]),n("el-menu-item",{attrs:{index:"5-1-1-1"}},[e._v("单预测模型")]),n("el-menu-item",{attrs:{index:"5-DQZHYC"}},[e._v("组合预测模型")])],2),n("el-submenu",{attrs:{index:"5-1-2"}},[n("template",{slot:"title"},[e._v("行业预测")]),n("el-menu-item",{attrs:{index:"5-1-2-1"}},[e._v("单预测模型")]),n("el-menu-item",{attrs:{index:"5-HYZHYC"}},[e._v("组合预测模型")])],2)],2),n("el-submenu",{attrs:{index:"5-2"}},[n("template",{slot:"title"},[e._v("远期预测")]),n("el-menu-item",{attrs:{index:"5-2-1"}},[e._v("饱和曲线预测")]),n("el-menu-item",{attrs:{index:"5-2-2"}},[e._v("负荷密度预测")])],2),n("el-menu-item",{attrs:{index:"5-SSZF"}},[e._v("省市总分协调预测")]),n("el-menu-item",{attrs:{index:"5-3"}},[e._v("大用户预测")])],2),n("el-submenu",{attrs:{index:"6",disabled:e.menuDisabled}},[n("template",{slot:"title"},[e._v("负荷特性预测")]),n("el-menu-item",{attrs:{index:"6-1"}},[e._v("负荷特性指标计算")]),n("el-menu-item",{attrs:{index:"6-2"}},[e._v("负荷特性指标预测")])],2),n("el-submenu",{attrs:{index:"7",disabled:e.menuDisabled}},[n("template",{slot:"title"},[e._v("预测结果")]),n("el-menu-item",{attrs:{index:"7-1"}},[e._v("预测结果查询")]),n("el-menu-item",{attrs:{index:"7-2"}},[e._v("预测结果对比")])],2),n("el-submenu",{attrs:{index:"8",disabled:e.menuDisabled}},[n("template",{slot:"title"},[e._v("帮助")]),n("el-menu-item",{attrs:{index:"8-1"}},[e._v("用户手册")]),n("el-menu-item",{attrs:{index:"8-2"}},[e._v("技术支持")]),n("el-menu-item",{attrs:{index:"8-3"}},[e._v("关于")])],2)],1),n("el-dialog",{attrs:{title:"方案标签",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[n("el-tabs",{attrs:{type:"card"},on:{"tab-click":e.triggerReloadSchemas},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[n("el-tab-pane",{attrs:{label:"修改标签名称",name:"3-3"}},[n("UpdateSchema",{ref:"renameSchemaView"})],1),n("el-tab-pane",{attrs:{label:"删除标签",name:"3-4"}},[n("DeleteSchema",{ref:"deleteSchemaView"})],1)],1)],1),n("el-dialog",{attrs:{title:"元数据管理",visible:e.metaDataDialogFormVisible},on:{"update:visible":function(t){e.metaDataDialogFormVisible=t}}},[n("el-tabs",{attrs:{type:"card"},on:{"tab-click":e.triggerReloadMetas},model:{value:e.activeMetadataName,callback:function(t){e.activeMetadataName=t},expression:"activeMetadataName"}},[n("el-tab-pane",{attrs:{label:"新建节点",name:"2-1"}},[n("CreateNewNode",{ref:"newMetaView"})],1),n("el-tab-pane",{attrs:{label:"修改节点名称",name:"2-2"}},[n("RenameNode",{ref:"renameMetaView"})],1),n("el-tab-pane",{attrs:{label:"删除节点",name:"2-3"}},[n("DeleteNode",{ref:"deleteMetaView"})],1),n("el-tab-pane",{attrs:{label:"导入元数据",name:"2-6"}},[n("UploadData",{ref:"uploadMetaView"})],1)],1)],1),n("el-dialog",{attrs:{title:"导入数据",visible:e.uploadDialogFormVisible},on:{"update:visible":function(t){e.uploadDialogFormVisible=t}}},[n("UploadDataBase",{ref:"uploadDataBase"})],1)],1)},D=[],N=(n("159b"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",{attrs:{"label-position":"right","label-width":"14%"}},[n("el-form-item",{attrs:{label:"父节点"}},[n("el-cascader",{attrs:{options:e.metaDataTree,"change-on-select":"",placeholder:"请选择"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.createNewNode(t)}},model:{value:e.path,callback:function(t){e.path=t},expression:"path"}})],1),n("el-form-item",{attrs:{label:"节点名称"}},[n("el-input",{attrs:{clearable:"",placeholder:"请输入"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),n("el-form-item",[n("div",{staticStyle:{"font-size":"12px"}},[e._v(" "+e._s(e.promptText)+" ")])]),n("el-form-item",[n("el-button",{attrs:{type:"primary",disabled:0===e.name.length||0===e.path.length},on:{click:e.createNewNode}},[e._v(" 新建 ")])],1)],1)}),T=[],L=(n("b0c0"),n("99af"),n("a15b"),{name:"CreateNewNode",data:function(){return{metaDataTree:[],path:[],name:""}},mounted:function(){this.loadMetadata()},computed:{promptText:function(){return 0===this.$data.path.length?"请指定要插入节点的父节点。":0===this.$data.name.length?"请填写新节点名称。":"新节点将被插入到「".concat(this.$data.path.join(" → ")," → ").concat(this.$data.name,"」。")}},methods:{createNewNode:function(){var e=this;0!==this.$data.path.length&&0!==this.$data.name.length&&this.$axios.post("/db/metadata/create",{path:this.$data.path,name:this.$data.name}).then((function(t){console.log(t),e.$messenger.success("元数据节点添加成功。"),e.loadMetadata()}))},loadMetadata:function(){var e=this;this.$axios.get("/db/metadata").then((function(t){e.$data.metaDataTree=t.data.data}))}}}),R=L,C=(n("e9a2"),Object(k["a"])(R,N,T,!1,null,"04e4a612",null)),U=C.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",{attrs:{"label-position":"right","label-width":"14%"}},[n("el-form-item",{attrs:{label:"节点路径"}},[n("el-cascader",{attrs:{"change-on-select":"",options:e.metaDataTree,placeholder:"请选择"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.renameNode(t)}},model:{value:e.path,callback:function(t){e.path=t},expression:"path"}})],1),n("el-form-item",{attrs:{label:"新名称"}},[n("el-input",{attrs:{clearable:"",placeholder:"请输入"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),n("el-form-item",[n("div",{staticStyle:{"font-size":"12px"}},[e._v(" "+e._s(e.promptText)+" ")])]),n("el-form-item",[n("el-button",{attrs:{type:"primary",disabled:0===e.name.length||e.path.length<2},on:{click:e.renameNode}},[e._v(" 重命名 ")])],1)],1)},O=[],I=n("2909"),F={name:"RenameNode",data:function(){return{metaDataTree:[],path:[],name:""}},mounted:function(){this.loadMetadata()},computed:{promptText:function(){if(0===this.$data.path.length)return"请指定要重新命名的节点。";if(1===this.$data.path.length)return"不可以对根节点更名。";if(0===this.$data.name.length)return"请填写新节点名称。";var e=Object(I["a"])(this.$data.path);return e.pop(),e.push(this.$data.name),"节点将被重新命名为「".concat(e.join(" → "),"」。")}},methods:{renameNode:function(){var e=this;this.$data.path.length<2||0===this.$data.name.length||this.$axios.post("/db/metadata/rename",{path:this.$data.path,name:this.$data.name}).then((function(t){console.log(t),e.$messenger.success("元数据节点更名成功。"),e.loadMetadata()}))},loadMetadata:function(){var e=this;this.$axios.get("/db/metadata").then((function(t){e.$data.metaDataTree=t.data.data}))}}},j=F,B=(n("09cd"),Object(k["a"])(j,E,O,!1,null,"3c094d8b",null)),V=B.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",{attrs:{"label-position":"right","label-width":"14%"}},[n("el-form-item",{attrs:{label:"节点路径"}},[n("el-cascader",{attrs:{"change-on-select":"",options:e.metaDataTree,placeholder:"请选择"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.deleteNode(t)}},model:{value:e.path,callback:function(t){e.path=t},expression:"path"}})],1),n("el-form-item",[n("div",{staticStyle:{"font-size":"12px"}},[e._v(" "+e._s(e.promptText)+" ")])]),n("el-form-item",[n("el-button",{attrs:{type:"danger",disabled:e.path.length<2},on:{click:e.deleteNode}},[e._v(" 删除 ")])],1)],1)},H=[],G={name:"DeleteNode",data:function(){return{metaDataTree:[],path:[],name:""}},mounted:function(){this.loadMetadata()},computed:{promptText:function(){return 0===this.$data.path.length?"请指定要删除的节点。":1===this.$data.path.length?"不可以删除根节点。":"节点「".concat(this.$data.path.join(" → "),"」将被删除。")}},methods:{deleteNode:function(){var e=this;this.$data.path.length<2||this.$axios.post("/db/metadata/delete",{path:this.$data.path}).then((function(t){console.log(t),e.$messenger.success("元数据节点删除成功。"),e.loadMetadata()}))},loadMetadata:function(){var e=this;this.$axios.get("/db/metadata").then((function(t){e.$data.metaDataTree=t.data.data}))}}},Y=G,z=(n("e6e1"),Object(k["a"])(Y,A,H,!1,null,"7e750ad3",null)),X=z.exports,Z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",{attrs:{"label-position":"right","label-width":"14%"}},[n("el-form-item",{attrs:{label:"上传文件"}},[n("el-upload",{staticStyle:{display:"inline"},attrs:{"show-file-list":!1,"on-success":e.onSuccess,"on-error":e.onFailure,"before-upload":e.beforeUpload,action:e.baseURL+"/db/metadata/upload"}},[n("el-button",{attrs:{type:"primary",disabled:!e.enabledUploadButton}},[e._v("上传")])],1)],1)],1)},q=[],K={name:"UploadData",data:function(){return{enabledUploadButton:!0}},computed:{baseURL:function(){return this.$axios.defaults.baseURL}},methods:{onSuccess:function(){this.$data.enabledUploadButton=!0,this.$messenger.success("上传成功。")},onFailure:function(){this.$data.enabledUploadButton=!0,this.$messenger.error("上传失败。")},beforeUpload:function(){this.$data.enabledUploadButton=!1}}},Q=K,J=Object(k["a"])(Q,Z,q,!1,null,"7084f34b",null),W=J.exports,ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",{attrs:{"label-position":"right","label-width":"14%"}},[n("el-form-item",{attrs:{label:"已有版本"}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:e.currentSchema,callback:function(t){e.currentSchema=t},expression:"currentSchema"}},e._l(e.schemas,(function(t){return n("el-option",{key:t.tag,attrs:{value:t.tag}},[n("span",{staticStyle:{float:"left"}},[e._v(e._s(t.tag))]),n("span",{staticStyle:{float:"right",color:"#8492a6"}},[e._v(e._s(e.typeName[t.tagType]))])])})),1)],1),n("el-form-item",{attrs:{label:"新名称"}},[n("el-input",{attrs:{clearable:"",placeholder:"请输入"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.renameSchema(t)}},model:{value:e.newSchemaName,callback:function(t){e.newSchemaName=t},expression:"newSchemaName"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary",disabled:null===e.currentSchema||0===e.newSchemaName.length},on:{click:e.renameSchema}},[e._v("修改")])],1)],1)},te=[],ne={name:"UpdateSchema",data:function(){return{schemas:[],currentSchema:null,newSchemaName:"",typeName:{MINING:"数据挖掘方案",STATIC_REGIONAL:"地区单预测方案",DYNAMIC_INDUSTRIAL:"行业单预测方案",MIX:"组合预测方案",LONGTERM:"远期规划预测方案",BIGUSER:"大用户预测方案",SOKU:"负荷特性预测方案",CLAMP:"负荷特性预测方案",INTERP:"负荷特性预测方案",YEARCONT:"负荷特性预测方案"}}},mounted:function(){this.loadSchema()},methods:{loadSchema:function(){var e=this;this.$axios.get("/tags/query").then((function(t){e.$data.schemas=t.data.data}))},renameSchema:function(){var e=this;null!==this.$data.currentSchema&&0!==this.$data.newSchemaName.length&&this.$axios.post("/tags/rename",{tag:this.$data.currentSchema,newTag:this.$data.newSchemaName}).then((function(t){console.log(t),e.$messenger.success("修改方案标签成功。"),e.$data.currentSchema=e.$data.newSchemaName,e.loadSchema()}))}}},ae=ne,ie=(n("90b7"),Object(k["a"])(ae,ee,te,!1,null,"17997888",null)),oe=ie.exports,ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",{attrs:{"label-position":"right","label-width":"14%"}},[n("el-form-item",{attrs:{label:"已有版本"}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:e.currentSchema,callback:function(t){e.currentSchema=t},expression:"currentSchema"}},e._l(e.schemas,(function(t){return n("el-option",{key:t.tag,attrs:{value:t.tag}},[n("span",{staticStyle:{float:"left"}},[e._v(e._s(t.tag))]),n("span",{staticStyle:{float:"right",color:"#8492a6"}},[e._v(e._s(e.typeName[t.tagType]))])])})),1)],1),n("el-form-item",[n("el-button",{attrs:{type:"danger",disabled:null===e.currentSchema},on:{click:e.deleteSchema}},[e._v(" 删除 ")])],1)],1)},le=[],re={name:"DeleteSchema",data:function(){return{schemas:[],currentSchema:null,typeName:{MINING:"数据挖掘方案",STATIC_REGIONAL:"地区单预测方案",DYNAMIC_INDUSTRIAL:"行业单预测方案",MIX:"组合预测方案",LONGTERM:"远期规划预测方案",BIGUSER:"大用户预测方案",SOKU:"负荷特性预测方案",CLAMP:"负荷特性预测方案",INTERP:"负荷特性预测方案",YEARCONT:"负荷特性预测方案"}}},mounted:function(){this.loadSchema()},methods:{loadSchema:function(){var e=this;this.$axios.get("/tags/query").then((function(t){e.$data.schemas=t.data.data}))},deleteSchema:function(){var e=this;null!==this.$data.currentSchema&&this.$axios.post("/tags/delete",{tag:this.$data.currentSchema}).then((function(t){console.log(t),e.$messenger.success("删除方案标签成功。"),e.$data.currentSchema=null,e.loadSchema()}))}}},ue=re,se=(n("7ad9"),Object(k["a"])(ue,ce,le,!1,null,"1fae4c2f",null)),de=se.exports,he=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",{attrs:{"label-position":"right","label-width":"14%"}},[n("el-form-item",{attrs:{label:"上传文件"}},[n("el-upload",{staticStyle:{display:"inline"},attrs:{"show-file-list":!1,"on-success":e.onSuccess,"on-error":e.onFailure,"before-upload":e.beforeUpload,action:e.baseURL+"/db/upload"}},[n("el-button",{attrs:{type:"primary",disabled:!e.enabledUploadButton}},[e._v("上传")])],1)],1)],1)},me=[],fe={name:"UploadDataBase",data:function(){return{enabledUploadButton:!0}},computed:{baseURL:function(){return this.$axios.defaults.baseURL}},methods:{onSuccess:function(){this.$data.enabledUploadButton=!0,this.$messenger.success("上传成功。")},onFailure:function(){this.$data.enabledUploadButton=!0,this.$messenger.error("上传失败。")},beforeUpload:function(){this.$data.enabledUploadButton=!1}}},pe=fe,be=Object(k["a"])(pe,he,me,!1,null,"0b82e52e",null),ge=be.exports,ke=n("21a6"),ve={name:"TopMenu",components:{CreateNewNode:U,RenameNode:V,DeleteNode:X,UploadData:W,DeleteSchema:de,UpdateSchema:oe,UploadDataBase:ge},data:function(){return{recentFiles:[],activeIndex:"1",activeName:"",activeMetadataName:"",dialogFormVisible:!1,metaDataDialogFormVisible:!1,uploadDialogFormVisible:!1,saveDialogVisible:!1,knownVersions:[],versionName:"",isLogin:this.$store.state.isLogin}},computed:{menuDisabled:function(){return!this.$store.state.isLogin},bannerHidden:function(){var e=this.$store.state.isLogin;return e&&this.loadRecentFiles(),e}},mounted:function(){this.updateBaseUrl(),window.location="/#/logIn"},methods:{updateBaseUrl:function(){this.$store.commit("finishLoad")},loadRecentFiles:function(){var e=this;this.$axios.get("/recent").then((function(t){e.$data.recentFiles=t.data.data}))},switchToLogin:function(){window.location="/#/logIn"},triggerReloadSchemas:function(){var e=[this.$refs.renameSchemaView,this.$refs.deleteSchemaView];e.forEach((function(e){void 0!==e&&e.loadSchema()}))},triggerReloadMetas:function(){var e=[this.$refs.createMetaView,this.$refs.renameMetaView,this.$refs.deleteMetaView];e.forEach((function(e){void 0!==e&&e.loadMetadata()}))},logOut:function(){var e=this;this.$store.commit("logout"),this.$axios.post("/logout").then((function(t){console.log(t),e.$messenger.success("注销成功。")}))},handleSelect:function(e,t){"1"===t[0]?"1-1"===t[1]?window.location="/#/logIn":"1-3"===t[1]?(window.location="/#/logIn",this.logOut()):"1-2"===t[2]||"1-2-2"===t[2]||("1-2-3"===t[2]?this.loadRecentFiles():void 0!==t[2]&&Object(ke["saveAs"])(t[2])):"2"===t[0]?"2-4"===t[1]?window.location="/#/dataBaseCRUD":"2-5"===t[1]?window.location="/#/dataCheck":"2-7"===t[1]?this.$data.uploadDialogFormVisible=!0:(this.triggerReloadMetas(),this.$data.activeMetadataName=t[1],this.$data.metaDataDialogFormVisible=!0):"3"===t[0]?(this.activeName=t[1],this.triggerReloadSchemas(),this.dialogFormVisible=!0):"4"===t[0]?"4-1"===t[1]?window.location="/#/dataMining":"4-2"===t[1]?window.location="/#/miningResult":console.assert(!1):"5"===t[0]?"5-1-1-1"===e?window.location="/#/PlaceSinglePrediction":"5-1-2-1"===e?window.location="/#/IndustrySinglePrediction":"5-DQZHYC"===e?window.location="/#/PlaceMixPrediction":"5-HYZHYC"===e?window.location="/#/IndustryMixPrediction":"5-SSZF"===e?window.location="/#/ProvMuniCoordPredict":"5-2-1"===e?window.location="/#/LongTermBaohePredict":"5-2-2"===e?window.location="/#/LongTermMiduPredict":"5-3"===e?window.location="/#/BigUserPredict":console.assert(!1):"6"===t[0]?"6-1"===e?window.location="/#/FuHeTeXingCompute":"6-2"===e?window.location="/#/FuHeTeXingPredict":console.assert(!1):"7"===t[0]?"7-1"===t[1]?window.location="/#/PredictResultQuery":"7-2"===t[1]?window.location="/#/PredictResultDisplay":console.assert(!1):"8"===t[0]?"8-1"===t[1]?window.location="/#/Manual":"8-2"===t[1]?window.location="/#/TechSupport":"8-3"===t[1]?window.location="/#/About":console.assert(!1):console.assert(!1),console.log(e,t)}}},we=ve,xe=(n("fbea"),Object(k["a"])(we,M,D,!1,null,null,null)),ye=xe.exports,_e={name:"App",components:{TopMenu:ye}},Se=_e,$e=(n("034f"),Object(k["a"])(Se,$,P,!1,null,null,null)),Pe=$e.exports;a["default"].config.productionTip=!1,a["default"].use(s.a),a["default"].use(h.a),a["default"].use(i["a"]),a["default"].use(r.a),a["default"].component("LoadingView",w);var Me=c.a.create({baseURL:"http://dclab.club:18000/api"});Me.defaults.timeout=142857;var De=new m["a"]({storage:window.localStorage}),Ne=new i["a"].Store({state:{isLogin:!1,isLoading:!1},mutations:{login:function(e){e.isLogin=!0},logout:function(e){e.isLogin=!1},beginLoad:function(e){e.isLoading=!0},finishLoad:function(e){e.isLoading=!1}},plugins:[De.plugin]}),Te={success:function(e){s.a.Message({message:e,type:"success",showClose:!0})},warning:function(e){s.a.Message({message:e,type:"warning",showClose:!0})},error:function(e){s.a.Message({message:e,type:"error",showClose:!0})}};Me.interceptors.request.use((function(e){return Ne.commit("beginLoad"),e}),(function(e){return Promise.reject(e)})),Me.interceptors.response.use((function(e){return Ne.commit("finishLoad"),200===e.data.code?e:(Te.error("请求失败！服务器报告了一个 ".concat(e.data.msg," 错误。")),Promise.reject(e))}),(function(e){return Ne.commit("finishLoad"),Te.error("请求失败！".concat(e)),Promise.reject(e)})),Array.prototype.remove=function(e,t){var n=this.slice((t||e)+1||this.length);return this.length=e<0?this.length+e:e,this.push.apply(this,n)},Date.prototype.format=function(e){var t=e,n={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(var a in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,"".concat(this.getFullYear()).substr(4-RegExp.$1.length))),n)new RegExp("(".concat(a,")")).test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?n[a]:"00".concat(n[a]).substr("".concat(n[a]).length)));return t},a["default"].prototype.$axios=Me,a["default"].prototype.$messenger=Te,new a["default"]({router:S,render:function(e){return e(Pe)},store:Ne}).$mount("#app")},"6f82":function(e,t,n){},"7ad9":function(e,t,n){"use strict";n("f304")},"813f":function(e,t,n){},"84f3":function(e,t,n){},"85ec":function(e,t,n){},"8cff":function(e,t,n){},"90b7":function(e,t,n){"use strict";n("84f3")},e6e1:function(e,t,n){"use strict";n("543e")},e9a2:function(e,t,n){"use strict";n("8cff")},f304:function(e,t,n){},fbea:function(e,t,n){"use strict";n("813f")}});
//# sourceMappingURL=app.31cbcce4.js.map