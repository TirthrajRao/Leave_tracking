import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {

  notificationDetails;
  notificationDetailsCount;

  constructor(public _userService: UserService, private localNotifications: LocalNotifications) { }

  ngOnInit() {
    this.getNotification()

  }


  getNotification() {
    this._userService.getNotification().subscribe((data: any) => {
      this.notificationDetails = data.data;
      this.notificationDetailsCount = data.data.length;
      console.log("notification data", this.notificationDetails);
      // this.scheduleNotification(this.notificationDetails)
    }, err => {
      console.log(err)
    })
  }
}
