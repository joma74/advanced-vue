import Vue, { CreateElement } from "vue"
import { Component , Prop } from "vue-property-decorator"
import { VueComponent } from "../../vue-ts-component";

interface BProps {
	href: string
}

@Component
export default class B extends VueComponent<BProps> {

	@Prop()
	href: string

	render(h: CreateElement) {
		return h("p", "This is rendered via TSX")
	};
}