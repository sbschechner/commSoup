import React, { Component } from 'react';
import './DataLookUp.css';
import Mapit from './Mapit'

class DataLookUp extends Component {
  constructor(props){
    super(props);
    this.state = {
    	KitchData_MockData: [
    	{	
 			"id": "1111111",
 			"LocName" : "Soup Kitch",
 			"LocLat" : 999999,
 			"LocLong" : 33333333
 		},
 		{
 			"id": "222222",
 			"LocName" : "Community Kitch",
 			"LocLat" : 4444444,
 			"LocLong" : 111111,
 		}
    	],
    	
    	closest :[
    	{	
 			"id": "7777777",
 			"LocName" : "Location 1",
 			"address" : "89 broadway",
 			"LocLat" : 101010101,
 			"LocLong" : 994849
 		},
 		{
 			"id": "666666",
 			"LocName" : "Location 2",
 			"address": "101 main street",
 			"LocLat" : 19938384,
 			"LocLong" : 493020,
 		}
    	],

    userLat: null,
    userLong: null
       };

this.accessData = this.accessData.bind(this);
this.printToTable = this.printToTable.bind(this);

    }

accessData(){ //THIS SHOULD FIND THE TOP 5 CLOSEST?
//this should make a get request to my data base to get all the data.
//should take props.userLat and userLong
//should then do the required math on each entry to figure out the distance between me and location
//maybe find the distance and add as variable? 
//the math can be done on the server side.....? as in it requires lat and long and returns top 5 that are closest?
//it essentially would be a find min (there is an array for this) but 5 times....
//like Math.min and spread operator
//return the top 5 shortest
//will need to store the top 5 shortest 
//https://stackoverflow.com/questions/365826/calculate-distance-between-2-gps-coordinates
	//fetch("/").response.json()
console.log("accesing the data base");
}


//will call DB and call Google Directions API ?

//might need a button to "accessData and run it and therefore update state....."

printToTable(){  
var resultsList = this.state.closest.map((index, LocName, LocAddress) => 
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

//for MapIt props loc1Lat = {this.state.closest[0].LocLat} loc1Long = {this.state.closest[0].LocLong}
//why problematic?  
/*   <div className ='ResultsListCont'>
            <table>
            {this.printToTable()}
            </table>
        </div>
*/

render(){
  console.log("we are in DataLookup" + this.props.userLong + " a " + this.props.userLat +  " b  "+ this.state.closest[1]);
	return(
		<div className ='dataLookUpCont'>
        <p> we are in the data look up </p>
        <button onClick={this.accessData}> Find your Nearest Location</button>
		<Mapit locs = {this.state.closest} userLat = {this.props.userLat} userLong = {this.props.userLong} />



		</div>
		)
	}
}

export default DataLookUp;

