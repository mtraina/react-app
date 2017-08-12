import React from 'react';

class App extends React.Component {
  render(){
    return <Title text="This is my text"/>
  }
}

const Title = (props) => <h1>Title: {props.text}</h1>

Title.propTypes = {
  text(props, propName, component){
    if(!(propName in props)){
      return new Error(`missing ${propName}`)
    }
    if(props[propName].length < 6){
      return new Error(`the property ${propName} is too short`)
    }
  }
}

export default App