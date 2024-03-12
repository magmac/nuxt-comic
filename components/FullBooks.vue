<template>
  <ul>
    <template v-for="(book, index) in books">
      <li class="book" :key="index" @click="handleHigh(book.id)">
        <div class="img">
          <div :class="`serialStatus ${book.status === 1 ? 'serialize' : 'finish'}`">
            {{ book.status === 1 ? '连载' : '完结' }}
          </div>
          <img-load :src="book.vertical" />
        </div>
        <div class="info">
          <h6>{{ book.title }}</h6>
          <div class="description">
            {{ book.description }}
          </div>
          <div class="type">
            <span :style="{ backgroundColor: typeColors[book.tid % typeColors.length] }">
              {{ book.typename }}
            </span>
          </div>
          <div class="author">作者: {{ book.author }}</div>
          <div class="news">
            <i class="el-icon-star-on" />
            {{ book.star }}
            <i class="el-icon-notebook-2" />
            {{ book.read }}
          </div>
        </div>
      </li>
    </template>
  </ul>
</template>

<script>

export default {
  props: ['books'],
  data() {
    return {
      typeColors: ['#313131', '#008D00', '#008D00', '#9C00C9', '#0080FF', '#FF1692', '#8E8500', '#FF8811']
    }
  },
  methods: {
    handleHigh (id) {
      this.$emit('explosion', id)
    }
  }
}
</script>

<style lang="scss" scoped>
.book {
  display: flex;
  justify-content: space-between;
  padding: 0 0.3rem;
  margin-bottom: 1rem;
  cursor: pointer;
  &:first-child {
    margin-top: 1rem;
  }
}

.img {
  position: relative;
  flex: 31% 0 0;
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

.info {
    flex: 65% 0 0;
    margin-left: 4%;

    h6 {
      margin-bottom: 0.5rem;
      font-size: 1rem;
      font-weight: normal;
      color: $primary;

      &.a_h6 {
        color: #999;
      }
    }

    .description {
      display: -webkit-box;
      height: 3rem;
      margin-bottom: 1rem;
      overflow: hidden;
      font-size: 0.8rem;
      line-height: 1rem;
      text-overflow: ellipsis;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }

    .type {
      margin-bottom: 0.5rem;
      font-size: 0.8rem;
      color: white;

      span {
        padding: 0.2rem 0.5rem;
        border-radius: 0.2rem;
      }
    }

    .author {
      margin-bottom: 0.2rem;
      font-size: 0.8rem;
      color: #999;
    }

    .news {
      font-size: 0.8rem;
      color: #999;

      i {
        color: #ffbe24;
      }
    }
}
</style>
