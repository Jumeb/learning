import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OtherPlacesPage } from './other-places.page';

describe('OtherPlacesPage', () => {
  let component: OtherPlacesPage;
  let fixture: ComponentFixture<OtherPlacesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherPlacesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OtherPlacesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
