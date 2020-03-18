import React, { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

import './Landingpage.scss';

const Landingpage = () => {
	const [ openModal, closeModal ] = useState(false);

	return (
		<div>
			<SignIn open={openModal} close={() => closeModal(true)} />
			<SignUp open={openModal} />
		</div>
	);
};

export default Landingpage;
