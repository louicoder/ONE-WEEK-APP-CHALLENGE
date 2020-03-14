import React, { useState } from 'react';
import logo from '../../../assets/images/logo.png';
// import { history } from 'history';

import './Landingpage.scss';

const Sign = ({ close, open }) => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	console.log(email, password);

	const onNavigateHome = () => {
		// eslint-disable-next-line no-restricted-globals
		return history.push('/edit');
	};

	return (
		<div>
			{!open && (
				<div className="signUp-signIn-container">
					<div className="logo">
						<img src={logo} />
					</div>
					<h2>Login</h2>
					<input placeholder="Email" value={email} type="email" onChange={(e) => setEmail(e.target.value)} />
					<input
						placeholder="password"
						value={password}
						type="password"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button type="Submit" onClick={onNavigateHome}>
						Sign In
					</button>
					<button type="Submit" onClick={close}>
						Sign Up
					</button>
				</div>
			)}
		</div>
	);
};

export default Sign;
