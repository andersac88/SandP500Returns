import React, { Component } from "react";
import Table from "./Table/";
import data from "../utils/s&p.json";
import Slider from "./Slider/";

class App extends Component {
	state = {
		data: [],
		value: [],
	};

	componentDidMount() {
		this.setState({
			data: data.reverse(),
		});
	}

	onSliderChange = (value) => {
		this.setState({
			value: value,
		});
	};

	render() {
		return (
			<>
				<Slider onChange={this.onSliderChange} />
				<Table data={this.state.data} value={this.state.value}></Table>
			</>
		);
	}
}
export default App;
