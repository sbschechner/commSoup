import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import './Mapit.css';


class Mapit extends Component {


render(){
	return(
		<div className ='MapRenderCont'>
      <Map className ="mapper" google={this.props.google} 
        style={{width: '85%', height: '100%', position: 'relative'}}

        //this makes sure the maps update to where the user is for automatic geolocation
      initialCenter ={{lat: this.props.userLat, lng: this.props.userLong}}
        >


  <Marker
    name={'User'}
    position={{lat: this.props.userLat, lng: this.props.userLong}} 
    />

  <Marker
      name={'Loc 1'}
          position={{lat: this.props.locs[0].LocLat, lng: this.props.locs[0].LocLong}} />
        <Marker />

  <Marker
      name={'Loc 2'}
          position={{lat: this.props.locs[1].LocLat, lng: this.props.locs[1].LocLong}} />
        <Marker />

    </Map>
    </div>
		)

	}

}


  Map.defaultProps = {
    zoom: 12,
    centerAroundCurrentLocation: true,
    initialCenter : {lat: 40.7589, lng: -73.981},
    visible: true
  };


export default GoogleApiWrapper({
  apiKey: "AIzaSyA0nidzDD_rDGc7MUldzJ68MaC2naf3tyI"
}) (Mapit)

