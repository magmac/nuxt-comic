<template>
  <div class="box">
    <div v-for="(book, index) in books" :key="index" class="item" @click="handleHigh(book.id)">
      <div class="img">
        <div :class="`serialStatus ${book.status === 1 ? 'serialize' : 'finish'}`">
          {{ book.status === 1 ? '连载' : '完结' }}
        </div>
        <img-load :src="book.vertical" />
      </div>
      <h6>{{ book.title }}</h6>
      <span class="news">
        <i class="el-icon-star-on" />
        {{ book.star }}
        <i class="el-icon-notebook-2" />
        {{ book.read }}
      </span>
    </div>
  </div>
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
.box {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: flex-start;
  margin-top: 0.5rem;
}

.item {
  flex: 32% 0 0;
  margin: 0 0.667% 0.5rem 0.667%;
  cursor: pointer;

  h6 {
    display: -webkit-box;
    margin: 0.1rem 0;
    overflow: hidden;
    font-size: 0.9rem;
    font-weight: normal;
    color: $primary;
    text-overflow: ellipsis;
    word-break: break-all;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  .a_h6 {
    font-size: 0.8rem;
    color: #999;
  }

  .img {
    position: relative;
    height: 11rem;
    overflow: hidden;
    border-radius: 0.3rem;

    .serialStatus {
      position: absolute;
      bottom: 0.5rem;
      left: 0;
      z-index: 11;
      padding: 0.2rem;
      font-size: 0.6rem;
      color: #fff;
      text-align: center;

      &::before,
      &::after {
        position: absolute;
        right: -0.5rem;
        display: block;
        width: 0;
        height: 0;
        content: '';
        border-style: solid;
      }

      &::before {
        top: 0;
        border-width: 0.5rem 0.5rem 0 0;
      }

      &::after {
        bottom: 0;
        border-width: 0.5rem 0 0 0.5rem;
      }

      &.finish {
        background: $primary;

        &::before {
          border-color: $primary transparent transparent transparent;
        }

        &::after {
          border-color: transparent transparent $primary $primary;
        }
      }

      &.serialize {
        background: #4caf50;

        &::before {
          border-color: #4caf50 transparent transparent transparent;
        }

        &::after {
          border-color: transparent transparent #4caf50 #4caf50;
        }
      }
    }
  }
}

.news {
  font-size: 0.8rem;
  color: #999;

  i {
    color: #ffbe24;
  }
}
</style>
