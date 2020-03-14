import React from 'react';
import ExpenseForm from './ExpenseForm';
import RecentExpenses from './RecentExpenses';
import ExpenseVisuals from './ExpenseVisuals';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

import './ManageExpenses.scss';

const ManageExpenses = () => {
	return (
		<div>
			<div className="header">
				<div className="balance">
					<LocalAtmIcon style={{ color: 'rgba(130, 211, 248, 0.884)', fontSize: '90px' }} />
					<div className="inner-column">
						<p>BALANCE</p>
						<h3>100000 Shs</h3>
					</div>
				</div>
				<div className="highest-expense">
					<EqualizerIcon style={{ color: 'rgba(130, 211, 248, 0.884)', fontSize: '90px' }} />
					<div className="inner-column">
						<p>HIGHEST EXPENSE</p>
						<h3>20000 Shs</h3>
					</div>
				</div>
				<div className="income">
					<AccountBalanceWalletIcon style={{ color: 'rgba(130, 211, 248, 0.884)', fontSize: '90px' }} />
					<div className="inner-column">
						<p>INCOME</p>
						<h3>200000 Shs</h3>
					</div>
				</div>
			</div>
			<div className="expenses-container">
				<div className="form-expense">
					<ExpenseForm />
				</div>
				<div className="recent-table-expense">
					<div className="recent-expense">
						<RecentExpenses />
					</div>
					<div className="table-expense">
						<ExpenseVisuals />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ManageExpenses;
