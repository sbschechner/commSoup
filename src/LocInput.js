import React, { Component } from 'react';
import './LocInput.css';
import AutoLoc from './AutoLoc'
import ManualLoc from './ManualLoc'

class LocInput extends Component {
  constructor(props){
    super(props);
    this.state = {
    	latitutde: null,
    	longitude: null,
    	needManual: true,
    	manualLoc: null,
    	tempZip: null,
        };

this.getLoc = this.getLoc.bind(this);
this.showPosition = this.showPosition.bind(this);
this.manualInput = this.manualInput.bind(this);

  }


getLoc(){
	if (navigator.geolocation) {
		//Auto Loc which runs the navigator geolocation route - might need props from navigator.geolocation
		//is navigator.geolocation just an automatic prop?
		//Manual Loc which runs the manual input with zip code using https://www.zipcodeapi.com/API#zipToLoc
		if('geolocation' in window){
     navigator.geolocation.getCurrentPosition(...);
		}

		//??? maybe use this ^^ if error code, 


		return( 
		<div>
			<p> AutoLoc is on </p>
			<AutoLoc geography = {this.props.navigator.geolocation} />
		</div>
		)
	}

	else{
		return(
			<div>
				<p> Manual Loc is on </p>
				<ManualLoc />
			</div>
		)
	}
}



  render() { 
    return(
      <div className ="LocInputCont">
      	<h2> Lets first find where you are </h2>
      	<button value="Find Me" onClick = {this.getLoc()} />
     </div>
      );
  }
}

export default LocInput;
