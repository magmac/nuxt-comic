<template>
	<div :class="['image', { error: imgError }]">
		<template v-if="!imgError">
			<transition name="fade-out">
				<div
					v-show="imgLoading"
					v-loading="true"
					class="loading"
				></div>
			</transition>
			<transition name="fade-in">
			<img v-show="!imgLoading" class="img" ref="imgRef" :style="{ objectFit: 'fill' }" @error="handleError" @load="handleLoad" />
			</transition>
		</template>
	</div>
</template>

<script>
export default {
  props: ['src'],
	data() {
		return {
			imgError: false,
			imgLoading: true
		}
	},
	mounted () {
		this.getImgBase64()
	},
	methods: {
		getImgBase64() {
			const vm = this
			fetch(vm.src)
			.then(response => {
				return response.text()
			})
			.then(text => {
				vm.$refs.imgRef.src = text.replace(/\+/g, '*').replace(/\//g, '+').replace(/\*/g, '\/').replace(/\*/g, '\/')
			})
			.catch(() => {
				vm.imgError = true
			})
		},

		handleError () {
      this.imgError = true
    },

    handleLoad () {
			this.imgLoading = false
    }
	}
  
}
</script>

<style lang="scss" scoped>
.image {
	background: #f2f2f2 url('~/static/images/picture.svg') center no-repeat;
	background-size: 2rem;
	position: relative;
	height: 100%;

	&.error {
		background: rgba(0, 0, 0, 0.1) url('~/static/images/logo.png') center no-repeat;
		background-size: 60%;
	}
}

.img {
	position: absolute;
	top: 0;
	left: 0;
}

.loading {
	width: 100%;
	height: 100%;
	z-index: 10;
}

.fade-out-enter-active, .fade-out-leave-active, .fade-in-enter-active, .fade-in-leave-active {
  transition-duration: .1;
}
</style>