"use client";
import { Description } from "@/components/ui/text/Description";
import { Title } from "@/components/ui/text/Title";
import React, { useState } from "react";
import PhoneInput from "phone-go";
import "phone-go/dist/phone-go.css";
import Button from "@/components/ui/button/Button";
import { BsArrowRight, BsFillQuestionOctagonFill } from "react-icons/bs";
import { TitleComponent } from "@/components/ui/text/TitleComponent";

import { toast } from "alert-go";
import "alert-go/dist/notifier.css";
import LinkButton from "@/components/ui/button/LinkButton";
import { PAGE } from "@/config/pages/public-page.config";
import Link from "next/link";

const Projects = () => {
	const [phone, setPhone] = useState("");
	return (
		<section id="componnets" className="md:pt-20 pt-10">
			<div className="container">
				<div className="pb-8 flex justify-between flex-col md:flex-row items-start">
					<div className="w-full max-w-[550px]">
						<TitleComponent className="pb-3">
							Функциональный и полностью компонуемый
						</TitleComponent>
						<Description>
							Компоненты пользовательского интерфейса Kibo разработаны с учетом
							полной компоновки, чтобы вы могли создавать, настраивать и
							расширять их в соответствии со своими потребностями.
						</Description>
					</div>

					<LinkButton href={PAGE.DOCS} className="flex gap-2 md:mt-0 mt-3">
						Исследуйте компоненты <BsArrowRight size={16} />
					</LinkButton>
				</div>
				<div className=" grid md:grid-cols-3 grid-cols-1 gap-4">
					<div
						className="flex flex-col justify-start rounded-[12px] md:p-5 p-3 border border-[#525252]"
						style={{
							backgroundColor: "#242424",
							backgroundImage: `
                        repeating-linear-gradient(0deg, #2c2c2c 0 1px, transparent 1px 20px),
                        repeating-linear-gradient(90deg, #2c2c2c 0 1px, transparent 1px 20px)
                      `,
						}}>
						<div className="w-full h-[200px] p-4 bg-[#000000] flex flex-col gap-4 items-center justify-center rounded-[13px]">
							<PhoneInput
								value={phone}
								onChange={setPhone}
								defaultCountry="KG"
								placeholder="Введите номер"
							/>

							<PhoneInput
								className="my-phone-input"
								value={phone}
								onChange={setPhone}
								defaultCountry="KG"
								placeholder="Введите номер"
							/>
						</div>
						<Title className="text-start mt-3">PhoneGo</Title>
						<Description className="text-start mt-2 pb-3">
							Мощный и простой React-компонент для ввода телефонных номеров с
							современным UI, поддержкой всех стран, масками, валидацией и
							кастомизацией.
						</Description>
						<Link href={PAGE.DOCS} className="flex items-center gap-2">
							Документация <BsArrowRight size={20} />
						</Link>
					</div>

					<div
						className="flex flex-col justify-start rounded-[12px]  md:p-5 p-3 border border-[#525252]"
						style={{
							backgroundColor: "#242424",
							backgroundImage: `
                        repeating-linear-gradient(0deg, #2c2c2c 0 1px, transparent 1px 20px),
                        repeating-linear-gradient(90deg, #2c2c2c 0 1px, transparent 1px 20px)
                      `,
						}}>
						<div className="w-full min-h-[200px] p-4 bg-[#000000] flex flex-col gap-3 items-center justify-center rounded-[13px]">
							<Button
								className="w-full"
								onClick={() =>
									toast("Alert Go 🚀", {
										position: "top-center",
									})
								}>
								default
							</Button>

							<Button
								className="w-full bg-[#2ecc71]"
								onClick={() =>
									toast.success("Alert Go success 🚀", {
										position: "top-left",
									})
								}>
								Success
							</Button>

							<Button
								className="w-full bg-[#e74c3c]"
								onClick={() =>
									toast.error("Alert Go error", {
										position: "top-right",
									})
								}>
								error
							</Button>

							<Button
								className="w-full bg-[#ff8800] text-white"
								onClick={() =>
									toast.warning("Alert Go warning", {
										position: "top-center",
									})
								}>
								warning
							</Button>
						</div>
						<Title className="text-start mt-3">AlertGo</Title>
						<Description className="text-start mt-2 pb-3">
							alert-go — минималистичная библиотека для создания уведомлений
							(toast notifications) на веб-сайтах.
						</Description>
						<Link href={PAGE.ALERTGO} className="flex items-center gap-2">
							Документация <BsArrowRight size={20} />
						</Link>
					</div>

					<div
						className="flex flex-col justify-start rounded-[12px]  md:p-5 p-3 border border-[#525252]"
						style={{
							backgroundColor: "#242424",
							backgroundImage: `
                        repeating-linear-gradient(0deg, #2c2c2c 0 1px, transparent 1px 20px),
                        repeating-linear-gradient(90deg, #2c2c2c 0 1px, transparent 1px 20px)
                      `,
						}}>
						<div className="w-full h-[200px] p-4 bg-[#000000] flex items-center justify-center rounded-[13px]">
							<BsFillQuestionOctagonFill size={60} />
						</div>
						<Title className="text-start mt-3">В стадии разработки</Title>
						<Description className="text-start mt-2 pb-3">
							Еще много креативных библиотек ждут вас впереди буте с нами и
							станьте первыми кто протестирует
						</Description>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
