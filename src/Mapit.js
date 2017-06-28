import React, { Component } from 'react';
import './Mapit.css';


class Mapit extends Component {
   constructor(props){
    super(props);
    this.state = {
        showSplash : true,
        };

this.Mapit = this.Mapit.bind(this)
  }
  
Mapit(){  
//take this.props.closest and places all 5 markets on a map. 
//google maps API 
}

render(){
	return(
		<div className ='ResultsListCont'>
			{this.placeOnMap()}
		<div />

		)

	}

}