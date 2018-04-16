import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

export default function (React, Row, Col, XPanel, PageTitle, XFormGroup) {

  class GeneralForm extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        firstName: '',
        lastName: '',
        middleName: ''
      };
    }

    onChangeHandler(prop) {
      return event => {
        let newState = {};
        newState[ prop ] = event.target.value;
        this.setState(newState);
      };
    }

    render() {
      return (
        <section>

          <PageTitle title="Form Elements" showSearch={ true }/>

          <Row>

            <Col xs={ 12 }>
              <XPanel>
                <XPanel.Title title="Form Design">
                </XPanel.Title>
                <XPanel.Content>
                  <span>tba...</span>

                  <FormGroup
                    controlId="first-name">
                    <ControlLabel
                      bsClass="control-label col-md-3 col-sm-3 col-xs-12">
                      First Name</ControlLabel>
                    <FormControl
                      type="text"
                      value={ this.state.firstName }
                      onChange={ this.onChangeHandler('firstName') }
                      bsClass="form-control col-md-7 col-xs-12"
                    />
                  </FormGroup>

                  <FormGroup
                    controlId="last-name">
                    <ControlLabel>Last Name</ControlLabel>
                    <FormControl
                      type="text"
                      value={ this.state.lastName }
                      onChange={ this.onChangeHandler('lastName') }
                    />
                  </FormGroup>

                  <FormGroup
                    controlId="middle-name">
                    <ControlLabel>Middle Name / Initial</ControlLabel>
                    <FormControl
                      type="text"
                      value={ this.state.middleName }
                      onChange={ this.onChangeHandler('middleName') }
                    />
                  </FormGroup>

                </XPanel.Content>
              </XPanel>
            </Col>

          </Row>

          <Row>

            <Col xs={ 12 } md={ 6 }>

              <Row>
                <Col xs={ 12 }>
                  <XPanel>
                    <XPanel.Title title="Form Design">
                    </XPanel.Title>
                    <XPanel.Content>
                      <span>tba...</span>

                      <XFormGroup
                        id="other"
                      />

                    </XPanel.Content>
                  </XPanel>
                </Col>

                <Col xs={ 12 }>
                  <XPanel>
                    <XPanel.Title title="Star Rating">
                    </XPanel.Title>
                    <XPanel.Content>
                      <span>tba...</span>
                    </XPanel.Content>
                  </XPanel>
                </Col>
              </Row>

            </Col>

            <Col xs={ 12 } md={ 6 }>
              <XPanel>
                <XPanel.Title title="Form Basic Elements">
                </XPanel.Title>
                <XPanel.Content>
                  <div style={ { height: '150px' } }>tba...</div>
                </XPanel.Content>
              </XPanel>
            </Col>

          </Row>
        </section>
      );
    }
  }

  return GeneralForm;
};
