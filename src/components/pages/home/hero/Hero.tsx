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
							Современные npm-библиотеки, веб-проекты и Chrome-расширения
						</TitleComponent>

						<Description className="mt-4">
							Мы разрабатываем npm-библиотеки, полноценные веб-проекты и
							Chrome-расширения — от идеи до production. Фокус на
							производительности, удобстве использования и чистой архитектуре
							кода.
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
