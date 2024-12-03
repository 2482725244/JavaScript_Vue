import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Detail from '../components/Detail.vue'
import TestView from '../components/TestView.vue'
import TestList from '../components/TestList.vue'
Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: '/Home',
            component: Home,
            meta: {
                title: '主页'
            },
            children: [
                    {
                        name: 'cctv1',
                        path: 'detail',
                        component: Detail,
                        meta: {
                            title: "详情"
                        },
                        props($route){
                            return {id:$route.query.id, name: $route.query.name}
                        }
                    }
                ]
        },
        {
            path: '/About',
            component: About,
            children: [
                {
                    name: 'tview',
                    path: 'TestView',
                    component: TestView,
                    meta: {
                        title: '输入'
                    },
                    props($router){
                        return {
                            msg: $router.query.msg
                        }
                    }
                },
                {
                    name: 'tlist',
                    path: 'TestList',
                    component: TestList,
                    meta:{
                        msg: true,
                        title: '列表'
                    }
                }
            ],
            meta: {
                title: '关于'
            }
        }
    ]
})

router.beforeEach((to,from,next)=>{
    if (to.meta.msg){
        if(localStorage.getItem('school') === 'beijing'){
            next()
        }else {
            alert("学校错误")
        }
    } else{
        next()
    }
})

router.afterEach((to,from)=>{
    console.log("欢迎进入————>",to.path,"您来自-->",from.path)
    document.title = to.meta.title || "vue项目"
})
export default router