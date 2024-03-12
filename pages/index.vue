<template>
  <div class="content">
    <app-bar @path="handleLink" />
    <Header @path="handleLink" />
    <Banner :books="category[0].books" @explosion="handleExplosion($event, category[0].moreId)" />
    <Menu @path="handleLink" />
    <template v-for="index in 3">
      <div class="books" :key="index">
        <div class="title">
          <h3>{{ category[index].title }}</h3>
          <span class="more" @click="handleLink(`more/${category[index].choiceId}`)"> 
            更多 
            <font-awesome-icon class="icon" icon="angle-double-right" />
          </span>
        </div>
        <ColumnsBooks :books="category[index].books" @explosion="handleExplosion($event, category[index].moreId)" />
      </div>
    </template>
    <div class="books">
      <div class="title">
        <h3>{{ category[4].title }}</h3>
        <span class="more" @click="handleLink(`more/${category[4].choiceId}`)"> 
          更多 
          <font-awesome-icon class="icon" icon="angle-double-right" />
        </span>
      </div>
      <FullBooks :books="category[4].books" @explosion="handleExplosion($event, category[4].moreId)" />
    </div>
    <Footer @path="handleLink" />
  </div>
</template>

<script>
import AppBar from '~/components/AppBar.vue'
export default {
  components: { AppBar },
  name: 'Home',
  async asyncData ({ $axios, route }) {
    const linkid = route.query.linkid || 0
    const res = await $axios.$post('/api/init', { linkid })
    const { data: { category, domain, rebackId, token } } = res
    return {
      category,
      domain,
      rebackId,
      token
    }
  },

  head () {
    return {
      // title: '標題'
    }
  },

  methods: {
    async handleExplosion (id, moreId) {
      const res = await this.$axios.$post('/api/explosion', { bookId: id, id: moreId, token: this.token })
      this.handleLink(`read/${res.data}`)
    },
    handleLink (path) {
      window.location.href = `${this.domain}${path}?t=${this.token}`
    }
  },

  mounted() {
    const vm = this
    window.history.pushState(null, null)
    this.$nextTick(function () {
      if (vm.rebackId) {
        window.addEventListener('popstate', function () {
          vm.handleLink(`read/${vm.rebackId}`)
        }, false)
      }
    })
  }
}
</script>

<style scoped lang="scss">
.content {
  padding-bottom: 4rem;
}

.title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem 0.5rem 0;
  border-bottom: 0.1rem #eaeaea solid;

  h3 {
    padding-left: 0.5rem;
    font-size: 1.2rem;
    border-left: 0.3rem $primary solid;
  }

  .more {
    font-size: 0.9rem;
  }
}

.books {
  margin-top: 0.8rem;
  background-color: #fff;
}

.icon {
  display: inline-block;
  font-size: inherit;
}
</style>
