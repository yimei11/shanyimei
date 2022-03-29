import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    children:[
      {
        path:"1",
        name:'page',
        meta:["首页"],
        component:()=>import('@/components/HomePage.vue')
      },
      {
        path:"2-1",
        meta:["文章列表"],
        component:()=>import('@/components/ArticleList.vue')
      },
      {
        path:"2-2",
        meta:["多层级路由示例"],
        component:()=>import('@/components/MultilevelRouter.vue')
      },
    ]
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path:"/login",
    name:"login",
    component:()=>import('../views/LoginView.vue'),
  }
];

const router = new VueRouter({
  routes,
});
router.beforeEach(function(to,from,next){
  if(to.path==='/login'){
    next()
  }else{
    let token = localStorage.getItem('token');
    if(token){
      next()
    }else{
      next('/login')
    }
  }
})

export default router;
