<template>
  <div>Dialog示例</div>
  <h1>示例1</h1>
    <Button @click="onClick">toggle</Button>
    <Dialog v-model:visible="x"
            :ok="f1" :cancel="f2"
    >
      <template v-slot:title><div>标题</div></template>
      <template v-slot:content><div>内容</div></template>
    </Dialog>
  <h1>示例2</h1>
  <Button @click="showDialog">show</Button>
</template>
<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue';
import {ref} from 'vue';
import {openDialog} from '../lib/OpenDialog';
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
    const showDialog=()=>{
      openDialog({
        title:'标题',
        content:'内容',
        ok(){
          console.log('1')
        },
        cancel(){
          console.log('2')
        }
      })
    }
    return {x,onClick,f1,f2,showDialog}
  }
}
</script>