"use client";
import Button from "@/components/ui/button/Button";
import { TitleComponent } from "@/components/ui/text/TitleComponent";
import { GITHUB_LINK } from "@/constants/admin";
import { navbar } from "@/lib/navbar";
import Link from "next/link";
import { IoLogoGithub } from "react-icons/io";
import BurgerMenu from "./BurgerMenu";
import { useState } from "react";
import { CgMenu } from "react-icons/cg";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleBox = () => {
		setIsOpen((prevState) => !prevState);
	};

	 
	return (
		<header className="bg-[#000000d7] backdrop-blur-sm sticky top-0 left-0 w-full z-50 py-2">
			<div className=" px-[20px] flex justify-between items-center">
				<div className="flex items-center gap-7">
					<Link href={"/"}>
						<TitleComponent className="text-white md:text-[24px] text-[22px] ">
							TwinCore
						</TitleComponent>
					</Link>

					<div className="md:flex hidden gap-7">
						{navbar.map((el, index) => (
							<Link key={index} href={el.link}>{el.name}</Link>
						))}
					</div>
				</div>

				<Link
					href={GITHUB_LINK}
					target="_blank"
					className="md:flex hidden w-full max-w-[250px]">
					<Button className="gap-2 bg-transparent hover:bg-transparent text-[#afafaf] border border-[#7e7e7e]">
						<IoLogoGithub size={22} color="white" /> остальные проекты
					</Button>
				</Link>

				<button
					onClick={toggleBox}
					className="bg-transparent border-none flex md:hidden">
					<CgMenu size={28} />
				</button>
			</div>
			<BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
		</header>
	);
};

export default Header;
