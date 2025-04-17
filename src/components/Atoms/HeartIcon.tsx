"use client";

import { useState } from "react";
import { Heart } from "../Icon/Heart";

export const HeartIcon = () => {
	const [pressed, setPressed] = useState(false);

	return (
		<button
			onClick={() => setPressed(!pressed)}
			className={`p-3 w-12 h-12 rounded-full outline-none border transition-colors hover:cursor-pointer duration-200 ease-in-out ${
				pressed
					? "bg-secondary-300 border-secondary-100 text-white"
					: "border-neutral-200 text-secondary-300 hover:shadow-heart-icon hover:border-secondary-100 hover:text-secondary-600 focus:bg-secondary-200 focus:border-secondary-100 focus:text-secondary-600 active:bg-secondary-300 active:border-secondary-100 active:text-white"
			}`}
		>
			<Heart />
		</button>
	);
};
