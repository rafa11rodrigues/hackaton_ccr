import { Component, OnInit, ViewChild, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { RecognitionService } from '../speak/recognition.service';
import { InterestPoint } from './interest-point';
import { MapService } from './map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy {

  @ViewChild(GoogleMap)
  map: GoogleMap;

  markers: google.maps.MarkerOptions[] = [];
  commandNames = {
    fome: 'Estou com fome',
    medico: 'médico',
    cansado: 'cansado'
  };

  constructor(private recognitionService: RecognitionService,
              private changeDetect: ChangeDetectorRef,
              private mapService: MapService) {}

  options: google.maps.MapOptions = {
    backgroundColor: '#282828',
    fullscreenControl: false,
     mapTypeControl: false,
     panControl: false,
    rotateControl: false,
    scaleControl: false,
    streetViewControl: false,
    zoomControl: false,

    mapTypeId: 'roadmap',
  };

  center: google.maps.LatLngLiteral;

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        this.center = {lat: latitude, lng: longitude};
        console.log(latitude, longitude);

        this.map.panTo(this.center);
        this.initRecognition();
      }, error => {
        alert('Não foi possível obter sua localização');
        console.log(error);
      }, {timeout: 3000}
      );
    }
    else {
      alert('Não foi possível obter sua localização');
    }
  }

  initRecognition() {
    this.recognitionService.addCommands({
      [this.commandNames.fome]: () => {
        this.updateMarkers(this.mapService.restaurantes(this.center));
        this.recognitionService.answer(`Tem uns lugares bem legais pra comer perto de você. Outros caminhoneiros recomendaram!
        Vai lá ver pra ganhar pontos caso eles tenham mentido!`);
      },
      [this.commandNames.medico]: {
        regexp: /(Preciso fazer exames)|(Estou doente)|Preciso ir no médico/,
        callback: () => {
          this.updateMarkers(this.mapService.postosCCR(this.center));
          this.recognitionService.answer(`Tem um posto de saúde da CCR há 50 quilômetros daqui.
            Vai lá cuidar da saúde e aproveitar pra ganhar uns pontos pra subir no ranking e ganhar mais benefícios`);
        }
      },
      [this.commandNames.cansado]: {
        regexp: /(Estou cansado)|(Preciso (dormir|descansar))/,
        callback: () => {
          this.updateMarkers(this.mapService.paradas(this.center));
          this.recognitionService.answer(`Você precisa dormir bem pra ter uma boa saúde e evitar acidentes por dormir no volante.
            Achei alguns lugares pra você descansar.`);
        }
      }
    });
    this.recognitionService.start();
  }

  updateMarkers(points: InterestPoint[]) {
    this.markers = [];
    points.forEach(p => {this.addMarker(p); });
  }

  addMarker(interestPoint: InterestPoint) {
    const position =  {
      lat: interestPoint.latitude,
      lng: interestPoint.longitude
    };

    this.markers.push({
      title: interestPoint.name,
      label: { color: 'red', text: interestPoint.name },
      position,
      draggable: false,
      icon: {
        labelOrigin: new google.maps.Point(0, 2),
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: '#f00',
        scale: 10
      }
    });
    this.changeDetect.detectChanges();
  }

  showPosition(event: google.maps.MouseEvent) {
    const {lat, lng} = event.latLng;
    console.log(`position: ${lat()}, ${lng()}`);
  }

  ngOnDestroy() {
    this.recognitionService.removeCommands([
      this.commandNames.fome,
      this.commandNames.medico,
      this.commandNames.cansado,
    ]);
    this.recognitionService.stop();
  }
}
