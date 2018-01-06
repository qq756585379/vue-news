<template>
  <div class="content">
    <Slider></Slider>
    <div class="newsList">
      <ul>
        <li v-for="(item,index) in arrList">
          <router-link :to="'/article/'+item.id">
            <h2>{{index+1}} . {{item.title}}</h2>
            <p>{{item.detail}}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Slider from './Slider.vue';
  export default {
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
        this.$http.get('static/data/index.data').then(function (res) {
          console.log(res.data);
          _this.arrList = res.data;
        }).catch(function (err) {
          console.log(err);
        });
      }
    },
    components: {
      Slider
    }
  };
</script>

<style scoped>
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
