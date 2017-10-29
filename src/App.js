import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render(){
    return (
      <div>
        <Button>button</Button>
        <hr/>
        <Label>label</Label>
      </div>
    )
  }
}

const Button = props => <h4>{props.children}</h4>

class Label extends React.Component {
  render(){
    return (
      <label>{this.props.children}</label>
    )
  }
}

export default App;