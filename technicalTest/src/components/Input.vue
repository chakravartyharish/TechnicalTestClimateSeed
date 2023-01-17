<template>
  <div class="container">
    <label>{{ sid }} - {{ name }}</label>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: ["sid", "value", "name"],
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 20rem;
}
.container label {
  font-weight: 800;
}
</style>
