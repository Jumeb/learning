import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WeatherHomePage } from './weather-home.page';

describe('WeatherHomePage', () => {
  let component: WeatherHomePage;
  let fixture: ComponentFixture<WeatherHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
