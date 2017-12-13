<template>
  <Layout>
  </Layout>
</template>

<script>
import Vue from "vue"
import { Component, Prop } from "vue-property-decorator"
import Layout from "./Layout"

@Component({
  components: {
    Layout
  }
})
export default class App extends Vue {
  @Prop({ default: "Hello from Prop decorator" })
  message

  onClick() {
    this.message = "Goodbye"
  }
}
</script>