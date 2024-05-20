import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewlineToBrPipe } from './pipe/new-line.pipe';

const components = [
  NewlineToBrPipe
]

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  declarations: [components],
  exports: [components]
})
export class SharedModule {}
