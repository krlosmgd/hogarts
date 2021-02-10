import * as action from './students.action';
import { createReducer, on } from '@ngrx/store';
import { Character } from 'src/app/models/character';

export const initialUserRegister: Character[] = [];

const _userRegisterReducer = createReducer(initialUserRegister, on(action.userRegister, (state, { userRegister }) => userRegister));

export function userRegisterReducer(state, action){
    return _userRegisterReducer(state, action);
}
