import img from "@/assets/images/hero.gif";
import styles from "./Hero.module.scss";
import Image from "next/image";
import { TitleComponent } from "@/components/ui/text/TitleComponent";
import { Description } from "@/components/ui/text/Description";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import Link from "next/link";
import { GITHUB_LINK } from "@/constants/admin";
import { IoLogoGithub } from "react-icons/io";
import Button from "@/components/ui/button/Button";
import { PAGE } from "@/config/pages/public-page.config";

const Hero = () => {
	return (
		<section id="hero" className={styles.home}>
			<div className={styles.hero}>
				<div className={styles.container}>
					<div className={styles.text}>
						<TitleComponent className="md:!text-[50px] !text-[28px] flex flex-wrap items-center justify-center gap-3">
							Современные UI-компоненты, созданные с помощью
							{/* React */}
							<div className="flex">
								<span className="bg-[#00a2ff]   border border-white rounded-full p-2 w-[50px] h-[50px] flex justify-center items-center">
									<FaReact size={34} />
								</span>

								<span className="bg-[#1b91d6] -ml-2  border border-white rounded-full p-2 w-[50px] h-[50px] flex justify-center items-center">
									<RiTailwindCssFill size={34} />
								</span>

								<span className="bg-[#0051ff] -ml-2  border border-white rounded-full p-2 w-[50px] h-[50px] flex justify-center items-center">
									<SiTypescript size={28} />
								</span>
							</div>
						</TitleComponent>

						<Description className="mt-4">
							Компоненты разработаны с использованием современных технологий.
							Они обеспечивают высокую скорость разработки, гибкую кастомизацию
							и стабильную работу в production.
						</Description>

						<div className="flex gap-4 justify-center mt-6">
							<Link href={PAGE.COMPONENTS}>
								<Button className="bg-[#136ed6]">компоненты</Button>
							</Link>
							<Link href={GITHUB_LINK} target={"_blank"}>
								<Button className={styles.secondaryButton}>
									<IoLogoGithub size={25} /> GitHub
								</Button>
							</Link>
						</div>
					</div>

					<div className={styles.image}>
						<div className={styles.imgbox}>
							<video
								src="/code.mov"
								autoPlay
								muted
								loop
								playsInline
								className={styles.video}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
