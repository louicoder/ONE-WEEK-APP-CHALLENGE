import React from 'react';

const ExpenseForm = () => {
	return (
		<div>
			<div className="form-container">
				<h2>Enter Expense</h2>
				<input placeholder="Expense" type="text" />
				<input placeholder="Amount" type="text" />
				<input placeholder="Income earned" type="Expense" />
				<button type="submit">Save</button>
			</div>
		</div>
	);
};

export default ExpenseForm;
