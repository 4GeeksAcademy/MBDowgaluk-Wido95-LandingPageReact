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
				<Card title= "Card Title" image="https://picsum.photos/seed/picsum/200" description="Some quick example text to build on the card title and make up the bulk of the card's content." buttonLabel="Go Somewhere"/>
			</div>   
      		<Footer />
		</div>
	);
};

export default Home;
