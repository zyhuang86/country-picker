import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { toggleAboutDisplay } from '../actions'
import AboutModal from '../components/AboutModal'

class AboutModalContainer extends Component {

  static propTypes = {
    isAboutModalVisible: PropTypes.bool.isRequired,
    toggleAboutDisplay: PropTypes.func.isRequired
  };

  render() {
    return (
      <AboutModal
        show={this.props.isAboutModalVisible}
        onHide={this.props.toggleAboutDisplay}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  isAboutModalVisible: state.popoutPanel.isAboutModalVisible
});

const mapDispatchToProps = (dispatch) => ({
  toggleAboutDisplay: () => {
    dispatch(toggleAboutDisplay())
  }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AboutModalContainer)
