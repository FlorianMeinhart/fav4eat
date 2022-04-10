import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Guid } from 'guid-typescript';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-new-rating',
  templateUrl: './new-rating.component.html',
  styleUrls: ['./new-rating.component.css']
})
export class NewRatingComponent implements OnInit {

  ratingForm = new FormGroup({
    score: new FormControl(''),
    description: new FormControl(''),
    imgPath: new FormControl('')
  });

  constructor(public dataService: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.ratingForm.value);

    this.dataService.ratings.push(
      {
        ...this.ratingForm.value,
        id: Guid.create().toString()
      }
    )

    this.router.navigate(['/']);
  }

}
