import * as bugActions from './bug.actions';
import * as types from './action.types';
import { AppState } from './app.state';

export const initialState: AppState =
{
    bugs: []
}

export function BugReducer(state = initialState, action: bugActions.Actions)
{
    switch(action.type)
    {
        case types.LOAD_BUGS_SUCCESS: 
        {
            return {...state, bugs: action.payload}
        }
        default:
            return state;
    }
}