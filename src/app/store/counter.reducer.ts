import { CounterActions } from './counter.action';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from './app-state';

export interface CounterState {
    status: number;
}

export const initialState: CounterState = {
    status: 0,
}
export interface AppState extends fromRoot.AppState {
    counter: CounterState,
}


export function Counterreducer(state = initialState, action: CounterActions.action): CounterState {
    switch (action.type) {
        case CounterActions.CounterActionTypes.DECREMENT_COUNTER: {
            return {
                ...state, status: state.status + action.payload
            };
        }
        case CounterActions.CounterActionTypes.INCREMENT_COUNTER: {
            return {
                ...state, status: state.status + action.payload
            };
        }
        case CounterActions.CounterActionTypes.RESET_COUNTER: {
            return {
                ...state, status: 0
            };
        }

        default: {
            return state;
        }
    }
}
export const getCounterFeatureState = createFeatureSelector('counter');
export const getCounter = createSelector(getCounterFeatureState, (state: CounterState) => {
    return state.status;

});