import { Character } from 'src/app/models/character';
import { createAction, props } from '@ngrx/store';

export const houseCharacters = createAction('houseCharacters', props<{ studentsList: Character[]}>() );