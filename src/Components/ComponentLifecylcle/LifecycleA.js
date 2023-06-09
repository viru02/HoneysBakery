import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: 'Varun'
    }
    console.log('LifecycleA constructor')
  }

  static getDerivedStateFromProps(props, state) { // Rarely Used
    console.log('LifecycleA getDerivedStateFromProps')
    return null
  }
  
  componentDidMount(){
    console.log('LifecycleA componentDidMount')
  }

  shouldComponentUpdate(){
    console.log('LifecycleA shouldComponentUpdate')
    return true
}

getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('LifecycleA getSnapshotBeforeUpdate')
    return null
}

componentDidUpdate(){
    console.log('LifecycleA componentDidMount')
}

changeState = () => {
  this.setState({
    name: 'Codevolution'
  })
}
  
  render() {
    console.log('LifecycleA render')
    return (
      <div>
        <div>LifecycleA</div>
        <button onClick={this.changeState}>Change State</button>
        <LifecycleB />
      </div>
    )
  }
}

export default LifecycleA
