import { Action } from '@ngrx/store';

// tslint:disable-next-line: no-namespace
export namespace CounterActions {
    export enum CounterActionTypes {

        INCREMENT_COUNTER = '[COUNTER] increment',
        DECREMENT_COUNTER = '[COUNTER] decrement',
        RESET_COUNTER = '[COUNTER] reset',
    }
    export class IncrementCounter implements Action {
        readonly type = CounterActionTypes.INCREMENT_COUNTER;

        constructor(public payload: number = 1) { }
    }
    export class DecrementCounter implements Action {
        readonly type = CounterActionTypes.DECREMENT_COUNTER;

        constructor(public payload: number = -1) { }
    }
    export class ResetCounter implements Action {
        readonly type = CounterActionTypes.RESET_COUNTER;

    }

    export type action = IncrementCounter | DecrementCounter | ResetCounter;


}
