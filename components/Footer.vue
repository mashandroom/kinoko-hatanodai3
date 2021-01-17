<template>
  <div class="footer-container">
    <a href="https://mashandroom.org" target="_blank"
      >producted by マッシュ＆ルーム</a
    >
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Footer extends Vue {}
</script>

<style lang="scss" scoped>
.footer-container {
  position: absolute;
  bottom: 0;
  background-color: aquamarine;
  width: 100%;
}
</style>
