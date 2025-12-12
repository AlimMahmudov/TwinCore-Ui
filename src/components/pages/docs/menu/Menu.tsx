"use client";

import { menu_docs } from "@/lib/menu_docs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { CgMenu } from "react-icons/cg";

const Menu = () => {
	const pathname = usePathname();
	const [isMobileOpen, setIsMobileOpen] = useState(false);
	const [isClosing, setIsClosing] = useState(false);

	const openMenu = () => {
		setIsMobileOpen(true);
		setIsClosing(false);
	};

	const closeMenu = () => {
		setIsClosing(true);
		setTimeout(() => {
			setIsMobileOpen(false);
		}, 300); // длительность совпадает с CSS анимацией
	};

	useEffect(() => {
		setIsMobileOpen(false);
		setIsClosing(false);
	}, [pathname]);

	return (
		<>
			{/* Desktop */}
			<aside className="hidden md:block md:w-[300px] bg-[#0f0f0f] border-r border-[#303030]">
				<div className="p-4 sticky top-[80px]">
					<h2 className="text-lg font-semibold mb-4">Документация</h2>
					<div className="flex gap-1 flex-col mt-10">
						{menu_docs.map((el, index) => {
							const isActive = pathname === el.link;
							return (
								<Link
									key={index}
									href={el.link}
									className={`w-full p-2 rounded transition-colors ${
										isActive
											? "bg-[#2a2a2a] text-white font-medium"
											: "text-gray-300 hover:bg-[#22222288]"
									}`}>
									{el.name}
								</Link>
							);
						})}
					</div>
				</div>
			</aside>

			{/* Mobile Trigger */}
			<div
				onClick={openMenu}
				className="md:hidden fixed bg-[#1a1a1a] flex justify-center items-center border-t border-[#5c5c5c] rounded-tl-[20px] rounded-tr-[20px] w-full bottom-0 py-2 left-1/2 transform -translate-x-1/2 z-40">
				<button
					onClick={openMenu}
					className="px-4 py-2 text-lg flex items-center gap-3 text-white">
					<CgMenu size={22} /> Документация
				</button>
			</div>

			{/* Mobile Menu + animation */}
			{isMobileOpen && (
				<>
					{/* Overlay */}
					<div
						className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300 ${
							isClosing ? "opacity-0" : "opacity-100"
						}`}
						onClick={closeMenu}
					/>

					{/* Sliding menu */}
					<aside
						className={`fixed bottom-0 left-0 right-0 bg-[#0f0f0f] border-t border-[#303030] z-40 md:hidden rounded-t-2xl p-4 max-h-[80vh] overflow-y-auto 
                            ${isClosing ? "animate-slide-down" : "animate-slide-up"}`}
					>
						<div className="flex justify-between items-center mb-6">
							<h2 className="text-lg font-semibold">Документация</h2>
							<button
								onClick={closeMenu}
								className="text-gray-400 hover:text-white">
								✕
							</button>
						</div>

						<div className="flex flex-col gap-2 h-[500px]">
							{menu_docs.map((el, index) => {
								const isActive = pathname === el.link;
								return (
									<Link
										key={index}
										href={el.link}
										onClick={closeMenu}
										className={`w-full p-3 rounded transition-colors text-center ${
											isActive
												? "bg-[#2a2a2a] text-white font-medium"
												: "text-gray-300 hover:bg-[#272727]"
										}`}>
										{el.name}
									</Link>
								);
							})}
						</div>
					</aside>
				</>
			)}

			<style jsx global>{`
				@keyframes slide-up {
					from {
						transform: translateY(100%);
					}
					to {
						transform: translateY(0);
					}
				}

				@keyframes slide-down {
					from {
						transform: translateY(0);
					}
					to {
						transform: translateY(100%);
					}
				}

				.animate-slide-up {
					animation: slide-up 0.3s ease-out forwards;
				}

				.animate-slide-down {
					animation: slide-down 0.3s ease-in forwards;
				}
			`}</style>
		</>
	);
};

export default Menu;
