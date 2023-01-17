<template>
  <div
    className="justify-content-center align-items-center mt-5 d-flex flex-column "
  >
    <form @submit.prevent="handleSubmit">
      <label className="form-label text-capitalize">
        <p>
          {{ value }}
        </p>
      </label>
      <p>
        <select v-model="selected" @change="onChange($event)">
          <option>{{ answers[0].value }}</option>
          <option>{{ answers[1].value }}</option>
        </select>
      </p>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Questions",
  props: ["sid", "value", "answers"],
  methods: {
    handleSubmit() {
      console.log(this.selected)
    },
    onChange(event) {
      console.log(event.target.value)
    },
  },
}
</script>

<style></style>
