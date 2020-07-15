import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";
import "./style.css";

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const marks = {
	0: {
		style: {
			color: "red",
		},
		label: <strong>1926</strong>,
	},
	48: 1973,
	94: {
		style: {
			color: "red",
		},
		label: <strong>2020</strong>,
	},
};

export default (props) => (
	<div id="slider">
		<p>S&#38;P 500 Total Returns and Comprehensive Returns</p>
		<Range
			onChange={props.onChange}
			defaultValue={[0, 100]}
			marks={marks}
			min={0}
			max={94}
			step={1}
			tipFormatter={(value) => `${1926 + value}`}
		/>
	</div>
);
