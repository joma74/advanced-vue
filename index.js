import "tailwindcss/dist/tailwind.css"
import Vue from "vue"
import App from "./App"

new Vue({
  el: "#app",
  render: h => (
    <App>
      <h2 slot="header" class="text-orange">
        Header
      </h2>
      <h3 slot="footer" class="text-green">
        Footer
      </h3>
    </App>
  )
})
