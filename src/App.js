import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {a: ''};
    this.update = this.update.bind(this);
  }

  update(e){
    this.setState({a: e.target.value});
  }

  render(){
    return (
      <div>
      <input
        type="text"
        onChange={this.update}
      /> {this.state.a}
      <h1>{this.state.currentEvent}</h1>
      </div>
    )
  }
}

export default App