import { Action } from "@ngrx/store";
import { User } from "../models/user.model";

export enum UserActionTypes {
    SET_LOGGED_IN_USER = '[User] Set logged in user',
}

export class SetLoggedInUserAction implements Action{
    readonly type = UserActionTypes.SET_LOGGED_IN_USER;
    constructor(public payload: any){}
}

export type ShowsAction = SetLoggedInUserAction;