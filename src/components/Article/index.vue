<template>
  <article class="article" @click="openView">
    <figure class="article__image">
      <img src="@/assets/images/img.png" class="article__img" alt="доктор" />
      <Tag class="article__tag" :tag="post.tag" />
    </figure>

    <h2 class="article__title">{{ post.name }}</h2>

    <p class="article__content">{{ post.description }}</p>

    <div class="article__footer">
      <div class="article__date">{{ post.date }}</div>
      <Like :post="post" />
    </div>
  </article>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { TPost } from "@/types";
import Like from "@/components/Like/index.vue";
import Tag from "@/components/Tag/index.vue";

@Component({
  name: "Article",
  components: {
    Like,
    Tag,
  },
})
export default class Article extends Vue {
  @Prop({ type: Object })
  post!: TPost;

  openView() {
    this.$router.push(`/article-view/${this.post.id}`);
  }
}
</script>

<style lang="scss" scoped>
.article {
  background-color: #ffffff;
  padding: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-3px);
  }

  &__image {
    height: 250px;
    width: 100%;
    background-color: #e5e5e5;
    position: relative;
    margin-bottom: 24px;
  }

  &__img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  &__title {
    line-height: 21px;
    font-size: 18px;
    color: #000000;
    font-weight: 500;
    margin-bottom: 28px;
  }

  &__tag {
    position: absolute;
    bottom: 10px;
    left: 10px;
  }

  &__content {
    font-size: 15px;
    color: #666565;
    line-height: 22px;
    margin-bottom: 25px;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
  }
}
</style>
