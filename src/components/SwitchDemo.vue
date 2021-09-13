<template>
  <div>
   <Switch v-model:value="boolean" />
  </div>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue'
import {ref} from 'vue';
export  default {
  name:'SwitchDemo',
  components:{Switch},
  setup(){
    const boolean=ref(false)
    return {boolean}
  }
}
</script>