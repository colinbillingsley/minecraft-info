"use client";
import Button from "../buttons/Button";
import { MenuIcon, X } from "lucide-react";
import { useState } from "react";
import NavLink from "./NavLink";

const Menu = () => {
	const [isOpen, setIsOpen] = useState(false);
	const navLinks = [
		{
			label: "Home",
			link: "/",
		},
		{
			label: "Blocks",
			link: "/blocks",
		},
		{
			label: "Biomes",
			link: "/biomes",
		},
		{
			label: "Enchantments",
			link: "/enchantments",
		},
		{
			label: "Entities",
			link: "/entities",
		},
		{
			label: "Foods",
			link: "/foods",
		},
		{
			label: "Items",
			link: "/items",
		},
		{
			label: "Recipes",
			link: "/recipes",
		},
		{
			label: "Tools",
			link: "/tools",
		},
	];

	const handleMenuClick = () => {
		console.log(isOpen);
		setIsOpen(!isOpen);
	};
	return (
		<div className="block lg:hidden">
			<Button onClick={handleMenuClick}>
				{isOpen ? <X size={20} /> : <MenuIcon size={20} />}
			</Button>

			<ul
				className={`absolute left-0 top-0 bg-zinc-800 border-4 border-l-zinc-600 border-t-zinc-600 border-r-zinc-900 border-b-zinc-900 min-h-screen w-[16rem] sm:w-[20rem] transition-transform duration-300 ${
					isOpen ? "translate-x-0" : "translate-x-[-20rem]"
				}`}
			>
				<li className="border-b-4 border-b-zinc-900">
					<span className="block font-bold px-4 py-7">Minecraft.io</span>
				</li>
				{navLinks.map((link, index) => (
					<li key={index}>
						<NavLink
							href={link.link}
							className="p-4 hover:bg-green-800"
							onClick={() => setIsOpen(false)}
							type="mobile"
						>
							{link.label}
						</NavLink>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Menu;
