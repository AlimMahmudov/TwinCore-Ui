'use client'
import { Title } from "@/components/ui/text/Title";
import { TitleComponent } from "@/components/ui/text/TitleComponent";
import { PAGE } from "@/config/pages/public-page.config";
import { menu_docs } from "@/lib/menu_docs";
import { navbar } from "@/lib/navbar";
import Link from "next/link";
import { IoLogoGithub } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { LiaTelegramPlane } from "react-icons/lia";
import {
	GITHUB_LINK,
	INSTAGRAM_LINK,
	TELEGRAM_LINK,
	WHATSAPP_LINK,
} from "@/constants/admin";

import qrcode from "@/assets/images/qr-code.svg"
import Image from "next/image";
import { usePathname } from "next/navigation";

const Footer = () => {

	const pathname = usePathname();

  // Показывать футер только на главной
  if (pathname !== "/") return <footer></footer>;

	return (
		<footer className="py-20">
			<div className="container">
				<div className="flex md:flex-row flex-col gap-6 justify-between">
					<div className="flex md:flex-row flex-col gap-10">
						<div className="flex flex-col gap-3  items-center">
							<Link href={PAGE.HOME} className="pb-4">
								<TitleComponent>TwinCore</TitleComponent>
							</Link>
							{navbar.map((el, index) => (
								<Link
									key={index}
									className="text-[#7c7c7c] text-[16px] font-[400]"
									href={el.link}>
									{el.name}
								</Link>
							))}
							<Link
								className="text-[#7c7c7c] text-[16px] font-[400]"
								href={PAGE.AUTHORS}>
								Авторы
							</Link>
						</div>

						<div className="flex flex-col gap-3 items-center">
							<Link href={PAGE.HOME} className="pb-4 mt-2">
								<Title className="text-white">Компоненты</Title>
							</Link>
							{menu_docs.map((el, index) => (
								<Link
									key={index}
									className="text-[#7c7c7c] text-[16px] font-[400]"
									href={el.link}>
									{el.name}
								</Link>
							))}
						</div>
					</div>

					 <div className="flex flex-col justify-center text-center items-center gap-3">
						<Title className="mt-2 pb-4">QR-Code нашего сайта</Title>
					 <div className="bg-white p-3 rounded-[10px] w-full max-w-[180px] h-[180px]">
						<Image src={qrcode} alt="qr code" />
					</div>
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
		</footer>
	);
};

export default Footer;
