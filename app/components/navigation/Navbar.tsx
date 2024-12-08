import Menu from "./Menu";
import NavLink from "./NavLink";

const Navbar = () => {
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

	return (
		<nav className="relative bg-zinc-800 text-white w-full p-5 border-b-4 border-b-black">
			<div className="flex justify-between items-center">
				<span className="font-bold">Minecraft.io</span>
				<ul className="hidden lg:flex items-center gap-2">
					{navLinks.map((link, index) => (
						<li>
							<NavLink
								href={link.link}
								type="web"
								className="hover:underline underline-offset-4"
							>
								{link.label}
							</NavLink>
						</li>
					))}
				</ul>

				<Menu />
			</div>
		</nav>
	);
};

export default Navbar;
