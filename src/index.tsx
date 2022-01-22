import { StrictMode } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

// console.log(process);
// console.log(process.env);
// console.log(process.env.time);
// console.log(process.env.DEVELOPMENT);
// console.log(process.env.PRODUCTION);
// console.log(process.env.URL_M);

render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
  document.querySelector('#root'),
);
