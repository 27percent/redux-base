// import { createStore, applyMiddleware } from 'redux'
// import createSagaMiddleware, { END } from "redux-saga"
// import api from '../middleware/api'
// import rootReducer from '../reducers'
// import saga from '../sagas'

// const configureStore = preloadedState => {
//   const sagaMiddleware = createSagaMiddleware();
//   const store = createStore(
//     rootReducer,
//     preloadedState,
//     applyMiddleware(sagaMiddleware, api)
//   )
//   store.runSaga = sagaMiddleware.run
//   store.close = () => store.dispatch(END)
//   return store
// }

// export default configureStore



import { createStore, applyMiddleware, compose } from 'redux'
// import createSagaMiddleware, { END } from 'redux-saga'
import { createLogger } from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'
// import api from '../middleware/api'
import rootReducer from '../reducers'
// import saga from '../sagas'

const configureStore = (preloadedState, history) => {
  // const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(applyMiddleware(routerMiddleware(history), createLogger()))
    // composeWithDevTools(applyMiddleware(routerMiddleware(history), sagaMiddleware, api, createLogger()))
  )

  // store.runSaga = sagaMiddleware.run
  // store.close = () => store.dispatch(END)
  return store
}

export default configureStore
