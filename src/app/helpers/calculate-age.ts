import * as moment from 'moment';

export function calculateAge(birthdate: Date) {
    return moment().diff(birthdate, 'years') ? moment().diff(birthdate, 'years') : 'Formato incorrecto';
}
