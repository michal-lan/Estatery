import { SectionHero } from "@/components/Sections/Hero";
import { SectionTabs } from "@/components/Sections/Tabs";
import { SectionTestimonials } from "@/components/Sections/Testimonials";

export default function Home() {
	return (
		<main>
			<SectionHero />
			<SectionTabs />
			<SectionTestimonials />
		</main>
	);
}
