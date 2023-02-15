import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromAdmin from './reducers/admin.reducer';
import * as fromStaff from './reducers/staff.reducer';


export interface AppState {

  [fromAdmin.adminFeatureKey]: fromAdmin.State;
  [fromStaff.staffFeatureKey]: fromStaff.State;
}

export const reducers: ActionReducerMap<AppState> = {

  [fromAdmin.adminFeatureKey]: fromAdmin.reducer,
  [fromStaff.staffFeatureKey]: fromStaff.reducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
