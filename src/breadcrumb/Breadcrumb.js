import { Link } from 'react-router-dom';
export default function Breadcrumb(props) {

	const { stack } = props;

	const elements = stack.map((item, index) => {
		if (index < stack.length - 1) {
			return (
				<Link to={item.pathname} state={{ fromBreadcrumb: true }}>
					<span class="float-left font-bold text-purple-600">{item.name}</span>
					<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
						<path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
					</svg>
				</Link>
			)
		} else {
			return (
				<div>
					<span>{item.name}</span>
				</div>
			)
		}
	})
	return (
		<div class="flex relative z-20">
			<div class="container mx-auto px-6 flex flex-col justify-between relative py-4">
				<div class="flex flex-row">{elements}</div>
			</div>
		</div>
	)
}
