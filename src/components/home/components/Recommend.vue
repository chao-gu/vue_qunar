<template>
  <div>
    <div class="recommend_title">热门推荐</div>
    <ul>
      <li class="item" v-for="item in list" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
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
  .recommend_title
    margin-top: .2rem
    line-height: .8rem
    background-color #eee
    text-indent: .2rem
  .item
    overflow hidden
    display: flex
    height: 1.9rem
    border-bottom: 1px solid #eee
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .item-info
      flex: 1
      padding: .1rem
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
      .item-button
        margin-top: .2rem
        line-height: .44rem
        background-color #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff
</style>
