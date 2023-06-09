import React, { Component } from 'react'

class LifecycleU extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name: 'Varun'
      }
      console.log('LifecycleU constructor')
    }

    static getDerivedStateFromProps(props, state) { // Rarely Used
        console.log('LifecycleU getDerivedStateFromProps')
        return null
    }

    shouldComponentUpdate(){
        console.log('LifecycleU shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifecycleU getSnapshotBeforeUpdate')
    }

    componentDidUpdate(){
        console.log('LifecycleU componentDidMount')
    }
    
  render() {
    console.log('LifecycleU render')
    return (
      <div>
        LifecycleU
      </div>
    )
  }
}

export default LifecycleU
