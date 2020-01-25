<template>
  <div class="expected-birthday">
    <p>出産予定日：{{ expectedBirthday }}</p>
  </div>
</template>

<script>
export default {
  name: "ExpectedBirthday",
  props: {
    date: Date
  },
  computed: {
    expectedBirthday() {
      return this.date.getTime();
    }
  }
};
</script>

<style scoped></style>
