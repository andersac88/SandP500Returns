import React from "react";
import TableItem from "../TableItem/";
import "./style.css";

const Table = ({ data, value }) => {
	const ascendingData = data.slice(value[0], value[1]);
	console.log(value);
	const totalReturnArray = ascendingData.map((r) => r.total_return);

	const renderedTable = ascendingData.map((data, index) => {
		return (
			<TableItem
				key={index}
				year={data.year}
				total={data.total_return}
				returnArray={totalReturnArray.slice(0, index + 1)}
			/>
		);
	});
	return (
		<table>
			<thead>
				<tr>
					<th>Year</th>
					<th>Total Return</th>
					<th>Commulative Return</th>
				</tr>
			</thead>
			<tbody>{renderedTable}</tbody>
		</table>
	);
};

export default Table;
