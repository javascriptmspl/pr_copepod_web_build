

import ModeDAta from './redux/SLICE/auth/ModeSlice'
import userData from './redux/SLICE/auth/Register'
import contentData from './redux/SLICE/auth/Content'

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Import Redux Thunk middleware
import Mode from './mode/rtlmode';

const rootReducer = combineReducers({
  mode: Mode,
  modedAta:ModeDAta,
  user:userData,
  contents:contentData,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk) // Apply Redux Thunk middleware
);

export default store;
