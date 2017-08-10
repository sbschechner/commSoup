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
this.findDistance = this.findDistance.bind(this);

    }

showGetResults(){
  if (this.props.hasLocation ==="yes"){
  return(
    <button onClick={this.accessData}> Find your 5 Nearest Locations </button>
    )
  }
}


findDistance(userLat, userLong, dataLat, dataLong){
           var radlat1 = Math.PI * userLat/180
            var radlat2 = Math.PI * dataLat/180
            var theta = userLong-dataLong
            var radtheta = Math.PI * theta/180
            var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            dist = Math.acos(dist)
            dist = dist * 180/Math.PI //converting back to degrees
            dist = dist * 60 * 1.1515 // converting back to normal miles (not nautical miles)
            return dist

    }

accessData(){ //THIS SHOULD FIND THE TOP 5 CLOSEST
//not sure exactly what it returns yet because having some issus printing it
console.log("accesing the data base");
var url = "https://evening-thicket-30478.herokuapp.com/soupKitchens"
console.log(url)
var closestArr = [300,299];
var idArr = [];
var userLat = this.props.userLat;
var userLong = this.props.userLong;
fetch("https://evening-thicket-30478.herokuapp.com/soupKitchens", {
  headers: {
    'Accept': 'application/json'
  }

}).then((response) => response.json())
  
     .then(data => {
        console.log("hello - we have hit endpoint for the DB");
        console.log(data);

      var orderedPlaces = [];
      var dataLat = data.kitchens[0].lat;
      var dataLong = data.kitchens[0].long;
      var firstDistance = this.findDistance(this.props.userLat, this.props.userLong, dataLat,dataLong)
      var placeObj = {
        id : data.kitchens[0].id,
        dist : firstDistance,
      }
      orderedPlaces.push(placeObj);

      for(var i=1;i<data.kitchens.length;i++){

         var currentLat = data.kitchens[i].lat;
      var currentLong = data.kitchens[i].long;
      var currentDistance = this.findDistance(this.props.userLat, this.props.userLong, currentLat,currentLong)
      var currentObj = {
        id : data.kitchens[i].id,
        dist : currentDistance,
      }

      orderedPlaces.push(currentObj);
    }

    console.log(orderedPlaces)
            }) //only have access to data between here and fetch


      .catch(error =>{
      console.error(error)
      }) 

   this.setState({ //have data is important to be true to get print to table to print
    haveData: true
   })
  

  } // close the access data


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
    <p> the locations are listed on the map below </p>
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

