import React from "react";
import "../assets/css/signup.css";
import signupImg from "../assets/img/signup.svg";

function signup() {
	return (
		<div className="signup-container">
			<div className="signup">
				<div className="signup-form-container">
					<form action="" className="signup-form">
						<h1 className="form-title">Sign Up</h1>
						<input
							className="form-group"
							type="text"
							name="name"
							placeholder="Name*"
							autoFocus
							required
						/>
						<input
							className="form-group"
							type="email"
							name="email"
							id="email"
							placeholder="Email*"
							required
						/>
						<input
							className="form-group"
							type="number"
							name="number"
							placeholder="Contact Number"
						/>
						<input
							className="form-group"
							type="password"
							name="password"
							placeholder="Password*"
							required
						/>
						<input
							className="form-group"
							type="password"
							name="password"
							placeholder="Confirm password*"
							required
						/>
						<label for="agree-terms" className="form-group agree">
							<input
								type="checkbox"
								name="agree-terms"
								id="agree-terms"
								required
							/>
							I agree to Terms and Conditions
						</label>
						<input
							type="submit"
							name="signup-btn"
							id="signup-btn"
							className="form-group submit-btn"
							value="Signup"
						/>
					</form>
				</div>
				<div className="signup-img-container">
					<img
						className="signup-img"
						src={signupImg}
						alt="Advolet signup"
					/>
				</div>
			</div>
		</div>
	);
}

export default signup;
