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
        console.log("hello", data.lat);
        //THIS IS NOT GOING TO STATE BUT INSTEAD THIS OF MAPS.  
        this.setState({
            latitude : data.lat,
            longitude: data.lng,
        })
    
    .catch(function(err){
        console.log ("the errorr is " + err);
      });
    }
  )
}


render() { 
    return(
      <div className ="ManualLocCont">
      Lets do it manually!
        <form>
        <label>
         Please enter your zip code:
            <input type='number' defaultValue = {this.state.tempZip}  onChange = {this.changeTempNumber}/>
            </label>
            <input type="submit" value="Submit Zip" onClick = {this.handleClick}/>
        </form>
        <DataLookUp userLat = {this.state.latitude} userLong = {this.state.longitude} />
     </div>
      );
    }
}

export default ManualLoc;