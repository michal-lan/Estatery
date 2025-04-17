"use client";

import React from "react";
import { motion } from "framer-motion";
import { headingContainer, headingWord } from "@/utils/motions-variants";

const motionTags = {
	h1: motion.h1,
	h2: motion.h2,
	h3: motion.h3,
	h4: motion.h4,
	h5: motion.h5,
	h6: motion.h6,
} as const;

type SizeType = keyof typeof motionTags;

type MotionHeadingProps = {
	text: string;
	size: SizeType;
	className?: string;
	viewport?: {
		once: boolean;
		amount: number;
	};
	whileInView?: string;
	transition?: {
		delay: number;
	};
};

export default function MotionHeading({
	text,
	size = "h2",
	className = "",
	viewport,
	whileInView,
	transition,
}: MotionHeadingProps) {
	const heading = text.split(" ");
	const MotionTag = motionTags[size] || motion.h2; // use motion.h2 as default

	return (
		<motion.div
			className={className}
			variants={headingContainer}
			initial="hidden"
			transition={transition}
			animate={!whileInView ? "visible" : undefined}
			whileInView={whileInView ? "visible" : undefined}
			viewport={whileInView ? viewport : undefined}
		>
			{heading.map((el, i) => (
				<MotionTag variants={headingWord} key={i}>
					{el}{" "}
				</MotionTag>
			))}
		</motion.div>
	);
}
