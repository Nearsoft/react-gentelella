export default function (React, Row, Col, XPanel, PageTitle) {

  class FormButtons extends React.Component {
    render() {
      return (
        <section>

          <PageTitle title="Form Buttons" showSearch={ true }/>

          <Row>

            <Col xs={ 12 } md={ 6 }>

              <Row>

                <Col xs={ 12 }>
                  <XPanel>
                    <XPanel.Title title="Default Buttons">
                    </XPanel.Title>
                    <XPanel.Content>
                      <span>tba...</span>
                    </XPanel.Content>
                  </XPanel>
                </Col>

                <Col xs={ 12 }>
                  <XPanel>
                    <XPanel.Title title="Rounded Button">
                    </XPanel.Title>
                    <XPanel.Content>
                      <span>tba...</span>
                    </XPanel.Content>
                  </XPanel>
                </Col>

                <Col xs={ 12 }>
                  <XPanel>
                    <XPanel.Title title="Button Dropdown">
                    </XPanel.Title>
                    <XPanel.Content>
                      <span>tba...</span>
                    </XPanel.Content>
                  </XPanel>
                </Col>

                <Col xs={ 12 }>
                  <XPanel>
                    <XPanel.Title title="Split Button Dropdown">
                    </XPanel.Title>
                    <XPanel.Content>
                      <span>tba...</span>
                    </XPanel.Content>
                  </XPanel>
                </Col>

                <Col xs={ 12 }>
                  <XPanel>
                    <XPanel.Title title="Button App Design">
                    </XPanel.Title>
                    <XPanel.Content>
                      <span>tba...</span>
                    </XPanel.Content>
                  </XPanel>
                </Col>

              </Row>

            </Col>

            <Col xs={ 12 } md={ 6 }>

              <Row>

                <Col xs={ 12 }>
                  <XPanel>
                    <XPanel.Title title="Button Sizes">
                    </XPanel.Title>
                    <XPanel.Content>
                      <div style={ { height: '480px' } }>tba...</div>
                    </XPanel.Content>
                  </XPanel>
                </Col>
              </Row>

            </Col>


          </Row>

        </section>
      );
    }
  }

  return FormButtons;

};
