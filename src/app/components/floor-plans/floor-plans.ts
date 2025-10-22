import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-floor-plans',
  standalone: false,
  templateUrl: './floor-plans.html',
  styleUrl: './floor-plans.css'
})
export class FloorPlans {


  constructor(private dialog: Dialog){

  }

  closeModal(){
    this.dialog.closeAll()
  }

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

}
