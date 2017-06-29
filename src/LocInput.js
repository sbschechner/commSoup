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
	if(this.props.isGeolocationAvailable === false){
		return(
			<div>
			<p> Your browser does not suppot geolocation </p>
			<ManualLoc />
			</div>
			)
	}
	else if (this.props.isGeolocationEnabled === false){
		return (
		<div>
		<p> Geolocation is not enabled </p>
		<ManualLoc />
		</div>
		)
	}

	else{
		return(
			<div>
        		<DataLookUp userLat = {this.props.coords.latitude} userLong = {this.props.coords.longitude} />
        	</div>
        	)
	}
}

  render() { 
      return !this.props.isGeolocationAvailable
      ? <div>Your browser does not support Geolocation </div>
      : !this.props.isGeolocationEnabled
        ? <div>Geolocation is not enabled</div>
        : this.props.coords
          ? 
          <div>
          <p> text in the this props </p>
         <DataLookUp userLat = {this.props.coords.latitude} userLong = {this.props.coords.longitude} />
          <table>
            <tbody>
              <tr>
              	<td>latitude</td>
              	<td>{this.props.coords.latitude}</td>
              </tr>
              <tr>
              	<td>longitude</td>
             	 <td>{this.props.coords.longitude}</td>
             </tr>
            </tbody>
          </table>
          </div>
          : <div>Getting the location data&hellip; </div>;
	}
}


export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 700
}) (LocInput);


//export default LocInput;
// ..... what does the correct export look like	
//https://www.npmjs.com/package/react-geolocated