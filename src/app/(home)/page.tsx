import HomeComponents from "@/components/pages/home/HomeComponents";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
	title: "TwinCoreUI",
	description: "Компоненты разработаны с использованием современных технологий. Они обеспечивают высокую скорость разработки, гибкую кастомизацию и стабильную работу в production.",
	url: "https://next-structure-seven.vercel.app/",
	image: "/alim.jpg",
});

const Home = () => <HomeComponents />;

export default Home;
