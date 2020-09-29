import React from "react";
import "../assets/css/404.css";
import advolet404img from "../assets/img/404.jpg";

function advolet404page() {
	return (
		<main>
			<div className="big-container">
				<div className="img-container">
					<img
						className="img-404-page"
						id="img-404-page"
						src={advolet404img}
						alt="404"
					/>
				</div>
				<div className="info-container">
					<h1>This Page was lost!</h1>
					<h1>
						But you are not. Start{" "}
						<a href="#">
							Here <i class="fas fa-arrow-circle-right"></i>
						</a>
					</h1>
				</div>
			</div>
		</main>
	);
}

export default advolet404page;
