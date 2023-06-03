import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { createClient } from 'pexels';
import { from, take } from 'rxjs';

@Component({
  selector: 'admin-select-stock-image-dialog',
  templateUrl: './select-stock-image-dialog.component.html',
  styleUrls: ['./select-stock-image-dialog.component.scss']
})
export class SelectStockImageDialogComponent implements OnInit {

  page = 0;
  currentimage = ""

  @ViewChild('inputf') Inputf: any;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any,private MatDialogRef:MatDialogRef<SelectStockImageDialogComponent>) { }

  ngOnInit(): void {
    this.loadImage();
  }

  public static openDialog(dialog: MatDialog, Suche:string) :MatDialogRef<SelectStockImageDialogComponent>{
    return dialog.open(SelectStockImageDialogComponent, {
      width: '40vh',
      height: 'fit-content',
      data:{startSuch:Suche}
    })
  }

  lastLoad = ""
  loadImage(){
    this.currentimage = "";
    const client = createClient('7hEpP9me8j7NRXvU4wCEWuIYQ0iXBjUrdwSVdyRxcPxIxqtz3UcXZhzZ');
    const query = this.Inputf?.nativeElement?.value??this.data.startSuch;

    if(this.lastLoad != query){
      this.page = 0;
    }

    from(client.photos.search({ query, per_page: 1,page:this.page })).pipe(take(1)).subscribe(res=>{

      this.currentimage = (res as any)?.photos[0]?.src?.original;
      if(!this.currentimage){
        alert("Kein Bild gefunden, versuche Englische Begriffe")
      }
    });
    this.page++;

    this.lastLoad = query;
  }

  UseThisImage(){
    this.MatDialogRef.close(this.currentimage);
  }
}
