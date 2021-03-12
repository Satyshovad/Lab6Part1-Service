import {Injectable} from '@angular/core';
import {LoggingService} from './logging.service';

@Injectable()

export class SharedService {

  constructor(private loggingService: LoggingService) {
  }

  // tslint:disable-next-line:typedef
  getValue(){
  let sharedValue: string;
  sharedValue = 'This is shared message';
  this.loggingService.log('Shared value: ' + sharedValue);
  return sharedValue;
  }
}


