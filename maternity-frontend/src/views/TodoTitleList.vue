<template>
  <div class="home">
    <ExpectedBirthday :date="expectedBirthday" />
  </div>
</template>

<script>
// @ is an alias to /src
import ExpectedBirthday from "@/components/parts/ExpectedBirthday.vue";

export default {
  name: "home",
  components: {
    ExpectedBirthday
  },
  data() {
    return {
      expectedBirthday: new Date()
    };
  }
};
</script>
