<template>
  <Switch v-model:value="boolean" disabled/>
</template>
<script lang="ts">
import Switch from '../lib/Switch.vue';
import {ref} from 'vue';

export default {
  components:{Switch},
  setup(){
    const boolean=ref(false)
    return {boolean}
  }
}
</script>