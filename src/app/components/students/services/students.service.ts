import { Observable } from 'rxjs';
import { HttpService } from '../../../services/http.service';
import { Injectable } from '@angular/core';
import { Character } from '../../../models/character';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  /*
   * @param  {HttpService} httpService: Used to make API request
   */
  constructor(private httpService: HttpService) { }

  /*
   * @summary get students list
   * @return Observable<Character[]>
   */
  public getStudents():Observable<Character[]>{
    return this.httpService.get(`/students`);
  }

  /*
   * @summary save new register in LocalStorage
   * @param  {Character[]} character
   */
  public saveUser(character: Character[]){
    localStorage.setItem('register', JSON.stringify(character));
  }

  /*
   * @summary get user register from LocalStorage
   * @returns any
   */
  public getUserRegister(){
    return localStorage.getItem('register') ? JSON.parse(localStorage.getItem('register')) : null;
  }

}
