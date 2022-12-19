import { Component, Input, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'user-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss'],
})
export class QrcodeComponent implements OnInit {
  @Input() qrcode: string = undefined!;

  constructor() {}

  ngOnInit(): void {}
}
