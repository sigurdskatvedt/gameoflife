import produce from "immer";
import "leaflet/dist/leaflet.css"; // <- Leaflet styles
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "./App.css";
import { useCallback, useRef, useState } from "react";
import { LatLngExpression } from "leaflet";
import Map from "./Map";

const App = () => {
  return <Map></Map>;
};

export default App;
