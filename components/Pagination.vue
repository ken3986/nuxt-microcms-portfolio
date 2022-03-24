<template>
  <div class="wrapper">
    <!-- <ul class="pager">
      <li class="page arrow" v-if="current > 1">
        <NuxtLink :to="getPath(current - 1)">
          <img src="" alt="前のページへ">
        </NuxtLink>
      </li>
      <li class="page" v-if="3 < current">
        <NuxtLink :to="getPath(1)">1</NuxtLink>
      </li>
      <li class="omission" v-if="4 < current">...</li>
      <li class="page"
        v-for="p in pager"
        :key="p"
        v-show="current - 3 <= p && p <= current + 1"
        :class="{ active: current === p + 1 }"
      >
        <NuxtLink :to="getPath(p + 1)">{{ p + 1 }}</NuxtLink>
      </li>
      <li class="omission" v-if="current + 3">...</li>
      <li class="page" v-if="current + 2 < pager.length">
        <NuxtLink :to="getPath(pager.length)">{{ pager.length }}</NuxtLink>
      </li>
      <li class="page arrow" v-if="current < pager.length">
        <NuxtLink :to="getPath(current + 1)">
          <img src="" alt="次のページへ">
        </NuxtLink>
      </li>
    </ul> -->

    <b-pagination-nav
      :value="current"
      :number-of-pages="pager.length > 0 ? pager.length : 1"
      :link-gen="linkGen"
    ></b-pagination-nav>
  </div>
</template>

<script>
export default {
  name: 'Pagination',

  props: {
    pager: {
      type: Array,
      required: false,
      default: () => []
    },
    current: {
      type: Number,
      required: true,
    },
    category: {
      type: Object,
      required: false,
      default: undefined,
    },
    tag: {
      type: Object,
      required: false,
      default: undefined,
    }
  },

  data () {
    return {

    }
  }, /* data */

  computed: {

  }, /* computed */

  mounted () {
    // console.log(this.tag)
    // console.log(this.pager)
  }, /* mounted */

  methods: {
    getPath(p) {
      return `/${
        this.category !== undefined ? `category/${this.category.id}/` : ''
      }page/${p}`
    },

    linkGen (pageNum) {
      if (this.category !== undefined) {
        return `/works/category?categoryId=${this.category.id}?page=${pageNum}`
      } else if (this.tag !== undefined) {
        return `/works/tag/${this.tag.id}?page=${pageNum}`
      } else {
        return `?page=${pageNum}`
      }
    }
    // linkGen (pageNum) {
    //   if (this.category !== undefined) {
    //     return `/category/${this.category.id}/page/${pageNum}`
    //   } else if (this.tag !== undefined) {
    //     return `/tag/${this.tag.id}/page/${pageNum}`
    //   } else {
    //     return `/page/${pageNum}`
    //   }
    // }
  } /* methods */

}
</script>


<style>

</style>
