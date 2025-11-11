"use client";
import { Description } from "@/components/ui/text/Description";
import { Title } from "@/components/ui/text/Title";
import { TitleComponent } from "@/components/ui/text/TitleComponent";

import img from "@/assets/images/english.png";
import next_img from "@/assets/images/next.png";
import Image from "next/image";
import Link from "next/link";

const OurProjects = () => {

	const data = [
		{
			img: img,
			title: "Twin-English",
			desc: "Изучай английский легко! Грамматические уроки по неделям, практические задания и примеры для быстрого освоения Past, Future и других времен.",
			link: "https://twin-english.vercel.app/",
		},
		{
			img: next_img,
			title: "Next-Structure",
			desc: "Быстрый старт и готовая структура на Next.js. Просто склонируйте и создавайте свои шедевры!",
			link: "https://next-structure-seven.vercel.app/",
		},
	];
	return (
		<section id="componnets" className="md:pt-20 pt-10">
			<div className="container">
				<div className="pb-8 flex justify-between flex-col md:flex-row items-start">
					<div className="w-full max-w-[550px]">
						<TitleComponent className="pb-3">
            Наши другие проекты
						</TitleComponent>
						<Description>
            Здесь представлены наши другие проекты, вы можете с ними ознакомиться и попробовать сами.
						</Description>
					</div>

					 
				</div>
				<div className=" grid md:grid-cols-2 grid-cols-1 gap-4">
					{data.map((el, index) => (
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
							<div className="w-full h-[300px] overflow-hidden relative bg-[#000000] flex items-center justify-center rounded-[13px]">
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
