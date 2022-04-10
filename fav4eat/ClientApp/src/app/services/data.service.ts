import { Injectable } from '@angular/core';
import { Rating } from '../ratings/rating.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  ratings: Rating[] = [
    {
      id: 'b77d409a-10cd-4a47-8e94-b0cd0ab50aa1',
      score: 3,
      description: 'This is a nice Schnitzel',
      imgPath: 'https://www.gusto.at/_storage/asset/7316907/storage/womanat:slideshow-large/file/172859965/2014-06-034-A.jpg'
    },
    {
      id: 'b77d409a-10cd-4a47-8e94-b0cd0ab50aa2',
      score: 5,
      description: 'This is a very nice Leberkassemmerl',
      imgPath: 'https://oekastatic.orf.at/static/images/site/oeka/20140939/fotolia_58940308_subscription_xxl.5291634.jpg'
    }
  ];

  constructor() { }
}
