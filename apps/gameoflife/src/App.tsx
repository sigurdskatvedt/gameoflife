import produce from "immer";
import "leaflet/dist/leaflet.css"; // <- Leaflet styles
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "./App.css";
import { useCallback, useRef, useState } from "react";
import { LatLngExpression } from "leaflet";
import Map from "./Map";
import { useQuery, gql } from "@apollo/client";
import { Rule } from "types";

const AllRulesQuery = gql`
  query AllRules {
    allRules {
      name
    }
  }
`;
const App = () => {
  const { loading, error, data } = useQuery(AllRulesQuery);

  const rules: Rule[] = data.allRules;
  return <Map></Map>;
};

export default App;
