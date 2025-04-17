type ButtonProps = {
	children: React.ReactNode;
	variant?: "primary" | "secondary";
	onClick?: () => void;
	type?: "button" | "submit" | "reset";
	disabled?: boolean;
};

export const Button = ({
	children,
	variant = "primary",
	onClick,
	type = "button",
	disabled = false,
}: ButtonProps) => {
	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled}
			className={`
        py-3 px-[34px] rounded-md font-bold text-base transition-all duration-200 border-2 hover:cursor-pointer outline-none ${
			variant === "primary"
				? "bg-text-accent1 text-white border-transparent hover:bg-secondary-100 focus:bg-secondary-300 focus:border-secondary-800 active:bg-secondary-600 disabled:cursor-not-allowed disabled:bg-text-paragraph disabled:text-white"
				: ""
		} ${
				variant === "secondary"
					? "bg-white text-black border-base-300 hover:border-secondary-300 focus:border-secondary-300 focus:text-secondary-300 active:border-secondary-1000 active:text-secondary-1000 disabled:cursor-not-allowed disabled:border-base-300 disabled:text-text-disabled"
					: ""
			}`}
		>
			{children}
		</button>
	);
};
