import { Subject, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  public LoadItems():BehaviorSubject<Item[]>{
    return new BehaviorSubject<Item[]>([
      {
        Id :0,Name:"Lan Kabel", 
        Description:"Mit diesem Kabel kann man sich mit einem Lan Verbinden",
        Image:"https://webshop-automat.spengergasse.at/images/product_images/info_images/00012-Micro-USB-zu-USB-1m.jpg",
        Price:20,
        count:6,
        SubName:"Lan Kabel 4m der Marke XY"
      },

      {
        Id :1,Name:"Kopfhörer", 
        Description:"Mit diesen Kopfhörer kann man Musik hören",
        Image:"https://webshop-automat.spengergasse.at/images/product_images/info_images/00016-Sony-Kopfh%C3%B6rer.jpg",
        Price:10,
        count:2,
        SubName:"Kabelgebundene Kopfhörer der Marke XY"
      },

      {
        Id :2,Name:"Powerbank", 
        Description:"Mit doesem Gerät kann man andere Geräte laden",
        Image:"https://webshop-automat.spengergasse.at/images/product_images/info_images/00020-Powerbank.jpg",
        Price:120,
        count:5,
        SubName:"Powerbank mit 4800 mpH der Marke XY"
      },

      {
        Id :3,Name:"USB C Kabel", 
        Description:"Mit diesem Kabel kann man sein Handy laden",
        Image:"https://webshop-automat.spengergasse.at/images/product_images/info_images/00013-USB-Typ-C-Kabel.jpg",
        Price:12,
        count:0,
        SubName:"USB C Kabel 4m der Marke XY"
      },

      {
        Id :3,Name:"Batterien", 
        Description:"Das sind ganz normale AAA Batterien",
        Image:"https://webshop-automat.spengergasse.at/images/product_images/info_images/00019-AA-Batterien.jpg",
        Price:12,
        count:0,
        SubName:"Batterien Marke XY 4Stk"
      },
      {
        Id :0,Name:"Lan Kabel", 
        Description:"Mit diesem Kabel kann man sich mit einem Lan Verbinden",
        Image:"https://webshop-automat.spengergasse.at/images/product_images/info_images/00012-Micro-USB-zu-USB-1m.jpg",
        Price:20,
        count:6,
        SubName:"Lan Kabel 4m der Marke XY"
      },

      {
        Id :1,Name:"Kopfhörer", 
        Description:"Mit diesen Kopfhörer kann man Musik hören",
        Image:"https://webshop-automat.spengergasse.at/images/product_images/info_images/00016-Sony-Kopfh%C3%B6rer.jpg",
        Price:10,
        count:2,
        SubName:"Kabelgebundene Kopfhörer der Marke XY"
      },

      {
        Id :2,Name:"Powerbank", 
        Description:"Mit doesem Gerät kann man andere Geräte laden",
        Image:"https://webshop-automat.spengergasse.at/images/product_images/info_images/00020-Powerbank.jpg",
        Price:120,
        count:5,
        SubName:"Powerbank mit 4800 mpH der Marke XY"
      },

      {
        Id :3,Name:"USB C Kabel", 
        Description:"Mit diesem Kabel kann man sein Handy laden",
        Image:"https://webshop-automat.spengergasse.at/images/product_images/info_images/00013-USB-Typ-C-Kabel.jpg",
        Price:12,
        count:0,
        SubName:"USB C Kabel 4m der Marke XY"
      },

      {
        Id :3,Name:"Batterien", 
        Description:"Das sind ganz normale AAA Batterien",
        Image:"https://webshop-automat.spengergasse.at/images/product_images/info_images/00019-AA-Batterien.jpg",
        Price:12,
        count:0,
        SubName:"Batterien Marke XY 4Stk"
      },
      {
        Id :0,Name:"Lan Kabel", 
        Description:"Mit diesem Kabel kann man sich mit einem Lan Verbinden",
        Image:"https://webshop-automat.spengergasse.at/images/product_images/info_images/00012-Micro-USB-zu-USB-1m.jpg",
        Price:20,
        count:6,
        SubName:"Lan Kabel 4m der Marke XY"
      },

      {
        Id :1,Name:"Kopfhörer", 
        Description:"Mit diesen Kopfhörer kann man Musik hören",
        Image:"https://webshop-automat.spengergasse.at/images/product_images/info_images/00016-Sony-Kopfh%C3%B6rer.jpg",
        Price:10,
        count:2,
        SubName:"Kabelgebundene Kopfhörer der Marke XY"
      },

      {
        Id :2,Name:"Powerbank", 
        Description:"Mit doesem Gerät kann man andere Geräte laden",
        Image:"https://webshop-automat.spengergasse.at/images/product_images/info_images/00020-Powerbank.jpg",
        Price:120,
        count:5,
        SubName:"Powerbank mit 4800 mpH der Marke XY"
      },

      {
        Id :3,Name:"USB C Kabel", 
        Description:"Mit diesem Kabel kann man sein Handy laden",
        Image:"https://webshop-automat.spengergasse.at/images/product_images/info_images/00013-USB-Typ-C-Kabel.jpg",
        Price:12,
        count:0,
        SubName:"USB C Kabel 4m der Marke XY"
      },

      {
        Id :3,Name:"Batterien", 
        Description:"Das sind ganz normale AAA Batterien",
        Image:"https://webshop-automat.spengergasse.at/images/product_images/info_images/00019-AA-Batterien.jpg",
        Price:12,
        count:0,
        SubName:"Batterien Marke XY 4Stk"
      },
      {
        Id :0,Name:"Lan Kabel", 
        Description:"Mit diesem Kabel kann man sich mit einem Lan Verbinden",
        Image:"https://webshop-automat.spengergasse.at/images/product_images/info_images/00012-Micro-USB-zu-USB-1m.jpg",
        Price:20,
        count:6,
        SubName:"Lan Kabel 4m der Marke XY"
      },

      {
        Id :1,Name:"Kopfhörer", 
        Description:"Mit diesen Kopfhörer kann man Musik hören",
        Image:"https://webshop-automat.spengergasse.at/images/product_images/info_images/00016-Sony-Kopfh%C3%B6rer.jpg",
        Price:10,
        count:2,
        SubName:"Kabelgebundene Kopfhörer der Marke XY"
      },

      {
        Id :2,Name:"Powerbank", 
        Description:"Mit doesem Gerät kann man andere Geräte laden",
        Image:"https://webshop-automat.spengergasse.at/images/product_images/info_images/00020-Powerbank.jpg",
        Price:120,
        count:5,
        SubName:"Powerbank mit 4800 mpH der Marke XY"
      },

      {
        Id :3,Name:"USB C Kabel", 
        Description:"Mit diesem Kabel kann man sein Handy laden",
        Image:"https://webshop-automat.spengergasse.at/images/product_images/info_images/00013-USB-Typ-C-Kabel.jpg",
        Price:12,
        count:0,
        SubName:"USB C Kabel 4m der Marke XY"
      },

      {
        Id :3,Name:"Batterien", 
        Description:"Das sind ganz normale AAA Batterien",
        Image:"https://webshop-automat.spengergasse.at/images/product_images/info_images/00019-AA-Batterien.jpg",
        Price:12,
        count:0,
        SubName:"Batterien Marke XY 4Stk"
      },
      {
        Id :0,Name:"Lan Kabel", 
        Description:"Mit diesem Kabel kann man sich mit einem Lan Verbinden",
        Image:"https://webshop-automat.spengergasse.at/images/product_images/info_images/00012-Micro-USB-zu-USB-1m.jpg",
        Price:20,
        count:6,
        SubName:"Lan Kabel 4m der Marke XY"
      },

      {
        Id :1,Name:"Kopfhörer", 
        Description:"Mit diesen Kopfhörer kann man Musik hören",
        Image:"https://webshop-automat.spengergasse.at/images/product_images/info_images/00016-Sony-Kopfh%C3%B6rer.jpg",
        Price:10,
        count:2,
        SubName:"Kabelgebundene Kopfhörer der Marke XY"
      },

      {
        Id :2,Name:"Powerbank", 
        Description:"Mit doesem Gerät kann man andere Geräte laden",
        Image:"https://webshop-automat.spengergasse.at/images/product_images/info_images/00020-Powerbank.jpg",
        Price:120,
        count:5,
        SubName:"Powerbank mit 4800 mpH der Marke XY"
      },

      {
        Id :3,Name:"USB C Kabel", 
        Description:"Mit diesem Kabel kann man sein Handy laden",
        Image:"https://webshop-automat.spengergasse.at/images/product_images/info_images/00013-USB-Typ-C-Kabel.jpg",
        Price:12,
        count:0,
        SubName:"USB C Kabel 4m der Marke XY"
      },

      {
        Id :3,Name:"Batterien", 
        Description:"Das sind ganz normale AAA Batterien",
        Image:"https://webshop-automat.spengergasse.at/images/product_images/info_images/00019-AA-Batterien.jpg",
        Price:12,
        count:0,
        SubName:"Batterien Marke XY 4Stk"
      }
    ]);
  }
}

export interface Item{
    Id:number
    Name:string
    SubName:string,
    Description:string,
    Image:string
    Price:number,
    
    count:number,

}

