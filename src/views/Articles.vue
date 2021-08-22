<template>
  <main class="main">
    <Article v-for="post in posts" :key="post.id" :post="post" />
  </main>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import Article from "@/components/Article/index.vue";
import { TPost } from "@/types";

@Component({
  components: {
    Article,
  },
})
export default class Articles extends Vue {
  @Getter("getPosts") posts!: TPost[];

  @Action("fetchPosts") fetchPosts!: () => Promise<void>;

  async created() {
    await this.fetchPosts();
  }
}
</script>

<style lang="scss" scoped>
.main {
  display: grid;
  grid-template-columns: repeat(auto-fit, 450px);
  grid-gap: 24px;
  justify-content: center;
  padding: 32px 0;

  @media (max-width: 450px) {
    grid-template-columns: 1fr;
    padding: 32px;
  }
}
</style>
