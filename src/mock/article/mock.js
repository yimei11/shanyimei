let Mock = require('mockjs');
let data = [
    {id:'0',title:'中国npm镜像源升级公告',name:'admin1',browser:'ie',text:'100'},
    {id:'1',title:'中国npm镜像源升级公告',name:'admin2',browser:'chro',text:'200'},
    {id:'2',title:'中国npm镜像源升级公告',name:'admin3',browser:'iqq',text:'300'},
]
// 获取数据
Mock.mock('/api/article','get',function(config){
    return data
})
// 删除数据
Mock.mock(/\/api\/article\/\d/,'delete',function(config){
    let arr = config.url.split("/");
    let id = arr.pop();
    data.splice(id, 1)
    return data
})
