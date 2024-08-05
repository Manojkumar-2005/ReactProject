import React from 'react'

const FunctionSample = (props) => {
    const{handleClick}=props
  return (
    <div>
      <p>This is function component.</p>
      <button onclick={handleClick}>Click Me!</button>
    </div>
  )
}
FunctionSample.propTypes={
    handleClick:PropTypes.func.isrequired,
}

export default FunctionSample
