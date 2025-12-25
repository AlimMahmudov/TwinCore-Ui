"use client";
import { Description } from "@/components/ui/text/Description";
import { Title } from "@/components/ui/text/Title";
import { TitleComponent } from "@/components/ui/text/TitleComponent";

import alert_go from "@/assets/images/alert-go.png";
import next_img from "@/assets/images/next.png";
import nfc_img from "@/assets/images/nfc.png";
import next_intl from "@/assets/images/next-intl.png";
import alim from "@/assets/images/AlimMah.png";

import Image from "next/image";
import Link from "next/link";
import LinkButton from "@/components/ui/button/LinkButton";
import { BsArrowRight } from "react-icons/bs";
import { PAGE } from "@/config/pages/public-page.config";

const OurProjects = () => {
	const data = [
		{
			img: nfc_img,
			title: "Scan-NFC",
			desc: "Веб-сайт для работы с NFC картами прямо в браузере. Простое и удобное решение, которое позволяет использовать Web NFC API без необходимости устанавливать отдельные приложения.",
			link: "https://scan-nfc-gamma.vercel.app/",
		},
		{
			img: alert_go,
			title: "Alert-Go Playground",
			desc: "Веб-сайт для работы с NFC картами прямо в браузере. Простое и удобное решение, которое позволяет использовать Web NFC API без необходимости устанавливать отдельные приложения.",
			link: "https://alert-go-playground.vercel.app/",
		},
		{
			img: alim,
			title: "Alim's portfolio",
			desc: "Лёгкие, быстрые и кастомизируемые уведомления для веба. Аналог Sonner, но без зависимостей от React и всего ~1.1 КБ.",
			link: "https://alimmah.vercel.app/",
		},
		{
			img: next_img,
			title: "Next-Structure",
			desc: "Быстрый старт и готовая структура на Next.js. Просто склонируйте и создавайте свои шедевры!",
			link: "https://github.com/AsimMahmudov/next-structure",
		},
		{
			img: next_intl,
			title: "Next-Structure + next-intl",
			desc: "Быстрый старт и готовая структура на Next.js + Next-intl.",
			link: "https://github.com/AsimMahmudov/next-structure-translate",
		},
	];
	return (
		<section id="componnets" className="md:py-28 py-10">
			<div className="container">
				<div className="pb-8 flex justify-between flex-col md:flex-row items-start">
					<div className="w-full max-w-[550px]">
						<TitleComponent className="pb-3">
							Наши другие проекты
						</TitleComponent>
						<Description>
							Здесь представлены наши другие проекты, вы можете с ними
							ознакомиться и попробовать сами.
						</Description>
					</div>

					<LinkButton href={PAGE.DOCS} className="flex gap-2 md:mt-0 mt-3">
						Исследуйте компоненты <BsArrowRight size={16} />
					</LinkButton>
				</div>
				<div className=" grid md:grid-cols-2 grid-cols-1 gap-4">
					{data.slice(0, 2).map((el, index) => (
						<Link
							key={index}
							href={el.link}
							target={"_blank"}
							className="flex flex-col justify-start rounded-[12px]  md:p-5 p-2 border border-[#525252]"
							style={{
								backgroundColor: "#242424",
								backgroundImage: `
                        repeating-linear-gradient(0deg, #2c2c2c 0 1px, transparent 1px 20px),
                        repeating-linear-gradient(90deg, #2c2c2c 0 1px, transparent 1px 20px)
                      `,
							}}>
							<div className="w-full md:h-[300px] h-[250px] overflow-hidden relative bg-[#000000] flex items-center justify-center rounded-[13px]">
								<Image fill src={el.img} alt="img" objectFit="cover" />
							</div>
							<Title className="text-start mt-3">{el.title}</Title>
							<Description className="text-start mt-2">{el.desc}</Description>
						</Link>
					))}
				</div>
				<div className=" grid  grid-cols-1 gap-4 mt-4">
					{data.slice(2, 3).map((el, index) => (
						<Link
							key={index}
							href={el.link}
							target={"_blank"}
							className="flex flex-col justify-start rounded-[12px]  md:p-5 p-2 border border-[#525252]"
							style={{
								backgroundColor: "#242424",
								backgroundImage: `
                        repeating-linear-gradient(0deg, #2c2c2c 0 1px, transparent 1px 20px),
                        repeating-linear-gradient(90deg, #2c2c2c 0 1px, transparent 1px 20px)
                      `,
							}}>
							<div className="w-full md:h-[400px] h-[250px] overflow-hidden relative bg-[#000000] flex items-center justify-center rounded-[13px]">
								<Image fill src={el.img} alt="img" objectFit="cover" />
							</div>
							<Title className="text-start mt-3">{el.title}</Title>
							<Description className="text-start mt-2">{el.desc}</Description>
						</Link>
					))}
				</div>
				<div className=" grid md:grid-cols-2 grid-cols-1 gap-4 mt-4">
					{data.slice(3,5).map((el, index) => (
						<Link
							key={index}
							href={el.link}
							target={"_blank"}
							className="flex flex-col justify-start rounded-[12px]  md:p-5 p-2 border border-[#525252]"
							style={{
								backgroundColor: "#242424",
								backgroundImage: `
                        repeating-linear-gradient(0deg, #2c2c2c 0 1px, transparent 1px 20px),
                        repeating-linear-gradient(90deg, #2c2c2c 0 1px, transparent 1px 20px)
                      `,
							}}>
							<div className="w-full md:h-[300px] h-[250px] overflow-hidden relative bg-[#000000] flex items-center justify-center rounded-[13px]">
								<Image fill src={el.img} alt="img" objectFit="cover" />
							</div>
							<Title className="text-start mt-3">{el.title}</Title>
							<Description className="text-start mt-2">{el.desc}</Description>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
};

export default OurProjects;
