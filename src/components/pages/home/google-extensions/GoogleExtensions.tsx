"use client";
import { Description } from "@/components/ui/text/Description";
import { Title } from "@/components/ui/text/Title";
import { TitleComponent } from "@/components/ui/text/TitleComponent";

import img1 from "@/assets/images/line-css.png";
import img2 from "@/assets/images/seo-go.png";

import Image from "next/image";
import Link from "next/link";
 
const GoogleExtensions = () => {
	const data = [
		{
			img: img1,
			title: "Line Go — Визуальный CSS Debugger для разработчиков",
			desc: "Мгновенно визуализируйте структуру HTML-страницы. Одно нажатие — и все элементы обведены рамками. Без настроек, без бэкенда, прямо в браузере.",
			link: "https://chromewebstore.google.com/detail/line-go/pnddgeafhmkppcahfdapioaiobfehdpb?hl=ru&utm_source=ext_sidebar",
		},
		{
			img: img2,
			title: "Seo Go — Аудит метаданных прямо в браузере",
			desc: "Проверяйте title, description, Open Graph, Twitter Cards и другие SEO-теги одним кликом. Работает на любом сайте — идеально для веб-разработчиков и SEO.",
			link: "https://chromewebstore.google.com/detail/seo-go/dajnjejkmlocjlnbafagagbaeopehjff?hl=ru&utm_source=ext_sidebar",
		},
	];
	return (
		<section id="componnets" className="  py-20">
			<div className="container relative z-20">
				<div className="  text-center   pb-10 flex justify-center flex-col items-center">
					<TitleComponent className="pb-3 md:!text-[50px] !text-[28px]">
						Наши Chrome-расширения
					</TitleComponent>
					<Description className="w-full max-w-[550px]">
						Лёгкие Chrome-расширения с открытым исходным кодом. Работают
						мгновенно, не требуют регистрации и полностью автономны — всё, что
						нужно для быстрой отладки и аудита.
					</Description>
				</div>

				<div className=" grid md:grid-cols-2 grid-cols-1 gap-4">
					{data.slice(0, 4).map((el, index) => (
						<Link
							key={index}
							href={el.link}
							target={"_blank"}
							className="flex flex-col relative justify-start rounded-[12px]  md:p-5 p-2 border border-[#525252] "
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

export default GoogleExtensions;
