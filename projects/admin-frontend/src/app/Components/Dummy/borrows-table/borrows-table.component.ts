import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { UserAdmiBorrowDto } from 'AutomatApi';
import { BorrowDetailedDialogComponent } from '../../Dialogs/borrow-detailed-dialog/borrow-detailed-dialog.component';

@Component({
  selector: 'admin-borrows-table',
  templateUrl: './borrows-table.component.html',
  styleUrls: ['./borrows-table.component.scss'],
})
export class BorrowsTableComponent implements OnInit {

  @Input() public BorrowRows: null | Array<UserAdmiBorrowDto> = null!;
  @Input() public ShowToUser:boolean = false;
  @Input() public ShowToItem:boolean = true;

  public ColumnMode = ColumnMode;

  columns = [{ name: 'Id' }, { name: 'Itemname' }, { name: 'BorrowDate' }];

  constructor(private dialog: MatDialog) {}
  ngOnInit(): void {}

  public getRowClass(row: any) {
    let stat = row.stati;
    if (stat == 0) {
      return 'borrowNotReturned';
    }
    if (stat == 2) {
      return 'borrowReturned';
    }
    return '';
  }

  public onRowClick(event: any) {
    if (event.type == 'click') {
      BorrowDetailedDialogComponent.openDialog(this.dialog, event.row.id, this.ShowToUser, this.ShowToItem)
        .afterClosed()
        .subscribe(() => {
          this.ngOnInit();
        });
    }
  }
}
