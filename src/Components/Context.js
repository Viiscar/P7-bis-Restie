import React, {createContext} from 'react';
import update from 'immutability-helper';

export const AppContext = createContext();

export const initialState = {

    restaurant: ''

};


export function reducer(state, action) {
    switch (action.type) {
        case 'UPDATE_INPUT':
            return update(state, { restaurant: {$set: action.data}});


        default:
            return initialState;
    }
}