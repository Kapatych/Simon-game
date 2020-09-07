<template>
  <div class="game">
    <div class="game__board">
      <Button
        ref="button"
        v-for="(button, idx) in buttons"
        :key="idx"
        :idx="idx"
        :color="button"
        :game="!!level && playerTurn"
        @click="buttonClickHandler"
      />
    </div>

    <div class="game__menu">
      <Difficulty
        v-model.number="difficulty"
        :options="difficultyLevels"
        :disabled="!!level"
      />
      <p class="center" v-if="level">Level: {{ level }}</p>
      <p class="center" v-if="!endgame && level">
        {{ playerTurn ? "Your turn" : "Remember" }}
      </p>
      <p class="center" v-if="endgame">Game Over</p>
      <button class="start-btn" @click="start" v-if="!level">
        {{ endgame ? "Try again" : "Start" }}
      </button>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import Difficulty from "@/components/Difficulty.vue";
export default {
  data: () => ({
    buttons: ["blue", "red", "yellow", "green"],
    chain: [],
    difficultyLevels: [
      {
        label: "easy",
        interval: 1500
      },
      {
        label: "medium",
        interval: 1000
      },
      {
        label: "hard",
        interval: 400
      }
    ],
    difficulty: 0,
    level: 0,
    position: 0,
    playerTurn: false,
    endgame: false
  }),
  computed: {
    interval() {
      return this.difficultyLevels[this.difficulty].interval;
    }
  },
  methods: {
    buttonClickHandler(idx) {
      if (this.level) {
        if (idx === this.chain[this.position]) {
          this.position === this.level - 1
            ? this.generateLevel()
            : (this.position += 1);
        } else {
          this.endgame = true;
          this.level = 0;
        }
      }
    },
    async generateLevel() {
      if (this.level) await this.sleep(1000);
      this.playerTurn = false;
      this.level += 1;
      this.position = 0;
      const value = Math.round(Math.random() * 3);
      this.chain.push(value);

      for (let [index, value] of this.chain.entries()) {
        this.$refs.button[value].play();
        if (index !== this.chain.length - 1) {
          await this.sleep(this.interval);
        }
      }
      this.playerTurn = true;
    },
    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },
    reset() {
      this.level = 0;
      this.endgame = false;
      this.chain = [];
    },
    start() {
      this.reset();
      this.generateLevel();
    }
  },
  components: { Button, Difficulty }
};
</script>

<style lang="scss" scoped>
.game {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}
.game__board {
  margin-bottom: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 3%;
  height: 75vw;
  width: 75vw;
  max-height: 500px;
  max-width: 500px;
}
.start-btn {
  display: block;
  margin: 0 auto;
  padding: 10px 20px;
  background: #1976d2;
  color: #ffffff;
  border: 0;
  cursor: pointer;
}
.center {
  text-align: center;
}
</style>
