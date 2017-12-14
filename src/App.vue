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

const AsyncThree = () => ({
  component: import("./components/Three"),
  loading: {
    render: h => <h1>Loading... 👀</h1>
  },
  timeout: 3000,
  error: {
    render: h => <h1 class="text-red">ERROR!!! 😭</h1>
  }
})

@Component({
  components: {
    Settings,
    Layout,
    AwesomeHeader: Header,
    AwesomeFooter: Footer
  }
})
export default class App extends Vue {
  comps = [One, Two, AsyncThree]
  selectedComp = this.comps[0]
}
</script>