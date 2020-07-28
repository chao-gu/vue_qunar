<template>
  <div>
    <div class="search">
      <input class="search-input" v-model="keyWord" type="text" placeholder="请输入城市名或拼音">
    </div>
    <div class="search_content" ref="search" v-show="keyWord">
      <ul>
        <li class="search_item" v-for="item in list" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
        <li class="search_item" v-show="hasNoData">没有匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CitySearch',
  data () {
    return {
      keyWord: '',
      list: [],
      timer: null
    }
  },
  props: {
    cities: Object
  },
  methods: {
    handleCityClick (city) {
      this.$store.commit('changeCity', city)
      this.$router.push('/')
    }
  },
  watch: {
    keyWord () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyWord) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach(item => {
            if (item.spell.indexOf(this.keyWord) > -1 || item.name.indexOf(this.KeyWord) > -1) {
              result.push(item)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search)
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../../assets/style/varibles.styl'
  .search
    height: .72rem
    padding: 0 .1rem
    background-color: $bgColor
    .search-input
      box-sizing: border-box
      width: 100%
      height: .62rem
      padding: 0 .1rem
      line-height: .62rem
      text-align: center
      border-radius: .06rem
      color: #666
  .search_content
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    z-index 1
    background-color #ccc
    .search_item
      line-height .62rem
      padding-left .2rem
      background-color #fff
      border-bottom 1px solid #eee
</style>
