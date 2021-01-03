<template>
  <div class="container">
    テスト
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import quizzes from '@/assets/json/quiz.json'
@Component
export default class Question extends Vue {
  private mounted(): void {
    console.log(this.$route.query.id)
    console.log(quizzes[0])
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

</style>
