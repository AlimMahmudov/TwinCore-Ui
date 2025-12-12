"use client";

import { Description } from "@/components/ui/text/Description";
import { TitleComponent } from "@/components/ui/text/TitleComponent";
import { useState } from "react";
import axios from "axios";
import { toast } from "alert-go";
import "alert-go/dist/notifier.css";

const Forma = () => {
	const [name, setName] = useState<string>("");
	const [idea, setIdea] = useState<string>("");
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const TOKEN = process.env.NEXT_PUBLIC_TG_TOKEN;
	const CHAT_ID = process.env.NEXT_PUBLIC_TG_CHAT_ID;

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!name.trim()) {
			return toast.warning("Пожалуйста, укажите своё имя.");
		}

		if (!idea.trim()) {
			return toast.warning("Пожалуйста, напишите свою идею.");
		}

		if (!TOKEN || !CHAT_ID) {
			return toast.error("Ошибка: не заданы Telegram TOKEN или CHAT_ID.");
		}

		setIsLoading(true);

		try {
			const message = `
<b>Новое предложение с сайта TwinCoreUI</b>

👤 <b>Имя:</b> ${name}
💡 <b>Идея:</b>
${idea}
			`;

			await axios.post(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
				chat_id: CHAT_ID,
				parse_mode: "html",
				text: message,
			});

			toast.success("Спасибо! Ваше сообщение отправлено.", {
				position: "top-center",
			});

			setName("");
			setIdea("");
		} catch (error) {
			console.error("Ошибка отправки:", error);
			toast.success("Не удалось отправить сообщение. Попробуйте позже.");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<section id="forma" className="py-10">
			<div className="container">
				<div
					className="flex flex-col justify-center rounded-[30px] md:px-32 px-5 p-10 border border-[#525252]"
					style={{
						backgroundColor: "#242424",
						backgroundImage: `
							repeating-linear-gradient(0deg, #2c2c2c 0 1px, transparent 1px 20px),
							repeating-linear-gradient(90deg, #2c2c2c 0 1px, transparent 1px 20px)
						`,
					}}>
					<TitleComponent className="text-center">
						Поделитесь своими мыслями
					</TitleComponent>

					<Description className="text-center mt-4">
						Здесь вы можете написать свои идеи или предложения. Мы рады каждому
						вашему отзыву!
					</Description>

					<form onSubmit={handleSubmit} className="w-full mt-8">
						<div className="flex items-center flex-col md:flex-row md:gap-0 gap-3">
							{/* Имя */}
							<input
								type="text"
								value={name}
								onChange={(e) => setName(e.target.value)}
								placeholder="Имя"
								className="bg-[#0c0c0c] border border-[#525252] w-full md:max-w-[250px] h-[46px] rounded-[8px] outline-none px-6"
								disabled={isLoading}
							/>

							{/* Идея */}
							<input
								type="text"
								value={idea}
								onChange={(e) => setIdea(e.target.value)}
								placeholder="Напишите свою идею здесь..."
								className="bg-[#0c0c0c] md:ml-3 ml-0 border border-[#525252] w-full h-[46px] rounded-tl-[8px] rounded-bl-[8px] md:rounded-tr-[0px] md:rounded-br-[0px] rounded-tr-[8px] rounded-br-[8px] outline-none px-6"
								disabled={isLoading}
							/>

							{/* Кнопка */}
							<button
								type="submit"
								disabled={isLoading}
								className={`h-[46px] w-full md:w-[200px] rounded-tr-[8px] rounded-br-[8px] md:rounded-tl-[0px] md:rounded-bl-[0px] rounded-tl-[8px] rounded-bl-[8px] px-6 ${
									isLoading
										? "bg-gray-600 cursor-not-allowed"
										: "bg-white text-black"
								}`}>
								{isLoading ? "Отправка..." : "Отправить"}
							</button>
						</div>
					</form>

					<Description className="text-center mt-4">
						Напишите любую идею или предложение — нам важно ваше мнение.
					</Description>
				</div>
			</div>
		</section>
	);
};

export default Forma;
