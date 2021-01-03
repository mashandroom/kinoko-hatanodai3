<template>
  <div class="container">
    <v-card v-bind:color="cardColor" elevation="20" v-if="quiz">
      <v-card-title>問題{{ quiz.id }}：「{{ quiz.question }}」</v-card-title>
      <v-card-text v-for="(choice, index) in quiz.choices" :key="choice">
        <div>({{ index + 1 }}).　{{ choice }}</div>
      </v-card-text>
    </v-card>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import quizzes from '@/assets/json/quiz.json'
import { IQuiz } from 'interface/IQuiz'
import Footer from 'components/Footer.vue'

@Component
export default class Question extends Vue {
  private quiz: IQuiz | null = null
  private cardColor: string = ''

  private mounted(): void {
    const quizId: number = Number(this.$route.query.id)
    if (quizId >= quizzes.length) {
      console.log('invalid quiz id.')
      return
    }

    this.quiz = quizzes[quizId]
    this.cardColor = this.getCardColor()
  }

  private getCardColor(): string {
    //return "#ff00ff";
    return ''
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
