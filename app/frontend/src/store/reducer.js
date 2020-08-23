import { combineReducers } from 'redux';

import ui from './reducers/ui';

import AppResourcesStore from './AppResourcesStore/store';
import AppRoleResourcesStore from './AppRoleResourcesStore/store';
import AppSysRolesStore from './AppSysRolesStore/store';
import DialogsStore from './DialogsStore/store';

import ProgramsStore from './ProgramsStore/store';
import OrgsStore from './OrganizationsStore/store';
import UserStore from './UserStore/store';

export const root = combineReducers({
  UserStore: UserStore.reducer,
  ProgramsStore: ProgramsStore.reducer,
  AppResourcesStore: AppResourcesStore.reducer,
  AppRoleResourcesStore: AppRoleResourcesStore.reducer,
  AppSysRolesStore: AppSysRolesStore.reducer,
  DialogsStore: DialogsStore.reducer, 
  OrgsStore: OrgsStore.reducer,
  ui,
});

export default root;
