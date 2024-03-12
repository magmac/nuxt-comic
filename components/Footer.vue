<template>
  <footer class="fixed">
    <ul>
      <li>
        <span class="link active">
          <font-awesome-icon icon="home" class="icon" />
          漫画
        </span>
      </li>
      <li>
        <span class="link" @click="handlePath('bookshelf/history')">
          <font-awesome-icon icon="book" class="icon" />
          阅读记录
        </span>
      </li>
      <li>
        <a class="link" @click="handlePath('video')">
          <font-awesome-icon icon="play-circle" class="icon" />
          视频
        </a>
      </li>
      <li>
        <a class="link" @click="handlePath('member')">
          <font-awesome-icon icon="user" class="icon" />
          我的
        </a>
      </li>
      <li>
        <a class="link" @click="handlePath('customer')">
          <font-awesome-icon icon="comments" class="icon" />
          客服
        </a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  methods: {
		handlePath (path) {
      this.$emit('path', path)
    }
	}
}
</script>

<style scoped lang="scss">
footer {
  bottom: 0;
  z-index: 100;
  width: 100%;
  background-color: white;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.3);

  ul {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 4rem;
    text-align: center;

    li {
      flex: 20% 0 0;
      height: 100%;

      .link {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        font-size: 0.9rem;
        color: $primary;

        &.active {
            border-bottom: 0.2rem solid $primary;
        }
      }
    }
  }
}

.icon {
  margin-bottom: 0.2rem;
  font-size: 1.6rem;
  color: $primary;
}

.icon_video {
  font-size: 2.5rem;
}
</style>
