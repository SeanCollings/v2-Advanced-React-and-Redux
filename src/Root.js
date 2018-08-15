// Create provider tag with redux store and on the fly
// can swap out component that is placed inside the provider tag
import React from 'react';
import { Provider } from 'react-redux';
import reduxPromise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';

import reducers from 'reducers';

// make initialState = {} if no initial state
export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(reduxPromise)
  );

  return <Provider store={store}>{children}</Provider>;
};
