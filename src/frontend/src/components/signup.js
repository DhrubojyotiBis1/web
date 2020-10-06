import React from "react";
import "../assets/css/signup.css";
import signupImg from "../assets/img/signup.svg";

function signup() {
	return (
		<div class="signup-container">
			<div class="signup">
				<div class="signup-form-container">
					<form action="" class="signup-form">
						<h1 class="form-title">Sign Up</h1>
						<input
							class="form-group"
							type="text"
							name="name"
							placeholder="Name"
							autofocus
						/>
						<input
							class="form-group"
							type="email"
							name="email"
							id="email"
							placeholder="Your Email"
						/>
						<input
							class="form-group"
							type="password"
							name="password"
							placeholder="Generate password"
						/>
						<input
							class="form-group"
							type="password"
							name="password"
							placeholder="Confirm password"
						/>
						<label for="agree-terms" class="form-group agree">
							<input
								type="checkbox"
								name="agree-terms"
								id="agree-terms"
							/>
							I agree to Terms and Conditions
						</label>
						<input
							type="submit"
							name="signup-btn"
							id="signup-btn"
							class="form-group submit-btn"
							value="Signup"
						/>
					</form>
				</div>
				<div class="signup-img-container">
					<img
						class="signup-img"
						src={signupImg}
						alt="Advolet signup"
					/>
				</div>
			</div>
		</div>
	);
}

export default signup;
