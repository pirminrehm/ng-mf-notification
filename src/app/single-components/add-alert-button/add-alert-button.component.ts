import { Component, Input, OnInit } from '@angular/core';
import { LocalStroageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'ntf-add-alert-button',
  templateUrl: './add-alert-button.component.html',
  styleUrls: ['./add-alert-button.component.scss'],
})
export class AddAlertButtonComponent implements OnInit {
  @Input()
  location: string = '';

  @Input()
  type: 'civil-protection' | 'weather' = 'weather';

  notificationIsSet = false;

  constructor(private backendService: LocalStroageService) {
    console.log('constructor AddAlertButtonComponent');
  }

  ngOnInit(): void {
    this.checkIfNotificationIsSet();
  }

  addNotification(): void {
    this.backendService.addNotification({
      location: this.location,
      type: this.type,
    });
    this.checkIfNotificationIsSet();
  }

  removeNotification(): void {
    this.backendService.removeNotification({
      location: this.location,
      type: this.type,
    });
    this.checkIfNotificationIsSet();
  }

  checkIfNotificationIsSet() {
    this.notificationIsSet = this.backendService.isNotificationSet({
      location: this.location,
      type: this.type,
    });
  }
}
