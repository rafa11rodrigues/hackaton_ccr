export class InterestPoint {

  constructor(
    public name: string,
    public latitude: number,
    public longitude: number
  ) {}

    distance(point: {lat: number, lng: number} ): number {
      return Math.sqrt(Math.pow(this.latitude - point.lat, 2) + Math.pow(this.longitude - point.lng, 2));
    }

}
