import Vue, { VueConstructor, VNode, CreateElement } from 'vue'
import {Prop, Component} from 'vue-property-decorator'
import {VueComponent} from '../../vue-ts-component'
import RouterLink from './RouterLink';

interface AProps {
  href: string
  targetBlank: boolean
  title?: string  
  className?: string
}

@Component
export default class A extends VueComponent<AProps> {
  @Prop()
  href: string
  @Prop()
  title: string
  @Prop({required: true, type: String})
  className: string
  @Prop({required: true, type: Boolean})
  targetBlank: boolean
  
  render() {
    return (
		<RouterLink
			to={this.href}
			title={this.title}
			class={this.className}
		>
			{this.$slots.default}
		</RouterLink>
	)
  }
}