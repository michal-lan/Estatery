"use client";

import React from "react";
import { motion } from "framer-motion";
import { textContainer } from "@/utils/motions-variants";

type MotionTextProps = {
	children: React.ReactNode;
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

export default function MotionText({
	children,
	className = "",
	viewport,
	whileInView,
	transition,
}: MotionTextProps) {
	return (
		<motion.p
			variants={textContainer}
			initial="hidden"
			animate={!whileInView ? "visible" : undefined}
			whileInView={whileInView ? "visible" : undefined}
			viewport={whileInView ? viewport : undefined}
			transition={transition}
			className={className}
		>
			{children}
		</motion.p>
	);
}
