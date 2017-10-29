import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(){
    super();
    this.state = {items: []}
  }

  componentWillMount(){
    fetch('http://localhost:3001/results')
      .then(response => response.json())
      //.then(r => console.log(r))
      .then(({results: items}) => this.setState({items}))
  }

  render(){
    let items = this.state.items
    return (
      <div>
        {items.map(item => <h4 key={item.name}>{item.name}</h4>)}
      </div>
    )
  }
}

App.defaultProps = {val: 0}

export default App;