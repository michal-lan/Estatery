import React from "react";
import { PropertyProps } from "./PropertyCard";
import MotionHeading from "./MotionHeading";
import MotionText from "./MotionText";
import { MotionPropertiesCards } from "./MotionPropertiesCards";

type PropertyShowcaseProps = {
	heading: string;
	description: string;
	properties: PropertyProps[];
};

export const PropertyShowcase = ({
	heading,
	description,
	properties,
}: PropertyShowcaseProps) => {
	return (
		<div className="flex flex-col gap-y-12">
			<div className="w-full lg:w-5/12 self-center flex flex-col gap-y-6 text-center">
				<MotionHeading
					text={heading}
					size="h2"
					className="flex flex-wrap gap-x-2 justify-center font-bold text-3xl lg:text-4xl text-black"
					viewport={{ once: true, amount: 0.5 }}
					whileInView="visible"
					transition={{ delay: 0.2 }}
				/>

				<MotionText className="font-medium text-base text-base-600">
					{description}
				</MotionText>
			</div>

			<MotionPropertiesCards properties={properties} />
		</div>
	);
};
