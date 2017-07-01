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
 			"LocLat" : 39.2374383,
 			"LocLong" : -73.9970302
 		},
 		{
 			"id": "666666",
 			"LocName" : "Location 2's sweet cool name",
 			"address": "101 main street",
 			"LocLat" : 41.2374383,
 			"LocLong" : -72.9970302,
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

//


//needs double for loops

printToTable(){  
var resultsList =[];
var addressList =[];
var nameList =[]

for(var i=0; this.state.closest.length>i; i++){
     resultsList = Object.values(this.state.closest[i])
      nameList.push(resultsList[1]);
      addressList.push(resultsList[2]);
      }
      
  return (
  <div>
    <table>
      <tbody>
        <tr>
          <th> Name </th>
          <th> address </th>
        </tr>
        <tr>
          <td> {nameList[0]} </td>
          <td> {addressList[0]} </td>
        </tr>
        <tr>
          <td> {nameList[1]} </td>
          <td> {addressList[1]} </td>
        </tr>
      </tbody>
    </table>
  </div>
    );
  }


render(){
	return(
		<div className ='dataLookUpCont'>
        <p> we are in the data look up </p>
        <div> {console.log(this.state.closest[0])} </div>
        <button onClick={this.accessData}> Find your Nearest Location</button>

         <p> We are under the map </p>
         {this.printToTable()}

		<Mapit locs = {this.state.closest} userLat = {this.props.userLat} userLong = {this.props.userLong} />
    

  

		</div>
		)
	}
}

export default DataLookUp;

