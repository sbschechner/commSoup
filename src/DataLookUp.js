import React, { Component } from 'react';
import './DataLookUp.css';
import Mapit from './Mapit'

class DataLookUp extends Component {
  constructor(props){
    super(props);
    this.state = {
      haveData: false,
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
 			"LocLat" : 40.830911,
 			"LocLong" : -73.908384
 		},
 		{
 			"id": "666666",
 			"LocName" : "Location 2's cool name",
 			"address": "101 main street",
 			"LocLat" : 40.681599,
 			"LocLong" : -73.961306,
 		}
    	],
       };

this.accessData = this.accessData.bind(this);
this.printToTable = this.printToTable.bind(this);
this.showGetResults = this.showGetResults.bind(this);

    }

showGetResults(){
  if (this.props.hasLocation ==="yes"){
  return(
    <button onClick={this.accessData}> Find your 5 Nearest Locations </button>
    )
  }
}

accessData(){ //THIS SHOULD FIND THE TOP 5 CLOSEST
//not sure exactly what it returns yet because having some issus printing it
console.log("accesing the data base");
var url = "/soupKitchensNearest?lat="+this.props.userLat + "&long="+this.props.userLong;
console.log(url)
/*fetch(URL).then((response) => response.json())

     .then(data => {
        console.log("hello - we have hit endpoint for the DB");
        console.log(data.FIELD1);
        console.log(data); 
        this.setState({
            latitude : data.lat,
            longitude: data.lng,
        })
    
    .catch(function(err){
        console.log ("the errorr is " + err);
      });
*/
   this.setState({
    haveData: true
   })
}

//nameList index number might change based on returned data

printToTable(){  
if (this.state.haveData === true){
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
    <Mapit locs = {this.state.closest} userLat = {this.props.userLat} userLong = {this.props.userLong} />
  </div>
    );
  }
}


render(){
	return(
		<div className ='dataLookUpCont'>
        <p> we are in the data look up </p>
        <div> {console.log(this.state.closest[0])} </div>
        {this.showGetResults()}
        <p> We are above the map and the results table </p>
        {this.printToTable()}
        
		</div>
		)
	}
}

export default DataLookUp;

