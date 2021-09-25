import ReactMapGL, {Marker, Popup} from "react-map-gl";
import {useState} from "react";
import getCenter from "geolib/es/getCenter";

const Map = (props) => {
  const {searchResults} = props;

  // Transforming the search object into { latitude: 52.516272, longitude: 13.377722 } object
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  const [selectedLocation, setSelectedLocation] = useState({});

  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/parweizh/cktywbzhk2zbz17l40f729zar"
      mapboxApiAccessToken={process.env.mapbox_key}
      onViewportChange={(nextViewPort) => setViewport(nextViewPort)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              className="cursor-pointer text-2xl animate-bounce"
              onClick={() => setSelectedLocation(result)}
              aria-label="push-pin"
              role="img"
            >
              📍
            </p>
          </Marker>

          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
            >
              {result.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
};

export default Map;
