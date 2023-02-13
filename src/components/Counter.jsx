import React from 'react';
import { Link } from 'react-router-dom';

export class Counter extends React.Component {
  constructor() {
    super();
    this.state = { counter: 0 };
  }

  componentDidMount() {
    console.log('este es el componente DidMount');
  }

  componentWillUnmount() {
    console.log('este es el componente willUnmount');
  }

  componentDidUpdate() {
    console.log('este es el componente DidUpdate');
  }

  render() {
    return (
      <div>
        <p className='text-white'>{this.state.counter}</p>
        <button
          className='text-white'
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Increase
        </button>
        <Link className='text-white' to='/'>
          Home
        </Link>
      </div>
    );
  }
}
