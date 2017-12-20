import React from 'react'

const childrenWithProps = (children, props) => React.Children.map(children, c => React.cloneElement(c, props))

export default childrenWithProps
