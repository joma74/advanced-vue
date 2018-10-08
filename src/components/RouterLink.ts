import Vue from "vue";

class VueRouterLink implements JSX.Element {
	$props: {
		[elemName: string]: any;
		to?: string | object
		tag?: string
		exact?: boolean
		append?: boolean
		replace?: boolean
		activeClass?: string
		exactActiveClass?: string
		event?: Event
	}
}

interface Event {
	type?: string | []
	default?: string
}

const RouterLink = Vue.component('router-link') as typeof VueRouterLink

export default RouterLink