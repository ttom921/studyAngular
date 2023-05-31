import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { PushNotificationService } from './push-notification.service';

const VAPID_PUBLIC = "BKonVhFkna44GaFkmgMn58C9rCjOTjaDn9tNUwqCyW0SNf7ccI_Bq8m1YcbDFNNAEe-0pODKmpc9RGk-_SmRJ-c";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'pwa-example';
  constructor(swPush: SwPush, pushService: PushNotificationService) {
    if (swPush.isEnabled) {
      swPush.requestSubscription({
        serverPublicKey: VAPID_PUBLIC,
      })
        .then(subscription => {
          // send subscription to the server
          pushService.sendSubscriptionToTheServer(subscription).subscribe();
        })
        .catch(console.error);
    }
  }
}
