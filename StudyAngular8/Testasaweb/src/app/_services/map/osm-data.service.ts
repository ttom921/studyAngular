import { Injectable } from '@angular/core';
import { LatLngExpression } from 'leaflet';
import { Observable, of, interval } from 'rxjs';
import { MarkerData } from 'src/app/_common/map/model/marker-meta-data.model';



@Injectable({
  providedIn: 'root'
})
export class OsmDataService {
  markers: MarkerData[] = [
    {
      id: '1',
      name: 'Markername1',
      description: 'descr 1',
      position: [24.9345812, 121.2728323]
    },
    {
      id: '2',
      name: 'Markername2',
      description: 'descr 2',
      position: [24.933255, 121.265024]
    }
  ];
  constructor() { }
  getMarkers(): Observable<any> {
    return of(this.markers);
  }
  getInterval(): Observable<any> {
    const source$ = interval(3000);
    return source$;
  }
}
