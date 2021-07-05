import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import ReducerF from "./folderReducer";

let rootReducer = combineReducers({
    ReducerF
});

type RootReducersType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducersType>;


let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export default store;