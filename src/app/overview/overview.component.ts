import { Component, OnInit } from '@angular/core';
import {
  LocalStroageService,
  NotificationAlert,
} from '../services/local-storage.service';

@Component({
  selector: 'ntf-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  constructor(private backendService: LocalStroageService) {}

  notifications: NotificationAlert[] = [];

  ngOnInit(): void {
    this.notifications = this.backendService.getNotifications();
  }
}
