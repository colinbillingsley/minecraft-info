import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const PageContainer = ({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) => {
	return (
		<div
			className={cn(
				`min-h-screen p-8 sm:p-20 w-full flex flex-col justify-start`,
				className
			)}
		>
			{children}
		</div>
	);
};

export default PageContainer;
