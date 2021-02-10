import { Character } from 'src/app/models/character';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  constructor(private httpService: HttpService) { }

  getStaff():Observable<Character[]>{
    return this.httpService.get('/staff');
  }
}
