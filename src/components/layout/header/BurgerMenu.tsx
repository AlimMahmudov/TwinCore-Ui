"use client";

import Link from "next/link";
import { IoCloseOutline } from "react-icons/io5";

import { navbar } from "@/lib/navbar";
import { TitleComponent } from "@/components/ui/text/TitleComponent";
import {
	GITHUB_LINK,
	INSTAGRAM_LINK,
	TELEGRAM_LINK,
	WHATSAPP_LINK,
} from "@/constants/admin";
import { IoLogoGithub } from "react-icons/io";
import { PAGE } from "@/config/pages/public-page.config";
import { Title } from "@/components/ui/text/Title";
import { menu_docs } from "@/lib/menu_docs";
import { LiaTelegramPlane } from "react-icons/lia";
import { BsInstagram } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";

const BurgerMenu = ({
	isOpen,
	setIsOpen,
}: {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
}) => {
	return (
		<div
			id="menu-overlay"
			className={`fixed top-0 left-0 bg-transparent w-full h-[100vh] z-50 transition-opacity duration-700 ${
				isOpen
					? "pointer-events-auto"
					: "pointer-events-none"
			}`}>
			<div
				className={`fixed top-0 left-0 w-[100%] h-[100vh] bg-[#000000] py-1 px-4 flex flex-col justify-start gap-4 shadow-lg z-50 transition-transform duration-700 ${
					isOpen ? "translate-x-0" : "-translate-x-full"
				}`}>
				<div className="flex justify-between items-center">
					<Link href={"/"}>
						<TitleComponent className=" md:text-[24px]   text-[22px] ">
							TwinCore
						</TitleComponent>
					</Link>
					<button
						onClick={() => setIsOpen(false)}
						className="flex items-center   justify-center text-[32px] font-[800]">
						<IoCloseOutline />
					</button>
				</div>

				<div className="w-full flex flex-col justify-between py-10 items-center h-full">
					<div className="flex flex-col gap-3 items-center">
						{navbar.map((el, index) => (
							<Link
								key={index}
								className=" text-[16px] font-[400]"
								href={el.link}
								onClick={() => setIsOpen(false)}>
								{el.name}
							</Link>
						))}
						<Link className=" text-[16px] font-[400]" href={PAGE.AUTHORS}>
							Авторы
						</Link>
						{menu_docs.map((el, index) => (
							<Link
								key={index}
								className=" text-[16px] font-[400]"
								href={el.link}>
								{el.name}
							</Link>
						))}
					</div>

					<div className="flex flex-col gap-3 md:items-end items-center">
						<Title className="text-white mt-2 pb-4">Мы в соцсетях</Title>

						<div className="flex items-center gap-4">
							<Link href={GITHUB_LINK} target={"_blank"}>
								<IoLogoGithub size={28} />
							</Link>
							<Link href={TELEGRAM_LINK} target={"_blank"}>
								<LiaTelegramPlane size={28} />
							</Link>
							<Link href={INSTAGRAM_LINK} target={"_blank"}>
								<BsInstagram size={24} />
							</Link>
							<Link href={WHATSAPP_LINK} target={"_blank"}>
								<FaWhatsapp size={28} />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BurgerMenu;
