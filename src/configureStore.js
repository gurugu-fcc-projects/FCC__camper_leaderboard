import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import reducer from './reducers';

export const configureStore = () => {
  const middlewares = [];

  if (process.env.MODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }
  console.log(reducer);
  return createStore(
    reducer,
    applyMiddleware(...middlewares)
  );
};
