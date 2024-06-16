import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class IonicLoadingService {

  private loading: HTMLIonLoadingElement;

  constructor(private loadingController: LoadingController) {}

  async presentLoading(message: string = 'Please wait...') {
    this.loading = await this.loadingController.create({
      message,
      spinner: 'circles',
    });
    await this.loading.present();
  }

  async dismissLoading() {
    if (this.loading) {
      await this.loading.dismiss();
    }
  }

}
