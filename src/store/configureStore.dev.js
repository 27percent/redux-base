import { createStore, applyMiddleware, compose } from 'redux'
// import createSagaMiddleware, { END } from 'redux-saga'
import { createLogger } from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'
// import api from '../middleware/api'
import rootReducer from '../reducers'
// import saga from '../sagas'
import { composeWithDevTools } from 'redux-devtools-extension';

const configureStore = (preloadedState, history) => {
  // const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(routerMiddleware(history), createLogger()))
    // composeWithDevTools(applyMiddleware(routerMiddleware(history), sagaMiddleware, api, createLogger()))
  )

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer)
    })
  }
  // store.runSaga = sagaMiddleware.run
  // store.close = () => store.dispatch(END)
  return store
}

export default configureStore
