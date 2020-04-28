import React, {createContext} from 'react';
import update from 'immutability-helper';

export const AppContext = createContext();

export const initialState = {

    restaurant: ''

};


export function reducer(state, action) {
    switch (action.type) {
        case 'UPDATE_INPUT':
            console.log("yes", state)
            // if initialstae.rest = '' 
            return update(state, { restaurant: {$set: action.data}});
            // return {
            //     rest: action.data
            // };


        default:
            console.log(state);
            return initialState;
    }
}