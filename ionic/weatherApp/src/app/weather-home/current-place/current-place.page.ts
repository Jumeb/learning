import { Component, OnInit } from '@angular/core';
import { ModalController, Platform, LoadingController } from '@ionic/angular';
import { AddPlaceComponent } from '../add-place/add-place.component';
import { Location } from './location.model';
import { LocationService } from '../location.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-current-place',
  templateUrl: './current-place.page.html',
  styleUrls: ['./current-place.page.scss'],
})
export class CurrentPlacePage implements OnInit {

  newCoords: string = 'lat=4.15&lon=9.24';
  locale: number = 7;

  isFetching = false;
  
  public currentPlace;
  public currentWeather;
  public location;
  today = new Date();
  public date = this.today.toDateString();

  slideOpts = {
    slidesPerView: 1.2,
    centeredSlides: true,
    effect: 'flip'
  };

  constructor(
    private modalCtrl: ModalController,
    private currentLocation: LocationService,
    private platform: Platform, 
    private httpClient: HttpClient, 
    private loadingCtrl: LoadingController
    ) {
      this.isFetching = true;
      this.loadingCtrl.create({message:'Fetching Data...'}).then(loadingEl => {
        loadingEl.present();
        this.platform.ready().then(() => {
          this.GetData();  
          loadingEl.dismiss();    
        })
      })
   }


  ngOnInit() {
    this.location = [...this.currentLocation.places];
  }

  addPlace() {
    this.modalCtrl.create({component: AddPlaceComponent}).then(modalEl => {
      modalEl.present();
      return modalEl.onDidDismiss();
    }).then(data => {
      this.newCoords = data.data.weatherCast[0];
      this.locale = data.data.weatherCast[1] - 1;
      this.isFetching = true;
      this.GetData();
    })
  }

  GetData() {
    let url = "https://api.openweathermap.org/data/2.5/onecall?"+ this.newCoords +"&exclude=minutely,daily&appid=51e565bc59a7c2dad82d379070a3ece7";
    this.httpClient.get(url).subscribe(weatherData => {
      this.currentPlace = <any>weatherData;
      this.isFetching = false;
      })
    // let url2 = "https://api.openweathermap.org/data/2.5/weather?lat="+ this.currentLocation.places[7].lat +"&lon="+ this.currentLocation.places[7].lon +"&exclude=minutely,daily&appid=51e565bc59a7c2dad82d379070a3ece7";
    // this.httpClient.get(url2).subscribe(weatherData => {
    //   this.currentWeather = <any>weatherData;
    //   // this.isFetching = false;
    //   })
  }

}
