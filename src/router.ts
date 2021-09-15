import {createWebHashHistory,createRouter} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from  './components/ButtonDemo.vue'
import DialogDemo from  './components/DialogDemo.vue'
import TabsDemo from  './components/TabsDemo.vue'
import DocDemo from  './components/DocDemo.vue'
import {h} from 'vue'
import Markdown from './components/Markdown.vue';

const history=createWebHashHistory()
const md=(path: any)=>h(Markdown,{path:`../markdown/${path}`,key:path})
export const router=createRouter({
    history:history,
    routes:[
        {path:'/',component:Home},
        {path:'/doc',component:Doc,children:[
                {path:'',component:DocDemo},
                {path:'intro',component:md('intro.md')},
                {path:'get-start',component:md('getStart.md')},
                {path:'install',component:md('install.md')},
                {path:'switch',component:SwitchDemo},
                {path:'button',component:ButtonDemo},
                {path:'dialog',component:DialogDemo},
                {path:'tabs',component:TabsDemo}
            ]}
    ]
})
