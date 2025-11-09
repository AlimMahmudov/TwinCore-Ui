"use client";
import { Description } from "@/components/ui/text/Description";
import { TitleComponent } from "@/components/ui/text/TitleComponent";
import React, { useState, useEffect } from "react";

const Terminal = () => {
	const [text, setText] = useState("asim-phone");
	const [phase, setPhase] = useState<"deleting" | "typing">("typing"); // начнём с печати asim-phone
	const [targetIndex, setTargetIndex] = useState(0); // 0 = asim-phone, 1 = asim-toast

	const targets = ["asim-phone", "asim-toast"];

	useEffect(() => {
		const currentTarget = targets[targetIndex];
		let timeoutId: NodeJS.Timeout;

		if (phase === "typing") {
			if (text.length < currentTarget.length) {
				// Печатаем следующий символ
				timeoutId = setTimeout(() => {
					setText(currentTarget.slice(0, text.length + 1));
				}, 100);
			} else {
				// Завершили печать — ждём, потом начнём стирать
				timeoutId = setTimeout(() => {
					setPhase("deleting");
				}, 3000);
			}
		} else if (phase === "deleting") {
			if (text.length > 0) {
				// Стираем по символу
				timeoutId = setTimeout(() => {
					setText(text.slice(0, -1));
				}, 80);
			} else {
				// Полностью стёрли — переключаем цель и начинаем печатать новую
				const nextIndex = (targetIndex + 1) % targets.length;
				setTargetIndex(nextIndex);
				setPhase("typing");
				// setText(''); // уже пусто, но можно явно сбросить
			}
		}

		return () => clearTimeout(timeoutId);
	}, [text, phase, targetIndex, targets]);

	return (
		<div className="container">
			<div className="max-w-2xl mx-auto my-6 text-center py-20">
				<TitleComponent>Начните работу прямо сейчас</TitleComponent>
				<Description className="mt-4">
					Я разрабатываю лёгкие и удобные React-компоненты с современным UI и
					минимальными зависимостями.
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
