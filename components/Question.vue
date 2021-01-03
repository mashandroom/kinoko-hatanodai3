<template>
  <div>
    キノコ-abcde-123-村瀬

    <div class="map">
      <img src="/kinoko-hatanodai3/img/map.png" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Question extends Vue {}
</script>

<style lang="scss" scoped>
.map img {
  width: 100%;
}
</style>
