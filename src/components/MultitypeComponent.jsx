import React from 'react'

const MultitypeComponent = (props) => {
  return (
    <div>
        <p>The Value is: {props.value}</p>
    </div>
  )
}
MultitypeComponent.propTypes={
    value: PropTypes.oneofType([PropTypes.string,PropTypes.number,PropTypes.bool]).isRequired,
}

export default MultitypeComponent
