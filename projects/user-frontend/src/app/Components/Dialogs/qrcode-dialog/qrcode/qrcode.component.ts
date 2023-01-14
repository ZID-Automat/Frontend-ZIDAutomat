import {
  Component,
  Input,
  OnInit,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'user-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss'],
})
export class QrcodeComponent implements OnInit {
  @Input() qrcode: string = undefined!;
  width: number = 400;

  constructor() {
    this.updateDays();
  }

  ngOnInit(): void {}

  @HostListener('window:resize', []) updateDays() {
    // lg (for laptops and desktops - screens equal to or greater than 1200px wide)
    // md (for small laptops - screens equal to or greater than 992px wide)
    // sm (for tablets - screens equal to or greater than 768px wide)
    // xs (for phones - screens less than 768px wide)

    // if (window.innerWidth >= 1200) {
    //   this.width = 700; // lg
    // } else if (window.innerWidth >= 992) {
    //   this.width = 600;//md
    // } else if (window.innerWidth  >= 768) {
    //   this.width = 500;//sm
    // } else if (window.innerWidth < 768) {
    //   this.width = 300;//xs
    // }
    this.width = window.innerWidth * 0.6;
  }
}
