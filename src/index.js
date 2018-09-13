import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './index.less';
import RouterPage from './router';
import { Provider } from 'react-redux';
import configureStore from './redux/store/index';
import registerServiceWorker from './registerServiceWorker';
import AddTodo from './containers/Addtodo'
const store = configureStore()

// ReactDOM.render(
//   <Provider store={store}>
//     <RouterPage />
//   </Provider>
// , document.getElementById('root'));

ReactDOM.render(
  <AddTodo />
, document.getElementById('root'));
registerServiceWorker();
