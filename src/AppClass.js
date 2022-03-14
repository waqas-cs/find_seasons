import React, { Component } from 'react'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'
class AppClass extends Component {
    constructor(props) {
      super(props)
      // This is the only time we directly assign value to this.state
      this.state = {
         location: null,
         errorMessage: ''
      }
    }
    // the below line is Equavelent to constructor because babel create constructor for state itself
    // state = {location:null, errorMessage: ''}
    
    componentDidMount(){
      window.navigator.geolocation.getCurrentPosition(
        position => {
            console.log(position)
            // To update state we call this.setState()
            this.setState({location: position.coords.latitude})
        },
        err => {
          this.setState({errorMessage: err.message})
          console.log(err)
        }
      )
    }
    renderContent(){
      if(this.state.location && !this.state.errorMessage){
        return <SeasonDisplay latitude={this.state.location}/>
      }
      if(!this.state.location && this.state.errorMessage){
        return <div>Error: {this.state.errorMessage}</div>
      }
      // return <Spinner message="Please accept location request"/>
      return <Spinner/>
    }

  // render is must be called in every class base component
  render() {
    return <div className='border red'>{this.renderContent()}</div>
  }
}

export default AppClass