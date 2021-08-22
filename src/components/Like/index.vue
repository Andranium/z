<template>
  <button class="like like--active" @click="increase">
    <svg>
      <use xlink:href="../../assets/images/sprite.svg#icon-heart"></use>
    </svg>

    <span>{{ post.like }}</span>
  </button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Action } from "vuex-class";
import { TPost } from "@/types";

@Component({
  name: "like",
})
export default class Like extends Vue {
  @Prop({ type: Object })
  post!: TPost;

  @Action("increaseLikes") increaseLikes!: (targetPostId: {
    targetPostId: number;
    count: number;
  }) => void;

  increase() {
    this.increaseLikes({
      targetPostId: this.post.id,
      count: (this.post.like as number)++,
    });
  }
}
</script>

<style lang="scss" scoped>
.like {
  display: flex;
  justify-content: space-between;
  align-self: center;
  background-color: transparent;
  border: none;
  height: 13px;
  cursor: pointer;

  svg {
    height: 100%;
    width: 13px;
    fill: #c0c0c0;
    transition: fill 0.2s ease, transform 0.2s ease;
    flex-shrink: 0;
  }

  span {
    margin-left: 8px;
    color: #909599;
    font-size: 12px;
  }

  &--active {
    svg {
      fill: #eb5757;
    }
  }

  &:active {
    svg {
      transform: translateY(-3px);
    }
  }
}
</style>
