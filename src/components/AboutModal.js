import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal } from 'react-bootstrap'

class AboutModal extends Component {

  static propTypes = {
    show: PropTypes.bool.isRequired,
    onHide: PropTypes.func.isRequired
  };

  render() {
    return (
        <Modal show={this.props.show} onHide={this.props.onHide} aria-labelledby="contained-modal-title-sm">
          <Modal.Header closeButton>
            <Modal.Title>About&nbsp;<i className="fa fa-info" /></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
            Leo is awesome!!
            a popup will show up to display the country that was selected if found. From the popup, you can bring
            up additional information (flag, wiki, coordinates) on the country by clicking on the country name in the popup.
            From the control panel, you can also toggle country boundaries. If the boundaries are visible, you will be able
            to highlight a country on mouse over.
            <br/><br/>
            Note: This application is calling http://ws.geonames.org/ to get country names from coordinates using their demo
            account. There is a daily limit associated with the web service based on IP.
            </p>
          </Modal.Body>
        </Modal>
    )
  }
}

export default AboutModal;