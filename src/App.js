import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render(){
    return (
      <Parent>
        <div className="childA"></div>
        <div className="childB"></div>
      </Parent>
    )
  }
}

class Parent extends React.Component {
  render(){
    let items = this.props.children.map(child => child)
    console.log(items)
    return null
  }
}

export default App;