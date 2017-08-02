import React from 'react';

// stateful
class App extends React.Component {
  render(){
    return (
      <div>
        <h1>{this.props.txt}</h1>
      </div>
      )
  }
}

// stateless
//const App = () => <h1>Hi</h1>

export default App