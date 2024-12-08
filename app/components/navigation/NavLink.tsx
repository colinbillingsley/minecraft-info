"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const NavLink = ({
	href,
	children,
	className,
	onClick,
	type,
}: {
	href: string;
	children: ReactNode;
	className?: string;
	onClick?: () => void;
	type: "mobile" | "web";
}) => {
	const pathname = usePathname();

	return (
		<Link
			className={cn(
				`block p-2 ${
					type === "web"
						? pathname === href
							? "font-bold text-green-500 underline underline-offset-4"
							: ""
						: pathname === href
						? "font-bold text-white bg-green-700"
						: ""
				}`,
				className
			)}
			href={href}
			onClick={onClick}
		>
			{children}
		</Link>
	);
};

export default NavLink;
