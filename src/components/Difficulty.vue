<template>
  <div class="difficulty">
    <p class="difficulty__heading">Choose difficulty</p>
    <label
      class="difficulty__label"
      v-for="(option, idx) in options"
      :class="{ active: value === idx, disabled: disabled }"
      :key="idx"
    >
      <input
        class="difficulty__input"
        type="radio"
        :value="idx"
        name="difficulty"
        @input="updateValue"
        :disabled="disabled"
        :checked="value === idx"
      />
      {{ capitalize(option.label) }}
    </label>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      required: true
    },
    options: {
      type: Array
    },
    disabled: {
      type: Boolean
    }
  },
  methods: {
    capitalize(str) {
      return str.replace(/^\w/g, letter => letter.toUpperCase());
    },
    updateValue(event) {
      this.$emit("input", event.target.value);
    }
  }
};
</script>

<style lang="scss" scoped>
.difficulty {
  padding: 20px;
}
.difficulty__heading {
  text-align: center;
  margin-bottom: 10px;
}

.difficulty__label {
  padding: 5px 10px;
  cursor: pointer;

  &.active {
    color: #fff;
    background: #1976d2;

    &.disabled {
      background: grey;
    }
  }
}

input {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  white-space: nowrap;
  border: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
}
</style>
