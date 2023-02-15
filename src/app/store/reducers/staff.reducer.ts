import { Action, createReducer, on } from '@ngrx/store';
import * as StaffActions from '../actions/staff.actions';

export const staffFeatureKey = 'staff';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,

  on(StaffActions.loadStaffs, state => state),
  on(StaffActions.loadStaffsSuccess, (state, action) => state),
  on(StaffActions.loadStaffsFailure, (state, action) => state),

);
