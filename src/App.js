import React from 'react';

// stateful
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      txt: 'this is the state txt',
      cat: 0
    }
  }
  update(e){
    this.setState({
      txt: e.target.value
    })
  }
  render(){
    return (
      <div>
        <h1>{this.state.txt}</h1>
        <Widget update={this.update.bind(this)}/>
      </div>
    )
  }
}

const Widget = (props) => <input type="text" onChange={props.update}/>

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