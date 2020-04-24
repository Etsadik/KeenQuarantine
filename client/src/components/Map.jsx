import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 37.397, lng: -122.644 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 37.8715, lng: -122.2703 }} />}
  </GoogleMap>
))

export default MyMapComponent;

