// src/components/Resume.tsx
import asim from "@/assets/images/asim2.jpg";
import alim from "@/assets/images/Alim.jpg";

import { Description } from "@/components/ui/text/Description";
import { Title } from "@/components/ui/text/Title";
import { TitleComponent } from "@/components/ui/text/TitleComponent";
import Image from "next/image";
import Link from "next/link";

const Authors = () => {
	return (
		<section id="authors" className="py-12 flex flex-col  gap-20 text-gray-100 font-mono">
			<TitleComponent  className="text-center">Разработчики</TitleComponent>
			<div className="container flex md:flex-row flex-col gap-28">
				<div className="  ">
					<div className="text-center  flex flex-col items-center justify-center mb-12">
						<div className="w-full max-w-[300px] h-[300px] relative rounded-full overflow-hidden">
							<Image fill objectFit="cover" src={alim} alt="asim" />
						</div>
						<TitleComponent className="mt-4">АЛИМ МАХМУДОВ</TitleComponent>
						<Description className="text-gray-300 mt-2">
							Full Steak Developer
						</Description>
						<div className="flex flex-wrap justify-center gap-4 mt-4 text-sm">
							<span className="text-gray-400">+996 704 428 002</span>
							<span>•</span>
							<Link
								href="https://github.com/AlimMahmudov"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-400 hover:text-blue-400 transition-colors underline-offset-2 hover:underline">
								GitHub
							</Link>
							<span>•</span>
							<Link
								href="https://t.me/MahmudovAlim"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-400 hover:text-blue-400 transition-colors underline-offset-2 hover:underline">
								Telegram
							</Link>
							<span>•</span>
							<Link
								href="mailto:alimmahmudov27@gmail.com"
								target="_blank"
								className="text-blue-400 hover:text-blue-400 transition-colors underline-offset-2 hover:underline">
								alimmahmudov27@gmail.com
							</Link>
						</div>
					</div>

					{/* About */}
					<section className="mb-10">
						<Title>ОБО МНЕ</Title>
						<Description className="text-gray-300 mt-4">
							Я увлечённый Full-Stack разработчик, которому нравится создавать
							динамичные и удобные приложения. Мне нравится решать задачи,
							создавать плавные пользовательские интерфейсы и постоянно
							расширять свои навыки. Всегда стремлюсь к обучению и развитию, и в
							настоящее время ищу новые возможности для вклада и инноваций.
						</Description>
					</section>

					{/* Skills */}
					<section className="mb-10">
						<Title>ТЕХНИЧЕСКИЙ СТЕК</Title>
						<div className="flex flex-wrap gap-2 mt-4">
							{[
								"HTML",
								"CSS",
								"JavaScript",
								"TypeScript",
								"React",
								"Next.js",
								"Redux",
								"Redux Toolkit",
								"RTK Query",
								"Zustand",
								"React Query",
								"Vite",
								"SCSS",
								"SCSS Modules",
								"Tailwind CSS",
								"Chakra UI",
								"Node.js",
								"Express",
								"NestJS",
								"Prisma",
								"Supabase",
								"Axios",
								"SEO",
								"SSR / SSG",
								"Git",
								"GitHub",
								"Docker",
								"Swagger",
								"Insomnia",
								"Python",
							].map((skill, i) => (
								<span
									key={i}
									className="px-3 py-2 bg-gray-900 border border-gray-700 rounded text-blue-400 text-xs font-mono">
									{skill}
								</span>
							))}
						</div>
					</section>

					{/* Experience */}
					<section>
						<Title>ОПЫТ</Title>

						{/* Remotion IT */}
						<div className="ml-4 border-l-2 border-gray-700 mt-4 pl-5 relative">
							<div className="absolute w-3 h-3 rounded-full bg-blue-500 -left-[7px] top-1"></div>

							<h3 className="text-lg font-semibold text-gray-200">
								Remotion IT — Frontend-разработчик
							</h3>
							<p className="text-gray-500 text-sm">
								Бишкек, Кыргызстан • 15.08.2024 – 20.11.2024
							</p>

							<ul className="mt-3 space-y-2 text-gray-300 list-none">
								<li>
									• Разрабатывал и оптимизировал ключевые интерфейсные
									компоненты с использованием TypeScript и Next.js, увеличив
									скорость загрузки страниц на 30%.
								</li>
								<li>
									• Внедрил Zustand и RTK Query для управления состоянием,
									снизив количество ошибок взаимодействия компонентов на 20%.
								</li>
							</ul>
						</div>

						{/* Motion Studio */}
						<div className="ml-4 border-l-2 border-gray-700 mt-8 pl-5 relative">
							<div className="absolute w-3 h-3 rounded-full bg-blue-500 -left-[7px] top-1"></div>

							<h3 className="text-lg font-semibold text-gray-200">
							BIR DIGITAL — Frontend-разработчик
							</h3>
							<p className="text-gray-500 text-sm">
								Бишкек, Кыргызстан • 13.01.2024 – 25.03.2025
							</p>

							<ul className="mt-3 space-y-2 text-gray-300 list-none">
								<li>
									• Участвовал в разработке масштабируемых веб-приложений на
									React, Next.js и TypeScript.
								</li>
								<li>
									• Оптимизировал взаимодействие с API с использованием RTK
									Query, что уменьшило время отклика клиент-серверных запросов
									на 25%.
								</li>
							</ul>
						</div>
					</section>
				</div>

			 

				<div className="   ">
					<div className="text-center  flex flex-col items-center justify-center mb-12">
						<div className="w-full max-w-[300px] h-[300px] relative rounded-full overflow-hidden">
							<Image fill objectFit="cover" src={asim} alt="asim" />
						</div>
						<TitleComponent className="mt-4">АСИМ МАХМУДОВ</TitleComponent>
						<Description className="text-gray-300 mt-2">
							Frontend Developer
						</Description>
						<div className="flex flex-wrap justify-center gap-4 mt-4 text-sm">
							<span className="text-gray-400">+996 708 77 18 49</span>
							<span>•</span>
							<Link
								href="https://github.com/AsimMahmudov"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-400 hover:text-blue-400 transition-colors underline-offset-2 hover:underline">
								GitHub
							</Link>
							<span>•</span>
							<Link
								href="https://t.me/MahmudovAsim"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-400 hover:text-blue-400 transition-colors underline-offset-2 hover:underline">
								Telegram
							</Link>
							<span>•</span>
							<Link
								href="mailto:mahmudovasim799@gmail.com"
								target="_blank"
								className="text-blue-400 hover:text-blue-400 transition-colors underline-offset-2 hover:underline">
								mahmudovasim799@gmail.com

							</Link>
						</div>
					</div>

					{/* About */}
					<section className="mb-10">
						<Title>ОБО МНЕ</Title>
						<Description className="text-gray-300 mt-4">
							Frontend-разработчик с 1.5 годами коммерческого опыта. Участвовал
							в создании более 40 проектов — от лендингов до сложных
							веб-приложений. Специализируюсь на React, TypeScript и Next.js.
							Практикую SSR/SSG, SEO-оптимизацию и интеграцию с API через RTK
							Query / React Query. Ценю чистый код, типизацию,
							производительность и понятную архитектуру.
						</Description>
					</section>

					{/* Skills */}
					<section className="mb-10">
						<Title>ТЕХНИЧЕСКИЙ СТЕК</Title>
						<div className="flex flex-wrap gap-2 mt-4">
							{[
								"TypeScript",
								"React",
								"Next.js",
								"Redux Toolkit",
								"RTK Query",
								"Zustand",
								"React Query",
								"Tailwind CSS",
								"SCSS Modules",
								"Chakra UI",
								"SSR / SSG",
								"Vite",
								"SEO",
							].map((skill, i) => (
								<span
									key={i}
									className="px-3 py-2 bg-gray-900 border border-gray-700 rounded text-blue-400 text-xs font-mono">
									{skill}
								</span>
							))}
						</div>
					</section>

					{/* Experience */}
					<section>
						<Title>ОПЫТ</Title>
						<div className="ml-4 border-l-2 border-gray-700 mt-4 pl-5 relative">
							<div className="absolute w-3 h-3 rounded-full bg-blue-500 -left-[7px] top-1"></div>
							<h3 className="text-lg font-semibold text-gray-200">
								BIR DIGITAL — Frontend Developer
							</h3>
							<p className="text-gray-500 text-sm">
								Бишкек, Кыргызстан • авг 2024 – сейчас
							</p>
							<ul className="mt-3 space-y-2 text-gray-300 list-none">
								<li>
									• Разработка масштабируемых веб-приложений на Next.js и
									TypeScript
								</li>
								<li>
									• Оптимизация работы с API через RTK Query (кеширование,
									рефетчи, мутации)
								</li>
								<li>
									• Интеграция UI-библиотек и кастомизация под дизайн-систему
								</li>
							</ul>
						</div>
					</section>
				</div>
			</div>
		</section>
	);
};

export default Authors;
