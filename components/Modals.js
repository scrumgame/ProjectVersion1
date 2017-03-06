import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'
import { OverlayTrigger } from 'react-bootstrap'
import Rules from './Rules'
import Highscore from './Highscore'
import Releaseplan from './Releaseplan'


export default class Modals extends Component {
  constructor() {
    super();
  }

  _renderModalContent() {
    switch (this.props.showModal.type) {
      case 'ReleasePlan':
        return <Releaseplan />
        break;
      case 'Rules':
        return <Rules />
        break;
      case 'Highscore':
        return <Highscore />
        break;
      default:
        break;
    }
  }

  render() {
    return(
      <div>
        <Modal show={this.props.showModal.open} onHide={this.props._closeModal} bsSize="large">
          <Modal.Header>
            <Modal.Title>
              {this.props.showModal.type}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this._renderModalContent()}
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="danger" block onClick={this.props._closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}
