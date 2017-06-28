import React, { Component } from 'react';
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
}

render(){
	return(
		<div className ='MapRenderCont'>
			{this.placeOnMap()}
		<div />

		)

	}

}