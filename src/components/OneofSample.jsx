import React from 'react'

const OneofSample = (props) => {
    const{color}=props
  return (
    <div style={{backgroundColor:color}}>
        <p>This component has a background color of{color}.</p>
    </div>
  )
}
OneofSample.propTypes={
    color: PropTypes.oneof(["red","green","blue"]).isRequired,
}

export default OneofSample
