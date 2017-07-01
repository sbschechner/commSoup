import React, { Component } from 'react';
import './ResultsList.css';


class ResultsList extends Component {
  constructor(props){
    super(props);
this.printToTable = this.printToTable.bind(this)
  } 


printToTable(){  
var resultsList = this.props.closest.map((index, LocName, LocAddress) => 
     <tr key = {index}>
        <td>
        {LocName}
        </td>
        <td>
        {LocAddress}
        </td>
      </tr>
      );
  return (
    <tbody>{resultsList}</tbody>
    );
}

render(){
	return(
		<div className ='ResultsListCont'>
			<table>
      {this.printToTable()}
      </table>
		</div>

		)

	}

}

export default ResultsList;