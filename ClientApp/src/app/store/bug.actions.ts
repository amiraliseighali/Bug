import {Action} from '@ngrx/store';
import * as types from './action.types';

export class loadBugsAction implements Action
{
    readonly type = types.LOAD_BUGS;
    constructor(){}
}

export class loadBugsSuccessAction implements Action
{
    readonly type = types.LOAD_BUGS_SUCCESS;
    constructor(public payload: Bug[]){}
}

export type Actions = loadBugsAction | loadBugsSuccessAction