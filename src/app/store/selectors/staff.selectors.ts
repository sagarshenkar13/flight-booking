import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromStaff from '../reducers/staff.reducer';

export const selectStaffState = createFeatureSelector<fromStaff.State>(
  fromStaff.staffFeatureKey
);
