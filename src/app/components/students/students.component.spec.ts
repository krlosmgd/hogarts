import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './../../services/http.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { StudentsComponent } from './students.component';

describe('StudentsComponent', () => {
  let component: StudentsComponent;
  let fixture: ComponentFixture<StudentsComponent>;
  let store: MockStore;

  const initialState =
  [
    {
    name: 'mock',
    dateOfBirth: new Date('07-01-1995'),
    image: '',
    patronus: '',
    },
    {
      name: 'mock 2',
      dateOfBirth: new Date('07-01-1995'),
      image: '',
      patronus: '',
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsComponent ],
      imports:[ HttpClientModule ],
      providers: [
        HttpService,
        provideMockStore({initialState})
      ]
    })
    store = TestBed.inject(MockStore);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
