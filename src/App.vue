<template>
  <Settings>
    <Layout slot-scope="{header, footer}">
      <AwesomeHeader slot="header" :header="header"></AwesomeHeader>
      <Cats slot="content" :names="names" :num="4"></Cats>
      <AwesomeFooter slot="footer" :footer="footer"></AwesomeFooter>
    </Layout>
  </Settings>
</template>

<script>
import Vue from "vue"
import { Component, Prop } from "vue-property-decorator"
import Settings from "./Settings"
import Layout from "./Layout"
import { Header, Footer, Cats } from "./components"

@Component({
  components: {
    Settings,
    Layout,
    AwesomeHeader: Header,
    AwesomeFooter: Footer,
    Cats
  }
})
export default class App extends Vue {
  names = ["mindy", "john", "kim", "joel", "ben"]
}
</script>