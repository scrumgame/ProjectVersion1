import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'
import { OverlayTrigger } from 'react-bootstrap'

export default class Modals extends Component {
  constructor() {
    super();
  }

  _renderModalContent() {
    switch (this.props.showModal.type) {
      case 'ReleasePlan':
        return <h1>release</h1>
        break;
      case 'Rules':
        return <h1>rules</h1>
        break;
      case 'Highscore':
        return <h1>high</h1>
        break;
      default:
        break;
    }
  }

  render(){
    return(
      <div>
        <Modal show={this.props.showModal.open} onHide={this.props._closeModal}>
          <Modal.Header>
            <Modal.Title>
              {this.props.showModal.type}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this._renderModalContent()}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props._closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}
