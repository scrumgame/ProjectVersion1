import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import { FormGroup } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'

export default class RetrospectiveInput extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <form>
        <FormGroup controlId="formControlsTextarea" validationState={this.props._getRetrospectiveInputState()}>
          <FormControl
            componentClass="textarea"
            placeholder="It's time to reflect over your sprint"
            onChange={this.props._retrospectiveInputState}/>
        </FormGroup>
      </form>
    );
  }
}
