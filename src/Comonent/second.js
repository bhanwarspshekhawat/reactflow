import React, { Component } from 'react';




class second extends Component {


  constructor(props) {
    super(props);
    this.state = {
      selectedButton: '',


    }
  }

  render() {
   
    return (
     
       
        <ul>
          
          <li><a href="#home" onClick={() => {
            this.setState({ selectedButton: 'KEM' })
            this.props.onClick("KEM2")
          }} >Dashbord</a></li>
          <li><a href="#news" onClick={() => {
            this.setState({ selectedButton: 'ZEM' })
            this.props.onClick("ZEM2")
          }}>KEM</a></li>
          <li><a href="#contact" onClick={() => {
            this.setState({ selectedButton: 'Planer' })
            this.props.onClick("Planer")
          }}>ZEM</a></li>
         
         
        </ul>
        
     
    )
  }
}
export default second ;