import React, { Component } from 'react';
import './App.css';
import InputValidator from './InputValidator/InputValidator';
import RemoveChar from './RemoveChar/RemoveChar';

class App extends Component {
  state = {
    userInput:''    
  }
  userInputChangeHandler = (event)=>{
    this.setState({userInput:event.target.value});
  }

  deleteCharHandler = ( index ) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText});
  }

  render() {
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <RemoveChar 
        character={ch} 
        key={index}
        clicked={() => this.deleteCharHandler(index)} />;
    });

    return (
      <div className="App">
        <input 
          type="text"
          value={this.state.userInput}
          onChange={this.userInputChangeHandler}> 
        </input>
        <p>{this.state.userInput}</p>
        <InputValidator inputLen={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;
