<template>
  <main class="article-view" v-if="currentPost">
    <figure class="article-view__hero">
      <img
        src="@/assets/images/img.png"
        class="article-view__image"
        alt="доктор"
      />
    </figure>

    <div class="article-view__content">
      <div class="article-view__date">{{ currentPost.date }}</div>

      <h2 class="article-view__title">
        {{ currentPost.name }}
      </h2>

      <p class="article-view__paragraph">{{ currentPost.detail_text }}</p>

      <Like :post="currentPost" />

      <div class="article-view__tags">
        <Tag tag="компания" />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import Like from "@/components/Like/index.vue";
import Tag from "@/components/Tag/index.vue";
import { TPost } from "@/types";

@Component({
  name: "ArticleView",
  components: {
    Like,
    Tag,
  },
})
export default class ArticleView extends Vue {
  @Getter("getPosts") posts!: TPost[];

  @Action("fetchPosts") fetchPosts!: () => Promise<void>;

  get currentPost(): TPost {
    const { id } = this.$route.params;
    return this.posts?.find((post: TPost) => post.id == id);
  }

  async created() {
    if (!this.posts) await this.fetchPosts();
  }
}
</script>

<style lang="scss" scoped>
.article-view {
  padding-bottom: 32px;

  &__hero {
    width: 100%;
    height: 400px;
    margin-bottom: 24px;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 0 30%;
  }

  &__content {
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
    color: #666565;

    @media (max-width: 1000px) {
      width: calc(100% - 64px);
      margin: 0 32px;
    }
  }

  &__tags {
    padding-top: 10px;
    border-top: 1px solid #99d150;
    display: flex;
  }

  &__date {
    font-size: 13px;
    font-style: italic;
    margin-bottom: 16px;
    color: #909599;
  }

  &__title {
    font-size: clamp(24px, 5vw, 38px);
    color: black;
    margin-bottom: 32px;
  }

  &__paragraph {
    margin-bottom: 24px;
    width: 100%;
  }

  &__tags {
    margin-top: 24px;
  }
}
</style>
