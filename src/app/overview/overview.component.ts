import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SharedService } from '@ng-mf/shared';
import {
  LocalStroageService,
  NotificationAlert,
} from '../services/local-storage.service';

@Component({
  selector: 'ntf-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class OverviewComponent implements OnInit {
  user;

  constructor(
    private backendService: LocalStroageService,
    private sharedService: SharedService
  ) {
    this.user = this.sharedService.userName;
  }

  notifications: NotificationAlert[] = [];

  ngOnInit(): void {
    this.notifications = this.backendService.getNotifications();
  }
}
