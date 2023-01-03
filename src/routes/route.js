import React from "react";
import { Route } from "react-router-dom";

const AppRoute = ({
	component: Component,
	layout: Layout,
	isAuthProtected,
	...rest
}) => {
	return (
		<Route
			{...rest}
			render={props => {
				return (
					<Layout>
						<Component {...props} />
					</Layout>
				);
			}}
		/>
	)
		};

export default AppRoute;

