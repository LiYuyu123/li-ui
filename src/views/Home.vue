<template>
  <div class="topNavAndBanner">
    <TopNav />
    <div class="banner">
      <div class="image"><img src="src/assets/image/logo.png"  alt=""  width="200"></div>
      <h1>Li UI</h1>
      <h2>一个厉害的UI框架</h2>
      <p class="actions">
        <a href="https://github.com">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
  <div class="feature">
    <svg class="icon" >
      <use xlink:href="#icon-Vue"></use>
    </svg>
    <svg class="icon" >
      <use xlink:href="#icon-typescript"></use>
    </svg>
    <svg class="icon" >
      <use xlink:href="#icon-light"></use>
    </svg>
  </div>
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue'
export default {
  components:{TopNav}
}
</script>

<style lang="scss" scoped>
.feature{
  >svg{
    width: 64px;
    height:64px;
  }
}
.topNavAndBanner{
  color: #007974;
  background: linear-gradient(145deg, rgba(227, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%);
  clip-path: ellipse(80% 60% at 50% 40%);
}
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #007974;
  > .actions{
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: #02bcb0;
      color: white;
      display: inline-block;
      padding: 8px 24px;
      border-radius: 4px;
      &:hover{
        text-decoration: none;
      }
    }
  }
}
</style>