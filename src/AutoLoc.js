import React, { Component } from 'react';
import './AutoLoc.css';

class AutoLoc extends Component {
  constructor(props){
    super(props);
    this.state = {
    	latitutde: null,
    	longitude: null,
        };
    }


navigator.geolocation.getCurrentPosition(this.showPosition(), this.showError());
this.props.geography.getCurrentPosition

//THIS SHOULD PASS TO CHILD COMPONENT WHICH IS THE ONE THAT WILL CALL DATABASE
//will call DB and call Google Directions API 
//should place you on a map and then as it is searching data base
//it will also pass to map component (map component is going to render different markers) and call results


//might need a button which then gets location and therefore only runs on click

showPosition(position) {
var data = [...position]
 /*this.setState({
        latitutde : data.latitude,
       	longitude : data.longitude
        })

      //HOW DO I UPDATE THE LOCATION set state?
 */
}

showError(error){
if (error.code == error.PERMISSION_DENIED)
      console.log("User Said No");
}


 render() { 
    return(
      <div className ="LocInputCont">
      	<h2> Lets first find where you are </h2>
     <DataLookUp userLat = {this.state.latitutde} userLong = {this.state.longitude} />
     </div>
      );
  	}
}

export default AutoLoc;