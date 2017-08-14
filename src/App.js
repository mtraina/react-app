import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {val: 0};
    this.update = this.update.bind(this);
  }

  update(e){
    this.setState({val: this.state.val + 1});
  }

  render(){
    console.log('render')
    return (
      <button onClick={this.update}>{this.state.val}</button>
    )
  }
}

class Input extends React.Component {
  render(){
    return <div><input ref="input" type="text" onChange={this.props.update}/></div>
  }
}

export default App