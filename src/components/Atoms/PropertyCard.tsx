import Image from "next/image";
import React from "react";
import { HeartIcon } from "./HeartIcon";

export type PropertyProps = {
	id: number;
	name: string;
	image: string;
	price: string;
	address: string;
};

export const PropertyCard = ({ property }: { property: PropertyProps }) => {
	return (
		<div className="flex flex-col snap-start shrink-0 min-w-[303px] xl:min-w-[352px]">
			<div className="relative w-full h-[200px] rounded-t-lg overflow-hidden">
				<Image
					src={property.image}
					alt={property.name}
					className="w-full h-full object-cover"
					layout="fill"
				/>
			</div>
			<div className="flex flex-col gap-y-2 pb-6 pt-8 px-6 bg-white rounded-b-lg border border-neutral-200">
				<div className="flex flex-row justify-between">
					<div className="flex flex-col gap-x-1">
						<p className="text-2xl font-extrabold text-secondary-300">
							{property.price}{" "}
							<span className="text-base-600 text-base font-medium">
								/month
							</span>
						</p>
						<h4 className="text-2xl font-bold text-black">
							{property.name}
						</h4>
					</div>
					<HeartIcon />
				</div>
				<p className="text-base font-medium text-base-600">
					{property.address}
				</p>
			</div>
		</div>
	);
};
