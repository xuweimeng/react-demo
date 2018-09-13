// 引入createStore


import {createStore} from 'redux'
import reducer from './../reducer'
import {composeWithDevTools} from 'redux-devtools-extension'

let configureStore = createStore(reducer)
// export default (prevState)=>createStore(reducer, prevState)
// export default ()=>createStore(reducer, composeWithDevTools())
export default configureStore
console.log(configureStore.getState())