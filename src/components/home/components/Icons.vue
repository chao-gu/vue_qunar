<template>
  <div class="icons">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class="icons_item"  v-for="item in page" :key="item.id">
          <div class="icons_img">
            <img :src="item.imgUrl" alt="">
          </div>
          <p class="icons_text">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  data () {
    return {
      swiperOptions: {
        autoplay: false
      }
    }
  },
  props: {
    list: Array
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scope>
  @import '../../../assets/style/varibles.styl'
  .icons .swiper-container
    height: 0
    padding-bottom: 50%
  .icons
    margin-top: .1rem
    .icons_item
      position: relative
      float: left
      width: 25%
      padding-bottom: 25%
      height: 0
      .icons_img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        box-sizing: border-box
        padding: .1rem
        img
          display: block
          margin: 0 auto
          height: 100%
      .icons_text
        position: absolute
        bottom: 0
        right 0
        left 0
        line-height .44rem
        height: .44rem
        text-align: center
        color: darkTextColor
        overflow: hidden
        white-space: nowrap
        text-overflow: ellipsis
</style>
