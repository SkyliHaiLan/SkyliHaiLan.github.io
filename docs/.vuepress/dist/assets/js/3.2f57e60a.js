(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{169:function(e,t,s){},171:function(e,t,s){"use strict";s(169)},185:function(e,t,s){"use strict";s.r(t);var a={data:function(){return{textarea:"",data:[{name:"sky",email:"sky@qq.com",commit:"ddsdssdsd",children:[{name:"sky2",email:"dddd@qwq.com",commit:"ddddd"}]}],comments:"",userName:"",email:"",showUser:!1,showEmail:!1,emailError:""}},created:function(){var e=this.data;console.log(e)},methods:{onChange:function(e){this.textarea=e.target.value},setUserName:function(e){this.userName=e.target.value},setEmail:function(e){this.email=e.target.value},onSubmit:function(){alert("ssss");this.comments,this.userName;var e=this.email;console.log(e)}}},n=(s(171),s(0)),i=Object(n.a)(a,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"message"},[t("div",{staticClass:"el-tree"}),e._v(" "),t("div",{attrs:{id:"el-message"}},[t("textarea",{staticClass:"textArea-inner",attrs:{rows:"5",placeholder:"有疑问，欢迎来留言哦～"},on:{change:e.onChange}},[e._v(e._s(e.textarea))]),e._v(" "),t("input",{staticClass:"input-el",attrs:{name:"userName",placeholder:"昵称"},on:{change:e.setUserName}}),e._v(" "),e.showUser?t("div",{staticClass:"error"},[e._v("请输入您的昵称")]):e._e(),e._v(" "),t("input",{staticClass:"input-el",attrs:{name:"email",placeholder:"邮箱"},on:{change:e.setEmail}}),e._v(" "),e.showEmail?t("div",{class:e.error},[e._v("请输入您的邮箱")]):e._e(),e._v(" "),t("button",{staticClass:"sub-btn",on:{click:e.onSubmit}},[e._v("发表评论")])])])}),[],!1,null,null,null);t.default=i.exports}}]);