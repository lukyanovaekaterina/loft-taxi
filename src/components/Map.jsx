import React, {Component} from 'react'
import mapboxgl from 'mapbox-gl'
import {BookingForm} from './BookingForm'

export class Map extends Component {
  map = null;
  mapContainer = React.createRef();

  componentDidMount() {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiZWthdGVyaW5hLWx1a3lhbm92YSIsImEiOiJja21ydGVzZ3UwNHc5Mnhtd2NqdGZ3eDliIn0.v_Ej6s3l9Cznq5IHFLLDQg";
    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v9",
      center: [30.3056504, 59.9429126], // LED
      zoom: 10,
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return (
        <div className="map-wrapper">
          <div data-testid="map" className="map" ref={this.mapContainer} />
          <BookingForm />
        </div> 
    );
  }
}