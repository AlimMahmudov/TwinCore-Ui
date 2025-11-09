"use client";
import { Description } from "@/components/ui/text/Description";
import { Title } from "@/components/ui/text/Title";
import { TitleComponent } from "@/components/ui/text/TitleComponent";
import React, { useState } from "react";

const PhoneInput = () => {
	const [installTab, setInstallTab] = useState<"npm" | "pnpm" | "bun">("npm");

	const installCommands = {
		npm: "npm install asim-phone",
		pnpm: "pnpm add asim-phone",
		bun: "bun add asim-phone",
	};

	const copy = async (text: string) => {
		await navigator.clipboard.writeText(text);
		alert("Код скопирован!");
	};

	const renderInstallCode = (cmd: string) => {
		const parts = cmd.split(" ");
		return (
			<>
				<span style={{ color: "rgb(162, 0, 255)" }}>{parts[0]}</span>{" "}
				<span>{parts[1]}</span>{" "}
				<span>{parts[2]}</span>
			</>
		);
	};

  const tsCode = `import { useState } from 'react';
import PhoneInput from 'asim-phone';
import 'asim-phone/dist/asim-phone.css';

const MyComponent = () => {
  const [phone, setPhone] = useState('');

  return (
    <PhoneInput
      className="my-phone-input" // если хотите изменить стиль 
      value={phone}
      onChange={setPhone}
      defaultCountry="KG"
      placeholder="Введите номер"
    />
  );
};`;
	// Примеры
 
 

 

	return (
		<div className="max-w-4xl  p-6">
			<TitleComponent>asim-phone</TitleComponent>
			<Description className="mt-2">
				Мощный и простой React-компонент для ввода телефонных номеров с
				современным UI, поддержкой всех стран, масками, валидацией и
				кастомизацией. Работает с TypeScript, Next.js, Vite и любыми сборщиками.
			</Description>

			{/* Features */}
			<div className="mt-10">
				<Title className="text-2xl font-semibold mb-4">Возможности</Title>
				<ul className="list-disc pl-5 space-y-2 text-gray-300">
					<li>Автоматический выбор страны по коду номера</li>
					<li>Поддержка вставки номера в любом формате: <code>+7 (912) 345-67-89</code></li>
					<li>Ограничение длины номера по стране (Киргизия: 9, Россия: 10)</li>
					<li>Только цифры в инпуте — символы игнорируются</li>
					<li>Флаги стран через emoji 🇰🇬 🇷🇺 🇺🇸</li>
					<li>Полная поддержка TypeScript</li>
				</ul>
			</div>

			{/* Installation */}
			<div className="mt-10">
				<Title className="text-2xl font-semibold mb-4">Установка</Title>

				<div className="flex gap-2 mb-3">
					{(["npm", "pnpm", "bun"] as const).map((pkg) => (
						<button
							key={pkg}
							onClick={() => setInstallTab(pkg)}
							className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
								installTab === pkg
									? "bg-[#222222] text-white border border-[#818181]"
									: "bg-[#3a3a3a] text-gray-300 border border-[#3a3a3a] hover:bg-[#444]"
							}`}
						>
							{pkg}
						</button>
					))}
				</div>

				<div className="relative">
					<pre className="bg-[#1d1d1d] border border-[#303030] p-4 text-[#9aadff]  rounded-lg shadow-lg overflow-x-auto">
						<code>{renderInstallCode(installCommands[installTab])}</code>
					</pre>

					<button
						onClick={() => copy(installCommands[installTab])}
						className="absolute top-2 right-2 bg-[#424242] text-white px-3 py-1 rounded text-sm"
					>
						Копировать
					</button>
				</div>
			</div>

			{/* Usage */}
			<div className="mt-10">
				<Title>Примеры использования</Title>

				 

				<div className="relative">
					<pre className="bg-[#1d1d1d] border border-[#303030] text-[#9aadff] mt-4 p-6 rounded-lg shadow-lg overflow-x-auto font-mono text-sm">
						<code>{tsCode}</code>
					</pre>

					<button
						onClick={() => copy(tsCode)}
						className="absolute top-2 right-2 bg-[#424242] text-white px-3 py-1 rounded text-sm"
					>
						Копировать
					</button>
				</div>

				<Description className="mt-3 text-sm text-gray-400">
					⚠️ Обязательно подключите стили: <code className="bg-[#303030] px-1 rounded">import &quot;asim-phone/dist/asim-phone.css&quot;;</code>
				</Description>
			</div>

		 

			{/* Customization */}
			<div className="mt-10">
				<Title>Кастомизация стилей</Title>

				<Description className="mt-2">
					Передайте <code className="bg-[#303030] px-1 rounded">className</code> и переопределите стили через глобальный CSS:
				</Description>

				<div className="relative mt-4">
					<pre className="bg-[#1d1d1d] border border-[#303030] text-[#9aadff] p-4 rounded-lg shadow-lg overflow-x-auto font-mono text-sm">
						<code>{`.my-phone-input {
  background: rgb(49, 49, 49) !important;
  border: 1px solid rgb(71, 71, 71) !important;
  color: white !important;

  input {
    color: white !important;
    border-left: 1px solid rgb(71, 71, 71) !important;
  }
}`}</code>
					</pre>

					<button
						onClick={() =>
							copy(`.my-phone-input {
  background: rgb(49, 49, 49) !important;
  border: 1px solid rgb(71, 71, 71) !important;
  color: white !important;

  input {
    color: white !important;
    border-left: 1px solid rgb(71, 71, 71) !important;
  }
}`)
						}
						className="absolute top-2 right-2 bg-[#424242] text-white px-3 py-1 rounded text-sm"
					>
						Копировать
					</button>
				</div>

				<Description className="mt-3 text-sm text-gray-400">
					💡 Используйте <code>!important</code>, так как оригинальные стили имеют высокую специфичность.
				</Description>
			</div>

			{/* Compatibility */}
			<div className="mt-10">
				<Title>🌐 Совместимость</Title>
				<ul className="list-disc pl-5 space-y-2 text-gray-300 mt-2">
					<li><strong>React:</strong> 17+</li>
					<li><strong>TypeScript:</strong> поддержка «из коробки»</li>
					<li><strong>Next.js:</strong> используйте <code className="bg-[#303030] px-1 rounded">&quot;use client&quot;</code></li>
					<li><strong>Сборщики:</strong> Vite, Webpack, Turbopack, Parcel</li>
					<li><strong>Стили:</strong> CSS Modules не требуются — подключается как обычный CSS</li>
				</ul>
			</div>

			{/* Footer */}
			 

      
		</div>
	);
};

export default PhoneInput;

