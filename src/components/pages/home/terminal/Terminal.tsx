"use client";
import { Description } from "@/components/ui/text/Description";
import { TitleComponent } from "@/components/ui/text/TitleComponent";
import React, { useState, useEffect } from "react";

import styles from "@/components/pages/home/hero/Hero.module.scss";

const Terminal = () => {
	const [text, setText] = useState("phone-go");
	const [phase, setPhase] = useState<"deleting" | "typing">("typing");
	const [targetIndex, setTargetIndex] = useState(0);

	const targets = ["phone-go", "alert-go"];

	useEffect(() => {
		const currentTarget = targets[targetIndex];
		let timeoutId: NodeJS.Timeout;

		if (phase === "typing") {
			if (text.length < currentTarget.length) {
				timeoutId = setTimeout(() => {
					setText(currentTarget.slice(0, text.length + 1));
				}, 100);
			} else {
				timeoutId = setTimeout(() => {
					setPhase("deleting");
				}, 3000);
			}
		} else if (phase === "deleting") {
			if (text.length > 0) {
				timeoutId = setTimeout(() => {
					setText(text.slice(0, -1));
				}, 80);
			} else {
				const nextIndex = (targetIndex + 1) % targets.length;
				setTargetIndex(nextIndex);
				setPhase("typing");
			}
		}

		return () => clearTimeout(timeoutId);
	}, [text, phase, targetIndex, targets]);

	return (
		<div className="container">
			<div className="max-w-2xl z-10 relative mx-auto my-6 text-center py-20">
				<TitleComponent>Установите за секунду</TitleComponent>
				<Description className="mt-4">
				Простые, лёгкие и готовые к production решению для Next.js и React.
				Без лишних зависимостей — только то, что нужно.
				</Description>
				<div className="rounded-lg overflow-hidden shadow-lg font-mono mt-10 text-sm md:text-base bg-black border border-gray-800">
					<div className="bg-gray-900 flex items-center justify-between px-3 py-2 border-b border-gray-800">
						<div className="flex space-x-2">
							<div className="w-3 h-3 rounded-full bg-red-500"></div>
							<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
							<div className="w-3 h-3 rounded-full bg-green-500"></div>
						</div>
						<div className="text-gray-300 text-sm font-medium">Terminal</div>
						<div className="w-12"></div>
					</div>

					<div className="p-4 min-h-[120px] text-gray-100">
						<div className="flex items-center gap-2">
							<span className="text-green-400 font-bold">$</span>
							<span className="text-white">npm i {text}</span>
							{/* Показываем курсор только при печати */}
							<span className="-ml-1 w-1 h-4 bg-white animate-pulse"></span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Terminal;
