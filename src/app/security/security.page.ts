import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-security',
  templateUrl: 'security.page.html',
  styleUrls: ['security.page.scss']
})
export class SecurityPage implements OnInit{

  showIntro: boolean = true;
  showRecuperarSenha: boolean = false;
  isModalOpen = false;
  isAlertOpen = false;

  constructor(private alertController: AlertController) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.showIntro = false;
    }, 4000)
  }

  recuperarSenha(){
    this.showRecuperarSenha = true;
  }
  voltarLogin(){
    this.showRecuperarSenha = false;
  }
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  handleRegister() {
    this.setOpen(true);
    this.presentAlert();
  }

  handleCancel() {
    this.setOpen(false);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Atenção',
      message: 'Para criar sua conta, utilize um e-mail válido. Caso esqueça sua senha no futuro, o link para redefinição será enviado para esse e-mail.',
      buttons: ['Ok'],
    });

    await alert.present();
  }

}
