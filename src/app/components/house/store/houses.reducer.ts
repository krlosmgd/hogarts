import * as action from './houses.action';
import { createReducer, on } from '@ngrx/store';
import { Character } from 'src/app/models/character';

export const initialStudentsList: Character[] = [];

const _studentsListReducer = createReducer(initialStudentsList, on(action.houseCharacters, (state, { studentsList }) => studentsList));

export function studentsListReducer(state, action){
    return _studentsListReducer(state, action);
}
