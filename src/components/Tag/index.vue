<template>
  <div class="tag">#{{ tag }}</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "Tag",
})
export default class Tag extends Vue {
  @Prop({ type: String })
  tag!: string;
}
</script>

<style lang="scss" scoped>
.tag {
  padding: 8px 10px;
  background-color: rgba(141, 190, 80, 0.5);
  color: #ffffff;
  border-radius: 4px;
}
</style>
