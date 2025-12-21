import React from "react";
import Hero from "./hero/Hero";
import Authors from "./authors/Authors";
import Terminal from "./terminal/Terminal";
import Forma from "./forma/Forma";
import Projects from "./projects/Projects";
import OurProjects from "./our-projects/OurProjects";
import GoogleExtensions from "./google-extensions/GoogleExtensions";

const HomeComponents = () => {
	return (
		<>
			<Hero />
			<Projects/>
			<Terminal/>
			<GoogleExtensions/>
			<OurProjects/>
			<Authors/>
			<Forma/>
		</>
	);
};

export default HomeComponents;
