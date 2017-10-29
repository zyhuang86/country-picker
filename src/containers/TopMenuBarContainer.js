import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { toggleLeftPanel, toggleRightPanel, toggleAboutDisplay } from '../actions'
import TopMenuBar from '../components/TopMenuBar'

class TopMenuBarContainer extends Component {

  static propTypes = {
    toggleLeftPanelDisplay: PropTypes.func.isRequired,
    toggleRightPanelDisplay: PropTypes.func.isRequired,
    toggleAboutDisplay: PropTypes.func.isRequired
  };

  render() {
    return (
      <TopMenuBar
          toggleLeftPanelDisplay={this.props.toggleLeftPanelDisplay}
          toggleRightPanelDisplay={this.props.toggleRightPanelDisplay}
          toggleAboutDisplay={this.props.toggleAboutDisplay}
      />
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  toggleRightPanelDisplay: () => {
    dispatch(toggleRightPanel())
  },
  toggleLeftPanelDisplay: () => {
    dispatch(toggleLeftPanel())
  },
  toggleAboutDisplay: () => {
    dispatch(toggleAboutDisplay())
  }
});

export default connect(
  null,
  mapDispatchToProps
)(TopMenuBarContainer)
