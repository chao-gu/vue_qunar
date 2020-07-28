<template>
  <div class="wrapper">
    <swiper :options="swiperOptions" v-if="showSwiper">
    <swiper-slide v-for="item in list" :key="item.id">
      <img class="lunbo" :src="item.imgUrl">
    </swiper-slide>
    <!-- <swiper-slide>
      <img class="lunbo" src="~@/images/s2.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img class="lunbo" src="~@/images/s3.jpg" alt="">
    </swiper-slide> -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true
      }
      // swiperList: [
      //   {id: '001', imgUrl: '~@/images/s1.jpg'},
      //   {id: '002', imgUrl: '~@/images/s2.jpg'},
      //   {id: '003', imgUrl: '~@/images/s3.jpg'}
      // ]
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background-color: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    background-color: #eee
    .lunbo
      width: 100%
</style>
