"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import MotionHeading from "./MotionHeading";
import MotionText from "./MotionText";

const testimonials = [
	{
		quote: "Estatery is the platform I go to on almost a daily basis for 2nd home and vacation condo shopping, or to just look at dream homes in new areas. Thanks for fun home shopping and comparative analyzing, Estatery!",
		name: "Mira Culos",
		title: "Renter",
		avatar: "/testimonials/1.png",
	},
	{
		quote: "I check Estatery almost every day — whether I'm seriously house hunting or just daydreaming about future getaways. It makes exploring new locations and comparing properties incredibly easy and enjoyable.",
		name: "Mark Brown",
		title: "Renter",
		avatar: "/testimonials/2.png",
	},
	{
		quote: "Estatery turns home shopping into a daily delight. Whether I'm planning for the future or just exploring what's out there, I always find something exciting and new.",
		name: "Jake White",
		title: "Renter",
		avatar: "/testimonials/3.png",
	},
];

export const TestimonialSlider = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isInitialLoad, setIsInitialLoad] = useState(true);
	const [animate, setAnimate] = useState(false);
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);

	// auto-play logic
	const resetTimeout = () => {
		if (timeoutRef.current) clearTimeout(timeoutRef.current);
	};

	useEffect(() => {
		setAnimate(true); // reset animation
		setTimeout(() => setAnimate(false), 4000); // add a delay for hidding animation

		// delay to show the animation after loading to avoid full cirlcle
		const timer = setTimeout(() => {
			setIsInitialLoad(false);
		}, 100);

		resetTimeout();

		timeoutRef.current = setTimeout(() => {
			setCurrentIndex((prevIndex) =>
				prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
			);
		}, 5000);

		return () => {
			clearTimeout(timer);
			resetTimeout();
		};
	}, [currentIndex]);

	return (
		<div className="grid grid-cols-12">
			<div className="col-span-12 lg:col-span-8 lg:col-start-3 flex flex-col gap-y-7 lg:gap-y-12">
				<div className="flex flex-col gap-y-4 text-center">
					<MotionHeading
						text="Testimonials"
						size="h3"
						viewport={{ once: true, amount: 0.5 }}
						whileInView="visible"
						transition={{ delay: 0.2 }}
						className="flex flex-wrap gap-x-2 justify-center text-3xl lg:text-4xl font-bold text-black"
					/>

					<MotionText
						className="text-black text-base font-normal"
						viewport={{ once: true, amount: 0.5 }}
						whileInView="visible"
					>
						See what our property managers, landlords, and tenants
						have to say
					</MotionText>
				</div>

				<div
					className={`min-h-[320px] sm:min-h-[156px] flex flex-col gap-y-4 lg:gap-y-8 transition-all duration-1000 ease-in overflow-hidden ${
						animate ? " opacity-100" : "opacity-0"
					}`}
				>
					<p className={`text-xl font-medium text-center text-black`}>
						&quot;{testimonials[currentIndex].quote}&quot;
					</p>
					<p className="text-base font-normal text-center text-black">
						<b>{testimonials[currentIndex].name}</b>,{" "}
						{testimonials[currentIndex].title}
					</p>
				</div>

				<div className="flex justify-center gap-x-8">
					{testimonials.map((t, index) => (
						<button
							key={index}
							type="button"
							onClick={() => setCurrentIndex(index)}
							className={`
                                relative w-[76px] h-[76px] rounded-full overflow-hidden transition-all duration-300 p-0.5 z-0 ${
									currentIndex === index
										? ""
										: "opacity-70 hover:opacity-100"
								}
                            `}
						>
							<Image
								src={t.avatar}
								alt={t.name}
								className="w-[60px] h-[60px] object-cover m-auto"
								width={60}
								height={60}
							/>

							<svg
								className={`absolute top-0 left-0 w-full h-full transform -rotate-90 transition-opacity duration-300 ${
									currentIndex === index
										? "opacity-100"
										: "opacity-0"
								}`}
								width="72"
								height="72"
								viewBox="0 0 72 72"
							>
								<circle
									cx="36"
									cy="36"
									r="31"
									stroke="#e6e6e6"
									strokeWidth="2"
									fill="none"
								/>
								<circle
									cx="36"
									cy="36"
									r="31"
									stroke="#3498db"
									strokeWidth="2"
									fill="none"
									strokeDasharray="195"
									strokeDashoffset={
										!isInitialLoad && currentIndex === index
											? 0
											: 195
									}
									style={{
										transition: isInitialLoad
											? "none"
											: "stroke-dashoffset 5.1s ease",
									}}
								/>
							</svg>
						</button>
					))}
				</div>
			</div>
		</div>
	);
};
