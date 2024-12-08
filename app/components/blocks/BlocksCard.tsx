import { Block } from "@/types";
import React from "react";

const BlocksCard = ({ block }: { block: Block }) => {
	return (
		<div className="bg-zinc-800 h-[10rem] w-full p-4 border-4 border-l-zinc-600 border-t-zinc-600 border-r-zinc-950 border-b-zinc-950">
			<h2>{block.displayName}</h2>
			<div className="text-xs">
				<p>Hardness: {block.hardness}</p>
				<p>Resistance: {block.resistance}</p>
				<p>Stack Size: {block.stackSize}</p>
			</div>
		</div>
	);
};

export default BlocksCard;
