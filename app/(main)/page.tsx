import Link from "next/link";
import Button from "../components/buttons/Button";
import Navbar from "../components/navigation/Navbar";
import { ChevronRight } from "lucide-react";
import PageContainer from "../components/PageContainer";

export default function Home() {
	const quickLinks = [
		{
			label: "Blocks",
			link: "/blocks",
		},
		{
			label: "Biomes",
			link: "/biomes",
		},
		{
			label: "Foods",
			link: "/foods",
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
		<PageContainer>
			<div className="flex flex-col items-center justify-center gap-5 bg-zinc-800 border-t-4 border-t-zinc-500 text-white py-10 px-4 w-full h-fit">
				<div className="flex flex-col items-center justify-center gap-3 text-center">
					<h1 className="text-4xl font-bold">Welcome to Minecraft.io</h1>
					<span className="text-sm">
						Explore comprehensive Minecraft data, from food stats to crafting
						recipes.
					</span>
				</div>

				<div className="flex flex-row items-center justify-center gap-2 w-full flex-wrap">
					{quickLinks.map((qLink, index) => (
						<Link href={qLink.link} key={index} className="">
							<Button className="w-[10rem] flex items-center gap-2 text-sm sm:text-base">
								<span>{qLink.label}</span>
								<ChevronRight size={20} />
							</Button>
						</Link>
					))}
				</div>
			</div>
		</PageContainer>
	);
}
