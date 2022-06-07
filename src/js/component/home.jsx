import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Nav from "./navbar.jsx";
import Jum from "./jumbro.jsx";
import Card from "./card.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Nav></Nav>
			<Jum></Jum>
			<div className="row">
				<div className="col-lg-3">
					<Card></Card>
				</div>
				<div className="col-lg-3">
					<Card></Card>
				</div>
				<div className="col-lg-3">
					<Card></Card>
				</div>
				<div className="col-lg-3">
					<Card></Card>
				</div>
			</div>

			{/* <h1 className="text-center mt-5">Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p> */}
		</div>
	);
};

export default Home;
