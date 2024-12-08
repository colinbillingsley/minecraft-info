import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const PageTitle = ({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) => {
	return <h1 className={cn(`text-4xl`, className)}>{children}</h1>;
};

export default PageTitle;
