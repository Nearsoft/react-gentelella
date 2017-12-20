
function InputController(component, field, value='') {
  init()

  return () => ({
    onChange,
    value: component.state.form[field]
  })

  function init () {
    const state = component.state || {}
    const form = state.form || { }

    form[field] = value
    state.form = form
    component.state = state
  }

  function onChange (e) {
    let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    component.setState(prevState => {
      const form = { ...prevState.form }
      form[field] = value
      return { form }
    });
  }
}

export default InputController