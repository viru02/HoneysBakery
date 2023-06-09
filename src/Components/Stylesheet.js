import React from 'react';
import './myCss.css';

const para={
    fontSize: '70px',
    color: 'blue',
    backgroundColor: 'orange'
}

function Stylesheet(props) {
    let classname=props.primary? 'primary':''
  return (
    <div>
        <h1 className='error'>Error</h1>
        {/* <h1 className={styles.success}>Success</h1> */}
      <h1 className={`${classname} font-xl`}>Stylesheet</h1>
      <p style={para}>
        Here we use the inline css...
      </p>
    </div>
  )
}

export default Stylesheet
