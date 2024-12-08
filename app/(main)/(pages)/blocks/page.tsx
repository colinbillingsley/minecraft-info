"use client";
import BlocksCard from "@/app/components/blocks/BlocksCard";
import Button from "@/app/components/buttons/Button";
import PageContainer from "@/app/components/PageContainer";
import PageTitle from "@/app/components/PageTitle";
import SearchBar from "@/app/components/SearchBar";
import { Block } from "@/types";
import { CircleOff } from "lucide-react";
import React, { useEffect, useState } from "react";

const Blocks = () => {
	const [blocks, setBlocks] = useState<Block[]>([]);
	const [filteredBlocks, setFilteredBlocks] = useState<Block[]>([]);
	const [visible, setVisible] = useState<number>(30);
	const [search, setSearch] = useState("");

	const handleLoadMore = () => {
		setVisible((prev) => prev + 30);
	};

	const handleSearchChange = (text: string) => {
		setSearch(text);
	};

	const filterBySearch = () => {
		const blocksArray = blocks;
		const filtered = blocksArray.filter((block: Block) =>
			block.displayName.toLowerCase().includes(search.toLowerCase())
		);
		setFilteredBlocks(filtered);
	};

	useEffect(() => {
		fetch(`/data/bedrock/blocks.json`)
			.then((res) => res.json())
			.then((data) => {
				setBlocks(data);
				setFilteredBlocks(data);
			})
			.catch((error) => console.error("Error fetching Blocks:", error));
	}, []);

	useEffect(() => {
		console.log(search);
		filterBySearch();
	}, [search]);

	return (
		<PageContainer className="text-white">
			<PageTitle className="mb-2">Blocks</PageTitle>
			<p className="mb-3">Blocks are a viral part of the game...</p>
			<SearchBar
				placeholder="Search block..."
				className="mb-4"
				onChange={(e) => handleSearchChange(e.target.value)}
			/>

			<div className="flex flex-col justify-center items-center gap-6">
				{filteredBlocks.length > 0 ? (
					<ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full">
						{filteredBlocks.slice(0, visible).map((block, index) => (
							<li key={index}>
								<BlocksCard block={block} />
							</li>
						))}
					</ul>
				) : (
					<div className="text-zinc-400 w-full flex flex-col items-center justify-center gap-3 mt-12">
						<CircleOff size={24} />
						<p>No blocks found...</p>
					</div>
				)}

				{visible < filteredBlocks.length ? (
					<Button onClick={handleLoadMore} className="font-normal">
						Load More
					</Button>
				) : (
					""
				)}
			</div>
		</PageContainer>
	);
};

export default Blocks;
