import { Injectable } from '@angular/core';
import { Location } from './current-place/location.model';
import { Place } from './add-place/add-place.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private _places: Place[] = [
    new Place(1,'Cameroon', 'Bamenda', 5.95, 10.16),
    new Place(2,'Cameroon', 'Yaounde', 3.87, 11.52),
    new Place(3,'Cameroon', 'Douala', 4.05, 9.77),
    new Place(4,'Cameroon', 'Baffoussam', 5.88, 10.42),
    new Place(5,'Cameroon', 'Garoua', 9.32, 13.39),
    new Place(6,'Cameroon', 'Ngoundere', 7.34, 13.57),
    new Place(7,'Cameroon', 'Maroua', 10.59, 14.32),
    new Place(8,'Cameroon', 'Buea', 4.15, 9.24),
    new Place(9,'Cameroon', 'Ebolowa', 2.93, 11.16),
    new Place(10,'Cameroon', 'Bertoua', 4.58, 13.59),
    new Place(11,'Nigeria', 'Lagos', 6.52, 3.38),
    new Place(12,'Nigeria', 'Abuja', 9.08, 8.68),
    new Place(13,'Nigeria', 'Kinshasa', 4.44, 15.27),
    new Place(14,'South Africa', 'Johannesburg', 26.20, 28.05),
    new Place(15,'South Africa', 'Cape Town', 33.92, 18.42),
  ]

  private _otherLocations = [
    { country: 'Cameroon', 
      data: [
        {location: 'Limbe', time: '11:00PM', temp: 22, percent: 60, wind: 4.3, direction: 'West'},
        {location: 'Douala', time: '11:00PM', temp: 18, percent: 40, wind: 3.3, direction: 'North'},
        {location: 'Yaounde', time: '11:00PM', temp: 29, percent: 55, wind: 2, direction: 'South-West'},
    ]
  },
  { country: 'Nigeria', 
      data: [
        {location: 'Abuja', time: '11:00PM', temp: 20, percent: 70, wind: 4, direction: 'South'},
        {location: 'Lagos', time: '11:00PM', temp: 27, percent: 45, wind: 3.7, direction: 'North-East'},
        {location: 'Port-Harcort', time: '11:00PM', temp: 26, percent: 50, wind: 2.8, direction: 'East'},
    ]
  },
  { country: 'South Africa', 
      data: [
        {location: 'Limbe', time: '11:00PM', temp: 22, percent: 60, wind: 4.3, direction: 'West'},
        {location: 'Douala', time: '11:00PM', temp: 18, percent: 40, wind: 3.3, direction: 'North'},
        {location: 'Yaounde', time: '11:00PM', temp: 29, percent: 55, wind: 2, direction: 'South-West'},
    ]
  }
  ]

  get otherLocations() {
    return this._otherLocations;
  }

  get places() {
    return this._places;
  }
}
