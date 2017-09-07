import React, { Component } from 'react';
import './DateTime.css';

class DateTime extends Component {
  constructor(props){
    super(props);
    this.state = {
        currentDay: null,
        currentHour: null,
        currentMinute:null
        };

this.getDate = this.getDate.bind(this);
this.mealChange = this.mealChange.bind(this);
  }

getDate(){
var dateTime = new Date();
return dateTime
}

mealChange(){
	if (this.state.currentHour >8  && this.state.currentHour <11) {
		return(
			<div className="mealTime">
				<h5> It is BreakFast Time </h5>
			</div>
			)
	}

	else if (this.state.currentHour >=12 && this.state.currentHour <15){
		return(
			<div className = "mealTime">
				<h5> It is Lunch Time </h5>
			</div>
			)
	}

	else if (this.state.currentHour >18 && this.state.currentHour <20){
		return(
			<div className = "mealTime">
				<h5> It is Dinner Time </h5>
			</div>
			)
	}

 return(
			<div className = "mealTime">
				<h5> It is not time to eat </h5>
			</div>
		)
}



componentDidMount(){ 
  var theDate = this.getDate();
  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  var minutes = theDate.getMinutes()
  if(minutes<10){
    minutes = "0"+ minutes

  }
  this.setState({
  	currentDay : days[theDate.getDay()],
  	currentHour: theDate.getHours(),
  	currentMinute: minutes
  })
}

  render() { 
    return(
      <div className ="dateTimeCont">
      	<h3> The Time is <span> {this.state.currentHour} : {this.state.currentMinute} </span> on {this.state.currentDay} </h3>
     </div>
      );
  }
}

export default DateTime;

