import React from 'react';
import ReactDOM from 'react-dom';

import Root from 'Root';
import App from 'components/App';

// const initialState = {
//   comments: ['Comment 1', 'Comment 2']
// };

ReactDOM.render(
  // <Root initialState={initialState}>
  <Root>
    <App />
  </Root>,
  document.querySelector('#root')
);
