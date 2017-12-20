
function EventListener (obj = {}) {
    const listeners = {}
    Object.assign(obj, { on, off, trigger })
    
    return obj

    function on (eventName, cb) {
        (listeners[eventName] || (listeners[eventName] = [])).push(cb)
        return obj
    }

    function off (eventName, cb) {
        const callbacks = (listeners[eventName] || (listeners[eventName] = []))
        for(let i = 0; i < callbacks.length; ) {
            if (cb === callbacks[i]) {
                callbacks.splice(i, 1)
                continue
            }

            i += 1
        }

        return obj
    }

    function trigger (eventName) {
        const callbacks = (listeners[eventName] || (listeners[eventName] = []))
        callbacks.forEach(cb => cb())
        return obj
    }
}

export default EventListener