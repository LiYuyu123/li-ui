<template>
  <div class="topNavAndBanner">
    <TopNav class="topNav"/>
    <div class="banner">
      <div class="image"><img src="../assets/image/logo.png"  alt=""  width="200"></div>
      <h1>Li UI</h1>
      <h2>一个厉害的UI框架</h2>
      <p class="actions">
        <a href="https://github.com/LiYuyu123/li-ui">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
  <div class="feature">
    <ul>
      <li>
        <svg class="icon" >
          <use xlink:href="#icon-Vue"></use>
        </svg>
        <h3>基于 Vue 3</h3>
        <p>使用了 Vue 3 Composition API</p>
      </li>
      <li>
        <svg class="icon" >
          <use xlink:href="#icon-typescript"></use>
        </svg>
        <h3>基于 TypeScript</h3>
        <p>源代码采用 TypeScript 书写</p>
      </li>
      <li>
        <svg class="icon" >
          <use xlink:href="#icon-light"></use>
        </svg>
        <h3>代码易读</h3>
        <p>每个组件的源代码都极其简洁</p>
      </li>
    </ul>
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
  margin: 64px auto;
  @media (min-width: 800px) {
    width: 800px;
    >ul{
      >li{
        width: 33.33%;
      }
    }
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }
  >ul {
    display: flex;
    flex-wrap: wrap;
    >li {
      padding: 0 16px;
      width: 400px;
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
           'icon  title'
           'icon  text';
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      >svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      >h3 {
       grid-area: title;
        font-size: 28px;
      }
      >p {
        grid-area: text;
      }
    }
  }
}
.topNavAndBanner{
  background: linear-gradient(145deg, rgba(227, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%);
  clip-path: ellipse(80% 60% at 50% 40%);
  >.topNav{
    ::v-deep{
      background: none;
      box-shadow: none;
    }
  }
  @media(max-width: 500px) {
    >.topNav{
      display: none;
    }
  }
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
      margin: 15px 8px;
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