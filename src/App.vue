<template>
  <div>
    <router-view/>
  </div>
</template>
<script lang="ts">
import  {ref,provide} from 'vue';

export default {
  name:'APP',
  setup(){
    const asideVisible=ref(false)
    provide('xxx',asideVisible)
  } //set
}
</script>
