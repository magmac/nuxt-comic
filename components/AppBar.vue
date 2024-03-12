<template>
	<div v-if="showApp" class="appBar">
    <div class="left">
      <div class="icon"></div>
      <div>
        <p>奈斯漫画</p>
        <p>海量未删减高品质漫画抢先看</p>
      </div>
    </div>
    <div class="right">
      <span class="link" @click="handlePath('download')"> 下载APP </span>
      <i class="el-icon-close" @click="closeShowApp" />
    </div>
  </div>
</template>

<script>
export default {
	data() {
    return {
      showApp: true
    }
  },

	methods: {
		closeShowApp() {
			this.showApp = false
		},
		handlePath (path) {
      this.$emit('path', path)
    }
	}
}
</script>

<style scoped lang="scss">
.appBar {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 3.2rem;
	padding: 0 0.6rem;
	background-color: white;
	border: 1px solid #ebe9e9;

	.left {
		display: flex;
		align-items: center;

		.icon {
			width: 2.5rem;
			height: 2.5rem;
			background: url('~/static/images/appIcon.png') center no-repeat;
			background-size: contain;
		}

		p {
			padding-left: 0.5rem;
			font-size: 0.8rem;
			color: $primary;
		}
	}

	.right {
		display: flex;
		align-items: center;

		.link {
			padding: 0.3rem 0.5rem;
			margin-right: 0.5rem;
			font-size: 0.8rem;
			color: white;
			background-color: $primary;
			border-radius: 10rem;
		}

		.el-icon-close {
			padding: 0.3rem 0 0.3rem 0.3rem;
			font-size: 1.2rem;
			font-weight: bold;
		}
	}
}
</style>
