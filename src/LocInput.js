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
		<p> Geolocation is not enabled </p>
		<ManualLoc />
		</div>
		)
	}

	else if(this.props.coords){
		return(
			<div>
				<p> Latitude {this.props.coords.latitude} </p>
				<p> Longitude {this.props.coords.longitude} </p>
        		<DataLookUp userLat = {this.props.coords.latitude} userLong = {this.props.coords.longitude} />
        	</div>
        	)
		}
	
	else {
		return(
			<p> finding </p>
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


//export default LocInput;
// ..... what does the correct export look like	
//https://www.npmjs.com/package/react-geolocated