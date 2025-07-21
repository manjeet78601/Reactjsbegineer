import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

 const reactElement= React.createElement(
  'a',
  {href: 'https://google.com',target: '_blank'},
  'click me to visit google'
)

reactElement



