import { Action } from "@ngrx/store";
import { User } from "../models/user.model";


export enum UsersActionTypes {
    SET_USERS_LIST = "[Users] Set users list",
    ADD_USER_TO_LIST = '[UserS] Add user to list',
    DELETE_USER_FROM_LIST = '[Users] Delete user from list',
    SEARCH_FILTER = '[Users] Search filter'
}

export class AddUserToListAction implements Action{
    readonly type = UsersActionTypes.ADD_USER_TO_LIST;
    constructor(public payload: User){}
}
export class DeleteUserFromListAction implements Action{
    readonly type = UsersActionTypes.DELETE_USER_FROM_LIST;
    constructor(public payload: User){}
}
export class SetUsersListAction implements Action{
    readonly type = UsersActionTypes.SET_USERS_LIST;
    constructor(public payload: Array<User>){}
}
export class SearchFilterAction implements Action{
    readonly type = UsersActionTypes.SEARCH_FILTER;
    constructor(public payload:string){}
}

export type ShowsAction = SearchFilterAction | SetUsersListAction | AddUserToListAction | DeleteUserFromListAction ;