import { cn } from "@/lib/utils";
import React from "react";

const SearchBar = ({
	type,
	placeholder,
	className,
	onChange,
}: {
	type?: string | "text";
	placeholder?: string | "";
	className?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
	return (
		<input
			type={type}
			placeholder={placeholder}
			className={cn(
				`bg-zinc-800 outline-none text-inherit px-4 py-2 border-2 border-l-zinc-600 border-t-zinc-600 border-r-zinc-950 border-b-zinc-950`,
				className
			)}
			onChange={onChange}
		/>
	);
};

export default SearchBar;
