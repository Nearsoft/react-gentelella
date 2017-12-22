export default function (React, Row, Col, XPanel, PageTitle) {

  class GeneralForm extends React.Component {
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
