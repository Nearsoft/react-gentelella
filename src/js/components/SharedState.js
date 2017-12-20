function SharedState (component, more) {
  return {
    setState: state => component.setState(state),
    getState: () => component.state,
    ...more
  }
}

export default SharedState