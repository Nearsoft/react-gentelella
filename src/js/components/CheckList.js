import EventListener from './EventListener'

function CheckList ({items}) {
  const data = items.map(item => ({checked: false, ...item}))

  const checkList = EventListener({
    toggle,
    items: () => data
  })

  const triggerChange = () => checkList.trigger('change')

  return checkList

  function toggle (index) {
    const item = data[index]
    item.checked = !item.checked
    triggerChange()
  }
}

export default CheckList