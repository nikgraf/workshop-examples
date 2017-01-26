import React from 'react';

const withProps = (staticProps, Component) => (props) => (
  <Component {...staticProps} {...props} />
)

// const withProps = (staticProps, Component) => {
//   return (props) => {
//     return <Component {...staticProps} {...props} />
//   }
// }

export default withProps
