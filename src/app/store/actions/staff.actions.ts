import { createAction, props } from '@ngrx/store';

export const loadStaffs = createAction(
  '[Staff] Load Staffs'
);

export const loadStaffsSuccess = createAction(
  '[Staff] Load Staffs Success',
  props<{ data: any }>()
);

export const loadStaffsFailure = createAction(
  '[Staff] Load Staffs Failure',
  props<{ error: any }>()
);
