import { ActionReducerMap } from "@ngrx/store";
import { UserReducer } from "../reducers/user.reducer";
import { UsersReducer } from "../reducers/users.reducer";
import { User } from "./user.model";

export interface AppState{
    readonly loggedInUser: User;
    readonly users: Array<User>;
}

export const reducers: ActionReducerMap<AppState> ={
    loggedInUser: UserReducer,
    users: UsersReducer
}