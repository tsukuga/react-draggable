import * as Actions from './actions';
import {initialState} from '../store/initialState';

export const UsersReducer = (state = initialState.users, action)  => {
    switch (action.type) {
        case Actions.CREAET_NEW_ELEMENT:
            return {
                ...state,
                nowCount: action.payload.nowCount
            };
        default:
            return state
    }
};