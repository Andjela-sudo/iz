import { UsersActionTypes } from "../actions/users.actions";
import { User } from "../models/user.model";


const initialState : any = [];

export function UsersReducer(state = initialState, action: any ): Array<User>{
    switch(action.type){
        case UsersActionTypes.SET_USERS_LIST:
            return [...action.payload]
        case UsersActionTypes.ADD_USER_TO_LIST:
            return [...state,action.payload];
        case UsersActionTypes.DELETE_USER_FROM_LIST:
            return [...state.filter((user:User)=>user.id != action.payload.id)];
        case UsersActionTypes.SEARCH_FILTER:
            return [...state.filter((user:User)=>user.username.toLowerCase().includes(action.payload.toLowerCase()))]
        default:
            return state;
    }
}