import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ManageExpenses from '../Layouts/ManageExpenses/ManageExpenses';
import AboutOWC from '../Layouts/AboutOWC/AboutOWC';
import EditProfile from '../Layouts/EditProfile/EditProfile';
import NavBar from '../Routes/Navbar';
import Navbar from '../Routes/Navbar';

const Routes = () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/" component={ManageExpenses} />
				<Route path="/edit" component={EditProfile} />
				<Route path="/about" component={AboutOWC} />
			</Switch>
		</Router>
	);
};

export default Routes;
