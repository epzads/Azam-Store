import { createStore, combineReducers} from 'redux';
import menuReducer from './reducer/menuReducer';
import loginReducer from './reducer/loginReducer';

const rootReducer = combineReducers({
menu: menuReducer,
login: loginReducer, 


})

export default createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());