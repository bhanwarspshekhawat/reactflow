import './App.css';
import React, { Component } from 'react'
import Contact from './Comonent/Contact';
import Dash from './screen/Dash';
import KEM from './screen/KEM';
import Masters from './screen/Masters';
import Reports from './screen/Reports';
import ZEM from './screen/ZEM';
import Second from './Comonent/second';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedButton: '',



    }
  }
  renderScreen() {
    if (this.state.selectedButton == "Dash") {
      return <Dash />
    } else if (this.state.selectedButton == "KEM") {
      return <KEM />
    }
    else if (this.state.selectedButton == "ZEM") {
      return <ZEM />
    }
    else if (this.state.selectedButton == "Masters") {
      return <Masters />
    }
    else if (this.state.selectedButton == "Reports") {
      return <Reports />
    }
    else {
      return <div />
    }

  }
  render() {
    // console.log("Dash",this.state.selectedButton)
    return (
      <div className="App">
        <header className="App-header">

          <Contact
            onClick={(v) => { this.setState({ selectedButton: v }) }} />
          {this.renderScreen()}


          <br />
          

          <br />
         
          {/* <Second/> */}
        </header>
      </div>

    );
  }
}
export default App;
