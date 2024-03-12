<template>
  <el-carousel :interval="3500" arrow="always" height="15rem">
    <el-carousel-item v-for="book in books" :key="book.id">
      <div class="imageBox" @click="handleHigh(book.id)">
        <img-load :src="book.horizontal" />
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>

export default {
  props: ['books'],
  methods: {
    handleHigh (id) {
      this.$emit('explosion', id)
    }
  }
}
</script>

<style lang="scss" scoped>
.imageBox {
  height: 100%;
}
</style>