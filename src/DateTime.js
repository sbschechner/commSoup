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
  }

getDate(){
var dateTime = new Date();
return dateTime
}

componentDidMount(){ 
  var theDate = this.getDate();
  this.setState({
  	currentDay : theDate.getDay(),
  	currentHour: theDate.getHours(),
  	currentMinute: theDate.getMinutes()
  })
}

//return the hours and dates and if it is meal time

  render() { 
    return(
      <div className ="scoreTableCont">

     </div>
      );
  }
}

export default DateTime;

