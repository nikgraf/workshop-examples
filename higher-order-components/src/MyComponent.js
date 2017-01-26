import React from 'react';
import withProps from './withProps'

const MyComponent = (props) => {
  console.log('MyComponent props:', props)
  return (
    <div>My Component</div>
  )
}

export default withProps(
  { active: true, name: 'Franz' },
  MyComponent
)
