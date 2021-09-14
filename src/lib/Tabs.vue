<template>
  <div>
    <div v-for="(i,index) in titles " :key="index" >{{i}}</div>
   <component  v-for="(t,index) in defaults"  :is="t" :key="index" />
  </div>
</template>
<script lang="ts">
import Tab from '../lib/Tab.vue'
export default {
  components:{Tab},
  setup(props,context){
    const defaults=context.slots.default()
    defaults.forEach(i=>{
      if(i.type!==Tab){
        throw new Error('Tabs 子标签必须是 Tab')
      }
    })
  const titles= defaults.map(tab=>{
      return tab.props.title
    })
    return {defaults,titles}
  }
}
</script>