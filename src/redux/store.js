import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
//composeEnhancers is inform us for state
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

export default store
