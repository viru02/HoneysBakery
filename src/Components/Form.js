import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comments:'',
         topic:'select'
      }
    }

    handleUsernameChange = (event) =>{
        this.setState({
            username: event.target.value
        })
    }

    handleCommentsChange = (event) =>{
        this.setState({
           comments: event.target.value
        })
    }

    handleTopicChange = (event) =>{
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = (event) =>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }
    
  render() {
    const {username, comments, topic}=this.state  //dstructuring
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
            <label>Username</label>
            <input 
                type='text'
                // value={this.state.username}
                value={username}
                onChange={this.handleUsernameChange}
             />
        </div>
        <div>
        <label>Comment</label>
        <textarea 
            value={comments} 
            onChange={this.handleCommentsChange}></textarea>
        </div>
        <div>
            <label>Topic</label>
            <select value={topic} onChange={this.handleTopicChange}>
                <option value='select'>Select</option>
                <option value="react">React</option>
                <option value="angular">Angular</option>
                <option value="python">Python</option>
            </select>
        </div>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default Form
