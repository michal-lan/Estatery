import Image from "next/image";
import Container from "./Container";
import { JSX, SVGProps } from "react";

const navigation = [
	{ name: "Help Center", href: "#" },
	{ name: "FAQ", href: "#" },
	{ name: "Terms & Privacy", href: "#" },
];
const social = [
	{
		name: "Facebook",
		href: "#",
		icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
			<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
				<path
					fillRule="evenodd"
					d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
					clipRule="evenodd"
				/>
			</svg>
		),
	},
	{
		name: "Instagram",
		href: "#",
		icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
			<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
				<path
					fillRule="evenodd"
					d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
					clipRule="evenodd"
				/>
			</svg>
		),
	},
	{
		name: "X",
		href: "#",
		icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
			<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
				<path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
			</svg>
		),
	},
	{
		name: "YouTube",
		href: "#",
		icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
			<svg
				width="25"
				height="24"
				viewBox="0 0 25 24"
				fill="currentColor"
				xmlns="http://www.w3.org/2000/svg"
				{...props}
			>
				<path
					d="M20.9705 2.00014H4.03055C3.84013 1.9975 3.65105 2.03239 3.47411 2.10282C3.29718 2.17326 3.13585 2.27786 2.99934 2.41065C2.86284 2.54344 2.75383 2.70182 2.67854 2.87675C2.60325 3.05167 2.56316 3.23972 2.56055 3.43014V20.5701C2.56316 20.7606 2.60325 20.9486 2.67854 21.1235C2.75383 21.2985 2.86284 21.4568 2.99934 21.5896C3.13585 21.7224 3.29718 21.827 3.47411 21.8975C3.65105 21.9679 3.84013 22.0028 4.03055 22.0001H20.9705C21.161 22.0028 21.35 21.9679 21.527 21.8975C21.7039 21.827 21.8652 21.7224 22.0017 21.5896C22.1383 21.4568 22.2473 21.2985 22.3226 21.1235C22.3978 20.9486 22.4379 20.7606 22.4405 20.5701V3.43014C22.4379 3.23972 22.3978 3.05167 22.3226 2.87675C22.2473 2.70182 22.1383 2.54344 22.0017 2.41065C21.8652 2.27786 21.7039 2.17326 21.527 2.10282C21.35 2.03239 21.161 1.9975 20.9705 2.00014ZM8.59055 18.7401H5.59055V9.74014H8.59055V18.7401ZM7.09055 8.48014C6.67681 8.48014 6.28002 8.31578 5.98746 8.02323C5.6949 7.73067 5.53055 7.33388 5.53055 6.92014C5.53055 6.5064 5.6949 6.10961 5.98746 5.81705C6.28002 5.5245 6.67681 5.36014 7.09055 5.36014C7.31024 5.33522 7.53272 5.35699 7.74342 5.42402C7.95412 5.49105 8.14829 5.60183 8.3132 5.7491C8.47812 5.89637 8.61007 6.07682 8.70042 6.27862C8.79076 6.48043 8.83746 6.69904 8.83746 6.92014C8.83746 7.14124 8.79076 7.35985 8.70042 7.56166C8.61007 7.76346 8.47812 7.94391 8.3132 8.09118C8.14829 8.23845 7.95412 8.34923 7.74342 8.41626C7.53272 8.48329 7.31024 8.50505 7.09055 8.48014ZM19.4105 18.7401H16.4105V13.9101C16.4105 12.7001 15.9805 11.9101 14.8905 11.9101C14.5532 11.9126 14.2247 12.0184 13.9494 12.2133C13.674 12.4082 13.465 12.6828 13.3505 13.0001C13.2723 13.2352 13.2384 13.4827 13.2505 13.7301V18.7301H10.2505C10.2505 18.7301 10.2505 10.5501 10.2505 9.73014H13.2505V11.0001C13.5231 10.5272 13.9195 10.1377 14.397 9.87334C14.8745 9.60902 15.4151 9.47999 15.9605 9.50014C17.9605 9.50014 19.4105 10.7901 19.4105 13.5601V18.7401Z"
					fill="currentColor"
				/>
			</svg>
		),
	},
];

export default function Footer() {
	return (
		<footer className="bg-white">
			<Container>
				<div className="p-8 lg:p-16">
					<div className="lg:grid lg:grid-cols-12 lg:gap-8">
						<div className="lg:col-span-3">
							<div className="relative w-[172px] lg:w-[160px] h-10">
								<Image alt="Logo" src="/logo.png" fill />
							</div>
						</div>
						<div className="mt-6 lg:mt-0 lg:flex lg:items-center lg:justify-end lg:col-span-9">
							<ul
								role="list"
								className="grid lg:flex grid-cols-2 gap-x-8 gap-y-3.5 text-center"
							>
								{navigation.map((item, index) => (
									<li
										key={item.name}
										className={`${
											index === navigation.length - 1 &&
											navigation.length % 2 !== 0
												? "col-span-2 mx-auto lg:mx-0 w-fit lg:w-auto"
												: ""
										}`}
									>
										<a
											href={item.href}
											className="text-base uppercase font-medium text-black/50 hover:text-gray-900"
										>
											{item.name}
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>

					<div className="mt-6 lg:mt-10 border-t border-gray-900/10 pt-6 lg:pt-10 md:flex md:items-center md:justify-between text-center lg:text-left">
						<p className="text-base font-medium text-black/50">
							&copy; 2021 Estatery. All rights reserved
						</p>
						<div className="mt-6 md:mt-0 flex gap-x-10 justify-center lg:justify-start">
							{social.map((item) => (
								<a
									key={item.name}
									href={item.href}
									className="text-black/50 hover:text-black/30"
								>
									<span className="sr-only">{item.name}</span>
									<item.icon
										aria-hidden="true"
										className="size-6"
									/>
								</a>
							))}
						</div>
					</div>
				</div>
			</Container>
		</footer>
	);
}
