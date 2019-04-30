<template>
  <form class="form">
    <h2 class="form__heading">Форма ввода</h2>
    <Input
      class="form__input"
      title="Первое число"
      v-model="firstValue"
    />
    <Input
      class="form__input"
      title="Второе число"
      v-model="secondValue"
    />
    <button
      class="form__button"
      @click="this.alert">
      Сложить
    </button>
  </form>
</template>

<script>
import Input from '@/components/Input.vue';

export default {
  name: 'Form',
  components: {
    Input,
  },
  data: () => ({
    firstValue: '0.1',
    secondValue: '0.2',
  }),
  methods: {
    alert() {
      /* Так как значения value хранятся в html в виде строки, перед сложением
      преобразуем их в число */
      const result = parseFloat(this.firstValue) + parseFloat(this.secondValue);

      /* Из-за особенностей реализации численного типа данных в JS при сложении
      *  дробей происходят неточные вычисления.
      *  Чтобы избежать вывода результата вида:
      *  0.1 + 0.2 = 0.30000000000000004
      *  необходимо "округлить" отображение вывода до разумного знака после
      *  запятой. Исходя из значений по умолчанию решил округлять до десятых. */
      // eslint-disable-next-line no-alert
      alert(result.toFixed(1));
    },
  },
};
</script>

<style scoped>
  .form {
    display: block;
    width: 100%;
    box-sizing: border-box;
    max-width: 400px;
    margin: 30px auto;
    padding: 20px;

    background-color: #ffffff;
    border-radius: 4px;
  }

  .form__heading {
    margin: 0 auto 20px;
    width: 100%;
  }

  .form__input + .form__input {
    margin-top: 10px;
  }

  .form__button {
    padding: 10px;
    margin-top: 10px;

    font: inherit;

    background: #e5e5e5;
    border: none;
    border-radius: 3px;
  }
</style>
