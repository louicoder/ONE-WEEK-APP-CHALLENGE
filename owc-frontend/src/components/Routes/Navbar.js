import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import EditIcon from '@material-ui/icons/Edit';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import IconButton from '@material-ui/core/IconButton';

import './Navbar.scss';
const Navbar = () => {
	return (
		<div className="nav">
			<div className="nav-inner">
				<div className="logo-container">
					<img src={Logo} alt="Logo" />
				</div>
				<div className="links-container">
					<Link className="links" to="/">
						Manage Expenses
					</Link>
					<Link className="links" to="/edit">
						Profile
					</Link>
					<Link className="links" to="/about">
						About
					</Link>
					<div className="profile">
						<h2>S</h2>
					</div>
				</div>
			</div>
			<div className="profile-container">
				<div className="drop-down-arrow" />
				<div className="avatar">
					<h1>S</h1>
				</div>
				<p>Stuartkal@gmail.com</p>
				<div className="icon-row">
					<div className="border-circle">
						<IconButton>
							<EditIcon style={{ color: 'rgba(24, 177, 248, 0.884)' }} />
						</IconButton>
					</div>
					<div className="border-circle">
						<IconButton>
							<ExitToAppIcon style={{ color: 'rgba(24, 177, 248, 0.884)' }} />
						</IconButton>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
