import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import A from './A';
import B from './B';

interface Link {
	title: string
	href: string
	value: string
	targetBlank: boolean;
  }

interface AProps {
	href: string
	title?: string
	links: Link[]
}

@Component
export class Content extends Vue {

	$props: AProps;

	@Prop()
	href: string;
	@Prop()
	title: string;
	@Prop({type: Object as () => Link[]})
	links: Link[];

	render() {
		return (
			<div class="align-baseline flex-grow p-4">
				{this.links.map((link) => {
					return (
						<li class="popover-item">
							<A 	
								className="popover-link"
								href={link.href}
								title={link.title}
								targetBlank={link.targetBlank}>{link.value}
							</A>
							<B href="abc">	
							</B>
						</li>
					)
				})}
			</div>
		)
	}
}