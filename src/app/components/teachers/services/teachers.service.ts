import { Character } from 'src/app/models/character';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  /*
   * @param  {HttpService} httpService: Used to make API request
   */
  constructor(private httpService: HttpService) { }

  /*
   * @summary get staff list
   */
  getStaff():Observable<Character[]>{
    return this.httpService.get('/staff');
  }
}
