import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(){
    super();
    this.state = {items: []}
  }

  componentWillMount(){
    fetch('https://swapi.co/api/people/?format=json', {mode: 'no-cors'})
      .then(response => response.json)
      .then(({results: items}) => this.setState({items}))
  }

  render(){
    let items = this.state.items
    return (
      <div>
        {items.map(item => <h4>{item.name}</h4>)}
      </div>
    )
  }
}

App.defaultProps = {val: 0}

export default App;