<template>
  <div>
    <router-view/>
  </div>
</template>
<script lang="ts">
import  {ref,provide} from 'vue';
import {router} from './router';

export default {
  name:'APP',
  setup(){
    const width=document.documentElement.clientWidth
    const asideVisible=ref(width >= 500)
    provide('xxx',asideVisible)
    router.afterEach(()=>{ //路由切换时就为false
      if(width<=500){
        asideVisible.value=false
      }
    })
  }
}
</script>
