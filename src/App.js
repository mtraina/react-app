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

  componentWillMount(){
    console.log('component will mount')
  }

  componentDidMount(){
    console.log('component did mount')
  }

  render(){
    console.log('render')
    return (
      <button onClick={this.update}>{this.state.val}</button>
    )
  }
}

export default App