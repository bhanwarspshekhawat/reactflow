import React, { Component } from 'react';




class Dash extends Component {


  constructor(props) {
    super(props);
    this.state = {
      selectedButton: '',


    }
  }

  render() {
    // console.log ("Dashbord",this.props)

    return (
      <div className="con">
        <div className="top">
          <h2>DAILMLER</h2>
          <p>DICV-Change Managment Tool</p></div>
        <ul>
          {/* <li> <h2>DAILMLER</h2> </li> */}
          <li><a href="#home" onClick={() => {
            this.setState({ selectedButton: 'Dashbord' })
            this.props.onClick("Dash")
          }} >Dashbord</a></li>
          <li><a href="#news" onClick={() => {
            this.setState({ selectedButton: 'KEM' })
            this.props.onClick("KEM")
          }}>KEM</a></li>
          <li><a href="#contact" onClick={() => {
            this.setState({ selectedButton: 'ZEM' })
            this.props.onClick("ZEM")
          }}>ZEM</a></li>
          <li><a href="#about" onClick={() => {
            this.setState({ selectedButton: 'Masters' })
            this.props.onClick("Masters")
          }}>Masters</a></li>
          <li><a href="#about" onClick={() => {
            this.setState({ selectedButton: 'Reports' })
            this.props.onClick("Reports")
          }}>Reports</a></li>
          <div className="fa1">
            <li><i class="fa fa-bell-o fa_custom fa-2x gray-color"></i></li>
            <div className="c">
              <li>kjbv</li>
              <li>fvd</li></div>
            <li><i class="fa fa-user-circle-o fa_custom fa-2x gray-color"></i></li>
            <div className=" gray-color">
              <li>Admin</li></div></div>
        </ul>
        
      </div>
    )
  }
}
export default Dash;