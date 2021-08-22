import axios from "axios";
import { TPost } from "@/types";

type TState = {
  posts: TPost[] | null;
};

const state = (): TState => ({
  posts: null,
});

const getters = {
  getPosts: (state: TState): TPost[] | null => state.posts,
};

const mutations = {
  setPosts(state: TState, posts: TPost[]) {
    state.posts = posts;
  },
  mutateLikes(
    state: TState,
    { postId, count }: { postId: number; count: number }
  ) {
    if (!state.posts) return;
    const target = state.posts.find((post: TPost) => post.id == postId);

    if (target) target.like = count;

    localStorage.setItem("posts", JSON.stringify(state.posts));
  },
};

const actions = {
  async fetchPosts({ commit }: any) {
    const storage = localStorage.getItem("posts");

    const posts = storage
      ? JSON.parse(storage)
      : await axios
          .get("http://localhost:8080/db.json")
          .then((res): Promise<TPost[]> => res.data.posts);

    commit("setPosts", posts);
  },

  increaseLikes(
    { commit }: any,
    data: { targetPostId: number; count: number }
  ) {
    commit("mutateLikes", data);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
