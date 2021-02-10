import { Observable, of } from 'rxjs';
import { HttpService } from '../../../services/http.service';
import { Injectable } from '@angular/core';
import { Character } from '../../../models/character';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  constructor(private httpService: HttpService) { }

  /*
   * @summary get students list by house name.
   * @param  {String} name
   * @return Observable<Character[]>
   */
  public getStudentsByHouse(name: String):Observable<Character[]>{
    return this.httpService.get(`/house/${name}`);
  }

  /*
   * @summary get default houses
   * @return Observable<string[]>
   */
  public defaultHouses(): Observable<string[]>{
    return of(['slytherin', 'gryffindor', 'ravenclaw', 'hufflepuff']);
  }

}
