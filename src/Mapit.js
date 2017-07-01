import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import './Mapit.css';


class Mapit extends Component {



//I THINK THEY ARE RENDERING BUT SO FAR AWAY - need to adjust center of map to reload and update based on center
//mapCenter on https://www.npmjs.com/package/google-maps-react



render(){
	return(
		<div className ='MapRenderCont'>
      <Map className ="mapper" google={this.props.google}
        style={{width: '85%', height: '100%', position: 'relative'}}
        className={'map'}

        >
  <Marker
    name={'User'}
    position={{lat: this.props.userLat, lng: this.props.userLong}} />
  
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
    zoom: 10,
    //set in NYC
    initialCenter: {
      lat: 40.2372163,
      lng: -73.99669639999999
    },
    center: {
    },
    centerAroundCurrentLocation: false,
    visible: true
  };


export default GoogleApiWrapper({
  apiKey: "AIzaSyA0nidzDD_rDGc7MUldzJ68MaC2naf3tyI"
}) (Mapit)

