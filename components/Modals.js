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
      case 'Releaseplan':
        return <Releaseplan retrospective={this.props.retrospective}
                            releaseplandays={this.props.releaseplandays}
                            releaseplan={this.props.releaseplan}/>
        break;

      case 'Rules':
        return <Rules />
        break;

      case 'Highscore':
        return <Highscore />
        break;

      case 'Retrospective':
        return <Retrospective _validationState={this.props._validationState}
                              _getValidationState={this.props._getValidationState}/>
        break;

      default:
        break;
    }
  }

  _renderModalButton() {
    if (this.props.showModal.type == "Retrospective") {
      return <Button onClick={this.props._closeRetroModal} bsStyle="success" block>Submit</Button>
    } else {
      return <Button onClick={this.props._closeModal} bsStyle="danger" block >Close</Button>
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
            {this._renderModalButton()}
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}
