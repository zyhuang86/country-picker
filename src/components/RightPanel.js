import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal, Label } from 'react-bootstrap'
import '../../node_modules/world-flags-sprite/stylesheets/flags32.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../styles/App.css'

const WIKI_URL_ROOT = "https://en.m.wikipedia.org/wiki/";
class RightPanel extends Component {

  static propTypes = {
    countryData: PropTypes.object.isRequired,
    coordinates: PropTypes.array.isRequired,
    show: PropTypes.bool.isRequired,
    onHide: PropTypes.func.isRequired
  };

  render() {
    let countryName = "";
    let countryCode = "";
    let wikiLink = "";
    let coordinates = [];
    if (this.props.countryData !== {}) {
      countryName = this.props.countryData.countryName;
      countryCode = this.props.countryData.countryCode ?
          this.props.countryData.countryCode.toLowerCase() : "";
      coordinates = this.props.coordinates;
      wikiLink = WIKI_URL_ROOT + countryName;
    }

    return (
      <Modal show={ this.props.show } onHide={ this.props.onHide } aria-labelledby="contained-modal-title-sm" backdrop={false} className="modal-override right fade">
        <Modal.Header closeButton>
          <Modal.Title className="modal-right-panel-title-center">
            <ul className="f32">
              <li className={ "flag " + countryCode } />
              &nbsp;&nbsp;&nbsp; { countryName } &nbsp;&nbsp;&nbsp;
              <li className={ "flag " + countryCode } />
            </ul>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-right-panel-full-height">
          <iframe src={ wikiLink } className="iframe-body" title="wiki_page"/>
          <Label className="modal-right-panel-title-coordinates">Coordinates:&nbsp;&nbsp; ({coordinates[0].toFixed(2)},{coordinates[1].toFixed(2)})</Label>
        </Modal.Body>
      </Modal>
    )
  }
}

export default RightPanel;