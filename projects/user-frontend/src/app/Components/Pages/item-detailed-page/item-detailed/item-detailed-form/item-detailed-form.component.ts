import { ItemDetailedDto } from 'AutomatApi';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'user-item-detailed-form',
  templateUrl: './item-detailed-form.component.html',
  styleUrls: ['./item-detailed-form.component.scss']
})
export class ItemDetailedFormComponent implements OnInit {

  @Input()ItemDetailed:ItemDetailedDto = {}

  public BorrowForm: FormGroup = new FormGroup({
    BorrowDate: new FormControl('', [
      Validators.required,
    ]),
    AGB: new FormControl(false, [Validators.requiredTrue]),
  });

  filterDates = (d: Date|null): boolean => {
    if(null){
      return false;
    }

    return false;
  };

  constructor() { }

  ngOnInit(): void {
  }

}