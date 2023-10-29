import React from "react";
import { Jumbotron } from "./Jumbotron.jsx";

//include images into your bundle

import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./Navbar.jsx";


//create your first component
const Home = () => {
	return (

		<div>
           <Navbar/>
           <Jumbotron/>
		</div>
	);
};

export default Home;
