import React, { Component } from 'react';
import './ManualLoc.css';
import DataLookUp from './DataLookUp'



class ManualLoc extends Component {
  constructor(props){
    super(props);
    this.state = {
    	latitude: null,
    	longitude: null,
    	tempZip: null,
        locationFound: false,
        hasLocation : false
        };
this.changeTempNumber = this.changeTempNumber.bind(this);
this.handleClick = this.handleClick.bind(this);
this.zipToLocation = this.zipToLocation.bind(this);
    }

changeTempNumber(event){
    this.setState({tempZip : event.target.value})
    }

handleClick(event){
  event.preventDefault();
  console.log("handle Click");
  this.zipToLocation()
}

zipToLocation(){
  var URL =  'https://www.zipcodeapi.com/rest/js-Hl77BtUvoCMVIgyb7lK0u4cUWnkhEe9lzgsbKmH8Zu4HKDSRYDSsH5mDsHV7V5sv/info.json/'+ this.state.tempZip+'/degrees'
  fetch(URL).then((response) => response.json())
     
     .then(data => {
        console.log("hello - we have hit the api for zip");
        console.log(data.lat);
        console.log(data); 
        this.setState({
            latitude : data.lat,
            longitude: data.lng,
            locationFound: true,
            hasLocation : "yes"
        })  
    }
  )
}

foundLocationReport(){
    if (this.state.locationFound === true){
        return(
            <p> We have found your location </p>
            )
        }
}

render() { 
    return(
      <div className ="ManualLocCont">
        <form>
        <label>
         Please enter your NYC zip code:
            <input type='number' defaultValue = {this.state.tempZip}  onChange = {this.changeTempNumber}/>
            </label>
            <input type="submit" value="Submit Zip" onClick = {this.handleClick}/>
        </form>
        {this.foundLocationReport()}
        <DataLookUp userLat = {this.state.latitude} userLong = {this.state.longitude} hasLocation = {this.state.hasLocation}/>
     </div>
      );
    }
}

export default ManualLoc;