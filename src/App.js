import React from 'react';

// stateful
class App extends React.Component {
  render(){
    let txt = this.props.txt
    return <h1>{txt}</h1>
  }
}

// stateless
//const App = () => <h1>Hi</h1>

export default App