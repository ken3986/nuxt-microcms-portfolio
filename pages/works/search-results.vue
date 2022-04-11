<template>
  <div class="searchResult">
    <p v-show="searchText">「{{ searchText }}」の検索結果</p>
    <div class="loader" v-if="loading === true">
      <img
        class="loadingIcon"
        src=""
        alt="検索中..."
      >
    </div>
    <div v-else>
      <div class="loader"
        v-show="loading === false && posts.length === 0"
      >記事がありません</div>
    </div>
    <!-- 記事リスト -->
    <PostList
      :posts="posts"
    ></PostList>

    <Pagination
      v-show="posts.length > 0"
      :pager="pager"
      :current="Number(page)"
      :searchText="searchText"
    ></Pagination>
  </div>
</template>

<script>
import axios from 'axios'
import WorksMixin from '@/mixins/worksMixin'

export default {
  name: 'SearchResults',

  layout: 'works',

  mixins: [ WorksMixin ],

  data () {
    return {
      searchable: true,
      posts: this.posts || [],
      postsTotalCount: this.postsTotalCount || 0,
      loading: true,
      q: this.$route.query.q,

      searchText: '',
    }
  }, /* data */

  computed: {

  }, /* computed */

  created () {
    // 直接遷移時にも動作
    const query = this.$route.query
    this.search(query.q)
  }, /* mounted */

  methods: {
    setSearchable () {
      this.searchable = true
    },

    // 検索
    async search (q = '') {
      if (!q.trim()) {
        return
      }
      this.loadingStart()
      const { data, error }  = await axios
        .get(`/.netlify/functions/search?q=${q}`)
        .catch((error) => ({ error }))
      this.loadingFinish()
      if (error) {
        console.log(error)
        return
      }
      this.searchText = q
      this.posts = data.contents
      this.postsTotalCount =  data.totalCount
      this.searchable = false
    },

    loadingStart () {
      this.loading = true
    },
    loadingFinish () {
      this.loading = false
    }
  }, /* methods */

  beforeRouteUpdate(to, from, next) {
    // クエリ変更時にも動作
    const query = to.query
    this.search(query.q)
    next()
  },

}
</script>





<style lang="scss" scoped>
.search {
  border: 1px solid var(--color-border);
  width: 100%;
  box-sizing: border-box;
  border-radius: 5px;
  height: 40px;
  font-size: 16px;
  background: url('/images/icon_search.svg') no-repeat 10px center,
    var(--color-bg-purple-light);
  padding-left: 40px;
  margin-bottom: 20px;
  box-shadow: none;
  -webkit-appearance: none;
  transition: box-shadow 0.2s ease;
  &:hover {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1) inset;
  }
  &:focus {
    outline: none;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1) inset;
  }
}
.loadingIcon {
  width: 38px;
  height: 38px;
}
@media (min-width: 1160px) {
  .loader {
    color: #ccc;
    font-size: 20px;
    text-align: center;
    padding: 150px;
  }
  .pager {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 40px 0 0;
  }
  .page {
    width: 40px;
    height: 40px;
    background-color: #e5eff9;
    border-radius: 5px;
    margin: 10px;
    &.active {
      background-color: #3067af;
      a {
        color: #fff;
      }
    }
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      color: #3067af;
    }
  }
  .divider {
    display: flex;
    justify-content: space-between;
    width: 1160px;
    margin: 20px auto 0;
  }
  .container {
    width: 820px;
  }
  .aside {
    width: 300px;
  }
  .banner {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 300px;
    height: 250px;
    background-color: #2b2c30;
    color: #fff;
    border-radius: 5px;
    img {
      width: 160px;
      margin-top: 10px;
    }
    p {
      margin-top: 30px;
      color: #999;
      padding-top: 10px;
      font-size: 14px;
      width: 260px;
      text-align: center;
      border-top: 1px solid #666;
    }
    span {
      display: block;
      border: 1px solid #fff;
      width: 120px;
      margin: 0 auto;
      text-align: center;
      margin-top: 10px;
      padding: 4px 0;
      font-size: 14px;
    }
  }
  .pageTitle {
    font-size: 24px;
    font-weight: bold;
  }
  .list {
    padding: 20px 0;
  }
  .link {
    display: flex;
    justify-content: space-between;
  }
  .ogimage {
    width: 335px;
    height: 176px;
    border-radius: 5px;
  }
  .content {
    flex: 1;
    margin-left: 40px;
  }
  .title {
    font-size: 20px;
    font-weight: bold;
  }
}
@media (min-width: 820px) and (max-width: 1160px) {
  .loader {
    color: #ccc;
    text-align: center;
    font-size: 16px;
    padding-top: 20px;
  }
  .pager {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 40px 0 0;
  }
  .page {
    width: 40px;
    height: 40px;
    background-color: #e5eff9;
    border-radius: 5px;
    margin: 10px;
    &.active {
      background-color: #3067af;
      a {
        color: #fff;
      }
    }
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      color: #3067af;
    }
  }
  .divider {
    margin: 20px auto 0;
    width: 740px;
  }
  .article {
    width: 740px;
  }
  .aside {
    margin-top: 60px;
  }
  .banner {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 300px;
    height: 250px;
    background-color: #2b2c30;
    color: #fff;
    border-radius: 5px;
    img {
      width: 160px;
      margin-top: 10px;
    }
    p {
      margin-top: 30px;
      color: #999;
      padding-top: 10px;
      font-size: 14px;
      width: 260px;
      text-align: center;
      border-top: 1px solid #666;
    }
    span {
      display: block;
      border: 1px solid #fff;
      width: 120px;
      margin: 0 auto;
      text-align: center;
      margin-top: 10px;
      padding: 4px 0;
      font-size: 14px;
    }
  }
  .pageTitle {
    font-size: 24px;
    font-weight: bold;
  }
  .list {
    padding: 20px 0;
  }
  .link {
    display: flex;
    justify-content: space-between;
  }
  .ogimage {
    width: 335px;
    height: 176px;
    border-radius: 5px;
  }
  .content {
    flex: 1;
    margin-left: 40px;
  }
  .title {
    font-size: 20px;
    font-weight: bold;
  }
}
@media (max-width: 820px) {
  .loader {
    color: #ccc;
    text-align: center;
    font-size: 16px;
    padding-top: 20px;
  }
  .pager {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 40px 0 0;
  }
  .page {
    width: 32px;
    height: 32px;
    background-color: #e5eff9;
    border-radius: 5px;
    margin: 6px;
    &.active {
      background-color: #3067af;
      a {
        color: #fff;
      }
    }
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      color: #3067af;
    }
  }
  .divider {
    margin: 20px 0 0;
    padding: 0 20px;
  }
  .article {
    width: 100%;
  }
  .aside {
    margin-top: 60px;
    width: 100%;
  }
  .banner {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 250px;
    background-color: #2b2c30;
    color: #fff;
    border-radius: 5px;
    img {
      width: 160px;
      margin-top: 10px;
    }
    p {
      margin-top: 30px;
      color: #999;
      padding-top: 10px;
      font-size: 14px;
      width: 260px;
      text-align: center;
      border-top: 1px solid #666;
    }
    span {
      display: block;
      border: 1px solid #fff;
      width: 120px;
      margin: 0 auto;
      text-align: center;
      margin-top: 10px;
      padding: 4px 0;
      font-size: 14px;
    }
  }
  .pageTitle {
    font-size: 24px;
    font-weight: bold;
  }
  .list {
    padding: 32px 0 0;
    border-bottom: 1px solid #eee;
    &:first-child {
      padding-top: 16px;
    }
  }
  .ogimage {
    width: 100%;
    border-radius: 5px;
  }
  .title {
    font-size: 20px;
    font-weight: bold;
    margin-top: 10px;
  }
}
</style>

