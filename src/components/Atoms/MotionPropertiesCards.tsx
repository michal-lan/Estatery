"use client";

import React from "react";
import { PropertyCard, PropertyProps } from "./PropertyCard";
import { propertiesContainer, propertyBlock } from "@/utils/motions-variants";
import { motion } from "framer-motion";

type MotionPropertiesCardsProps = {
	properties: PropertyProps[];
};

export const MotionPropertiesCards = ({
	properties,
}: MotionPropertiesCardsProps) => {
	return (
		<motion.div
			variants={propertiesContainer}
			initial="hidden"
			whileInView="visible"
			className="flex lg:grid lg:grid-cols-3 gap-x-4 lg:gap-x-8 snap-x snap-mandatory overflow-x-auto lg:overflow-x-visible no-scrollbar scroll-smooth scroll-pl-4 lg:scroll-pl-0"
		>
			{properties.map((property) => (
				<motion.div key={property.id} variants={propertyBlock}>
					<PropertyCard property={property} />
				</motion.div>
			))}
		</motion.div>
	);
};
