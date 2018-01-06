<template>
  <div class="nav">
    <ul>
      <router-link to="/home" tag="li" active-class="active">
        <span>首页</span>
      </router-link>
      <router-link to="/follow" tag="li" active-class="active">
        <span>关注</span>
      </router-link>
      <router-link to="/column" tag="li" active-class="active">
        <span>栏目</span>
      </router-link>
    </ul>
  </div>
</template>

<style scope>
  .nav {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    background: #fff;
  }

  .nav ul {
    width: 70%;
    height: 44px;
    display: flex;
    margin: 0 auto;
  }

  .nav ul li {
    flex: 1;
    text-align: center;
    display: block;
    font-size: 14px;
    color: rgb(77, 85, 93);
    height: 100%;
    width: 100%;
  }

  .nav ul li span {
    display: block;
    width: 100%;
    height: 30px;
    line-height: 30px;
    padding: 7px 0;
    text-align: center;
    font-size: 14px;
    color: #9e9a95;
  }

  .nav ul li.active span {
    height: 34px;
    line-height: 34px;
    padding-top: 5px;
    padding-bottom: 0;
    border-bottom: 5px solid #5477b2;
    color: #5477b2;
    font-size: 20px;
  }
</style>
