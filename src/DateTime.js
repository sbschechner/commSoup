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
			<div class="mealTime">
				<h3> It is BreakFast Time </h3>
			</div>
			)
	}

	else if (this.state.currentHour >13 && this.state.currentHour <15){
		return(
			<div className = "mealTime">
				<h3> It is Lunch Time </h3>
			</div>
			)
	}

	else if (this.state.currentHour >18 && this.state.currentHour <20){
		return(
			<div className = "mealTime">
				<h3> It is Dinner Time </h3>
			</div>
			)
	}

 return(
			<div className = "mealTime">
				<h3> It is not time to eat </h3>
			</div>
		)
}



componentDidMount(){ 
  var theDate = this.getDate();
  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  this.setState({
  	currentDay : days[theDate.getDay()],
  	currentHour: theDate.getHours(),
  	currentMinute: theDate.getMinutes()
  })
}

  render() { 
    return(
      <div className ="dateTimeCont">
      	<h2> The Time is <span> {this.state.currentHour} : {this.state.currentMinute} </span> on {this.state.currentDay} </h2>
      	{this.mealChange()}
     </div>
      );
  }
}

export default DateTime;

