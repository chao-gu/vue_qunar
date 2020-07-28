<template>
  <div class="header">
      <div class="header-left">
        <span class="iconfont">&#xe743;</span>
      </div>
      <div class="header-input">
        <span class="iconfont">&#xe8b9;</span>
        输入城市景点/游玩/主题
      </div>
      <router-link to="/city">
        <div class="header-right">
          <!-- {{this.$store.state.city}} -->
          {{this.city}}
          <span class="iconfont arrow-icon">&#xe7b2;</span>
        </div>
      </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  props: {
    // city: String
  },
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/style/varibles.styl'
.header
  display: flex
  line-height: .86rem
  background-color: $bgColor
  color: #fff
  .header-left
    width: .64rem
    float: left
    text-align: center
  .header-input
    flex: 1
    height: .64rem
    line-height: .64rem
    margin-top: .12rem
    margin-left: .2rem
    background-color #fff
    color: #ccc
    border-radius: .1rem
    padding-left: .1rem
  .header-right
    min-width: 1.04rem
    padding: 0 0.1rem
    float: right
    text-align: center
    color: #fff
    .arrow-icon
      margin-left: -.1rem
</style>
