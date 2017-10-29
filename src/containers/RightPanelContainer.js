import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { toggleRightPanel } from '../actions'
import RightPanel from '../components/RightPanel'

class RightPanelContainer extends Component {

  static propTypes = {
    countryData: PropTypes.object.isRequired,
    coordinates: PropTypes.array.isRequired,
    isRightPanelVisible: PropTypes.bool.isRequired,
    toggleRightPanelDisplay: PropTypes.func.isRequired
  };

  render() {
    return (
      <RightPanel
          countryData={this.props.countryData}
          coordinates={this.props.coordinates}
          show={this.props.isRightPanelVisible}
          onHide={this.props.toggleRightPanelDisplay}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  isRightPanelVisible: state.popoutPanel.isRightPanelVisible,
  countryData: state.mapFeature.selectedCountryData,
  coordinates: state.mapFeature.selectedCoordinates
});

const mapDispatchToProps = (dispatch) => ({
  toggleRightPanelDisplay: () => {
    dispatch(toggleRightPanel())
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RightPanelContainer)
