<template>
  <DynamicComponent
    :json="json"
    :data="data"
    @input="updateInputData($event)"
  />
</template>

<script>
import DynamicComponent from "./components/DynamicComponent.vue"
import { json } from "./constants/json"
export default {
  name: "App",
  components: {
    DynamicComponent,
  },
  data() {
    return {
      data: {},
      json: json,
    }
  },
  emits: ["input"],
  methods: {
    updateInputData({ sid, value }) {
      this.data[sid] = value
      console.log(this.data)
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: #f5f7f9;
  height: 100%;
}
</style>
