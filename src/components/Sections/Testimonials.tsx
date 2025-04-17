import React from "react";
import Container from "../Atoms/Container";
import { TestimonialSlider } from "../Atoms/TestimonialSlider";

export const SectionTestimonials = () => {
	return (
		<section className="bg-gradient-to-b from-white to-primary-0 shadow-testimonials px-8 lg:px-16 py-4 lg:py-8">
			<Container>
				<TestimonialSlider />
			</Container>
		</section>
	);
};
