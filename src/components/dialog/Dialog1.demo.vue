<demo>
常规使用
</demo>
<template>
  <div>
    <Button @click="onClick">toggle</Button>
    <Dialog v-model:visible="DialogVisible"
            :ok="f1" :cancel="f2"
    >
      <template v-slot:title><div>标题</div></template>
      <template v-slot:content><div>内容</div></template>
    </Dialog>
  </div>
</template>
<script lang="ts">
import {ref} from 'vue';
import Button from '../../lib/Button.vue'
import Dialog from '../../lib/Dialog.vue'
export default {
  components:{
    Button,
    Dialog
  },
  setup(){
    const  DialogVisible=ref(false)
    const onClick=()=>{
      DialogVisible.value=!DialogVisible.value
    }
    const f1=()=>{
      return false
    }
    const f2=()=>{
    }

    return {DialogVisible,onClick,f1,f2}
  }
}
</script>