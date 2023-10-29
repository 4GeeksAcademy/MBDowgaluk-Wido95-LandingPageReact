import React from "react";

//include images into your bundle
import { Card } from "./Card.jsx";
import { Footer } from "./Footer.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<div className="container d-flex">
				<Card title= "Card Title" image="https://picsum.photos/seed/picsum/200" description="Some quick example text to build on the card title and make up the bulk of the card's content." buttonLabel="Go Somewhere"/>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
