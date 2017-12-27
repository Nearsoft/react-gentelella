import React from 'react';

class EmptyComponent extends React.Component {
  render() {
    return <div>blank</div>;
  }
}

class XPanelMock extends React.Component {
  render() {
    return <div>blank</div>;
  }
}

XPanelMock.Title = EmptyComponent;
XPanelMock.Content = EmptyComponent;

export { EmptyComponent, XPanelMock };
