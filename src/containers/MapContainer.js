import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { toggleRightPanel, receiveCoordinates } from '../actions'
import { fetchCountryData } from '../middleware/api'
import Map from '../components/Map'

class MapContainer extends Component {

  static propTypes = {
    selectedCountryData: PropTypes.object,
    countryDataRetrievalFailed: PropTypes.bool.isRequired,
    isCountryBoundaryVisible: PropTypes.bool.isRequired,
    fetchCountryData: PropTypes.func.isRequired,
    showCountryCard: PropTypes.func.isRequired,
  };

  render() {
    return (
      <Map
          countryDataRetrievalFailed={this.props.countryDataRetrievalFailed}
          selectedCountryData={this.props.selectedCountryData}
          fetchCountryData={this.props.fetchCountryData}
          showCountryCard={this.props.showCountryCard}
          isCountryBoundaryVisible={this.props.isCountryBoundaryVisible}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  selectedCountryData: state.mapFeature.selectedCountryData,
  countryDataRetrievalFailed: state.mapFeature.countryDataRetrievalFailed,
  isCountryBoundaryVisible: state.mapFeature.isCountryBoundaryVisible
});

const mapDispatchToProps = (dispatch) => ({
  fetchCountryData: (coordinates) => {
    dispatch(receiveCoordinates(coordinates));
    dispatch(fetchCountryData(coordinates));
  },
  showCountryCard: () => {
    dispatch(toggleRightPanel())
  }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MapContainer)
