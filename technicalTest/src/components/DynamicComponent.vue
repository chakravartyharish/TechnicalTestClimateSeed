<template>
  <div>
    <div v-for="(outer, index) in json" :key="index">
      <div v-for="(inner, index) in outer" :key="index">
        <component
          :key="index"
          :is="inner.type"
          v-bind="inner"
          :data="data"
          @input="updateInputData(inner.sid, $event)"
        >
        </component>
      </div>
    </div>
  </div>
</template>

<script>
import Input from "./Input.vue"
import Formulas from "./Formulas.vue"
import Questions from "./Questions.vue"

export default {
  name: "DynamicComponent",
  props: {
    json: {
      type: Object,
    },
    data: {
      type: Object,
    },
  },
  emits: ["input"],
  components: {
    Input,
    Formulas,
    Questions,
  },
  methods: {
    updateInputData(sid, event) {
      this.$emit("input", { sid, value: event.target.value })
    },
  },
}
</script>

<style scoped>
.root {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
}
</style>
