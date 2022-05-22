<template>
  <header class="header">

    <b-navbar toggleable="lg" type="dark" variant="add">
        <b-container>
          <b-navbar-brand :to="`/`" class="logo">{{ title }}</b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="header-menu">
              <b-nav-item
                :to="`/works`"
                class="header-menu-link"
              >Works</b-nav-item>
              <b-nav-item
                :to="`/about`"
                class="header-menu-link"
              >About</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <!-- <button @click.prevent="logout" v-show="$store.state.loggedIn">ログアウト</button> -->
              <!-- <b-nav-item-dropdown text="Lang" right>
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
                <b-dropdown-item href="#">RU</b-dropdown-item>
                <b-dropdown-item href="#">FA</b-dropdown-item>
              </b-nav-item-dropdown> -->
            </b-navbar-nav>
          </b-collapse>
        </b-container>
      </b-navbar>
  </header>
</template>

<script>
export default {
  name: 'Header',

  data () {
    return {
      title: this.$SITE_NAME,
    }
  }, /* data */

  computed: {

  }, /* computed */

  mounted () {

  }, /* mounted */

  methods: {
    logout () {
      this.$store.commit('logout')
      localStorage.removeItem('teten-portfolio')
      this.$router.push({ path: '/' })
    }
  } /* methods */

}
</script>





<style lang="scss" scoped>
.header {
  box-shadow: 0 1px 7px darken($color-body-background, 40%);
}
.navbar {
  height: 100%;
}
.logo {
  font-family: $font-ubuntu;
}
.header-menu-link {
  font-family: $font-ubuntu;
  font-weight: bold;
  text-transform: capitalize;
  // display: inline-block;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background-color: rgba(255, 255, 255, 0.5);
    transition: all 0.2s ease-in-out;
    position: absolute;
    left: 0;
    bottom: 0;
  }

  &:hover {
    text-decoration: none;
    color: #fff;
    &::after {
      width: 100%;
    }
  }
}

</style>
