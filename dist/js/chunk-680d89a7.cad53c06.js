(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-680d89a7"],{2762:function(e,a,l){"use strict";l.r(a);var t=function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("div",[l("ChangeMetaDataTree")],1)},r=[],n=function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("el-row",[l("el-col",[l("el-cascader-panel",{ref:"cascader",attrs:{id:"cascader",options:e.metaDataTree,"change-on-select":"",props:{checkStrictly:!0}},model:{value:e.selectedMetaData,callback:function(a){e.selectedMetaData=a},expression:"selectedMetaData"}})],1),l("el-col",[l("el-input",{attrs:{clearable:""},model:{value:e.crudInput,callback:function(a){e.crudInput=a},expression:"crudInput"}}),l("el-button",{on:{click:e.add}},[e._v("新增")]),l("el-button",{on:{click:e.del}},[e._v("删除")]),l("el-button",{on:{click:e.edit}},[e._v("编辑")])],1)],1)},i=[],u=(l("4de4"),{name:"ChangeMetaDataTree",data:function(){return{metaDataTree:[{value:"zhinan",label:"指南",children:[{value:"shejiyuanze",label:"设计原则",children:[{value:"yizhi",label:"一致"},{value:"fankui",label:"反馈"},{value:"xiaolv",label:"效率"},{value:"kekong",label:"可控"}]},{value:"daohang",label:"导航",children:[{value:"cexiangdaohang",label:"侧向导航"},{value:"dingbudaohang",label:"顶部导航"}]}]},{value:"zujian",label:"组件",children:[{value:"basic",label:"Basic",children:[{value:"layout",label:"Layout 布局"},{value:"color",label:"Color 色彩"},{value:"typography",label:"Typography 字体"},{value:"icon",label:"Icon 图标"},{value:"button",label:"Button 按钮"}]},{value:"form",label:"Form",children:[{value:"radio",label:"Radio 单选框"},{value:"checkbox",label:"Checkbox 多选框"},{value:"input",label:"Input 输入框"},{value:"input-number",label:"InputNumber 计数器"},{value:"select",label:"Select 选择器"},{value:"cascader",label:"Cascader 级联选择器"},{value:"switch",label:"Switch 开关"},{value:"slider",label:"Slider 滑块"},{value:"time-picker",label:"TimePicker 时间选择器"},{value:"date-picker",label:"DatePicker 日期选择器"},{value:"datetime-picker",label:"DateTimePicker 日期时间选择器"},{value:"upload",label:"Upload 上传"},{value:"rate",label:"Rate 评分"},{value:"form",label:"Form 表单"}]},{value:"data",label:"Data",children:[{value:"table",label:"Table 表格"},{value:"tag",label:"Tag 标签"},{value:"progress",label:"Progress 进度条"},{value:"tree",label:"Tree 树形控件"},{value:"pagination",label:"Pagination 分页"},{value:"badge",label:"Badge 标记"}]},{value:"notice",label:"Notice",children:[{value:"alert",label:"Alert 警告"},{value:"loading",label:"Loading 加载"},{value:"message",label:"Message 消息提示"},{value:"message-box",label:"MessageBox 弹框"},{value:"notification",label:"Notification 通知"}]},{value:"navigation",label:"Navigation",children:[{value:"menu",label:"NavMenu 导航菜单"},{value:"tabs",label:"Tabs 标签页"},{value:"breadcrumb",label:"Breadcrumb 面包屑"},{value:"dropdown",label:"Dropdown 下拉菜单"},{value:"steps",label:"Steps 步骤条"}]},{value:"others",label:"Others",children:[{value:"dialog",label:"Dialog 对话框"},{value:"tooltip",label:"Tooltip 文字提示"},{value:"popover",label:"Popover 弹出框"},{value:"card",label:"Card 卡片"},{value:"carousel",label:"Carousel 走马灯"},{value:"collapse",label:"Collapse 折叠面板"}]}]},{value:"ziyuan",label:"资源",children:[{value:"axure",label:"Axure Components"},{value:"sketch",label:"Sketch Templates"},{value:"jiaohu",label:"组件交互文档"}]}],crudInput:"",selectedMetaData:""}},methods:{add:function(){console.log(this.selectedMetaData);for(var e=JSON.stringify(this.metaDataTree),a=JSON.parse(e),l=a,t=a,r=0;r<this.selectedMetaData.length;r+=1)for(var n=0;n<t.length;n+=1)if(t[n].value===this.selectedMetaData[r]){if(r===this.selectedMetaData.length-1){l=t[n];break}t=t[n].children;break}l.children||(l.children=[]),l.children.push({label:this.crudInput,value:this.crudInput}),this.metaDataTree=a,console.log(this.metaDataTree)},del:function(){var e=this;console.log(this.selectedMetaData);for(var a=JSON.stringify(this.metaDataTree),l=JSON.parse(a),t=l,r=l,n=0;n<this.selectedMetaData.length-1;n+=1)for(var i=0;i<r.length;i+=1)if(r[i].value===this.selectedMetaData[n]){if(n===this.selectedMetaData.length-2){t=r[i];break}r=r[i].children;break}console.log(t),console.log(t.children);try{t.children=t.children.filter((function(a){return a.value!==e.selectedMetaData[e.selectedMetaData.length-1]})),this.metaDataTree=l}catch(u){this.$messenger.warning("不允许删除根节点！")}},edit:function(){console.log(this.selectedMetaData);for(var e=JSON.stringify(this.metaDataTree),a=JSON.parse(e),l=a,t=a,r=0;r<this.selectedMetaData.length;r+=1)for(var n=0;n<t.length;n+=1)if(t[n].value===this.selectedMetaData[r]){if(r===this.selectedMetaData.length-1){l=t[n];break}t=t[n].children;break}l.label=this.crudInput,l.value=this.crudInput,this.metaDataTree=a,console.log(this.metaDataTree)}}}),c=u,o=l("2877"),s=Object(o["a"])(c,n,i,!1,null,"4e8c4fab",null),d=s.exports,b={name:"test",components:{ChangeMetaDataTree:d}},v=b,h=Object(o["a"])(v,t,r,!1,null,"dad5cb3e",null);a["default"]=h.exports},"4de4":function(e,a,l){"use strict";var t=l("23e7"),r=l("b727").filter,n=l("1dde"),i=n("filter");t({target:"Array",proto:!0,forced:!i},{filter:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-680d89a7.cad53c06.js.map