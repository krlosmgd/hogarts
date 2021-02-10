import { Character } from './../../models/character';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpService } from 'src/app/services/http.service';
import { HouseComponent } from './house.component';
import { HouseService } from './services/house.service';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

describe('HouseComponent', () => {
  let component: HouseComponent;
  let store: MockStore;
  let fixture: ComponentFixture<HouseComponent>;

  const initialState =
    [{
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
    }];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseComponent ],
      imports: [ HttpClientModule ],
      providers: [
        HttpService,
        provideMockStore({initialState})
      ]
    });
    store = TestBed.inject(MockStore);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
