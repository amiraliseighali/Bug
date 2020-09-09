import { BugService } from "../services/bug.service";
import {Actions, Effect, ofType} from '@ngrx/effects';
import {mergeMap, map} from 'rxjs/operators';
import {Action} from '@ngrx/store';
import * as types from './action.types';
import * as bugActions from './bug.actions';

import { Observable } from "rxjs";

export class BugEffects 
{
    constructor(private service: BugService,
        private actions$: Actions){}

    @Effect() loadBugs$: Observable<Action> = this.actions$.pipe(
        ofType<bugActions.loadBugsAction>(types.LOAD_BUGS),
        mergeMap(() => 
            this.service.getAllBugs().pipe(map(bugs => 
                new bugActions.loadBugsSuccessAction(bugs)))
        )
    )
}