import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./Navbar.jsx";

//create your first component
const Home = () => {
	return (
		<div>
           <Navbar/>
		</div>
	);
};

export default Home;
