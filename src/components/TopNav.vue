<template>
  <div class="topNav">
    <router-link to="/" class="logo" >
      <img src="../assets/image/logo2.png" alt="" width="40">
      </router-link>
    <ul class="menu">
      <router-link to="/doc">文档</router-link>
    </ul>
    <span v-if="toggleVisible" class="toggle" @click="toggle">
        <svg class="icon" >
        <use xlink:href="#icon-menu1"></use>
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
  width: 25px; height: 25px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.topNav {
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  display: flex;
  padding: 2px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  justify-content: center;
  align-items: center;
  background: #beedea;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    padding-top: 2px;
    >svg{
     width: 40px;
      height: 40px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    color: #007974;
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