import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.scss";
import { SITE_DESCRIPTION, SITE_NAME } from "@/constants/seo";
import { LayoutPage } from "@/components/layout/LayoutPage";
import Head from "./Head";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: {
		absolute: SITE_NAME,
		template: `%s | ${SITE_NAME}`,
	},
	description: SITE_DESCRIPTION,
	openGraph: {
		title: SITE_NAME,
		description: SITE_DESCRIPTION,
		siteName: SITE_NAME,
		images: [
			{
				url: "/alim.jpg",
				alt: SITE_NAME,
			},
		],
		locale: "ru_RU",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<Head />
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<LayoutPage>{children}</LayoutPage>
			</body>
		</html>
	);
}
