import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
  declarations: [SlideshowBackdropComponent],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  exports: [SlideshowBackdropComponent]
})
export class ComponentsModule { }
