const Selected = {
  props: {
    render: {
      default: h => null
    }
  },
  data() {
    return {
      selected: 0
    }
  },
  methods: {
    select(value) {
      this.selected = value
    }
  },
  render() {
    return this.$props.render({
      selected: this.selected,
      select: this.select
    })
  }
}

const CatsList = {
  functional: true,
  render: (h, { props }) => (
    <div>
      {props.names
        .map(
          name =>
            `https://robohash.org/${name}?set=set${
              props.num
            }`
        )
        .map((url, i) => (
          <img
            class={props.selected == i ? "bg-blue" : ""}
            onClick={event => props.select(i)}
            src={url}
            alt=""
          />
        ))}
    </div>
  )
}

export default {
  functional: true,
  render: (h, { props }) => (
    <div>
      <Selected
        render={({ selected, select }) => (
          <div>
            <input
              class="text-3xl"
              type="number"
              onChange={event => select(event.target.value)}
              value={selected}
            />
            <CatsList
              names={props.names}
              num={props.num}
              selected={selected}
              select={select}
            />
          </div>
        )}
      />
    </div>
  )
}
