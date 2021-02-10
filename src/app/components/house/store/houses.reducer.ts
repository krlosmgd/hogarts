import * as action from './houses.action';
import { createReducer, on } from '@ngrx/store';
import { Character } from 'src/app/models/character';

export const initialStudentsList: Character[] = [];

const _studentsListReducer = createReducer(initialStudentsList, on(action.houseCharacters, (state, { studentsList }) => studentsList));

/*
 * @summary Update student list reducer
 * @param  {} state
 * @param  {} action
 * @return create reducer
 */
export function studentsListReducer(state, action){
    return _studentsListReducer(state, action);
}
