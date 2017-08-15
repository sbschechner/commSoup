import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper, InfoWindow} from 'google-maps-react';
import './Mapit.css';


class Mapit extends Component {
  constructor(props){
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
        };

    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
      }

onMarkerClick(props, marker) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClicked(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }


render(){
	return(
		<div className="mapContainer">
    <div className ='MapRenderCont'>
      <Map className ="mapper" google={this.props.google} 
        style={{width: '85%', height: '85%', position: 'relative'}}

        //this makes sure the maps update to where the user is for automatic geolocation
      initialCenter ={{lat: this.props.userLat, lng: this.props.userLong}}
      
      //needed for info window component
      onClick={this.onMapClicked}  

        >


  <Marker
    name={'User'}
    position={{lat: this.props.userLat, lng: this.props.userLong}} 
    onClick={this.onMarkerClick}
    />

  <Marker
      name={this.props.locationNames[0]}
      hours = {'10AM to now'}
      position={{lat: this.props.locationLats[0], lng: this.props.locationLongs[0]}} 
      onClick={this.onMarkerClick}
     />



  <Marker
      name={this.props.locationNames[1]}
      hours={'1pm to 5pm'}
      position={{lat: this.props.locationLats[1], lng: this.props.locationLongs[1]}}
      onClick={this.onMarkerClick}
      />

    <InfoWindow
      marker={this.state.activeMarker}
      visible={this.state.showingInfoWindow}>
        <div>
          <h1>{this.state.selectedPlace.name}</h1>
          <h3> Operating Hours: {this.state.selectedPlace.hours} </h3>
        </div>
    </InfoWindow>
    
    </Map>
    </div>
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
  apiKey: "AIzaSyA0nidzDD_rDGc7MUldzJ68MaC2naf3tyI",
  version:3.27
}) (Mapit)

