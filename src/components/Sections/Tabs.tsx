import React from "react";
import { Tabs } from "../Atoms/Tabs";
import Container from "../Atoms/Container";

export const SectionTabs = () => {
	return (
		<section>
			<Container>
				<div className="px-8 lg:px-16 py-16">
					<Tabs />
				</div>
			</Container>
		</section>
	);
};
