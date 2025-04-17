import {
	Tab,
	TabGroup,
	TabList,
	TabPanel,
	TabPanels,
	Transition,
} from "@headlessui/react";
import { PropertyShowcase } from "./PropertyShowcase";
import { Fragment } from "react";

const tabs = ["Houses", "Apartments"];

const housesData = {
	heading: "We make it easy for houses and apartments 1.",
	description:
		"Whether it’s selling your current home, getting financing, or buying a new home, we make it easy and efficient. The best part? you’ll save a bunch of money and time with our services.",
	properties: [
		{
			id: 1,
			name: "Palm Harbor",
			image: "/houses/1.png",
			price: "$3,440",
			address: "2699 Green Valley, Highland Lake, FL",
		},
		{
			id: 2,
			name: "St. Crystal",
			image: "/houses/2.png",
			price: "$6,550",
			address: "210 US Highway, Highland Lake, FL",
		},
		{
			id: 3,
			name: "Faulkner Ave",
			image: "/houses/3.png",
			price: "$4,950",
			address: "909 Woodland St, Michigan, IN",
		},
	],
};

const apartmentsData = {
	heading: "We make it easy for houses and apartments 2.",
	description:
		"Whether it’s selling your current home, getting financing, or buying a new home, we make it easy and efficient. The best part? you’ll save a bunch of money and time with our services.",
	properties: [
		{
			id: 1,
			name: "Tarpon Bay",
			image: "/apartments/1.png",
			price: "$2,140",
			address: "103 Lake Shores, Michigan, IN",
		},
		{
			id: 2,
			name: "Cove Red",
			image: "/apartments/2.png",
			price: "$1,450",
			address: "243 Curlew Road, Palm Harbor, TX",
		},
		{
			id: 3,
			name: "Beverly Springfield",
			image: "/apartments/3.png",
			price: "$3,850",
			address: "2821 Lake Sevilla, Palm Harbor, TX",
		},
	],
};

export const Tabs = () => {
	return (
		<TabGroup
			defaultIndex={0}
			as="div"
			className="w-full flex flex-col gap-y-8 items-center"
		>
			<TabList className="flex flex-row gap-x-8 bg-tab-background border border-base-300 p-2 rounded-lg w-fit">
				{tabs.map((tab) => (
					<Tab
						key={tab}
						className="min-w-[151px] px-2 py-3 text-lg border border-transparent outline-none data-[hover]:cursor-pointer text-base-600 font-medium transition-all duration-200 ease-in-out 
                
                    data-[selected]:font-bold data-[selected]:text-secondary-300 data-[selected]:border-base-200 data-[selected]:shadow-tab data-[selected]:bg-white data-[selected]:rounded-md
                    
                    data-[selected]:data-[hover]:bg-secondary-0 data-[selected]:data-[hover]:shadow-tab data-[selected]:data-[hover]:border-base-300
                    
                    data-[selected]:data-[focus]:bg-secondary-200 data-[selected]:data-[focus]:shadow-tab data-[selected]:data-[focus]:border-secondary-300 data-[selected]:data-[focus]:text-text-accent1
                    
                    data-[selected]:data-[active]:bg-secondary-0 data-[selected]:data-[active]:shadow-tab data-[selected]:data-[active]:border-secondary-100 data-[selected]:data-[active]:text-text-accent1
                    
                    data-[hover]:text-secondary-300 data-[focus]:text-secondary-300 data-[active]:text-secondary-300
                    "
					>
						{tab}
					</Tab>
				))}
			</TabList>
			<TabPanels className="w-full">
				<TabPanel>
					<Transition
						as={Fragment}
						appear
						show={true}
						enter="transition-opacity duration-700"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="transition-opacity duration-500"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<PropertyShowcase {...housesData} />
					</Transition>
				</TabPanel>
				<TabPanel>
					<Transition
						as={Fragment}
						appear
						show={true}
						enter="transition-opacity duration-700"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="transition-opacity duration-500"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<PropertyShowcase {...apartmentsData} />
					</Transition>
				</TabPanel>
			</TabPanels>
		</TabGroup>
	);
};
