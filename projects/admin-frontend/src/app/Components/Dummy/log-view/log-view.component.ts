import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'admin-log-view',
  templateUrl: './log-view.component.html',
  styleUrls: ['./log-view.component.scss'],
})
export class LogViewComponent implements OnInit {
  public log_items: LogItem[] = [
    {
      timestamp: new Date(),
      message: 'Test',
      type: 'info',
    },
    {
      timestamp: new Date(),
      message: 'Test',
      type: 'info',
    },
    {
      timestamp: new Date(),
      message: 'Test',
      type: 'info',
    },
    {
      timestamp: new Date(),
      message: 'Test',
      type: 'info',
    },
    {
      timestamp: new Date(),
      message: 'Test',
      type: 'info',
    },
    {
      timestamp: new Date(),
      message: 'Test',
      type: 'info',
    },
  ];

  // public LoginInfoForm: FormGroup = new FormGroup({
  //   filter_from_date: new FormControl(
  //     new Date().toISOString().substring(0, 10)
  //   ),
  //   filter_from_time: new FormControl(
  //     new Date().toISOString().substring(11, 16)
  //   ),
  // });

  constructor() {}

  ngOnInit(): void {}
}
export interface LogItem {
  timestamp: Date;
  message: string;
  type: string;
}
