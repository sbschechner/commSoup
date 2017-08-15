import React, { Component } from 'react';
import './DataLookUp.css';
import Mapit from './Mapit'

class DataLookUp extends Component {
  constructor(props){
    super(props);
    this.state = {
      haveData: false,
    	locLats:[],
      locLongs:[],
      locNames:[],
      locAddress:[],
      locHours:[],
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
console.log("accesing the data base");
var url = "https://evening-thicket-30478.herokuapp.com/soupKitchens"
fetch(url, {
  headers: {
    'Accept': 'application/json'
  }

}).then((response) => response.json())
  
     .then(data => {
        console.log("hello - we have hit endpoint for the DB");

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


    var sortable = [];
    for (var item in orderedPlaces) {
      sortable.push([orderedPlaces[item].id, orderedPlaces[item].dist]); // creates an array of the object with position and distance,
    }

    
    sortable.sort(function(a, b) {
      return a[1] - b[1];
    });
  
    
   //location show represents the number of shown locations
  var closeLats =[];
  var closeLongs =[];
  var closeNames =[];
  var closeAddress=[];
  var closeHours=[];
  for(var p=1; p<4; p++){
    var urlLoc = "https://evening-thicket-30478.herokuapp.com/soupKitchensSpecific?kitchId="+sortable[p][0]
    fetch(urlLoc, {
    headers: {
      'Accept': 'application/json'
      }

      }).then((response) => response.json())
      .then(data => {
        
        console.log("hello - we have hit endpoint for the specific kitchen DB");
        closeLongs.push(parseFloat(data.long));
        closeLats.push(parseFloat(data.lat));
        closeNames.push(data.name);
        closeAddress.push(data.street_ad);
        closeHours.push(data.hours);
      })

        .catch(error =>{
      console.error(error)  
    })
      
      }
      this.setState({
        locLats: closeLats,
        locLongs : closeLongs,
        locNames : closeNames,
        locAddress : closeAddress,
        locHours : closeHours,
      })
       //only have access to data between here and fetch
     })

      .catch(error =>{
      console.error(error)
      }) 

     

   this.setState({ //have data is important to be true to get print to table to print 
    haveData: true
   })
  }

//nameList index number might change based on returned data

printToTable(){  
if (this.state.haveData === true){
  var testingAddress = this.state.locAddress;
  console.log(this.state.locAddress);
  console.log(testingAddress)
  return (
  <div>
    <table>
      <tbody>
        <tr>
          <th> Name </th>
          <th> address </th>
        </tr>
        <tr>
          <td> hello {testingAddress[0]} </td>
          <td> {this.state.locAddress[0]} </td>
        </tr>
        <tr>
          <td> {this.state.locNames[1]} </td>
          <td> {this.state.locAddress[1]} </td>
        </tr>
        <tr>
          <td> {this.state.locNames[2]} </td>
          <td> {this.state.locAddress[2]} </td>
        </tr>
      </tbody>
    </table>
    <p> the locations are listed on the map below </p>
    <Mapit locationLats = {this.state.locLats} locationLongs ={this.state.locLongs} locationNames = {this.state.locNames} userLat = {this.props.userLat} userLong = {this.props.userLong} />
  </div> //NEED TO GET HOURS FROM THE DATA. 
    );
  }
}


render(){
	return(
		<div className ='dataLookUpCont'>
        <p> we are in the data look up </p>
       
        {this.showGetResults()}
        <p> We are above the map and the results table </p>
        {this.printToTable()}       
		</div>
		)
	}
}

export default DataLookUp;

