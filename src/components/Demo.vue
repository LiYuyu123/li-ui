<template>
  <div class="demo">
    <h2>{{component.__sourceCodeTitle}}</h2>
    <div class="demo-component">
      <Component :is="component"/>
    </div>
    <div class="demo-actions">
      <Button @click="toggleNameAndCoed">{{nameVisible}}</Button>
    </div>
    <div class="demo-code" v-if="coedVisible">
      <pre class="language-html" v-html="html" />
    </div>
  </div>
</template>
<script lang="ts">
import Button from '../lib/Button.vue';
import 'prismjs';
import {computed, ref} from 'vue';
const Prism = (window as any).Prism;
export default {
  props:{
    component:Object
  },
  components:{Button},
  setup(props){
    const coedVisible=ref(true)
    const nameVisible=ref('隐藏代码')
    const toggleNameAndCoed=()=>{
        coedVisible.value=!coedVisible.value
        if(nameVisible.value==='隐藏代码'){
          nameVisible.value='查看代码'
        }else {
          nameVisible.value='隐藏代码'
        }
    }
    const  html=computed(()=>{
     return  Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html')
    })
    return{Prism,html,toggleNameAndCoed,coedVisible,nameVisible}
  }
}
</script>
<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  >h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color; //虚线
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    >pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>