// src/app/docs/layout.tsx
import React from "react";

export default function DocsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex min-h-screen  ">
			{/* Sidebar */}
			<aside className="w-72 bg-[#1d1d1d] relative border-r border-[#303030]">
        <div className="w-full left-0 top-0 fixed mt-[80px] p-4">
        <h2 className="text-lg font-semibold mb-4">Документация</h2>
        </div>
      </aside>

			{/* Main Content */}
			<main className="flex-1 p-6">{children}</main>
		</div>
	);
}
