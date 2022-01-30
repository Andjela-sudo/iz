import { UserActionTypes } from "../actions/user.actions";
import { User } from "../models/user.model";


const initialState : any = null;

export function UserReducer(state = initialState, action: any ): User{
    switch(action.type){
        case UserActionTypes.SET_LOGGED_IN_USER:
            return {...action.payload};
        default:
            return state;
    }
}