<template>
  <div class="gulu-tabs">
    <div class="gulu-tabs-nav" ref="container">
      <div class="gulu-tabs-nav-item"
           :class="{selected:t===selected}"
           v-for="(t,index) in titles " :key="index"
           :ref="el=>{
             if(t===selected){
               selectedItem=el
           }
           } "
           @click="select(t)"
      >{{ t }}
      </div>
      <div class="gulu-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="gulu-tabs-content">
      <component class="gulu-tabs-content-item"
                 :class="{selected:c.props.title===selected}"
                 v-for="(c,index) in defaults" :key="index" :is="c"/>
    </div>
  </div>
</template>
<script lang="ts">
import Tab from '../lib/Tab.vue';
import {onMounted, ref, watchEffect} from 'vue';

export default {
  props: {
    selected: {
      type: String
    }
  },
  components: {Tab},
  setup(props: any, context: any) {
    const selectedItem = ref<HTMLDivElement | null>(null);
    const indicator = ref<HTMLDivElement | null>(null);
    const container = ref<HTMLDivElement | null>(null);
    const defaults = context.slots.default();
    const action = () => {
      const div = selectedItem.value;
      if (div) {
        const {width} = div.getBoundingClientRect();
        const {left: left2} = div.getBoundingClientRect();
        if (container.value) {
          const {left: left1} = container.value.getBoundingClientRect();
          const left = left2 - left1;
          if (indicator.value) {
            indicator.value.style.width = width + 'px';
            indicator.value.style.left = left + 'px';
          }
        }
      }
    };

    onMounted(() => {
      watchEffect(action,{flush:'post'});//表示watchEffect后执行
    });


    defaults.forEach((i: { type: any }) => {
      if (i.type !== Tab) {
        throw new Error('Tabs 子标签必须是 Tab');
      }
    });
    const select = (title: string) => {
      context.emit('update:selected', title);
    };

    const titles = defaults.map((tab: { props: { title: any } }) => {
      return tab.props.title;
    });
    return {defaults, titles, select, selectedItem, indicator, container};
  }
};
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
    position: relative;

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

    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;

    &-item {
      display: none;
      &.selected {
        display: inline-block;
      }
    }
  }
}
</style>