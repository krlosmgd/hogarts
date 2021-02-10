import { Observable } from 'rxjs';
import { HttpService } from '../../../services/http.service';
import { Injectable } from '@angular/core';
import { Character } from '../../../models/character';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private httpService: HttpService) { }

  public getStudents():Observable<Character[]>{
    return this.httpService.get(`/students`);
  }

  public saveUser(character: Character[]){
    localStorage.setItem('register', JSON.stringify(character));
  }

  public getUserRegister(){
    return localStorage.getItem('register') ? JSON.parse(localStorage.getItem('register')) : null;
  }

}
