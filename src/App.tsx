import React from 'react';
import logo from './logo.svg';
import './App.scss';

const paths = [
  './assets/babel.svg',
  './assets/cra.svg',
  './assets/css.svg',
  './assets/eslint.svg',
  './assets/html.svg',
  './assets/js.svg',
  './assets/mu.svg',
  './assets/prettier.svg',
  './assets/react-bootstrap.svg',
  './assets/react-router.svg',
  './assets/react.svg',
  './assets/redux.svg',
  './assets/ts.svg',
  './assets/webpack.svg',
  './assets/sass.svg',
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
