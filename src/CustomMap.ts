// On how they can be an argument to 'addMarker'
export interface Mappable {
    location: {
        lat: number;
        lng: number;
    }
    markerContent(): string;
    color: string;
}

// Limits functionality
export class CustomMap {
    private googleMap: google.maps.Map; // You can't reference this outside this class

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

    // Now every argument can use addMarker if it satisfies the interface
    addMarker(mappable: Mappable): void {
         const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
         })

        marker.addListener('click', () => {
           const infoWindow = new google.maps.InfoWindow({
              content: mappable.markerContent()
           });

           infoWindow.open(this.googleMap, marker);

        });
    }
}