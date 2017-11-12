import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ol from 'openlayers'
import { MapConfig } from '../configurations/mapConfigs'

class Map extends Component {

  static propTypes = {
    selectedCountryData: PropTypes.object,
    countryDataRetrievalFailed: PropTypes.bool.isRequired,
    isCountryBoundaryVisible: PropTypes.bool.isRequired,
    fetchCountryData: PropTypes.func.isRequired,
    showCountryCard: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.handleCountryNameClickEvent();
    const popupOverlay = this.createPopupOverlay();
    const countryBoundaryOverlay = this.createCountryBoundaryOverlay();

    let map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      overlays: [popupOverlay],
      view: new ol.View({
        center: MapConfig.center,
        zoom: MapConfig.defaultZoomLevel,
        minZoom: MapConfig.minZoom,
        maxZoom: MapConfig.maxZoom
      })
    });

    this.setState({
      map: map,
      countryBoundaryOverlay: countryBoundaryOverlay
    });

    this.handleMapBoundaryVisibility(map, countryBoundaryOverlay, this.props.isCountryBoundaryVisible);
    this.handleMapSingleClick(map, popupOverlay);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.isCountryBoundaryVisible !== nextProps.isCountryBoundaryVisible) {
      this.handleMapBoundaryVisibility(
          this.state.map,
          this.state.countryBoundaryOverlay,
          nextProps.isCountryBoundaryVisible);
    }
  }

  handleMapBoundaryVisibility(map, countryBoundaryOverlay, isCountryBoundaryVisible) {
    if (isCountryBoundaryVisible) {
      map.addLayer(countryBoundaryOverlay);
      this.createCountryBoundaryHighlightOverlay(map);
      this.handleMapMouseOverEvent(map, this.createCountryBoundaryHighlightOverlay(map));
    } else {
      map.removeLayer(countryBoundaryOverlay);
    }
  }

  createCountryBoundaryHighlightOverlay(map) {
    const highlightStyle = new ol.style.Style(MapConfig.countryHighlightedStyle);
    return new ol.layer.Vector({
      source: new ol.source.Vector(),
      map: map,
      style: function(feature) {
        highlightStyle.getText().setText(feature.get('name'));
        return highlightStyle;
      }
    });
  }

  createCountryBoundaryOverlay() {
    let style = new ol.style.Style(MapConfig.countryBoundaryStyle);
    return new ol.layer.Vector({
      source: new ol.source.Vector({
        url: MapConfig.countryBoundaryDataSource,
        format: new ol.format.GeoJSON()
      }),
      style: function(feature) {
        style.getText().setText(feature.get('name'));
        return style;
      }
    });
  }

  createPopupOverlay() {
    const container = document.getElementById('popup');
    const closer = document.getElementById('popup-closer');
    const popupLayer = new ol.Overlay(({
      element: container,
      autoPan: true,
      autoPanAnimation: {
        duration: 250
      }
    }));

    if(closer) {
      closer.onclick = function () {
        popupLayer.setPosition(undefined);
        closer.blur();
        return false;
      };
    }
    return popupLayer;
  }

  handleMapSingleClick(map, popupOverlay, fetchCountryData=this.props.fetchCountryData) {
    map.on('singleclick', function(event) {
      const coords = event.coordinate;
      popupOverlay.setPosition(coords);
      fetchCountryData(ol.proj.toLonLat(coords));
    });
  }

  handleMapMouseOverEvent(map, highlightedOverlay) {
    const displayHighlightedCountry = this.handleCountryHighlight;
    let highlight;
    map.on('pointermove', function(event) {
      if (event.dragging) {
        return;
      }
      const pixel = map.getEventPixel(event.originalEvent);
      highlight = displayHighlightedCountry(pixel, highlightedOverlay, highlight, this);
    });
  }

  handleCountryNameClickEvent() {
    const countryName = document.getElementById('countryName');
    if (countryName) {
      countryName.onclick = (event,
                             countryDataRetrievalFailed = this.props.countryDataRetrievalFailed,
                             showCountryCard = this.props.showCountryCard) => {
        if (!countryDataRetrievalFailed) {
          showCountryCard();
        }
      };
    }
  }

  handleCountryHighlight (pixel, featureOverlay, highlight, map) {
    let feature = map.forEachFeatureAtPixel(pixel, function(feature) {
      return feature;
    });

    if (feature !== highlight) {
      if (highlight) {
        featureOverlay.getSource().removeFeature(highlight);
      }
      if (feature) {
        featureOverlay.getSource().addFeature(feature);
      }
      highlight = feature;
    }
    return highlight;
  }

  render() {
    let countryName = "UNKNOWN";
    if (this.props.selectedCountryData) {
      countryName = this.props.selectedCountryData.countryName ?
          this.props.selectedCountryData.countryName : countryName;
    }
    return (
      <div>
        <div id="map" className="map"/>
        <div id="popup" className="ol-popup">
          <a href="#" id="popup-closer" className="ol-popup-closer" />
          <div id="popup-content">Country Selected: &nbsp;&nbsp;
            <a href="#" id="countryName">
              { this.props.countryDataRetrievalFailed ? "ERROR" : countryName }
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Map

