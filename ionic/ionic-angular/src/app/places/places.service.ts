import { Injectable } from '@angular/core';
import { Place } from './place.model';
import { AuthService } from '../auth/auth.service';
import { BehaviorSubject } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places = new BehaviorSubject<Place[]>([
    new Place(
      'p1', 
      'Bamenda Hut', 
      'In the heart of the struggle.', 
      'https://media.gettyimages.com/photos/manhattan-skyline-on-a-sunny-day-empire-state-building-on-the-right-picture-id846410892?s=612x612', 
      20000,
      new Date('2020-01-01'),
      new Date('2021-07-28'),
      'abc'
      ),
    new Place('p2', 
    'Buea Cite', 
    'In the Limbe quater.', 
    'https://media.gettyimages.com/photos/manhattan-skyline-on-a-sunny-day-empire-state-building-on-the-right-picture-id846410892?s=612x612', 
    45000,
    new Date('2020-03-25'),
    new Date('2022-09-14'),
    'xyz'
    ),
    new Place('p3', 
    'White House', 
    'Close to UB.', 
    'https://media.gettyimages.com/photos/manhattan-skyline-on-a-sunny-day-empire-state-building-on-the-right-picture-id846410892?s=612x612', 
    70000,
    new Date('2020-01-01'),
    new Date('2020-04-25'),
    'abc'
    ),
    new Place('p3', 
    'A1 Complex', 
    'Around untarred Malingo.', 
    'https://media.gettyimages.com/photos/manhattan-skyline-on-a-sunny-day-empire-state-building-on-the-right-picture-id846410892?s=612x612', 
    130000,
    new Date('2021-01-01'),
    new Date('2023-12-31'),
    'xyz'
    )
  ]);

  get places() {
    return this._places.asObservable()
  }

  getPlace(id: string){
    return this.places.pipe(take(1), map(places => {
      return {...places.find(p => p.id === id)};
    }))
  }
  constructor(private authService: AuthService) { }

  addPlace(title: string, description: string, price: number, dateFrom: Date, dateTo: Date) {
    const newPlace = new Place(Math.random().toString(), title, description, 'https://media.gettyimages.com/photos/manhattan-skyline-on-a-sunny-day-empire-state-building-on-the-right-picture-id846410892?s=612x612', price, dateFrom, dateTo, this.authService.userId);
    this.places.pipe(take(1)).subscribe(places => {
      this._places.next(places.concat(newPlace));
    });
  }
}
