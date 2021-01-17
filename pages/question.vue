<template>
  <div class="container">
    <v-card v-bind:color="cardColor" elevation="20" v-if="quiz">
      <v-card-title>クイズ{{ quiz.id + 1 }}：{{ quiz.question }}</v-card-title>
      <div v-if="quiz.rubi">{{ quiz.rubi }}</div>
      <div v-if="quiz.choices">
        <v-card-text v-for="(choice, index) in quiz.choices" :key="choice">
          <div>({{ index + 1 }}).　{{ choice }}</div>
        </v-card-text>
      </div>
      <v-btn
        style="margin-bottom: 10px; margin-top: 10px"
        v-if="quiz.mapLink"
        rounded
        color="primary"
        dark
        @click="goMap(quiz.mapLink)"
      >
        ちずをみる
      </v-btn>
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

  private goMap(url: string): void {
    window.open(url, '_blank')
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
