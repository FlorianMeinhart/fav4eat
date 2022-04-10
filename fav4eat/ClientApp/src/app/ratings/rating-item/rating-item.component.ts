import { Component, ElementRef, Input, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { Rating } from '../rating.model';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-rating-item',
  templateUrl: './rating-item.component.html',
  styleUrls: ['./rating-item.component.css']
})
export class RatingItemComponent implements OnInit {

  @Input() rating: Rating;
  @Output() selectedEvent = new EventEmitter<string>();
  @ViewChild('stars') stars: ElementRef<HTMLInputElement>;
  faStar = faStar;

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    //setTimeout(() => {
    //  this.stars.nativeElement.children[0].children[0].setAttribute('style', 'color: red');
    //  console.info(this.stars.nativeElement.children[0]);
    //}, 2000);
  }

  onSelectSingleClick() {
    this.dataService.selectedItemGuid = this.rating.id;
  }

  onSelectDblClick() {
    //alert("You selected the item with the GUID: " + this.rating.id);
    this.selectedEvent.emit(this.rating.id);
  }

}
