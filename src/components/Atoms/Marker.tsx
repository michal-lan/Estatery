type MarkerProps = {
	title: string;
	text: string;
};

export const Marker = ({ title, text }: MarkerProps) => {
	return (
		<div className="flex flex-col gap-y-1 pl-6 border-l-2 border-base-300">
			<span className="text-text-accent1 font-bold text-3xl">
				{title}
			</span>
			<span className="text-base-600 font-medium text-base">{text}</span>
		</div>
	);
};
