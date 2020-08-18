import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LocationService } from '../location.service';
import { Place } from './add-place.model';

@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.scss'],
})
export class AddPlaceComponent implements OnInit {
  lat
  lon
  place: Place[];
  public searchPlace: string = '';
  constructor(private modalCtrl: ModalController, private places: LocationService) { }

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel')
  }



  ngOnInit() {
    this.filteredPlace();
    console.log(this.searchPlace);
  }

  filteredPlace() {
    this.place = this.filterPlace(this.searchPlace);
    console.log(this.searchPlace);
  }

  filterPlace(searchPlace: string) {
    return [...this.places.places.filter(p => {
      return p.city.toLowerCase().indexOf(searchPlace.toLowerCase()) > -1;
    })]
  }

  setCoords(index: number){
    let coords = "lat=" + this.places.places[index - 1].lat + "&lon=" + this.places.places[index - 1].lon;
    this.modalCtrl.dismiss({weatherCast:[coords, index] }, 'confirm');
  }

}
