// 插件
// let myplugin = {
//     install(Vue){
//         // 把插件都挂载在 Vue 原型上
//         Vue.prototype.plugina = function(){
//             // 业务
//             console.log('哈哈哈哈');
//         }
//     }
// }
//防抖插件
let myplugin = function(Vue){
    Vue.prototype.debouncefn = function(fn,wait){
        let timer = null;
        return function(){
            clearTimeout(timer);
            timer = setTimeout(function(){
                fn()    // 业务函数
            },wait)
        }
    }
}

export default myplugin