import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const Button = ({
	className,
	children,
	onClick,
	type,
}: {
	className?: string;
	children: ReactNode;
	onClick?: () => void;
	type?: "light" | "dark";
}) => {
	return (
		<button
			className={cn(
				`hover:bg-green-700 ${
					type === "light"
						? "bg-gray-300 text-black hover:text-white font-bold px-4 py-2 border-4 border-l-gray-100 hover:border-l-green-600 border-t-gray-100 hover:border-t-green-600 border-r-gray-500 hover:border-r-green-900 border-b-gray-500 hover:border-b-green-900 active:hover:border-l-green-900 active:hover:border-t-green-900 active:hover:border-r-green-600 active:hover:border-b-green-600"
						: "bg-zinc-800 text-white hover:text-white font-bold px-4 py-2 border-4 border-l-zinc-600 hover:border-l-green-600 border-t-zinc-600 hover:border-t-green-600 border-r-zinc-950 hover:border-r-green-900 border-b-zinc-950 hover:border-b-green-900 active:hover:border-l-green-900 active:hover:border-t-green-900 active:hover:border-r-green-600 active:hover:border-b-green-600"
				}`,
				className
			)}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
