import React from 'react';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import CommuteIcon from '@material-ui/icons/Commute';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import LinearProgress from '@material-ui/core/LinearProgress';

import './ManageExpenses.scss';

const RecentExpenses = () => {
	return (
		<div className="recent-main">
			{/* <h2>Expenses</h2> */}
			<div className="recent-container">
				<CommuteIcon style={{ color: 'rgba(130, 211, 248, 0.884)', fontSize: '40px' }} />
				<div className="expense">
					<div className="expense-type">
						<h3>Transport</h3>
						<p>Shs: 2000</p>
					</div>
					<LinearProgress variant="query" />
				</div>
				<ChevronRightIcon style={{ color: 'rgba(130, 211, 248, 0.884)', fontSize: '40px' }} />
			</div>
			<div className="divider" />
			<div className="recent-container">
				<FastfoodIcon style={{ color: 'rgba(130, 211, 248, 0.884)', fontSize: '40px' }} />
				<div className="expense">
					<div className="expense-type">
						<h3>Food</h3>
						<p>Shs: 8000</p>
					</div>
					<LinearProgress variant="query" />
				</div>
				<ChevronRightIcon style={{ color: 'rgba(130, 211, 248, 0.884)', fontSize: '40px' }} />
			</div>
			<div className="divider" />
			<div className="recent-container">
				<ShoppingBasketIcon style={{ color: 'rgba(130, 211, 248, 0.884)', fontSize: '40px' }} />
				<div className="expense">
					<div className="expense-type">
						<h3>Shopping</h3>
						<p>Shs: 10000</p>
					</div>
					<LinearProgress variant="query" />
				</div>
				<ChevronRightIcon style={{ color: 'rgba(130, 211, 248, 0.884)', fontSize: '40px' }} />
			</div>
			<div className="divider" />
			<div className="recent-container">
				<ImportantDevicesIcon style={{ color: 'rgba(130, 211, 248, 0.884)', fontSize: '40px' }} />
				<div className="expense">
					<div className="expense-type">
						<h3>Accessories</h3>
						<p>Shs: 20000</p>
					</div>
					<LinearProgress variant="query" />
				</div>
				<ChevronRightIcon style={{ color: 'rgba(130, 211, 248, 0.884)', fontSize: '40px' }} />
			</div>
			<div className="divider" />
			<div className="recent-container">
				<LocalHospitalIcon style={{ color: 'rgba(130, 211, 248, 0.884)', fontSize: '40px' }} />
				<div className="expense">
					<div className="expense-type">
						<h3>Health Care</h3>
						<p>Shs: 15000</p>
					</div>
					<LinearProgress variant="query" />
				</div>
				<ChevronRightIcon style={{ color: 'rgba(130, 211, 248, 0.884)', fontSize: '40px' }} />
			</div>
			<div className="divider" />
		</div>
	);
};

export default RecentExpenses;
