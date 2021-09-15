<template>
    <article class="markdown-body" v-html="content">
    </article>
</template>

<script lang="ts">
import {ref} from 'vue';

export default {
  props:{
    path:{
      type:String,
      required:true
    }
  },
  setup(props:any){
    const content =ref(null)
    import(props.path).then((resolve)=>{
      content.value=resolve.default
    })
    return {content}
  }
}
</script>