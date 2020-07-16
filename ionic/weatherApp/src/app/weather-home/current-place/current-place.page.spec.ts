import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CurrentPlacePage } from './current-place.page';

describe('CurrentPlacePage', () => {
  let component: CurrentPlacePage;
  let fixture: ComponentFixture<CurrentPlacePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentPlacePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CurrentPlacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
