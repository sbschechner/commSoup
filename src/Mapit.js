import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import './Mapit.css';


class Mapit extends Component {

render(){
	return(
		<div className ='MapRenderCont'>
      <Map className ="mapper" google={this.props.google}
        style={{width: '85%', height: '100%', position: 'relative'}}
        className={'map'}

        //this makes sure the maps update to where the user is
      initialCenter ={{lat: this.props.userLat, lng: this.props.userLong}}
        >



    </Map>
    </div>
		)

	}

}
/*
  <Marker
    name={'User'}
    position={{lat: this.props.userLat, lng: this.props.userLong}} />
  

    
  <Marker
      name={'Loc 2'}
          position={{lat: this.props.locs[1].LocLat, lng: this.props.locs[1].LocLong}} />
        <Marker />

*/

  Map.defaultProps = {
    zoom: 15,
    //set in NYC
    initialCenter: {
      lat: 22.9,
      lng: 89.0
    },
    centerAroundCurrentLocation: false,
    visible: true
  };


export default GoogleApiWrapper({
  apiKey: "AIzaSyA0nidzDD_rDGc7MUldzJ68MaC2naf3tyI"
}) (Mapit)

