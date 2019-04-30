import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducers'

export const history = createBrowserHistory()
 
export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        // ... other middlewares ...
      ),
    ),
  )
 
  return store
}


// import { createStore, applyMiddleware } from 'redux'
// import { connectRouter, routerMiddleware } from 'connected-react-router'

// import thunk from "redux-thunk"

// import history from '../routes/history'

// const middlewares = [
//   thunk,
//   routerMiddleware(history),
// ]
// // reducers in localy arrowfunction

// const store = createStore(
//   connectRouter(history)(() => {} ),
//   applyMiddleware( ...middlewares )
// )

// export default store