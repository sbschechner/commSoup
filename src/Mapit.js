import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
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
  //https://github.com/fullstackreact/google-maps-react/blob/master/README.md
  //https://www.fullstackreact.com/articles/how-to-write-a-google-maps-react-component/#the-map-container-component
}

//I THINK THEY ARE RENDERING BUT SO FAR AWAY - need to adjust center of map

render(){
	return(
		<div className ='MapRenderCont'>
      <Map className ="mapper" google={this.props.google}
        style={{width: '75%', height: '100%', position: 'relative'}}
        className={'map'}
        zoom={14}>
  <Marker
    name={'SOMA'}
    position={{lat: this.props.userLat, lng: this.props.userLong}} />
  <Marker
          name={'Dolores park'}
          position={{lat: 38.759703, lng: -120.428093}} />
        <Marker />
    
    </Map>
    </div>
		)

	}

}



export default GoogleApiWrapper({
  apiKey: "AIzaSyA0nidzDD_rDGc7MUldzJ68MaC2naf3tyI"
}) (Mapit)

