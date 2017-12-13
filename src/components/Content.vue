<script>
import { shuffle } from "lodash"

export default {
  functional: true,
  render: (h, { children, props }) => (
    <content class="flex-grow p-4">
      {shuffle(children.filter(node => node.tag))}
    </content>
  )
}
</script>