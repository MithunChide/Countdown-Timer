import './App.css';
import React, { Component } from 'react'
 import tachyons from 'tachyons';
class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      current: new Date().toUTCString(),
      currentdate: new Date().toLocaleDateString(),
      updatedDate: '0 day'
    }
  }

  getData = e => {
    this.setState({ input: e.target.value })
  }
  updateDate = () => {
    if (this.state.updatedDate === null || this.state.input === '') {

      alert("enter valid date")
    }
    else {
      
      let x = setInterval(() => {
        
        let diff = new Date(this.state.input) - new Date();
        let days = Math.floor(diff / (1000 * 60 * 60 * 24));
        let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        this.setState({ updatedDate: `${days} D : ${hours} H :${minutes} M : ${seconds} S` });
        if (diff < 0) {
          clearInterval(x);
          this.setState({ updatedDate: "Expire Date/CountDown" })
        }
        
      }, 1000);
   
    }
  }
  
  render() {
    return (
      <div>
        <div className="App">
          <div className="card__layout">
            <h2 className="card__heading">{this.state.current}</h2>
            <h2 className="card__heading">{this.state.updatedDate}</h2>

            <input value={this.state.input} onChange={this.getData} className="card__input" type="date" required className="card__input" /><br />
            <button onClick={this.updateDate} className='card__btn'>Submit</button>
          
          </div>
        </div>

      </div>
    )
  }
}

export default App;
