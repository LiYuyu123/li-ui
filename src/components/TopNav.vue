<template>
  <div class="topNav">
    <div class="logo" >
      <svg class="icon" >
        <use xlink:href="#icon-wangguan"></use>
      </svg>
    </div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
    <span class="toggle" @click="toggle"></span>
  </div>
</template>
<script lang="ts">
import {inject,Ref} from 'vue';

export default {
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
    background: red;
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