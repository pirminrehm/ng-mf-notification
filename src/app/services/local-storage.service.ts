import { Injectable } from '@angular/core';

export interface NotificationAlert {
  type: 'weather' | 'civil-protection';
  location: string;
}

@Injectable({
  providedIn: 'root',
})
export class LocalStroageService {
  constructor() {}

  // private notifications: NotificationAlert[] = [];

  getNotifications(): NotificationAlert[] {
    const ntfs = this.loadFromStorage();
    console.log('get', ntfs);
    return ntfs;
  }

  addNotification(notifcation: NotificationAlert): void {
    const ntfs = this.loadFromStorage();
    ntfs.push(notifcation);
    this.saveToStorage(ntfs);
    console.log('add', ntfs);
  }

  removeNotification(notifcation: NotificationAlert): void {
    let ntfs = this.loadFromStorage();

    ntfs = ntfs.filter(
      (nf) =>
        !(nf.location === notifcation.location && nf.type === notifcation.type)
    );
    this.saveToStorage(ntfs);
    console.log('remove', ntfs);
  }

  isNotificationSet(notifcation: NotificationAlert): boolean {
    return this.loadFromStorage().some(
      (nf) =>
        nf.location === notifcation.location && nf.type === notifcation.type
    );
  }

  saveToStorage(notifications: NotificationAlert[]) {
    localStorage.setItem('notifications', JSON.stringify(notifications));
  }

  loadFromStorage(): NotificationAlert[] {
    return JSON.parse(localStorage.getItem('notifications') || '[]');
  }
}
