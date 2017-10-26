import React, { Component } from 'react'
import ol from 'openlayers'
import '../../node_modules/openlayers/css/ol.css'
import '../styles/Map.css'

class Map extends Component {

  componentDidMount() {
    // OL map
    let placeLayer = new ol.layer.Vector({
      source: new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        //url: "http://www.geoforall.org/locations/OSGEoLabs.json" raises
        //Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at http://www.geoforall.org/locations/OSGEoLabs.json. (Reason: CORS header 'Access-Control-Allow-Origin' missing).
        url: "OSGEoLabs.json"
      })
    });

    let map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        }),
        placeLayer
      ],
      view: new ol.View({
        center: [949282, 6002552],
        zoom: 4,
        minZoom: 3,
        maxZoom: 15
      })
    });
  }

  render() {
    return (
      <div id="map" className="map"></div>
    )
  }
}

export default Map

