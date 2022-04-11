<template>
<div>
  <!-- <b-nav-form
    @submit.prevent="search"
  >
    <b-form-input
      type="text"
      class="input mr-sm-2"
      @keypress="setSearchable"
      size="sm"
      placeholder="Search"
      v-model="searchWord"
    ></b-form-input>
    <b-button
      size="sm"
      class="my-2 my-sm-0"
      type="submit"
    ><b-icon-arrow-up></b-icon-arrow-up></b-button>
  </b-nav-form> -->

  <b-nav-form
    @submit.prevent="search"
  >

    <b-input-group size="sm" class="mb-2">
      <b-input-group-prepend is-text>
        <b-icon icon="search"></b-icon>
      </b-input-group-prepend>
      <b-form-input
        type="search"
        placeholder="Search"
        @keypress="setSearchable"
        v-model="searchWord"
      ></b-form-input>
    </b-input-group>

  </b-nav-form>

</div>


</template>

<script>
export default {
  name: 'Search',

  data () {
    return {
      searchable: false,
      searchWord: '',
    }
  }, /* data */

  computed: {

  }, /* computed */

  mounted () {

  }, /* mounted */

  methods: {
    setSearchable () {
      this.searchable = true
    },

    search (e) {
      if (!this.searchWord.trim()) {
        return
      }
      this.$router.push({ path: '/works/search-results', query: {
        q: this.searchWord,
        p: 1,
      } })
    }
  } /* methods */

}
</script>

<style lang="scss" scoped>
.label {
  display: block;
  font-size: 14px;
  font-weight: bold;
  color: var(--color-text-sub);
}
// .input {
//   border: 1px solid var(--color-border);
//   width: 100%;
//   box-sizing: border-box;
//   margin-top: 5px;
//   border-radius: 5px;
//   height: 40px;
//   font-size: 16px;
//   background: url('/images/icon_search.svg') no-repeat 10px center,
//     var(--color-bg-purple-light);
//   padding-left: 40px;
//   box-shadow: none;
//   -webkit-appearance: none;
//   transition: box-shadow 0.2s ease;
//   &:hover {
//     box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1) inset;
//   }
//   &:focus {
//     outline: none;
//     box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1) inset;
//   }
// }
</style>
