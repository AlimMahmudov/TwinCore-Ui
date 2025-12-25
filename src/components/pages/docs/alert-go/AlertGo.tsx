"use client";
import { Description } from "@/components/ui/text/Description";
import { Title } from "@/components/ui/text/Title";
import { TitleComponent } from "@/components/ui/text/TitleComponent";
import React, { useState } from "react";
import { toast } from "alert-go";
import Link from "next/link";
import { PAGE } from "@/config/pages/public-page.config";

const AlertGoDocs = () => {
	const [installTab, setInstallTab] = useState<"npm" | "pnpm" | "bun">("npm");

	const installCommands = {
		npm: "npm install alert-go",
		pnpm: "pnpm add alert-go",
		bun: "bun add alert-go",
	};

	const copy = async (text: string) => {
		await navigator.clipboard.writeText(text);
		toast.success("Код скопирован!", { position: "top-center" });
	};

	const renderInstallCode = (cmd: string) => {
		const parts = cmd.split(" ");
		return (
			<>
				<span style={{ color: "rgb(162, 0, 255)" }}>{parts[0]}</span>{" "}
				<span>{parts[1]}</span> <span>{parts[2]}</span>
			</>
		);
	};

	const tsCode = `import { toast } from 'alert-go';

// Простое уведомление
toast('Привет!');

// С типом
toast.success('Успешно!');
toast.error('Ошибка!');
toast.warning('Внимание!');

// С опциями
toast('Сообщение', {
  position: 'top-center', // 'top-left', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'
  duration: 5000,
  actionText: 'Закрыть',
  onAction: () => console.log('Закрыто пользователем')
});

// Пример использования в компоненте
const MyComponent = () => {
  const handleClick = () => {
    toast.success('Операция завершена!', {
      position: 'bottom-right',
      duration: 3000
    });
  };

  return <button onClick={handleClick}>Показать уведомление</button>;
};`;

	const layoutCode = `// app/layout.tsx
import 'alert-go/dist/notifier.css'; // Обязательно подключите стили здесь
import type { Metadata } from 'next';
import './globals.css';

export const meta Metadata = {
  title: 'Alert Go Demo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}`;

	return (
		<div className="max-w-4xl pb-24 p-6">
			<TitleComponent>alert-go</TitleComponent>
			<Description className="mt-2">
				Лёгкая и простая библиотека уведомлений для веба, аналог Sonner.
				Поддерживает все позиции (top-left, top-center, bottom-right и т.д.),
				анимации, действия и TypeScript. Работает с React, Next.js, Vite и
				любыми сборщиками.
			</Description>

			<div className="mt-10">
				<Link
					href={PAGE.ALERT_GO_PLAYGROUND}
					target={"_blank"}
					className="text-blue-500 w-full h-10">
					🚀 Demo
				</Link>
			</div>

			<div className="mt-10">
				<Title className="text-2xl font-semibold mb-4">Возможности</Title>
				<ul className="list-disc pl-5 space-y-2 text-gray-300">
					<li>
						API как у <code>sonner</code> — <code>toast()</code>,{" "}
						<code>toast.success()</code> и т.д.
					</li>
					<li>
						Поддержка 6 позиций: <code>top-left</code>, <code>top-center</code>,{" "}
						<code>bottom-right</code> и др.
					</li>
					<li>
						Анимации, соответствующие позиции — сверху, снизу, слева, справа
					</li>
					<li>Действия (кнопки) с колбэками</li>
					<li>Полная поддержка TypeScript</li>
					<li>Нет зависимости от React</li>
					<li>Маленький размер (~2KB)</li>
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
							}`}>
							{pkg}
						</button>
					))}
				</div>

				<div className="relative">
					<pre className="bg-[#1d1d1d] border border-[#303030] p-4 text-[#9aadff] rounded-lg shadow-lg overflow-x-auto">
						<code>{renderInstallCode(installCommands[installTab])}</code>
					</pre>

					<button
						onClick={() => copy(installCommands[installTab])}
						className="absolute top-2 right-2 bg-[#424242] text-white px-3 py-1 rounded text-sm">
						Копировать
					</button>
				</div>
			</div>

			{/* Usage */}
			<div className="mt-10">
				<Title>Примеры использования</Title>

				<Description className="mt-3">
					<strong>1. Подключение стилей</strong> — обязательно в{" "}
					<code>app/layout.tsx</code>:
				</Description>

				<div className="relative mt-2">
					<pre className="bg-[#1d1d1d] border border-[#303030] text-[#9aadff] p-4 rounded-lg shadow-lg overflow-x-auto font-mono text-sm">
						<code>{layoutCode}</code>
					</pre>
				</div>

				<Description className="mt-3">
					<strong>2. Использование в компоненте</strong>:
				</Description>

				<div className="relative mt-2">
					<pre className="bg-[#1d1d1d] border border-[#303030] text-[#9aadff] p-6 rounded-lg shadow-lg overflow-x-auto font-mono text-sm">
						<code>{tsCode}</code>
					</pre>

					<button
						onClick={() => copy(tsCode)}
						className="absolute top-2 right-2 bg-[#424242] text-white px-3 py-1 rounded text-sm">
						Копировать
					</button>
				</div>

				<Description className="mt-3 text-sm text-gray-400">
					⚠️ Стили подключаются только через{" "}
					<code className="bg-[#303030] px-1 rounded">
						import &quot;alert-go/dist/notifier.css&quot;
					</code>{" "}
					— не в компонентах!
				</Description>
			</div>

			{/* Props */}
			<div className="mt-10">
				<Title>API</Title>

				<Description className="mt-2">
					<strong>Функции:</strong>
				</Description>

				<ul className="list-disc pl-5 space-y-2 text-gray-300 mt-2">
					<li>
						<code>toast(message, options)</code> — обычное уведомление
					</li>
					<li>
						<code>toast.success(message, options)</code> — уведомление об успехе
					</li>
					<li>
						<code>toast.error(message, options)</code> — уведомление об ошибке
					</li>
					<li>
						<code>toast.warning(message, options)</code> — предупреждение
					</li>
				</ul>

				<Description className="mt-3">
					<strong>Опции:</strong>
				</Description>

				<ul className="list-disc pl-5 space-y-2 text-gray-300 mt-2">
					<li>
						<code>
							position: &apos;top-left&apos; | &apos;top-center&apos; |
							&apos;top-right&apos; | &apos;bottom-left&apos; |
							&apos;bottom-center&apos; | &apos;bottom-right&apos;
						</code>{" "}
						— позиция уведомления
					</li>
					<li>
						<code>duration?: number</code> — время до авто-скрытия (в мс, по
						умолчанию 3000)
					</li>
					<li>
						<code>actionText?: string</code> — текст кнопки действия
					</li>
					<li>
						<code>onAction?: () =&gt; void</code> — колбэк при нажатии на кнопку
					</li>
				</ul>
			</div>

			{/* Customization */}
			<div className="mt-10">
				<Title>Кастомизация стилей</Title>

				<Description className="mt-2">
					Ты можешь переопределить стили уведомлений через CSS:
				</Description>

				<div className="relative mt-4">
					<pre className="bg-[#1d1d1d] border border-[#303030] text-[#9aadff] p-4 rounded-lg shadow-lg overflow-x-auto font-mono text-sm">
						<code>{`.notify.success {
  background: #2ecc71 !important;
  color: white !important;
}

.notify.error {
  background: #e74c3c !important;
}

.notify.warning {
  background: #f39c12 !important;
  color: black !important;
}

.notify.default {
  background: #2c3e50 !important;
}`}</code>
					</pre>

					<button
						onClick={() =>
							copy(`.notify.success {
  background: #2ecc71 !important;
  color: white !important;
}

.notify.error {
  background: #e74c3c !important;
}

.notify.warning {
  background: #f39c12 !important;
  color: black !important;
}

.notify.default {
  background: #2c3e50 !important;
}`)
						}
						className="absolute top-2 right-2 bg-[#424242] text-white px-3 py-1 rounded text-sm">
						Копировать
					</button>
				</div>

				<Description className="mt-3 text-sm text-gray-400">
					💡 Используйте <code>!important</code>, если оригинальные стили
					перекрываются.
				</Description>
			</div>

			{/* Compatibility */}
			<div className="mt-10">
				<Title>🌐 Совместимость</Title>
				<ul className="list-disc pl-5 space-y-2 text-gray-300 mt-2">
					<li>
						<strong>React:</strong> 17+
					</li>
					<li>
						<strong>TypeScript:</strong> поддержка «из коробки»
					</li>
					<li>
						<strong>Next.js:</strong> используйте{" "}
						<code className="bg-[#303030] px-1 rounded">
							&quot;use client&quot;
						</code>
					</li>
					<li>
						<strong>Сборщики:</strong> Vite, Webpack, Turbopack, Parcel
					</li>
					<li>
						<strong>Фреймворки:</strong> работает без React (чистый DOM API)
					</li>
				</ul>
			</div>
		</div>
	);
};

export default AlertGoDocs;
