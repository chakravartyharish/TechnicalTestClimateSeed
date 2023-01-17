<template>
  <div class="border-t mt-4 py-4">
    <form @submit.prevent="handleSubmit">
      <h2>{{ name }}</h2>
      <div v-for="input in inputs" :key="input.sid">
        <label>{{ input.label }}</label>
        <br />
        <input
          :value="value"
          type="input._type"
          @input="$emit('input', $event)"
        />
      </div>
      <h5>Answers: {{ answers[0] }} {{ answers[1] }}</h5>
    </form>
  </div>
</template>

<script>
export default {
  name: "Formulas",
  props: ["sid", "name", "inputs", "value", "answers"],
  methods: {
    handleSubmit() {
      //      <!-- <div class="row">
      //   <table style="width:100%">
      //     <tr>
      //       <th>Organization_Name</th>
      //       <th>Formula_name</th>
      //       <th>Input_values</th>
      //     </tr>
      //     <tr v-for="input in inputs" :key="input.sid">
      //       <td>{{}}</td>
      //       <td>{{}}</td>
      //       <td>{{}}</td>
      //     </tr>
      //   </table>
      // </div> -->
    },
  },
  emits: ["input"],
}
</script>

<style scoped></style>
