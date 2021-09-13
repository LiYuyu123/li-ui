import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory,createRouter} from 'vue-router'
import Lin from '../src/components/Lin.vue'



const history=createWebHashHistory()
const router=createRouter({
    history:history,
    routes:[
        {path:'/',component:Lin}
    ]
})
const app= createApp(App)
    app.use(router)
    app.mount('#app')
