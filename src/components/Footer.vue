<template>
  <div class="foot-btn">
    <ul>
      <router-link class="home" to="/home" tag='li' active-class="active">
        <span></span>
      </router-link>
      <router-link class="write" to='/follow' tag='li' active-class="active">
        <span></span>
      </router-link>
      <router-link class="my" to="/user-info" tag='li' active-class="active">
        <span></span>
      </router-link>
    </ul>
  </div>
</template>

<style scope>
  .foot-btn {
    width: 100%;
    height: 49px;
    background: #fff;
    position: fixed;
    left: 0;
    bottom: 0;
    border-top: 1px solid #f5f5f5;
  }

  .foot-btn ul {
    width: 100%;
    height: 100%;
    display: flex;
  }

  .foot-btn li {
    flex: 1;
    text-align: center;
    display: block;
    font-size: 14px;
    color: rgb(77, 85, 93);
    height: 100%;
  }

  .foot-btn .home span {
    display: block;
    width: 30px;
    height: 44px;
    background: url(../assets/img/home.png) no-repeat 0 0;
    background-size: 100%;
    margin: 0 auto;
    margin-top: 5px;
  }

  .foot-btn .write span {
    display: block;
    width: 50px;
    height: 50px;
    background: url(../assets/img/write.png) no-repeat 0 0;
    background-size: 100%;
    margin: 0 auto;
  }

  .foot-btn .my span {
    display: block;
    width: 30px;
    height: 63px;
    background: url(../assets/img/my1.png) no-repeat 0 0;
    background-size: 100%;
    margin: 0 auto;
    margin-top: 5px;
  }

</style>
