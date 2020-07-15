 import React from "react";
 import "./style.css"

const TableItem = ({ year, total, returnArray }) => {
    const totalReturnArray = returnArray.reverse()
    const cumulative_decimals = totalReturnArray.reduce((a, b) => a + b, 0);
    const cumulative = cumulative_decimals.toFixed(2);
 
	if (total < 0 && cumulative < 0) {
		return (
			<tr>
				<th>{year}</th>
				<th  id="returns" style={{ color: "red" }}>{total}</th>
				<th  id="returns" style={{ color: "red" }}>{cumulative}</th>
			</tr>
		);
	} else if (total < 0) {
		return (
			<tr>
				<th>{year}</th>
				<th  id="returns" style={{ color: "red" }}>{total}</th>
				<th id="returns">{cumulative}</th>
			</tr>
		);
	} else if (cumulative < 0 ) {
		return (
			<tr>
				<th>{year}</th>
				<th id="returns">{total}</th>
				<th  id="returns" style={{ color: "red" }}>{cumulative}</th>
			</tr>
		);
	} else {
		return (
			<tr>
				<th>{year}</th>
				<th id="returns">{total}</th>
				<th id="returns">{cumulative}</th>
			</tr>
		);
	}
};

export default TableItem;
