import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'
import { OverlayTrigger } from 'react-bootstrap'
import Rules from './Rules'
import Highscore from './Highscore'
import Releaseplan from './Releaseplan'
import RetrospectiveInput from './RetrospectiveInput'
import Retrospective from './Retrospective'
import ActionCard from './ActionCard'
import './css/Modals.css'

export default class Modals extends Component {
  constructor() {
    super()
  }

  _renderModalContent() {
    switch (this.props.showModal.type) {
      case 'Releaseplan':
        return [<Releaseplan
                  key={1}
                  moneyearned={this.props.moneyearned}
                  releaseplandays={this.props.releaseplandays}
                  releaseplan={this.props.releaseplan}/>,
               <Retrospective
                 key={2}
                 retrospective={this.props.retrospective}
                 />
               ]
        break

      case 'Rules':
        return <Rules />
        break

      case 'Highscore':
        return <Highscore
                _getTopTenHS={this.props._getTopTenHS}
                highscore={this.props.highscore}
                highscorecurrentteam={this.props.highscorecurrentteam}/>
        break

      case 'Retrospective':
        return <RetrospectiveInput
                _retrospectiveInputState={this.props._retrospectiveInputState}
                _getRetrospectiveInputState={this.props._getRetrospectiveInputState}/>
        break
      case 'Action':
        return <ActionCard
                actioncard={this.props.actioncard}
                _actionCardDieRoll={this.props._actionCardDieRoll}/>

        break
      default:
        break
    }
  }

  _renderModalButton() {
    if (this.props.showModal.type == "Retrospective") {
      return <Button onClick={this.props._closeRetroModal} bsStyle="success" block>Submit</Button>
    } else {
      return <Button onClick={this.props._closeModal} bsStyle="danger" block >Close</Button>
    }
  }

  _preventRetroClose() {
    if (this.props.showModal.type != "Retrospective") {
      return this.props._closeModal
    }
  }

  render() {
    return(
      <div>
        <Modal show={this.props.showModal.open} onHide={this._preventRetroClose()} bsSize="large">
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
