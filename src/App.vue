<template>
  <Settings>
    <Layout slot-scope="{header, footer}">
      <AwesomeHeader slot="header" :header="header"></AwesomeHeader>
      <AwesomeContent slot="content" :limit="4">
        <div><img src="https://robohash.org/mindy?set=set4" alt=""></div>
        <div><img src="https://robohash.org/john?set=set4" alt=""></div>
        <div><img src="https://robohash.org/kim?set=set4" alt=""></div>
        <div><img src="https://robohash.org/joel?set=set4" alt=""></div>
        <div><img src="https://robohash.org/maggie?set=set4" alt=""></div>
      </AwesomeContent>
      <AwesomeFooter slot="footer" :footer="footer"></AwesomeFooter>
    </Layout>
  </Settings>
</template>

<script>
import Vue from "vue"
import { Component, Prop } from "vue-property-decorator"
import Settings from "./Settings"
import Layout from "./Layout"
import { Header, Footer, Content } from "./components"

@Component({
  components: {
    Settings,
    Layout,
    AwesomeHeader: Header,
    AwesomeFooter: Footer,
    AwesomeContent: Content
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