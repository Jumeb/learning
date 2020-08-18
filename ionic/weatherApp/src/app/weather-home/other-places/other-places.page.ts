import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddPlaceComponent } from '../add-place/add-place.component';
import { LocationService } from '../location.service';
import { Location } from '../current-place/location.model';

@Component({
  selector: 'app-other-places',
  templateUrl: './other-places.page.html',
  styleUrls: ['./other-places.page.scss'],
})
export class OtherPlacesPage implements OnInit {

  otherPlaces = [];

  slideOpts = {
    slidesPerView: 1.2,
    centeredSlides: true,
    effect: 'flip'
  };

  constructor(private modalCtrl: ModalController, private otherLocation: LocationService) { }

  ngOnInit() {
    this.otherPlaces = [...this.otherLocation.otherLocations]
  }

  addPlace() {
    this.modalCtrl.create({component: AddPlaceComponent }).then(modalEl => {
      modalEl.present();
    })
  }

}
