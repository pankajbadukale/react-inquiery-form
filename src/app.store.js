import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { ADD, LIST } from './constants';

const initState = [];

function Enquiryies(state = initState, action) {
    let myReducers = {
        [ADD]: () => {
            state.push(action.payload);
            return [...state];
        },
        [LIST]: () => state
    };
    return (myReducers[action.type] && myReducers[action.type](action.payload)) || state;
}
const appStore = createStore(combineReducers({ Enquiryies }));
export default appStore;