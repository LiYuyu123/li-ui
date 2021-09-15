<template>
  <h1>Button 示例</h1>
<div>
  <Demo :component="Button1Demo"/>
  <Demo :component="Button2Demo"/>
  <Demo :component="Button3Demo"/>
  <Demo :component="Button4Demo"/>
  <Demo :component="Button5Demo"/>
</div>
</template>
<script lang="ts">
import Button1Demo from './button/Button1.demo.vue'
import Button2Demo from './button/Button2.demo.vue'
import Button3Demo from './button/Button3.demo.vue'
import Button4Demo from './button/Button4.demo.vue'
import Button5Demo from './button/Button5.demo.vue'
import Demo from './Demo.vue';
export default {
  components:{Demo, Button1Demo,Button2Demo,Button3Demo,Button4Demo,Button5Demo},
  setup(){
    return {Button1Demo,Button2Demo,Button3Demo,Button4Demo,Button5Demo}
  }
}
</script>