import { Gallery } from './main-gallery.model';
export class MainGalleryService {
    galleryPopularDestination: Gallery[] = [
        new Gallery("Boston", "13-14 March total sale on round trop in Paris!", "/assets/img/bostonCard.jpg"),
        new Gallery("Paris", "13-14 March total sale on round trop in Paris!", "/assets/img/parisCard.jpg"),
        new Gallery("Vienna", "13-14 March total sale on round trop in Paris!", "/assets/img/viennaCard.jpg"),
        new Gallery("New York", "13-14 March total sale on round trop in Paris!", "/assets/img/nyCard.jpg"),
        new Gallery("Tokyo", "13-14 March total sale on round trop in Paris!", "/assets/img/tokyoCard.jpg"),
        new Gallery("Berlin", "13-14 March total sale on round trop in Paris!", "/assets/img/berlinCard.jpg"),
    ];

    gallerySpecialOffers: Gallery[] = [
        new Gallery("American Airlines are on sale!", `Use our best fare finder to book your journey to amsterdam on
        lufthansa.com and save hard cash. In order to find the best-value flights, simply use our best fare
        finder. Choose your flight to Amsterdam AMS from a wide range of offers.`, "/assets/img/americanAirlines.jpg"),
        new Gallery("American Airlines are on sale!", `Use our best fare finder to book your journey to amsterdam on
        lufthansa.com and save hard cash. In order to find the best-value flights, simply use our best fare
        finder. Choose your flight to Amsterdam AMS from a wide range of offers.`, "/assets/img/americanAirlines.jpg"),

    ];

    galleryHelper: Gallery[] = [
        new Gallery("Don't know where to go yet?", 'We are always here to help you!', "/assets/img/tripHelper.jpg")
    ]

    arrayObject: Object = {
        'popular': this.galleryPopularDestination,
        'offer': this.gallerySpecialOffers,
        'helper': this.galleryHelper,
    }



    getArray(name: string): Gallery[] {
        return this.arrayObject[name].slice()
    }
}