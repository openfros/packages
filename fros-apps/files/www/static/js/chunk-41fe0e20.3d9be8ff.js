(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41fe0e20"],{5099:function(t,e,n){"use strict";n("6852")},6852:function(t,e,n){},"7ccd":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticStyle:{"margin-left":"20px","margin-top":"20px","font-size":"14px"}},[t._v(" 设备重启")]),n("el-form",{ref:"form",staticStyle:{"margin-top":"30px"},attrs:{model:t.form,"label-width":"20%",size:"small"}},[n("el-form-item",[n("el-button",{staticStyle:{width:"300px"},attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("立即重启")])],1)],1),n("el-dialog",{attrs:{title:t.diaglogTitle,visible:t.dialogFormVisible,width:"50%",modal:"","show-close":!1,"close-on-click-modal":!1},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[n("div",[t._v(t._s(t.tips))]),n("br"),n("el-progress",{attrs:{percentage:t.percent,"stroke-width":4,color:"#8e71c7"}}),n("br")],1)],1)},o=[],i=n("8593"),c={data:function(){return{dialogStatus:"",diaglogTitle:"",dialogFormVisible:!1,tips:"设备正在重启，请稍后...",percent:0,form:{}}},created:function(){this.fetchData()},methods:{fetchData:function(){},onSubmit:function(){var t=this;this.$confirm("确定重启设备吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var e={data:{}};t.dialogFormVisible=!0,Object(i["h"])(e).then((function(t){}));var n=setInterval((function(){t.percent++,100==t.percent&&(clearInterval(n),t.dialogFormVisible=!1,t.percent=0)}),1e3)})).catch((function(){}))}}},a=c,u=(n("5099"),n("2877")),l=Object(u["a"])(a,r,o,!1,null,"1163c44d",null);e["default"]=l.exports},8593:function(t,e,n){"use strict";n.d(e,"e",(function(){return o})),n.d(e,"j",(function(){return i})),n.d(e,"f",(function(){return c})),n.d(e,"g",(function(){return a})),n.d(e,"k",(function(){return u})),n.d(e,"h",(function(){return l})),n.d(e,"a",(function(){return d})),n.d(e,"l",(function(){return s})),n.d(e,"i",(function(){return f})),n.d(e,"b",(function(){return m})),n.d(e,"d",(function(){return p})),n.d(e,"c",(function(){return b}));var r=n("b775");function o(t){return Object(r["a"])({url:"/get_account_info",method:"get",params:t})}function i(t){return Object(r["a"])({url:"/set_account_info",method:"post",data:t})}function c(t){return Object(r["a"])({url:"/get_license",method:"get",params:t})}function a(t){return Object(r["a"])({url:"/heart",method:"get",params:t})}function u(t){return Object(r["a"])({url:"/set_license",method:"post",data:t})}function l(t){return Object(r["a"])({url:"/reboot_system",method:"post",data:t})}function d(t){return Object(r["a"])({url:"/cancel_upgrade",method:"post",data:t})}function s(t){return Object(r["a"])({url:"/upgrade",method:"post",data:t})}function f(t){return Object(r["a"])({url:"/reset_system_config",method:"post",data:t})}function m(t){return Object(r["a"])({url:"/cmd_clean_all_dev",method:"post",data:t})}function p(t){return Object(r["a"])({url:"/cmd_clean_offline_dev",method:"post",data:t})}function b(t){return Object(r["a"])({url:"/cmd_clean_all_visit",method:"post",data:t})}}}]);