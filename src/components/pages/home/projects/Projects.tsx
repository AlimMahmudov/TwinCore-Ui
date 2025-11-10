"use client";
import { Description } from "@/components/ui/text/Description";
import { Title } from "@/components/ui/text/Title";
import React, { useState } from "react";
import PhoneInput from "asim-phone";
import "asim-phone/dist/asim-phone.css";
import Button from "@/components/ui/button/Button";
import { BsArrowRight } from "react-icons/bs";
import { TitleComponent } from "@/components/ui/text/TitleComponent";

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

					<Button className="flex gap-2 md:mt-0 mt-3">
						Исследуйте компоненты <BsArrowRight size={16} />
					</Button>
				</div>
				<div className=" grid md:grid-cols-3 grid-cols-1 gap-4">
					<div
						className="flex flex-col justify-start rounded-[12px] md:p-5 p-2 border border-[#525252]"
						style={{
							backgroundColor: "#242424",
							backgroundImage: `
                        repeating-linear-gradient(0deg, #2c2c2c 0 1px, transparent 1px 20px),
                        repeating-linear-gradient(90deg, #2c2c2c 0 1px, transparent 1px 20px)
                      `,
						}}>
						<div className="w-full h-[200px] p-4 bg-[#000000] flex items-center justify-center rounded-[13px]">
							<PhoneInput
								className="my-phone-input" // если хотите изменить стиль
								value={phone}
								onChange={setPhone}
								defaultCountry="KG"
								placeholder="Введите номер"
							/>
						</div>
						<Title className="text-start mt-3">React-phone</Title>
						<Description className="text-start mt-2 pb-3">
							Мощный и простой React-компонент для ввода телефонных номеров с
							современным UI, поддержкой всех стран, масками, валидацией и
							кастомизацией.
						</Description>
					</div>

          <div
						className="flex flex-col justify-start rounded-[12px]  md:p-5 p-2 border border-[#525252]"
						style={{
							backgroundColor: "#242424",
							backgroundImage: `
                        repeating-linear-gradient(0deg, #2c2c2c 0 1px, transparent 1px 20px),
                        repeating-linear-gradient(90deg, #2c2c2c 0 1px, transparent 1px 20px)
                      `,
						}}>
						<div className="w-full h-[200px] p-4 bg-[#000000] flex items-center justify-center rounded-[13px]">
							<PhoneInput
								className="my-phone-input" // если хотите изменить стиль
								value={phone}
								onChange={setPhone}
								defaultCountry="KG"
								placeholder="Введите номер"
							/>
						</div>
						<Title className="text-start mt-3">React-phone</Title>
						<Description className="text-start mt-2 pb-3">
							Мощный и простой React-компонент для ввода телефонных номеров с
							современным UI, поддержкой всех стран, масками, валидацией и
							кастомизацией.
						</Description>
					</div>

          <div
						className="flex flex-col justify-start rounded-[12px]  md:p-5 p-2 border border-[#525252]"
						style={{
							backgroundColor: "#242424",
							backgroundImage: `
                        repeating-linear-gradient(0deg, #2c2c2c 0 1px, transparent 1px 20px),
                        repeating-linear-gradient(90deg, #2c2c2c 0 1px, transparent 1px 20px)
                      `,
						}}>
						<div className="w-full h-[200px] p-4 bg-[#000000] flex items-center justify-center rounded-[13px]">
							<PhoneInput
								className="my-phone-input" // если хотите изменить стиль
								value={phone}
								onChange={setPhone}
								defaultCountry="KG"
								placeholder="Введите номер"
							/>
						</div>
						<Title className="text-start mt-3">React-phone</Title>
						<Description className="text-start mt-2 pb-3">
							Мощный и простой React-компонент для ввода телефонных номеров с
							современным UI, поддержкой всех стран, масками, валидацией и
							кастомизацией.
						</Description>
					</div>

          
				</div>
			</div>
		</section>
	);
};

export default Projects;
