import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './../../../services/http.service';
import { TestBed } from '@angular/core/testing';

import {TeachersService } from './teachers.service';

describe('TeachersService', () => {
  let service: TeachersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [ HttpService ]
    });
    service = TestBed.inject(TeachersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
