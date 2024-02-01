import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux'; // Import named exports directly
import { thunk } from 'redux-thunk'; // Import the thunk named export
import { reducers } from '../Reducers';

function saveToLocalStorage(store) {
  try {
    const serializedStore = JSON.stringify(store);
    localStorage.setItem('store', serializedStore); // Use localStorage directly
  } catch (e) {
    console.log(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serializedStore = localStorage.getItem('store'); // Use localStorage directly
    if (serializedStore === null) return undefined;
    return JSON.parse(serializedStore);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedState = loadFromLocalStorage();

const store = createStore(reducers, persistedState, composeEnhancers(applyMiddleware(thunk)));

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
