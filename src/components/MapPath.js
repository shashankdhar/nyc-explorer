import React from "react";
import { Redirect } from "react-router-dom";

export default class MapPath extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			zip: this.props.data.properties.ZIPCODE,
			county: this.props.data.properties.COUNTY,
			coordinates: this.props.data.geometry.coordinates[0],
			redirect: false
		};
	}

	handleZipClick = () => {
		this.setState({ redirect: true });
	};

	render( history ) {
		const { redirect } = this.state;
		console.log(history);
		debugger;
		if (redirect) {
			return (
				<Redirect
					to={{
						pathname: "/zip",
						state: {
							zip: this.state.zip,
							county: this.state.county,
							population: this.props.data.properties.POPULATION,
							coordinates: this.props.data.geometry.coordinates[0]
						}
					}}
				/>
			);
		}

		return (
			<path
				d={this.props.path}
				fill={this.props.color}
				onClick={this.handleZipClick}
			>
				<title>Zipcode : {this.props.data.properties.ZIPCODE}</title>
			</path>
		);
	}
}
