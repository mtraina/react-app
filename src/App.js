import React from 'react';

// stateful
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      txt: 'this is the state txt'
    }
  }

  render(){
    let txt = this.props.txt
    return <h1>{this.state.txt}</h1>
  }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt: "this is the default prop"
}

// stateless
//const App = () => <h1>Hi</h1>

export default App