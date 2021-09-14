<template>
  <div class="gulu-tabs">
    <div class="gulu-tabs-nav">
      <div class="gulu-tabs-nav-item"
           :class="{selected:t===selected}"
           v-for="(t,index) in titles " :key="index"
           @click="select(t)"
      >{{t}}</div>
    </div>
    <div class="gulu-tabs-content">
      <component class="gulu-tabs-content-item"
                 :class="{selected:c.props.title===selected}"
                 v-for="(c,index) in defaults" :key="index" :is="c"/>
    </div>
  </div>
</template>
<script lang="ts">
import Tab from '../lib/Tab.vue'
import {computed} from 'vue';
export default {
  props:{
    selected:{
      type:String
    }
  },
  components:{Tab},
  setup(props:any,context:any){
    const defaults=context.slots.default()
    defaults.forEach((i: { type: any })=>{
      if(i.type!==Tab){
        throw new Error('Tabs 子标签必须是 Tab')
      }
    })
    const select=(title:string)=>{
      console.log('1')
      context.emit('update:selected',title)
    }
    const current=computed(()=>{
      return defaults.filter((tab: { props: { title: any } })=> {return tab.props.title===props.selected})[0]
    })
    const titles= defaults.map((tab: { props: { title:any } })=>{
      return tab.props.title
    })
    return {defaults,titles,current,select}
  }
}
</script>
<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.gulu-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
  }
  &-content {
    padding: 8px 0;
    &-item{
      display: none;
      &.selected{
        display: inline-block;
      }
    }
  }
}
</style>