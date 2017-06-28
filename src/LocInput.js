import React, { Component } from 'react';
import './LocInput.css';
import ManualLoc from './ManualLoc';
import DataLookUp from './DataLookUp';
import {geolocated} from 'react-geolocated';

class LocInput extends Component {


  render() { 
      return !this.props.isGeolocationAvailable
      ? <div>
      		Your browser does not support Geolocation
      		<ManualLoc />
      </div>
      : !this.props.isGeolocationEnabled
        ? <div>
        Geolocation is not enabled
        	<ManualLoc />
        </div>
        : this.props.coords
        	? <div>
        		<DataLookUp userLat = {this.props.coords.latitutde} userLong = {this.props.coords.longitude} />
        	</div>
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000
}) (LocInput);

export default LocInput;
// ..... what does the correct export look like	