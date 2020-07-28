<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="header-back">
        <span class="iconfont">&#xe743;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '../../../assets/style/varibles.styl'
  .header
    position: relative
    overflow: hidden
    height: .86rem
    line-height: .86rem
    text-align: center
    color: #fff
    background-color: $bgColor
    font-size: .32rem
    .header-back
      position: absolute
      top: 0
      left: 0
      width: .64rem
      text-size: .4rem
      color: #fff
</style>
