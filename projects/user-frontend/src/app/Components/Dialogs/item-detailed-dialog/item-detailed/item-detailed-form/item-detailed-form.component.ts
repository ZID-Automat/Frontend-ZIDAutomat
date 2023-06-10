import { MatDialog } from '@angular/material/dialog';
import { BorrowOperationService } from './../../../../../Services/OperationServices/borrow-operation.service';
import { BorrowDataDto, ItemDetailedDto, UBorrowService } from 'AutomatApi';
import { Component, OnInit, Input, ViewChild, Inject, AfterViewInit, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { QrcodeDialogComponent } from '../../../qrcode-dialog/qrcode-dialog.component';
import { FormButtonComponent } from 'AutomatShared';

@Component({
  selector: 'user-item-detailed-form',
  templateUrl: './item-detailed-form.component.html',
  styleUrls: ['./item-detailed-form.component.scss']
})
export class ItemDetailedFormComponent implements OnInit, AfterViewInit {

  @Input()ItemDetailed:ItemDetailedDto = {}
  @Input()today:Date = new Date()

  @ViewChild('SubmitButton') SubmitButton!:FormButtonComponent;
  @ViewChild('DatePicker') picker!:any;

  errormessage = ""

  public BorrowForm: FormGroup = new FormGroup({
    dueTime: new FormControl('', [
      Validators.required,
    ]),
    Zustimmung: new FormControl(false, [Validators.requiredTrue]),
  });

  constructor(private BorrowService: BorrowOperationService, private matDialog: MatDialog, private ref:ElementRef) { }
  ngAfterViewInit(): void {
    this.BorrowForm.markAsDirty();
  }

  Borrow() {
    if (this.BorrowForm.valid) {
      this.SubmitButton.startFetch();
      const BorrowData: BorrowDataDto = this.BorrowForm.getRawValue();
      BorrowData.itemId = this.ItemDetailed.id;
      const date = new Date();
      date.setHours(date.getHours()+1)
      this.BorrowService
        .Borrow(BorrowData)
        .pipe(take(1))
        .subscribe((res) => {
          this.SubmitButton.finsihFetch();
          setTimeout(()=>{
            this.openQRCodeDialog(res.qrCode??"",date)
            this.BorrowForm.reset();
          },1100)
        },
        (res) =>{
          this.errormessage = res.error.message;
          this.SubmitButton.finsihFetch();
        });
    }
  }

  private openQRCodeDialog(qrCode:string, date:Date){
    QrcodeDialogComponent.openDialog({qrcode:qrCode, duetime:date },this.matDialog)
  }

  ngOnInit(): void {
  }

}
