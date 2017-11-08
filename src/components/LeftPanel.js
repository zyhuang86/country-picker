import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal, Checkbox } from 'react-bootstrap'

class LeftPanel extends Component {

  static propTypes = {
    show: PropTypes.bool.isRequired,
    onHide: PropTypes.func.isRequired,
    isCountryBoundaryVisible: PropTypes.bool.isRequired,
    toggleCountryBoundary: PropTypes.func.isRequired
  };

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.onHide} aria-labelledby="contained-modal-title-sm" backdrop={false} className="modal-override left fade">
        <Modal.Header closeButton>
          <Modal.Title>Control</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Checkbox checked={this.props.isCountryBoundaryVisible}
                    onChange={(event) => this.props.toggleCountryBoundary(event.target.checked)}>
            Country Boundary
          </Checkbox>
        </Modal.Body>
      </Modal>
    )
  }
}

export default LeftPanel;