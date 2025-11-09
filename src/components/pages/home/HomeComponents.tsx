import React from "react";
import Hero from "./hero/Hero";
import Authors from "./authors/Authors";
import Terminal from "./terminal/Terminal";
import Forma from "./forma/Forma";
import Projects from "./projects/Projects";


const HomeComponents = () => {
	return (
		<>
			<Hero />
			<Projects/>
			<Terminal/>
			<Authors/>
			<Forma/>
		</>
	);
};

export default HomeComponents;
