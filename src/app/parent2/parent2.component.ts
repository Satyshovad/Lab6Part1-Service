import { Component, OnInit } from '@angular/core';
import {SharedService} from '../services/shared.service';
import {LoggingService} from '../services/logging.service';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css'],
  providers: [LoggingService, SharedService]
})
export class Parent2Component implements OnInit {
  sharedValue: string;

  constructor(private sharedService: SharedService) {
    this.sharedValue = this.sharedService.getValue();
  }

  ngOnInit(): void {
  }

}
