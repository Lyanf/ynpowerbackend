(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"63e1":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"manual"},[n("h1",[t._v("这里是技术支持。")])])}],i={name:"TechSupport"},s=i,o=n("2877"),c=Object(o["a"])(s,a,r,!1,null,"bd746c98",null);e["default"]=c.exports},d500:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"manual"},[n("h1",[t._v("这里是使用手册。")])])}],i={name:"Manual"},s=i,o=n("2877"),c=Object(o["a"])(s,a,r,!1,null,"2ba02721",null);e["default"]=c.exports},f820:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("这里是关于页面。")]),n("h2",[t._v("有一些很危险的操作。")]),n("el-form",[n("el-form-item",[n("el-button",{attrs:{type:"danger"},on:{click:t.removeAllData}},[t._v("删除所有数据")])],1),n("el-form-item",[n("el-button",{attrs:{type:"danger"},on:{click:t.removeWenHonglinData}},[t._v("删除「温洪林博士」的数据")])],1),n("el-form-item",[n("el-button",{attrs:{type:"danger"},on:{click:t.initializeDatabase}},[t._v("初始化数据库")])],1)],1)],1)},r=[],i={name:"About",methods:{refreshPage:function(){this.$router.go(0)},removeAllData:function(){var t=this;this.$confirm("删除数据之后无法恢复。确定要删除所有数据，但保留元数据吗？","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$axios.post("/danger/remove/all/data").then((function(){t.$messenger.success("清除所有数据成功。"),t.refreshPage()}))}))},removeWenHonglinData:function(){var t=this;this.$confirm("删除这部分数据之后无法恢复。确定要删除「温洪林博士」的数据吗？","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$axios.post("/danger/remove/whl/data").then((function(){t.$messenger.success("清除「温洪林博士」的数据成功。"),t.refreshPage()}))}))},initializeDatabase:function(){var t=this;this.$confirm("这将删除数据库中所有数据及二级元数据。确定要这样做吗？","严重警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$axios.post("/danger/init/db").then((function(){t.$messenger.success("数据库初始化成功。"),t.refreshPage()}))}))}}},s=i,o=n("2877"),c=Object(o["a"])(s,a,r,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=about.900e85ee.js.map