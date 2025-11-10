// src/app/docs/layout.tsx
import Menu from "@/components/pages/docs/menu/Menu";
import React from "react";

export default function DocsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex md:flex-row flex-col min-h-screen  ">
			{/* Sidebar */}
			 <Menu/>

			{/* Main Content */}
			<main className="flex-1">{children}</main>
		</div>
	);
}
