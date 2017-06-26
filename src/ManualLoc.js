import React, { Component } from 'react';
import './ManualLoc.css';


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


//THIS SHOULD PASS TO CHILD COMPONENT WHICH IS THE ONE THAT WILL CALL DATABASE
//will call DB and call Google Directions API 
//should place you on a map and then as it is searching data base
//it will also pass to map component (map component is going to render different markers) and call results


changeTempNumber(event){
    this.setState({tempZip : event.target.value})
    }

handleClick(event){
  event.preventDefault();
  this.setState({manualInput: this.state.tempZip})
}

//need to get actual API key
zipToLocation(){
  var URL =  'https://www.zipcodeapi.com/rest/scFYuxWGl5N2XIQ6iEqBYDdBwN532dJuppsUXpBivoks6byoQZ0PDeq91wc3JWx9/info.json/'+ this.state.manualLoc+'/degrees'
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
        <form>
        <label>
         Please enter your zip code:
            <input type='number' defaultValue = {this.state.tempZip}  onChange = {this.changeTempNumber()}/>
            </label>
            <input type="submit" value="Submit Guess" onClick = {this.handleClick()}/>
        </form>
        {this.zipToLocation()}
        <DATABASECOMPONT userLat = {this.state.latitutde} userLong = {this.state.longitude} />
     </div>
      );
    }
}

export default ManualLoc;