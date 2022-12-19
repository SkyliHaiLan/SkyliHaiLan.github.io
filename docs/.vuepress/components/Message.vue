
<template>
	<div class="message">
		
		<div class="el-tree">
					 	
					 
		</div>
		<div id="el-message">
			<textarea
				rows="5"
				class="textArea-inner"
				placeholder="有疑问，欢迎来留言哦～"
				v-on:change="onChange"
				>{{textarea}}</textarea>
			  <input name="userName" placeholder="昵称" class="input-el" v-on:change="setUserName" />
			  <div class="error" v-if="showUser">请输入您的昵称</div>
			  <input name="email" placeholder="邮箱" class="input-el" v-on:change="setEmail" />
			  <div :class="error" v-if="showEmail">请输入您的邮箱</div>
			  <button v-on:click="onSubmit" class="sub-btn">发表评论</button>
		</div>
	</div>
</template>

<script>

export default {
  data() {
    return {
	  textarea:'',
      data: [{name:"sky",email:'sky@qq.com',commit:'ddsdssdsd',children:[{name:'sky2',email:'dddd@qwq.com',commit:'ddddd'}]}],
	  comments: '',
	  userName:'',
	  email:'',
	  showUser: false,
	  showEmail: false,
	  emailError:'',
    }
  },
  created() {
  	const data = this.data;
	console.log(data)
  },
  methods: {
    onChange(e){
      this.textarea=e.target.value;
     
    },
	setUserName(e){
		 this.userName=e.target.value;
	},
	setEmail(e){
		 this.email=e.target.value;
	},
    onSubmit(){
		alert("ssss")
		const comments = this.comments;
		const userName = this.userName;
		const email = this.email;
		console.log(email)
    }
  }
}
</script>

<style>
	.textArea-inner{
	    display: block;
	    resize: vertical;
	    padding: 5px 15px;
	    line-height: 1.5;
	    box-sizing: border-box;
	    width: 100%;
	    font-size: inherit;
	    color: #606266;
	    background-color: #fff;
	    background-image: none;
	    border: 1px solid #dcdfe6;
	    border-radius: 4px;
	    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
	}
	.textArea-inner:focus {
	    outline: none;
	    border-color: #409eff;
	  }
	.input-el{
	  width:100%;
	  margin-top:25px;
	  background-color: #fff;
	  background-image: none;
	  border-radius: 4px;
	  border: 1px solid #dcdfe6;
	  box-sizing: border-box;
	  color: #606266;
	  display: inline-block;
	  font-size: inherit;
	  height: 40px;
	  line-height: 40px;
	  outline: none;
	  padding: 0 15px;
	  transition: border-color .2s cubic-bezier(.645,.045,.355,1);
	  width: 100%;
	}
	.input-el:focus {
		outline: none;
	    border-color: #409eff;
	}
	.error{
		color: #fe6c6f;
		font-size: 14px;
	}
	
	button{
	  display: inline-block;
	    line-height: 1;
	    white-space: nowrap;
	    cursor: pointer;
	    background: #fff;
	    border: 1px solid #dcdfe6;
	    color: #606266;
	    -webkit-appearance: none;
	    text-align: center;
	    box-sizing: border-box;
	    outline: none;
	    margin: 0;
	    transition: .1s;
	    font-weight: 500;
	    -moz-user-select: none;
	    -webkit-user-select: none;
	    -ms-user-select: none;
	    padding: 12px 20px;
	    font-size: 14px;
	    border-radius: 4px;
	}
	.sub-btn{
	  width:100%;
	  color: #fff;
	  background-color: #42b983;
	  border-color: #42b983;
	  font-size:16px;
	  margin-top:25px;
	}
	.hide{
		display: none;
	}
	.show{
		display: block;
	}
</style>


