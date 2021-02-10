import { Character } from 'src/app/models/character';
import { createAction, props } from '@ngrx/store';

export const userRegister = createAction('userRegister', props<{ userRegister: Character[]}>() );