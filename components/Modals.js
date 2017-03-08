import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'
import { OverlayTrigger } from 'react-bootstrap'
import Rules from './Rules'
import Highscore from './Highscore'
import Releaseplan from './Releaseplan'
import Retrospective from './Retrospective'


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

      case 'Retrospective':
        return <Retrospective _closeModal={this.props._closeModal}/>
        break;

      default:
        break;
    }
  }

  render() {
    return(
      <div>
        <Modal show={this.props.showModal.open} onHide={this.props._closeModal} bsSize="large">
          {/* modal header */}
          <Modal.Header>
            {/* modal title */}
            <Modal.Title>
              {this.props.showModal.type}
            </Modal.Title>
          </Modal.Header>
          {/* modal body */}
          <Modal.Body>
            {this._renderModalContent()}
          </Modal.Body>
          {/* modal footer */}
          <Modal.Footer>
            <Button bsStyle="danger" block onClick={this.props._closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}
