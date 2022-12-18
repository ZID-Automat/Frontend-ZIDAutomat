import { Component, Input, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'user-qrcode-dialog',
  templateUrl: './qrcode-dialog.component.html',
  styleUrls: ['./qrcode-dialog.component.scss'],
})
export class QrcodeDialogComponent implements OnInit {
  @Input() qrcode: string = undefined!;

  constructor() {}

  ngOnInit(): void {}
}
