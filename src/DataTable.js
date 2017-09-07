import React, { Component } from 'react';
import './DataTable.css';

class DataTable extends Component {
	constructor(props) {
		super(props);
		this.state = {

		};
		this.refreshPage = this.refreshPage.bind(this);
	}

	refreshPage(){
		window.location.reload(); 
	}

	render() {
		return (
			<div>

				<table>
					<tbody>
						<tr>
							<th> Name </th>
							<th> Address </th>
						</tr>
						<tr>
							<td> {this.props.locationNames[0]} </td>
							<td> {this.props.locationAdd[0]}</td>
						</tr>
						<tr>
							<td> {this.props.locationNames[1]} </td>
							<td> {this.props.locationAdd[1]}</td>
						</tr>
						<tr>
							<td> {this.props.locationNames[2]}</td>
							<td> {this.props.locationAdd[2]}</td>
						</tr>
					</tbody>
				</table>

				<p> The nearest locations for social services are placed below - Click the marker for listed operating hours </p>

				<button className="refreshBut" onClick={this.refreshPage}> Refresh </button>
			</div>
		)

	}
}

export default DataTable;