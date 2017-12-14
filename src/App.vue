<template>
  <Settings>
    <Layout slot-scope="{header, footer}">
      <AwesomeHeader slot="header" :header="header"></AwesomeHeader>
      <div slot="content" class="flex-grow">
        <select v-model="selectedComp">
          <option v-for="comp in comps" :key="comp.name" :value="comp">{{comp.name}}</option>
        </select>
        <component :is="selectedComp"></component>
      </div>
      <AwesomeFooter slot="footer" :footer="footer"></AwesomeFooter>
    </Layout>
  </Settings>
</template>

<script>
import Vue from "vue"
import { Component, Prop } from "vue-property-decorator"
import Settings from "./Settings"
import Layout from "./Layout"
import { Header, Footer } from "./components"

const One = {
  functional: true,
  name: "One",
  render: h => <h1 class="bg-red">One</h1>
}

const Two = {
  functional: true,
  name: "Two",
  render: h => <h1 class="bg-green">Two</h1>
}

const Three = {
  functional: true,
  name: "Three",
  render: h => <h1 class="bg-purple">Three</h1>
}

@Component({
  components: {
    Settings,
    Layout,
    AwesomeHeader: Header,
    AwesomeFooter: Footer
  }
})
export default class App extends Vue {
  comps = [One, Two, Three]
  selectedComp = this.comps[0]
}
</script>