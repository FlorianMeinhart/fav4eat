import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Rating } from '../rating.model';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-rating-item',
  templateUrl: './rating-item.component.html',
  styleUrls: ['./rating-item.component.css']
})
export class RatingItemComponent implements OnInit {

  @Input() rating: Rating;
  @ViewChild('stars') stars: ElementRef<HTMLInputElement>;
  faStar = faStar;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.stars.nativeElement.children[0].children[0].setAttribute('style', 'color: red');
      console.info(this.stars.nativeElement.children[0]);
    }, 2000);
  }

}
