import React from 'react';
import {Text} from 'react-native';

class Judul extends React.Component {
	render() {
		return (
			<Text style= {salon.judul}
			>{this.props.title}</Text>
		)
	}
}

	const salon = {
		judul: {
			color: "#FFFFFF",
			fontSize: 75,
			fontWeight:
			'bold'
		}
	}


export default Judul;