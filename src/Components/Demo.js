import React, { Component } from 'react';
import './Demo.css'

class Demo extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }
    }

    clickHandler(){
        this.setState({
            message: 'GoodBuy!'
        })
    }
    
  render() {
    return (
      <div>
        <nav className='navigation'>
            <ul className='navbar'>
                <li className='navlist'><link className='navlink' href='#'>Home</link></li>
                <li className='navlist'><link className='navlink' href='#'>About</link></li>
                <li className='navlist'><link className='navlink' href='#'>Gallery</link></li>
                <li className='navlist'><link className='navlink' href='#'>Services</link></li>
                <li className='navlist'><link className='navlink' href='#'>Contact</link></li>
            </ul>
        </nav>
        <div className='container'>
            <div className='txt'>{this.state.message}</div>
            {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
            <button className='btn' onClick={()=>this.clickHandler()}>Click</button>
        </div>
      </div>
    )
  }
}

export default Demo
