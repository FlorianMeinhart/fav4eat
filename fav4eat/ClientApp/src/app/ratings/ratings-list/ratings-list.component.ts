import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-ratings-list',
  templateUrl: './ratings-list.component.html',
  styleUrls: ['./ratings-list.component.css']
})
export class RatingsListComponent implements OnInit {

  selectedItemGuidDblClick: string = "nothing selected";

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

  changeSelectedItemGuid(event: string) {
    this.selectedItemGuidDblClick = event;
  }
}
