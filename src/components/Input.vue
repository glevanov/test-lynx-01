<template>
  <label class="input">
    {{ title }}:
    <input
      ref="input"
      class="input__field"
      type="number"
      step="0.1"
      :value="value"
      @input="updateValue"
    >
  </label>
</template>

<script>
export default {
  name: 'Input',
  props: {
    title: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
  },
  methods: {
    updateValue() {
      this.$emit('input', this.$refs.input.value);
    },
  },
};
</script>

<style scoped>
  .input {
    display: flex;
    flex-direction: column;

    font-weight: 700;
  }

  .input__field {
    box-sizing: border-box;
    width: 100%;

    font-weight: 400;
  }
</style>
