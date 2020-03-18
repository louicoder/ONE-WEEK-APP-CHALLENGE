import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import sagaMiddleware from 'redux-saga';
import App from '../../App';
import RootSaga from './Sagas';
import { logger } from 'redux-logger';

const createStoreFunction = () => {
  // compose
  let logger = logger();
  let _sagaMiddleware = sagaMiddleware();
  const middleware = composeWithDevTools({ sagaMiddleware, logger });

  const store = createStore(RootReducer, middleware);

  if (RootSaga) _sagaMiddleware.run();
  // return store;

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
