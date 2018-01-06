<template>
  <div class="banner">
    <swiper ref="mySwiper" :options="swiperOption">
      <swiper-slide v-for="slide in bannerList" :key="slide.id">
        <router-link :to="slide.linkTo">
          <img :src=slide.img>
          <div class="text-box">
            <h2>{{slide.title}}</h2>
            <p>{{slide.desc}}</p>
          </div>
        </router-link>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script type="text/ecmascript-6">
  import {swiper, swiperSlide} from 'vue-awesome-swiper';
  require('swiper/dist/css/swiper.css');
  export default{
    data () {
      return {
        swiperOption: {
          notNextTick: true,
          autoplay: 1000,
          autoplayDisableOnInteraction: false,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          centeredSlides: true,
          autoHeight: true,
          mousewheelControl: true,
          observer: true,
          observeParents: true,
          loop: true,
          slidesPerView: 'auto',
          spaceBetween: 0
        },
        bannerList: [
          {
            id: 0,
            img: require('../assets/images/img_1.jpg'),
            title: '还可以降低首付款健身房11111',
            desc: '刘德华11 / 文',
            linkTo: '/home'
          },
          {
            id: 1,
            img: require('../assets/images/img_2.jpg'),
            title: '还可以降低首付款健身房2222',
            desc: '刘德华22 / 文',
            linkTo: '/home'
          },
          {
            id: 2,
            img: require('../assets/images/img_3.jpg'),
            title: '还可以降低首付款健身房333',
            desc: '刘德华33 / 文',
            linkTo: '/home'
          }
        ]
      };
    },
    components: {
      swiper,
      swiperSlide
    }
  };
</script>

<style>
  .banner {
    position: relative;
  }

  .banner .swiper-container {
    position: relative;
    height: 250px;
    width: 100%;
  }

  .banner .swiper-container .swiper-wrapper {
    height: 100%;
  }

  .banner .swiper-container .swiper-wrapper .swiper-slide {
    display: inline-block;
    height: 100%;
  }

  .banner .swiper-container .swiper-wrapper .swiper-slide a {
    display: inline-block;
    width: 100%;
    height: 100%;
  }

  .banner .swiper-container .swiper-wrapper .swiper-slide img {
    display: inline-block;
    width: 100%;
    height: 100%;
  }

  .banner .swiper-container .swiper-pagination .swiper-pagination-bullet {
    background: white;
    opacity: 0.5;
  }

  .banner .swiper-container .swiper-pagination .swiper-pagination-bullet-active {
    opacity: 1;
    background: deepskyblue;
  }

  .banner .swiper-container .swiper-wrapper .text-box {
    width: 100%;
    padding: 0 20px;
    padding-bottom: 10px;
    position: absolute;
    left: 0;
    bottom: 0;
    color: #fff;
    background: rgba(0, 0, 0, 0.5);
  }

  .banner .swiper-container .text-box h2 {
    font-size: 17px;
    font-weight: normal;
    margin-top: 10px;
    line-height: 100%;
    margin-bottom: 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .banner .swiper-container .text-box p {
    line-height: 100%;
  }
</style>
