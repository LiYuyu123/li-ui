<template>
  <div class="topNav">
    <router-link to="/" class="logo" >
      <svg class="icon" >
        <use xlink:href="#icon-wangguan"></use>
      </svg>
      </router-link>
    <ul class="menu">
      <router-link to="/doc">文档</router-link>
    </ul>
    <span v-if="toggleVisible" class="toggle" @click="toggle">
        <svg class="icon" >
        <use xlink:href="#icon-menu"></use>
      </svg>
    </span>
  </div>
</template>
<script lang="ts">
import {inject,Ref} from 'vue';

export default {
  props:{
    toggleVisible:{
      type:Boolean,
      default:false
    }
  },
setup(){
  const asideVisible=inject<Ref<boolean>>('xxx') //get
  const toggle=()=>{
    if(asideVisible) {
      asideVisible.value = !asideVisible.value
    }
  }
  return {toggle}
}
}
</script>

<style lang="scss" scoped>
.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.topNav {
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    >svg{
     width: 32px;
      height: 32px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  >.toggle{
    display: none;
    width: 24px;
    height: 24px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);

  }
  @media (max-width: 500px){
    >.toggle{display: inline-block}
    >.menu{display: none}
    >.logo{margin: 0 auto}
  }
}
</style>