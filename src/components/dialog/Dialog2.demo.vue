<demo>
一键打开 Dialog
</demo>
<template>
  <div>
    <Button @click="showDialog">show</Button>
  </div>
</template>
<script lang="ts">
import Button from "../../lib/Button.vue";
import {openDialog} from '../../lib/OpenDialog';

export default {
  components: {
    Button
  },
  setup() {
    const showDialog = () => {
      openDialog({
        title: '标题',
        content: '这是一段内容',
        maskClosable: false,
        ok() {
          console.log('ok')
        },
        cancel() {
          console.log('cancel')
        }
      })
    }
    return {
      showDialog
    }
  }
}
</script>