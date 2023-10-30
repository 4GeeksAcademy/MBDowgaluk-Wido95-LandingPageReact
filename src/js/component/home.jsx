import React from "react";
import { Jumbotron } from "./Jumbotron.jsx";
import { Card } from "./Card.jsx";
import { Footer } from "./Footer.jsx";
import { Navbar } from "./Navbar.jsx";


//create your first component
const Home = () => {
	return (
		<div>
        	<Navbar/>
       		<Jumbotron/>
			<div className="container d-flex mb-3">
				<Card title= "Instagram Profile" image="https://picsum.photos/seed/picsum/200" buttonUrl={"https://www.instagram.com/"}/>
				<Card title= "Facebook Profile" image="https://picsum.photos/200" buttonUrl={"https://www.facebook.com/?locale=es_ES"}/>
				<Card title= "LinkedIn Profile" image="https://picsum.photos/200/?blur"	buttonUrl={"https://www.linkedin.com/"} />
				<Card title= "GitHub Profile" image="https://picsum.photos/id/237/200" buttonUrl={"https://github.com/"}/>
			</div>   
      		<Footer />
		</div>
	);
};

export default Home;
