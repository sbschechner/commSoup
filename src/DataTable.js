import React, { Component } from 'react';
import './DataTable.css';

class DataTable extends Component {
  constructor(props){
    super(props);
    this.state = {

       };
    }



    render() { 
      return (
      	<div>

      <table>
      	<tbody>
        	<tr>
          		<th> Name </th>
          		<th> address </th>
        	</tr>
    	    <tr>
	          <td> hello first name =  {this.props.locationNames[0]} </td>
          		<td> should be second name =  {this.props.locationNames[1]}</td>
         	</tr>
        	<tr>
          		<td>  </td>
          		<td> should be FIRST ADDRESS  = {this.props.locationAdd[0]}</td>
        	</tr>
        	<tr>
          		<td> should be 2nd ADDRESS  = {this.props.locationAdd[1]}</td>
          		<td> </td>
        	</tr>
      	</tbody>
    	</table>
    
     <p> the locations are below with listed operating hours </p>
      	
      	</div>
      	)
   
	}
}

export default DataTable;