import React, { Component } from 'react';
import './DataLookUp.css';
import Mapit from './Mapit'
import DataTable from './DataTable'

class DataLookUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      haveData: false,
      locLats: [],
      locLongs: [],
      locNames: [],
      locAddress: [],
      locHours: [],
    };

    this.accessData = this.accessData.bind(this);
    this.printToTable = this.printToTable.bind(this);
    this.showGetResults = this.showGetResults.bind(this);
    this.findDistance = this.findDistance.bind(this);
  }

  showGetResults() {
    if (this.props.hasLocation === "yes") {
      return (
        <button onClick={this.accessData}> Find your 3 Nearest Locations in NYC </button>
      )
    }
  }


  findDistance(userLat, userLong, dataLat, dataLong) {
    var radlat1 = Math.PI * userLat / 180
    var radlat2 = Math.PI * dataLat / 180
    var theta = userLong - dataLong
    var radtheta = Math.PI * theta / 180
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist)
    dist = dist * 180 / Math.PI //converting back to degrees
    dist = dist * 60 * 1.1515 // converting back to normal miles (not nautical miles)
    return dist

  }


  accessData() { //THIS SHOULD FIND THE TOP 3 CLOSEST
     console.log("accesing the data base");
    var closeLats = [];
    var closeLongs = [];
    var closeNames = [];
    var closeAddress = [];
    var closeHours = [];
    var updateCheck = {
      firstAnswer: false
    }

    var url = "https://evening-thicket-30478.herokuapp.com/soupKitchens"
    fetch(url, {
      headers: {
        'Accept': 'application/json'
      }

    }).then((response) => response.json())

      .then(data => {
         console.log("hello - we have hit endpoint for the DB");

        var orderedPlaces = [];
        var dataLat = data.kitchens[0].lat;
        var dataLong = data.kitchens[0].long;
        var firstDistance = this.findDistance(this.props.userLat, this.props.userLong, dataLat, dataLong)
        var placeObj = {
          id: data.kitchens[0].id,
          dist: firstDistance,
        }
        orderedPlaces.push(placeObj);

        for (var i = 1; i < data.kitchens.length; i++) {

          var currentLat = data.kitchens[i].lat;
          var currentLong = data.kitchens[i].long;
          var currentDistance = this.findDistance(this.props.userLat, this.props.userLong, currentLat, currentLong)
          var currentObj = {
            id: data.kitchens[i].id,
            dist: currentDistance,
          }

          orderedPlaces.push(currentObj);
        }


        var sortable = [];
        for (var item in orderedPlaces) {
          sortable.push([orderedPlaces[item].id, orderedPlaces[item].dist]); // creates an array of the object with position and distance,
        }


        sortable.sort(function (a, b) {
          return a[1] - b[1];
        });


        //location show represents the number of shown locations
        updateCheck[sortable[1][0]] = false;
        updateCheck[sortable[2][0]] = false;
        updateCheck[sortable[3][0]] = false;

        var self = this;

        function downloadData(n) {
          let urlLoc = "https://evening-thicket-30478.herokuapp.com/soupKitchensSpecific?kitchId=" + sortable[n][0];

          fetch(urlLoc, {
            headers: { 'Accept': 'application/json' }
          }).then((response) => response.json())
            .then(data => {

              closeLongs.push(parseFloat(data.long));
              closeLats.push(parseFloat(data.lat));
              closeNames.push(data.name);
              closeAddress.push(data.street_ad);
              closeHours.push(data.hours);

              if (n === 0) {
                console.log("the last request finished");
                updateMyStateBro();
              } else {
                downloadData(n - 1);
              }
            });
        }

        function updateMyStateBro() {
          self.setState({
            locLats: closeLats,
            locLongs: closeLongs,
            locNames: closeNames, 
            locAddress: closeAddress, 
            locHours: closeHours,
            haveData: true
          });

          console.log("STATE WAS UPDATED.");
        }
        downloadData(3);
      });
  }


  printToTable() {
    if (this.state.haveData === true) {
      
      return (
        <div>
          <DataTable locationNames={this.state.locNames} locationAdd={this.state.locAddress} />
          <Mapit locationNames={this.state.locNames} locationHours={this.state.locHours} locationLats={this.state.locLats} locationLongs={this.state.locLongs} userLat={this.props.userLat} userLong={this.props.userLong} />
        </div>
      );
    }
  }


  render() {
    return (
      <div className='dataLookUpCont'>
        {this.showGetResults()}
        {this.printToTable()}
      </div>
    )
  }
}

export default DataLookUp;

