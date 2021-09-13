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
    const asideVisible=ref(true)
    provide('xxx',asideVisible)
    router.afterEach(()=>{
      asideVisible.value=false
    })
  }
}
</script>
