<template>
  <header class="site-header">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand :to="`/`">{{ title }}</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">
            <NuxtLink
              :to="`/`"
              class="link"
            >Works</NuxtLink></b-nav-item>
          <b-nav-item href="#">
            <NuxtLink
              :to="`/about`"
              class="link"
            >About</NuxtLink>
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <!-- 検索ウィンドウ -->
          <Search></Search>

          <!-- <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown> -->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
export default {
  name: 'Header',

  data () {
    return {
      title: this.$config.siteName,
    }
  }, /* data */

  computed: {

  }, /* computed */

  mounted () {

  }, /* mounted */

  methods: {

  } /* methods */

}
</script>





<style>

</style>
