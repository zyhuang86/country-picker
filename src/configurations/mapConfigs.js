import ol from 'openlayers'

export const MapConfig = {
  center: [500000, 400000],
  defaultZoomLevel: 3,
  minZoom: 3,
  maxZoom: 15,
  countryBoundaryDataSource: 'https://openlayers.org/en/v4.4.2/examples/data/geojson/countries.geojson',
  countryHighlightedStyle: {
    stroke: new ol.style.Stroke({
      color: '#f00',
      width: 1
    }),
    fill: new ol.style.Fill({
      color: 'rgba(255,0,0,0.1)'
    }),
    text: new ol.style.Text({
      font: '12px Calibri,sans-serif',
      fill: new ol.style.Fill({
        color: '#000'
      }),
      stroke: new ol.style.Stroke({
        color: '#f00',
        width: 3
      })
    })
  },
  countryBoundaryStyle: {
    fill: new ol.style.Fill({
      color: 'rgba(255, 255, 255, 0.6)'
    }),
    stroke: new ol.style.Stroke({
      color: '#319FD3',
      width: 1
    }),
    text: new ol.style.Text({
      font: '12px Calibri,sans-serif',
      fill: new ol.style.Fill({
        color: '#000'
      }),
      stroke: new ol.style.Stroke({
        color: '#fff',
        width: 3
      })
    })
  }
};