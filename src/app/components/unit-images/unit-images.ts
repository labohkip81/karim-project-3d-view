import { Dialog } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-unit-images',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './unit-images.html',
  styleUrl: './unit-images.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
  
})
export class UnitImages {

   // Swiper
  swiperConfig: SwiperOptions = {
    // spaceBetween: 10,
    navigation: true,
    // preventClicks: false,
    // slidesPerView: 'auto',
    // freeMode: true,
    // watchSlidesProgress: true,
    // noSwipingSelector: 'a',
    // focusableElements: 'input, select, option, textarea, video, label'
  }

  constructor(private dialog: Dialog){

  }


  closeModal(){
    this.dialog.closeAll()
  }


}
