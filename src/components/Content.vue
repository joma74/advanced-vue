<script>
import { shuffle } from "lodash"

export default {
  functional: true,
  render: (h, { children, props }) => (
    <article class="flex-grow p-4">
      {shuffle(children.filter(node => node.tag))}
    </article>
  )
}
</script>