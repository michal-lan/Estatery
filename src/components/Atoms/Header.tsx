"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Button } from "./Button";
import Container from "./Container";

const navigation = [
	{ name: "Rent", href: "#" },
	{ name: "Buy", href: "#" },
	{ name: "Sell", href: "#" },
	{ name: "Manage Property", href: "#" },
	{ name: "Resources", href: "#" },
];

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="bg-white">
			<Container>
				<nav
					aria-label="Global"
					className="flex items-center justify-between lg:gap-x-4 px-8 py-4 lg:py-6 lg:px-16"
				>
					<div className="flex lg:flex-1">
						<a href="#">
							<span className="sr-only">Estatery</span>
							<div className="relative w-[134px] lg:w-[160px] h-10 lg:h-8">
								<Image
									alt="Logo"
									src="/logo.png"
									fill
									className="object-contain"
								/>
							</div>
						</a>
					</div>
					<div className="flex lg:hidden">
						<button
							type="button"
							onClick={() => setMobileMenuOpen(true)}
							className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
						>
							<span className="sr-only">Open main menu</span>
							<Bars3Icon aria-hidden="true" className="size-6" />
						</button>
					</div>
					<div className="hidden lg:flex lg:gap-x-12">
						{navigation.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className="text-base font-medium text-black hover:text-black/80"
							>
								{item.name}
							</a>
						))}
					</div>
					<div className="hidden lg:flex lg:flex-1 lg:justify-end gap-x-4">
						<Button variant="primary">Login</Button>
						<Button variant="secondary">Sign up</Button>
					</div>
				</nav>
				<Dialog
					open={mobileMenuOpen}
					onClose={setMobileMenuOpen}
					className="lg:hidden"
				>
					<div className="fixed inset-0 z-10" />
					<DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-8 py-6 lg:py-6 lg:px-16 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
						<div className="flex items-center justify-end">
							<button
								type="button"
								onClick={() => setMobileMenuOpen(false)}
								className="-m-2.5 rounded-md p-2.5 text-gray-700"
							>
								<span className="sr-only">Close menu</span>
								<XMarkIcon
									aria-hidden="true"
									className="size-6"
								/>
							</button>
						</div>
						<div className="mt-16 flow-root">
							<div className="">
								<div className="space-y-[34px]">
									{navigation.map((item) => (
										<a
											key={item.name}
											href={item.href}
											className="block text-2xl font-medium text-black hover:text-black/80"
										>
											{item.name}
										</a>
									))}
								</div>
								<div className="pt-[86px] pb-2 flex flex-col gap-y-4">
									<Button variant="secondary">Login</Button>
									<Button variant="primary">Sign up</Button>
								</div>
							</div>
						</div>
					</DialogPanel>
				</Dialog>
			</Container>
		</header>
	);
}
