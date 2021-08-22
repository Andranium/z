<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Getter } from "vuex-class";
import { TPost } from "@/types";

@Component({
  name: "App",
})
export default class App extends Vue {
  @Getter("getPosts") posts!: TPost[];
}
</script>

<style lang="scss">
*,
*::after,
*::before {
  padding: 0;
  margin: 0;
  outline: none;
}

html {
  background-color: #e5e5e5;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
