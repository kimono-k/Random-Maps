import { User } from './User';
import { Company } from './Company';

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

    addUserMaker(user: User): void {
         new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: user.location.lat,
                lng: user.location.lng
            }
         })
    }

    addCompanyMarker(company: Company): void {
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: company.location.lat,
                lng: company.location.lng
            }
        })
    }
}