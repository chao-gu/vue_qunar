<template>
  <div>
    <div class="weekend_title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item in list" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  },
  data () {
    return {}
  }
}
</script>

<style lang="stylus" scoped>
  .weekend_title
    line-height: .8rem
    background-color #eee
    text-indent: .2rem
  .item
    // overflow hidden
    height: 4.1rem
    border-bottom: 2px solid #ccc
    .item-img
      width: 100%
      // height: 2.5rem
    .item-info
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        overflow hidden
        white-space: newrap
        text-overflow: ellipsis
      .item-desc
        line-height .4rem
        color: #ccc
        overflow hidden
        white-space: newrap
        text-overflow: ellipsis
</style>
