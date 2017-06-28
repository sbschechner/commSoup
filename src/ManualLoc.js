import React, { Component } from 'react';
import './ManualLoc.css';
import DataLookUp from './DataLookUp'


class ManualLoc extends Component {
  constructor(props){
    super(props);
    this.state = {
    	latitutde: null,
    	longitude: null,
    	manualLoc: null,
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
  this.setState({manualInput: this.state.tempZip})
  this.zipToLocation()
}

zipToLocation(){
  var URL =  'https://www.zipcodeapi.com/rest/clqq6LHooxlUDBf8p3AtzDuSL9BUgVUtgkTm6BLv87qMIFU8JvCi96bUgMPxHJ0Y/info.json/'+ this.state.manualLoc+'/degrees'
  fetch(URL).then((response) => response.json())
     
     .then(function(data){
        console.log("hello", data)
        this.setState({
            latitude : data.lat,
            longitude: data.lng,

        })
    
    .catch((err) => (){
        console.log ("the errorr is " + err);
      }
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
            <input type='number' defaultValue = {this.state.tempZip}  onChange = {this.changeTempNumber()}/>
            </label>
            <input type="submit" value="Submit Guess" onClick = {this.handleClick()}/>
        </form>
        <DataLookUp userLat = {this.state.latitutde} userLong = {this.state.longitude} />
     </div>
      );
    }
}

export default ManualLoc;