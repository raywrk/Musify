import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewlineToBrPipe } from './pipe/new-line.pipe';
import { TimeFormatPipe } from './pipe/time-format.pipe';
import { HttpClientModule } from '@angular/common/http';

const components = [
  NewlineToBrPipe,
  TimeFormatPipe
]

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    HttpClientModule
  ],
  declarations: [components],
  exports: [components]
})
export class SharedModule {}
