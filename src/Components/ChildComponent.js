import React from 'react'

function ChildComponent() {
  return (
    <div>
        <button className='btn' onClick={this.props.greetHandler}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent
