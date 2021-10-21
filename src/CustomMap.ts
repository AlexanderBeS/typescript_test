import {User} from "./User";
import {Company} from "./Company";

interface Mappable {
    location: {
        lat: number;
        lng: number;
    }
}


export class CustomMap {
    public googleMap: google.maps.Map;

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            backgroundColor: 'black',
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

    addMarker(mappable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng,
            }
        });

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: 'Hello, test text!'
            });

            infoWindow.open(this.googleMap, marker);
        })
    }

}