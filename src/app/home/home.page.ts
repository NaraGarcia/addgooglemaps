import { Component, ViewChild, ElementRef } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  map: any;

  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;

  constructor() {}

  public ShowMap(){
    const location = new google.maps.LatLng (-22.489262, -48.546445);
    const options={
      center: location,
      zoom: 15,
      disableDefault: true
    };
    this.map = new google.maps.Map(this.mapRef.nativeElement, options)
  }

  ionViewDidEnter(){
    this.ShowMap();
  }

}
