import React, { Component } from 'react'

class UpdatingTime extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        time: new Date().toLocaleTimeString()
      }
    }
    componentDidMount(){
      setInterval(()=>{
        this.setState({time: new Date().toLocaleTimeString()})
      }, 1000)
    }
  render() {
    return (
      <div>This Time is: {this.state.time}</div>
    )
  }
}

export default UpdatingTime