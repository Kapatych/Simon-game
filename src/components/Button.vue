<template>
  <button class="button" ref="button" :class="color" @click="clickHandler" />
</template>

<script>
export default {
  props: {
    idx: {
      type: [Number, String],
      required: true
    },
    color: {
      type: String,
      required: true
    },
    game: {
      type: Boolean,
      require: true
    }
  },
  data: () => ({
    sound: null
  }),
  created() {
    const path = require(`@/assets/sounds/${this.color}.mp3`);
    this.sound = new Audio(path);
  },
  methods: {
    play() {
      this.sound.play();
      this.$refs.button.classList.add("active");
      setTimeout(() => {
        this.$refs.button.classList.remove("active");
      }, 300);
    },
    clickHandler() {
      if (this.game) {
        this.play();
        this.$emit("click", this.idx);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  border: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;

  &:hover,
  &:focus {
    outline: none;
  }

  &.blue {
    background: #1976d2;
    border-radius: 100% 0 0 0;

    &.active {
      background: #0d47a1;
    }
  }
  &.red {
    background: #d32f2f;
    border-radius: 0 100% 0 0;

    &.active {
      background: #b71c1c;
    }
  }
  &.yellow {
    background: #ffee58;
    border-radius: 0 0 0 100%;

    &.active {
      background: #fbc02d;
    }
  }
  &.green {
    background: #43a047;
    border-radius: 0 0 100% 0;

    &.active {
      background: #1b5e20;
    }
  }
}
</style>
