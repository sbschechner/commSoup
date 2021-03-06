import React, { Component } from 'react';
import './LocInput.css';
import ManualLoc from './ManualLoc';
import DataLookUp from './DataLookUp';
import {geolocated} from 'react-geolocated';

class LocInput extends Component {
	constructor(props){
	super(props);

this.locationCheck= this.locationCheck.bind(this);
}

locationCheck(){
	if(!this.props.isGeolocationAvailable){
		return(
			<div>
			<p> Your browser does not suppot geolocation </p>
			<ManualLoc />
			</div>
			)
	}
	else if (!this.props.isGeolocationEnabled){
		return (
		<div>
		<p> Unfortunately, Geolocation is not enabled so lets do it manually </p>
		<ManualLoc />
		</div>
		)
	}

	else if(this.props.coords){
		return(
			<div>
				<p> We have located where you are in the world</p>
        		<DataLookUp userLat = {this.props.coords.latitude} userLong = {this.props.coords.longitude} hasLocation= "yes" />
        	</div>
        	)
		}
	
	else {
		return(
			<p> finding you</p>
			)
	}

}

  render() { 
      return (
      	<div>
      	{this.locationCheck()}
      	</div>
      	)
   
	}
}


export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 100
}) (LocInput);
