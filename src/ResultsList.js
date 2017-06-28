import React, { Component } from 'react';
import './ResultsList.css';


class ResultsList extends Component {
  constructor(props){
    super(props);
this.printToTable = this.printToTable.bind(this)
  } 


printToTable(){  
var resultsList = this.props.closest.map((index, LocName, LocAddress) => 
     <tbody>
      <tr key = {index}>
        <td>
        {LocName}
        </td>
        <td>
        {LocAddress}
        </td>
      </tr>
      </tbody>
      );
  return (
    <table>{resultsList}</table>
    );
}

render(){
	return(
		<div className ='ResultsListCont'>
			{this.printToTable()}
		<div />

		)

	}

}