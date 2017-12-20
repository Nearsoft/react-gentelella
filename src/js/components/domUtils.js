// the hacky part of this nice library :(
const body = window.document.body

// and cross browser when? it's almost 2018 dude!
function bodyNextClick(cb, isOn = true) {
  const self = { on, off, target }
  let status = false
  let current_target = null

  return isOn ? on() : self

  function on () {
    if (!status) {
      window.document.body.addEventListener('click', handler)
      status = true
    }

    return self
  }

  function off () {
    if (status) {
      body.removeEventListener('click', handler)
      status = false
    }

    return self
  }

  function target(element) {
    current_target = element
    return element ? on() : off()
  }

  function handler (e) {
    console.log(e.path.indexOf(current_target))
    // TODO: unless ul.dropdown-menu is on the path
    // which means that user clicked on an item of dropdown.
    if (e.path.indexOf(current_target) === -1) {
      cb(e, off)
    }
  }
}

export {
  bodyNextClick
} 