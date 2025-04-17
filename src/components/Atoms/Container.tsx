export default function Container(props: React.HTMLAttributes<HTMLDivElement>) {
	const className = props?.className ?? "";

	return (
		<div {...props} className={`container mx-auto ${className}`}>
			{props?.children}
		</div>
	);
}
