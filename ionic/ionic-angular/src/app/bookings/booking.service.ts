import { Injectable } from "@angular/core";
import { Booking } from './bookings.model';

@Injectable({ providedIn: 'root'})


export class BookingService {
    private _bookings: Booking[] = [
        {
            id: 'xyz',
            placeId: 'p1',
            userId: 'user1',
            placeTitle: 'Bamenda Hut',
            guestNum: 3,
            imageUrl: 'https://media.gettyimages.com/photos/manhattan-skyline-on-a-sunny-day-empire-state-building-on-the-right-picture-id846410892?s=612x612'
        }
    ];

    get bookings() {
        return [...this._bookings]
    }
}