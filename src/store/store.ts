import { combineReducers, legacy_createStore } from "redux";
import { counterReducer } from "./counterReduser";

//create rootReducer for dispatch(action) for Redux
const rootReducer = combineReducers({
    stateCounter: counterReducer
})

//Create type AppRootState
export type AppRootState = ReturnType<typeof rootReducer>

//Create object store-Redux
export const store = legacy_createStore(rootReducer) 