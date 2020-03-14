import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

import './ManageExpenses.scss';

const state = {
	labels: [ 'Food', 'Transport', 'Shopping', 'Accessories', 'Healthcare' ],
	datasets: [
		{
			label: 'Expenses',
			backgroundColor: 'rgba(130, 211, 248, 0.884)',
			borderColor: 'rgba(0,0,0,1)',
			borderWidth: 1,
			data: [ 59, 56, 80, 81, 75 ]
		}
	]
};

class ExpenseVisuals extends Component {
	render() {
		return (
			<div>
				<div className="table-container">
					<h2>Average Expenses</h2>
					<Bar
						data={state}
						options={{
							title: {
								display: true,
								fontSize: 20,
								fontColor: 'rgba(130, 211, 248, 0.884)'
							},
							legend: {
								display: true
							}
						}}
					/>
				</div>
			</div>
		);
	}
}

export default ExpenseVisuals;
