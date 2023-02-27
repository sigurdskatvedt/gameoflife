import produce from "immer";
import "leaflet/dist/leaflet.css"; // <- Leaflet styles
import { BBox, squareGrid, Units } from "@turf/turf";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  GeoJSON,
  MapContainerProps,
  useMap,
} from "react-leaflet";
import "./App.css";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { LatLngBounds, LatLngExpression } from "leaflet";
import { GeoJsonObject } from "geojson";
//import "./App.css";

function App() {
  // TODO: Get these from user input
  const numCols = 50;
  const numRows = 50;
  const neighborOperations = [
    [0, 1],
    [0, -1],
    [1, 0],
    [1, 1],
    [1, -1],
    [-1, 0],
    [-1, 1],
    [-1, -1],
  ];

  const [grid, setGrid] = useState(() => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      // TODO: This default value of zero should depend on rule set
      rows.push(Array.from(Array(numCols), () => 0));
    }
    return rows;
  });

  const [running, setRunning] = useState(false);

  // using a referece for running value as simulation function is only created once and therefore will
  // not be able to monitor changes in its inner variables, passing a reference to an external variable solves this
  const runningRef = useRef(running);
  runningRef.current = running;

  // useCallback with empty dependecy insures function is only created once
  const runSimulation = useCallback(() => {
    if (!runningRef) {
      return;
    }

    setGrid((g) => {
      return produce(g, (gridCopy) => {
        for (let y = 0; y < numRows; y++) {
          for (let x = 0; x < numCols; x++) {
            // Change if more that two states
            let neighbors = 0;
            neighborOperations.forEach(([dy, dx]) => {
              const newY = y + dy;
              const newX = x + dx;
              // Check if out of bounds
              if (newY >= 0 && newY < numRows && newX >= 0 && newX < numCols) {
                // TODO: Change for more than one state
                neighbors += g[newY][newX];
              }
            });

            // TODO: Change for different rulesets
            if (neighbors < 2 || neighbors > 3) {
              gridCopy[y][x] = 0;
            } else if (g[y][x] === 0 && neighbors === 3) {
              gridCopy[y][x] = 1;
            }
          }
        }
      });
    });

    // TODO: Change based on slider?
    setTimeout(runSimulation, 1000);
  }, []);

  return (
    <>
      <button
        onClick={() => {
          setRunning(!running);
          if (!running) {
            runningRef.current = true;
            runSimulation();
          }
        }}
      >
        {running ? "Stop" : "Start"}
      </button>
      <div className={`App grid grid-cols-[repeat(50,20px)]`}>
        {grid.map((rows, y) =>
          rows.map((cols, x) => (
            <div
              key={`x${x}-y${y}`}
              onClick={() => {
                const newGrid = produce(grid, (gridCopy) => {
                  // TODO: Defining 1 as alive state, should come from ruleset
                  gridCopy[y][x] = gridCopy[y][x] ? 0 : 1;
                });
                setGrid(newGrid);
              }}
              className={`h-[20px] w-[20px] border-2 border-solid border-black ${
                grid[y][x] ? " bg-pink-500" : undefined
              }`}
            />
          ))
        )}
      </div>
    </>
  );
}

// @src/app.jsx
type BoundsProps = {
  initialZoom: number;
};

/* const Map = () => {
  const initialZoom = 0.000003;
  let zoom = initialZoom;

  var bbox: BBox = [-zoom * (16 / 9), -zoom, zoom * (16 / 9), zoom];
  var cellSide = 0.00001;
  var options: { units: Units } = { units: "miles" };

  // TODO: Fix anytype
  var grid = squareGrid(bbox, cellSide, options);

  // Set all features to highlighted == 'No'
  for (let i = 0; i < grid.features.length; i++) {
    grid.features[i].properties!.highlighted = false;
    grid.features[i].properties!.id = i;
  }

  grid.features[0].properties!.highlighted = true;

  return (
    <>
      <MapContainer
        id="map-container"
        minZoom={27.9}
        bounds={
          new LatLngBounds([
            [-zoom / 3, -zoom / 3],
            [zoom / 3, zoom / 3],
          ])
        }
        style={{ minHeight: "90vh", minWidth: "100vw" }}
      >
        <GeoJSON data={grid}></GeoJSON>
      </MapContainer>
    </>
  );
}; */

export default App;
