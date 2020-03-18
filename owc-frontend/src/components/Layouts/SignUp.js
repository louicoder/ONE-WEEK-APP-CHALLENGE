import React, { useState } from 'react';
import logo from '../../assets/images/logo.png';

import './Landingpage.scss';

const SignUp = ({ open }) => {
	const [ fullname, setFullname ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ confirmPass, setConfirmPass ] = useState('');

	console.log(fullname, email, password, confirmPass);

	return (
		<div>
			{open && (
				<div className="signUp-signIn-container">
					<div className="logo">
						<img src={logo} />
					</div>
					<h2>Sign Up</h2>
					<input
						placeholder="FullName"
						value={fullname}
						type="text"
						onChange={(e) => setFullname(e.target.value)}
					/>
					<input placeholder="Email" value={email} type="email" onChange={(e) => setEmail(e.target.value)} />
					<input
						placeholder="password"
						value={password}
						type="password"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<input
						placeholder="Confirm password"
						value={confirmPass}
						type="password"
						onChange={(e) => setConfirmPass(e.target.value)}
					/>
					<button type="Submit">SignUp</button>
					<p>
						<a href="#">SignIn</a>
					</p>
				</div>
			)}
		</div>
	);
};

export default SignUp;
