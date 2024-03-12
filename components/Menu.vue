<template>
  <ul>
    <li>
      <span class="more" @click="handlePath('more/10')">
        <font-awesome-icon icon="list" class="icon icon_list" /><br />
        榜单
      </span>
    </li>
    <li>
      <a class="more" @click="handlePath('category')">
        <font-awesome-icon icon="box" class="icon icon_box" /><br />
        分类
      </a>
    </li>
    <li>
      <a class="more" @click="handlePath('deposit')">
        <font-awesome-icon icon="balance-scale" class="icon icon_balance_scale" /><br />
        充值
      </a>
    </li>
    <li>
      <a class="more" @click="handlePath('video')">
        <font-awesome-icon icon="video" class="icon icon_video" /><br />
        视频
      </a>
    </li>
    <li>
      <a class="more" @click="handlePath('bulletin')">
        <font-awesome-icon icon="bullhorn" class="icon icon_bullhorn" /><br />
        公告
      </a>
    </li>
  </ul>
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
ul {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0.6rem 0;
  text-align: center;
  background-color: white;

  li {
    .more {
      display: block;
      font-weight: bold;
    }
  }
}

.icon {
  width: 2.8rem;
  height: 2.8rem;
  padding: 0.6rem;
  color: white;
  border-radius: 0.5rem;
}

.icon_list {
    background-color: $primary;
}

.icon_box {
  background-color: #7bc7ff;
}

.icon_balance_scale {
  background-color: #fe6bc7;
}

.icon_video {
  background-color: #f0c30f;
}

.icon_bullhorn {
  background-color: #ff528b;
}
</style>
