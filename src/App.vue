<template>
  <Settings>
    <Layout slot-scope="{header, footer}">
      <Header slot="header" :header="header"></Header>
      <div slot="content" class="flex-grow p-4">Amazing Content</div>
      <Footer slot="footer" :footer="footer"></Footer>
    </Layout>
  </Settings>
</template>

<script>
import Vue from "vue"
import { Component, Prop } from "vue-property-decorator"
import Settings from "./Settings"
import Layout from "./Layout"
import { Header, Footer } from "./components"

@Component({
  components: {
    Settings,
    Layout,
    Header,
    Footer
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