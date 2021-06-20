import React, { Component } from 'react';

type StateType = {
  counter: number
};

// sau React.Component => phía trước là props, phía sau là state => k còn warning
export default class PlayGround extends React.Component<any, StateType> {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };

    console.log('constructor');
  }

  UNSAFE_componentWillMount() {
    console.log('UNSAFE_componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  UNSAFE_componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  componentWillReceiveProps() {
    
  }

  render() {
    return (
      <div className="container">
        <h1>Play ground - Life Cycle - React Hooks</h1>
        <button onClick={() => {
          const { counter } = this.state;

          this.setState({ counter: counter + 1 });
        }}>Counter Add</button>
      </div>
    )
  }
}