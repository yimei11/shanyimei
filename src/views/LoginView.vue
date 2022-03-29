<template>
    <div class="login">
        <div class="main">
            <h3>Login Form</h3>
            <div class="myform">
                <el-form :model="formdata" :rules="rules">
                    <el-form-item prop="user" class="abc">
                        <el-input placeholder="用户名" v-model="formdata.user" class="input"></el-input>
                        <i class="el-icon-user-solid"></i>
                    </el-form-item>
                    <el-form-item prop="psd" class="abc">
                        <el-input placeholder="密码" v-model="formdata.psd" class="input"></el-input>
                        <i class="el-icon-key"></i>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" class="btn" @click="submitfn">Login</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <p class="text">username:{{formdata.user}} password:{{formdata.psd}}</p>
        </div>
    </div>
</template>
<script>
import instance from '../api/index.js'
export default {
    name:"LoginView",
    data(){
        // 自定义验证
        let userfn = function(rule,value,callback){
            // 正则验证
            let res = /^[a-z]{5,10}$/
            if (res.test(value)) return;
            return callback(new Error("用户名格式不对"));
        }
        let psdfn = function(rule,value,callback){
            let res = /^[0-9a-z]{6,10}$/
            if (res.test(value)) return;
            return callback(new Error("密码格式不对"));
        }
        return {
            formdata:{
                user:"admin",
                psd:"123456",
            },
            rules:{
                user:[{validator:userfn,trigger:"blur"}],
                psd:[{validator:psdfn,trigger:"blur"}]
            }
        }
    },
    methods:{
        async submitfn(){
            let user = this.formdata.user;
            let psd = this.formdata.psd;
            let {data} = await instance.post('/login',{user,psd});
            if(data.message=='fail'){
                return this.$message.error('登录失败');
            }
            if(data.message=='success'){
                localStorage.setItem('token',data.data)
                this.$message({
                    type:'success',
                    message:'登录成功',
                    duration:600,
                    onClose:()=>{
                        this.$router.push({name:"page"})
                    }
                })
            }
        }
    },
}
</script>
<style scoped>
.login{
    width: 100vw;
    height: 100vh;
    background:#324057;
}
.login .main{
    width: 350px;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
}
.login .main h3{
    font-size:20px;
    color:#fff;
    margin-bottom:20px;
}
.login .main .myform .abc{
    position:relative;
}
.login .main .myform .abc i{
    position:absolute;
    left:0;
    top:13px;
}
.login .main .btn{
    width: 100%;
}
.login .main .text{
    color:#fff;
    word-spacing: 20px;
    text-align:left;
}
</style>