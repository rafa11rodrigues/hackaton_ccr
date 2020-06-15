import { Injectable } from '@angular/core';
import { InterestPoint } from './interest-point';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor() { }

  restaurantes(point: {lat: number, lng: number} ) {
    return [
      new InterestPoint('Cantinho da Costela', point.lat, point.lng + 0.00014),
      new InterestPoint('Galpão Tropeiro', point.lat - 0.0001, point.lng),
    ];
  }

  postosCCR(point: google.maps.LatLngLiteral ) {
    return [
      new InterestPoint('Posto CCR #35', point.lat + 0.0004, point.lng),
      new InterestPoint('Posto CCR #42', point.lat - 0.0004, point.lng + 0.0002),
    ];
  }

  paradas(point: google.maps.LatLngLiteral ) {
    return [
      new InterestPoint('Hospedaria do Zé', point.lat - 0.0004, point.lng - 0.00015),
      new InterestPoint('Hotel da Paz', point.lat + 0.00034, point.lng + 0.0001),
    ];
  }
}
