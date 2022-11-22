import { FormButtonComponent } from 'AutomatShared';
import { BorrowOperationService } from './../../../../../Services/OperationServices/borrow-operation.service';
import { BorrowDataDto, ItemDetailedDto, UBorrowService } from 'AutomatApi';
import { Component, OnInit, Input, ViewChild, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';

@Component({
  selector: 'user-item-detailed-form',
  templateUrl: './item-detailed-form.component.html',
  styleUrls: ['./item-detailed-form.component.scss']
})
export class ItemDetailedFormComponent implements OnInit {

  @Input()ItemDetailed:ItemDetailedDto = {}
  @Input()today:Date = new Date()

  @ViewChild('SubmitButton') SubmitButton!:FormButtonComponent;

  public BorrowForm: FormGroup = new FormGroup({
    dueTime: new FormControl('', [
      Validators.required,
    ]),
    Zustimmung: new FormControl(false, [Validators.requiredTrue]),
  });

  constructor(private BorrowService: BorrowOperationService) { }

  Borrow() {
    if (this.BorrowForm.valid) {
      this.SubmitButton.startFetch();
      const BorrowData: BorrowDataDto = this.BorrowForm.getRawValue();
      BorrowData.itemId = this.ItemDetailed.id;
      this.BorrowService
        .Borrow(BorrowData)
        .pipe(take(1))
        .subscribe((res) => {
          this.SubmitButton.finsihFetch();
          setTimeout(()=>this.openQRCodeDialog(res.qrCode??""),1100)
        });
    }
  }

  private openQRCodeDialog(qrCode:string){
    alert("Open QR Code Dialog")
  }

  ngOnInit(): void {
  }

}
