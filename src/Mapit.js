import React, { Component } from 'react';
import {GoogleApiWrapper} from 'GoogleMapsReactComponent';
import './Mapit.css';


class Mapit extends Component {
   constructor(props){
    super(props);
    this.state = {
        };

this.placeOnMap = this.placeOnMap.bind(this)
  }
  
placeOnMap(){  
//take this.props.closest and places all 5 markets on a map. 
//google maps API 
//this.props.closest[0].Locname = ? 
//this.props.closest[0].LocLat = ? 
//this.props.closeest[0].LocLong=?
//can use .maps
// https://www.npmjs.com/package/google-maps-react
  //specificall the marker section
  //wouldnt I need an API ? like where would that get entered?
  //Automatically Lazy-loading Google API - this title - not sure i understand this? 
}

render(){
	return(
		<div className ='MapRenderCont'>
			{this.placeOnMap()}
      <Map google={this.props.google}
        style={{width: '100%', height: '100%', position: 'relative'}}
        className={'map'}
        zoom={14}>
  <Marker
    name={'SOMA'}
    position={{lat: 37.778519, lng: -122.405640}} />
    
    </Map>
    </div>
		)

	}

}
export default GoogleApiWrapper({
  apiKey: "AIzaSyA0nidzDD_rDGc7MUldzJ68MaC2naf3tyI"
}) (Mapit)

