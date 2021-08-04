import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogContentComponent } from './dialog-content.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DialogContentComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class DialogContentModule { }
