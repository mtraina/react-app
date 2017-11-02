import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render(){
    return (
      <Buttons>
        <button value="A">A</button>
        <button value="B">B</button>
        <button value="C">C</button>
      </Buttons>
    )
  }
}

class Buttons extends React.Component {
  constructor(){
    super();
    this.state = {selected: 'None'}
  }
  selectItem(selected){
    this.setState(selected)
  }
  render(){
    let items = this.props.children;
    return (
      <div>
        <h2>You have selected: {this.state.selected}</h2>
        {items}
      </div>
    )
  }
}

export default App;