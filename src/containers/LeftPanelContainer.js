import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { toggleLeftPanel, toggleCountryBoundary } from '../actions'
import LeftPanel from '../components/LeftPanel'

class LeftPanelContainer extends Component {

  static propTypes = {
    isLeftPanelVisible: PropTypes.bool.isRequired,
    isCountryBoundaryVisible: PropTypes.bool.isRequired,
    toggleLeftPanelDisplay: PropTypes.func.isRequired,
    toggleCountryBoundary: PropTypes.func.isRequired
  };

  render() {
    return (
      <LeftPanel
        show={this.props.isLeftPanelVisible}
        onHide={this.props.toggleLeftPanelDisplay}
        isLeftPanelVisible={this.props.isLeftPanelVisible}
        isCountryBoundaryVisible={this.props.isCountryBoundaryVisible}
        toggleCountryBoundary={this.props.toggleCountryBoundary}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  isLeftPanelVisible: state.popoutPanel.isLeftPanelVisible,
  isCountryBoundaryVisible: state.mapFeature.isCountryBoundaryVisible
});

const mapDispatchToProps = (dispatch) => ({
  toggleLeftPanelDisplay: () => {
    dispatch(toggleLeftPanel())
  },
  toggleCountryBoundary: (isBoundaryVisible) => {
    dispatch(toggleCountryBoundary(isBoundaryVisible))
  }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LeftPanelContainer)
