<template>
  <div class="layout">
    <TopNav class="nav" toggleVisible/>
    <div class="content">
      <aside v-if="asideVisible">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro" active-class="selected">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install"  active-class="selected">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-start"  active-class="selected">开始使用</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch"  active-class="selected">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button"  active-class="selected">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog"  active-class="selected">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs"  active-class="selected">Tabs 组件</router-link>
          </li>
        </ol>
      </aside>
      <main @click="toggleMain">
        <router-view/>
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import TopNav from '../components/TopNav.vue'
import {inject, Ref} from 'vue';
export default {
  setup(){
    const asideVisible=inject<Ref<boolean>>('xxx') //get
    const toggleMain=()=>{
      const width=document.documentElement.clientWidth
      if(width<=500 && asideVisible){
        asideVisible.value=!asideVisible.value
      }
    }
    return {asideVisible,toggleMain}
  },
  components:{TopNav}
}
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    min-width: 100%;
    flex-grow: 1;
    padding: 16px;
    background: white;
  }
}
aside {
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  background: white;
  width: 150px;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  padding: 70px 0 20px;
  height: 100%;
  > h2 {
    margin-bottom: 4px;
    padding: 0 8px;
  }
  > ol {
    > li {

      >a{
        display: block;
        padding: 4px 16px;
        text-decoration: none;
        &.selected{
          background: #f5f5f5;;
        }
      }

    }
  }
  @media(max-width: 500px) {
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 70px;
  }
}
</style>