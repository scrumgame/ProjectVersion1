import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import { FormGroup } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import './css/Retrospective.css'

export default class Retrospective extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <form>
        <FormGroup controlId="formControlsTextarea">
          <FormControl componentClass="textarea" placeholder="It's time to reflect over your sprint"/>
        </FormGroup>
        <Button onClick={this.props._closeModal} bsStyle="success" block>
          Submit
        </Button>
      </form>
    );
  }
}
