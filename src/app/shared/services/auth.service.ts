import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from './local-storage.service';
import { AlertController } from '@ionic/angular';
import { IonicLoadingService } from './ionic-loading.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private ls: LocalStorageService,
    private ionicLoading: IonicLoadingService
  ) { }

  JWT_TOKEN = "AccessToken"
  USER_DATA = "UserData"

  login(email: string, senha: string){
    this.ionicLoading.presentLoading('Logging in...');
    return this.http.post(environment.baseUrl + '/login', { email, senha})
    .pipe(
      map((res: any) => {
        this.setUserAndToken(res.token, res.usuario);
        this.ionicLoading.dismissLoading();
      })
    )
  }

  setUserAndToken(token: string, user: any){
    this.ls.setItem(this.JWT_TOKEN, token),
    this.ls.setItem(this.USER_DATA, user)
  }


}
