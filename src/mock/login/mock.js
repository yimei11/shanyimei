let Mock = require('mockjs');

Mock.mock('/api/login','post',function(config){
    let obj = JSON.parse(config.body)
    if(obj.user==='admin'&&obj.psd==='123456'){
        return {
            message:"success",
            data:{
                user:obj.user,
                psd:obj.psd
            }
        }
    }else{
        return {
            message:"fail",
            data:{
                message:"密码输入错误"
            }
        }
    }
})