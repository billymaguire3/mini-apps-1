import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/App.jsx';

const App = () => {
  return(
    <div>
      <h1>Hello from App</h1>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);