<template>
  <div class="app-header">
    へっだー
    <ExpectedBirthday :date="date" />
  </div>
</template>

<script>
import ExpectedBirthday from "@/components/parts/ExpectedBirthday.vue";
export default {
  name: "AppHeader",
  components: {
    ExpectedBirthday
  },
  data() {
    return {
      date: new Date()
    };
  }
};
</script>

<style></style>
