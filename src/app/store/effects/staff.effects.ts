import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as StaffActions from '../actions/staff.actions';



@Injectable()
export class StaffEffects {

  loadStaffs$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(StaffActions.loadStaffs),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => StaffActions.loadStaffsSuccess({ data })),
          catchError(error => of(StaffActions.loadStaffsFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
