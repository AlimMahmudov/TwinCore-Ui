import { Description } from "@/components/ui/text/Description";
import { TitleComponent } from "@/components/ui/text/TitleComponent";
import React from "react";

const Forma = () => {
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
					}}
				>
					<TitleComponent className="text-center">
						Поделитесь своими мыслями
					</TitleComponent>
					<Description className="text-center mt-4">
						Здесь вы можете написать свои идеи или предложения. Мы рады каждому
						вашему отзыву!
					</Description>

					<div className="flex items-center flex-col md:flex-row md:gap-0 gap-3 mt-8">
						<input
							type="text"
							placeholder="Напишите свою идею здесь..."
							className="bg-[#0c0c0c] border border-[#525252] w-full h-[46px] rounded-tl-[8px] rounded-bl-[8px] md:rounded-tr-[0px] md:rounded-br-[0px] rounded-tr-[8px] rounded-br-[8px] outline-none px-6"
						/>
						<button className="h-[46px] w-full md:w-[200px] rounded-tr-[8px] rounded-br-[8px] md:rounded-tl-[0px] md:rounded-bl-[0px] rounded-tl-[8px] rounded-bl-[8px] px-6 bg-white text-black">
							Отправить
						</button>
					</div>

					<Description className="text-center mt-4">
						Напишите любую идею или предложение — нам важно ваше мнение.
					</Description>
				</div>
			</div>
		</section>
	);
};

export default Forma;
