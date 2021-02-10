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

  public getStudentsByHouse(name: String):Observable<Character[]>{
    return this.httpService.get(`/house/${name}`);
  }

  public defaultHouses(): Observable<string[]>{
    return of(['slytherin', 'gryffindor', 'ravenclaw', 'hufflepuff']);
  }

}
