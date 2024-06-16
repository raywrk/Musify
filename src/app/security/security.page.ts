import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-security',
  templateUrl: 'security.page.html',
  styleUrls: ['security.page.scss']
})
export class SecurityPage implements OnInit{

  formLogin!: FormGroup;
  showIntro: boolean = true;
  showRecuperarSenha: boolean = false;
  isModalOpen = false;
  isAlertOpen = false;

  constructor(
    private alertController: AlertController,
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.showIntro = false;
    }, 4000)

    this.formLogin = this.fb.group({
      email: ['', Validators.required],
      senha: ['', Validators.required]
    })
  }

  onLogin(){
    const { email, senha } = this.formLogin.value;
    this.auth.login(email, senha).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/home'])
      }
    })
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
