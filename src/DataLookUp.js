import React, { Component } from 'react';
import './DataLookUp.css';


class DataLookUp extends Component {
  constructor(props){
    super(props);
    this.state = {
    	KitchData_MockData: [
    	{	
 +			"id": "1111111",
 +			"LocName" : "Soup Kitch",
 +			"LocLat" : 999999,
 +			"LocLang" : 33333333
 +		},
 +		{
 +			"id": "222222",
 +			"LocName" : "Community Kitch",
 +			"LocLat" : 4444444,
 +			"LocLang" : 111111,
 +		}
    	],
    	
    	closest :[
    	{	
 +			"id": "7777777",
 +			"LocName" : "Location 1",
 			"address" : "89 broadway",
 +			"LocLat" : 101010101,
 +			"LocLang" : 0994849
 +		},
 +		{
 +			"id": "666666",
 +			"LocName" : "Location 2",
 			"address": "101 main street",
 +			"LocLat" : 19938384,
 +			"LocLang" : 493020,
 +		}
    	],

       };

this.accessData = this.changeTempNumber.bind(this);

    }

accessData(){ //THIS SHOULD FIND THE TOP 5 CLOSEST?
//this should make a get request to my data base to get all the data.
//should take props.userLat and userLong
//should then do the required math on each entry to figure out the distance between me and location
//maybe find the distance and add as variable? 
//the math can be done on the server side.....?
//return the top 5 shortest
//will need to store the top 5 shortest 
	fetch("/")

}



//will call DB and call Google Directions API ?
//MAPIt basically renders a map as 5 different markers


render(){
	this.accessData();
	return(
		<div className ='dataLookUpCont'>

		<Mapit closest = {this.state.closest} userLat = {this.props.userLat} userLong = {this.props.userLong} />

		<ResultsList closest = {this.state.closest}/>

		</div>
		)
	}
}

export default DataLookUp;