<template>
  <div id="home">
    <div class="content mt40">
      <div class="newsList">
        <ul>
          <li v-for="(item,index) in arrList">
            <a>
              <h2>{{index}}. {{item.title}}</h2>
              <p>{{item.detail}}</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        arrList: []
      };
    },
    mounted () {
      this.fetchData();
    },
    methods: {
      fetchData () {
        var _this = this;
        this.$http.get('static/data/follow.data').then(function (res) {
          _this.arrList = res.data;
        }).catch(function (err) {
          console.log('Home', err);
        });
      }
    }
  };
</script>

<style scoped>
  .mt40 {
    margin-top: 40px;
  }

  .content {
    width: 100%;
    margin-bottom: 49px;
  }

  .content .newsList {
    width: 90%;
    margin: 0 auto;
  }

  .newsList ul {
    padding: 0 10px;
  }

  .newsList ul li {
    color: #494d4d;
    padding: 10px 0;
    border-bottom: 1px dashed #ccc;
  }

  .newsList ul li h2 {
    max-height: 20px;
    font-size: 18px;
    overflow: hidden;
  }

  .newsList ul li p {
    max-height: 80px;
    margin-top: 10px;
    overflow: hidden;
  }
</style>
