"use client";

import React from "react";
import Container from "../Atoms/Container";
import { Marker } from "../Atoms/Marker";
import Image from "next/image";
import { motion } from "framer-motion";
import { heroAdditionalImage } from "@/utils/motions-variants";
import MotionHeading from "../Atoms/MotionHeading";
import MotionText from "../Atoms/MotionText";

export const SectionHero = () => {
	return (
		<section className="bg-white relative overflow-hidden">
			<Container className="lg:grid lg:grid-cols-2 lg:gap-x-16 px-8 lg:px-16 pt-8 lg:py-[148px]">
				<div className="flex flex-col justify-center pb-4 lg:pb-0">
					<div className="flex flex-col gap-y-8 text-center lg:text-left">
						<MotionHeading
							text="Buy, rent, or sell your property easily"
							size="h1"
							className="flex flex-wrap gap-x-2 font-bold text-3xl lg:text-4xl text-black justify-center lg:justify-start"
						/>

						<MotionText className="font-medium text-xl text-black">
							A great platform to buy, sell, or even rent{" "}
							<br className="hidden lg:block" /> your properties
							without any commisions.
						</MotionText>
					</div>

					<div className="flex flex-row gap-x-8 mt-20">
						<Marker title="50k+" text="renters" />
						<Marker title="10k+" text="properties" />
					</div>
				</div>

				<div className="relative lg:static lg:mx-auto max-w-full lg:max-w-2xl lg:w-screen pl-[19px] lg:pl-0">
					<Image
						alt="Map image"
						src="/map.png"
						width={704}
						height={750}
						className="inline-block object-cover w-full h-[292px] object-center max-h-[292px] lg:h-full lg:max-h-[750px] lg:absolute lg:top-0 lg:bottom-0 lg:right-0 lg:left-auto lg:w-1/2"
					/>

					<motion.div
						variants={heroAdditionalImage}
						initial="hidden"
						animate="visible"
						className="absolute -translate-y-1/2 top-1/2 -left-5 lg:left-0 lg:relative lg:mx-auto max-w-full lg:max-w-2xl lg:w-screen h-fit lg:h-full"
					>
						<Image
							alt="Property tile"
							src="/hero-tile.png"
							width={432}
							height={425}
							className="inline-block object-cover w-[166px] h-[163px] object-center max-h-[163px] lg:h-[345px] lg:max-h-[345px] lg:absolute lg:top-0 lg:bottom-0 lg:right-auto lg:-left-24 lg:w-[432px]"
						/>
					</motion.div>
				</div>
			</Container>
		</section>
	);
};
