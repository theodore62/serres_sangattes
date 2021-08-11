import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Injectable({
  providedIn: 'root',
})
export class IonicToastService {
  public myToast: any;

  constructor(public toast: ToastController) {}

  showToast(data) {
    this.myToast = this.toast
      .create({
        message: data,
        duration: 2000,
        position: 'top',
        cssClass: 'message'
      })
      .then((toastData) => {
        console.log(toastData);
        toastData.present();
      });
  }
}
