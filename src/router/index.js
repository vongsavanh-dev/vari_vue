import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import RegisterInfo from "@/views/Layout/RegisterInfo";
import Register from "@/views/Layout/Register";
import Login from "@/views/Layout/login"
import Dashboard from "@/views/Layout/Dashboard";
import Middlewares from '@/Middlewares/index'
import RegisterSuccess from "@/views/Layout/CRUD/RegisterSuccess";

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home,
  //   meta: {
  //     middleware: [Middlewares.auth]
  //   }
  // },
  {
    path:'/admin-dashboard',
    name:'Dashboard',
    component:Dashboard,
    meta: {
      middleware: [Middlewares.auth]
    }
  },
  {
    path:'/register-info',
    name:'RegisterInfo',
    component:RegisterInfo,
    mata:{
      middleware:[Middlewares.auth]
    }

  },
  {
    path:'/',
    name:'UserRegister',
    component:Register,
    meta: {
      middleware: [Middlewares.guest],
      hiddens : true,
    }
  },

  {
    path: '/admin-login',
    name:'login',
    component: Login,
    meta:{
      middleware:[Middlewares.guest],
      hiddens : true,
    }
  },
  {
    path: '/register-success',
    name:'RegisterSuccess',
    component:RegisterSuccess,
    meta: {
      middleware: [Middlewares.guest],
      hiddens: true,
    }
  },


  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



function nextCheck(context, middleware, index){
  const nextMiddleware = middleware[index];

  if(!nextMiddleware) return context.next;

  return (...parameters)=>{
    context.next(...parameters);
    const nextMidd = nextCheck(context, middleware, index + 1);

    nextMiddleware({...context, nextMidd});
  }
}

router.beforeEach((to, from, next)=>{
  if(to.meta.middleware){
    const middleware = Array.isArray(to.meta.middleware) ? to.meta.middleware : [to.meta.middleware];
    const ctx = {
      from,
      next,
      router,
      to
    }

    const nextMiddleware = nextCheck(ctx, middleware, 1);
    return middleware[0]({...ctx, nextMiddleware});

  }
  return next();
});

export default router

