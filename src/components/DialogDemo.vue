<template>
  <div>Dialog示例</div>
  <h1>示例</h1>
    <Button @click="onClick">toggle</Button>
    <Dialog v-model:visible="x"
            :ok="f1" :cancel="f2"
    >
      <template v-slot:title><div>标题</div></template>
      <template v-slot:content><div>第一行字</div></template>
    </Dialog>

</template>
<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue';
import {ref} from 'vue';
export default {
  components:{Button, Dialog},
  setup(){
    const x=ref(false)
    const onClick=()=>{
      x.value=!x.value
    }
    const f1=()=>{
      return false
    }
    const f2=()=>{
    }
    return {x,onClick,f1,f2}
  }
}
</script>