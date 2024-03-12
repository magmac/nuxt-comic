<template>
  <header>
    <div class="logo" />
    <el-form @submit.prevent.native="handleSubmit">
      <el-input v-model="value" size="mini" placeholder="书籍搜索" clearable>
        <template #append>
          <el-button icon="el-icon-search" native-type="submit" />
        </template>
      </el-input>
    </el-form>
  </header>
</template>

<script>
export default {
  data() {
    return {
      value: null
    }
  },
  methods: {
    handleSubmit() {
    if (!this.value) return
      return this.$emit('path', `search/${this.value}`)
    }
  }
}
</script>

<style scoped lang="scss">
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  background-color: white;
  border: 1px solid #ebe9e9;
}
.logo {
  width: 6rem;
  height: 2.75rem;
  background: url('../static/images/logo.png') center no-repeat;
  background-size: contain;
}
</style>
