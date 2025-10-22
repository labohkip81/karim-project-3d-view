import { CUSTOM_ELEMENTS_SCHEMA, NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MaterialModule } from './modules/material/material-module';
import { Home } from './pages/home/home';
import { NgxPanZoomModule } from 'ngx-panzoom';
import { ProjectCard } from './components/project-card/project-card';
import { ProjectDetailsCard } from './components/project-details-card/project-details-card';
import { ImagesCard } from './components/images-card/images-card';
import { HoverModal } from './components/hover-modal/hover-modal';
import { Panorama } from './components/panorama/panorama';
import { UnitImages } from './components/unit-images/unit-images';
import { FloorPlans } from './components/floor-plans/floor-plans';
import { register } from 'swiper/element/bundle';
import { Book } from './components/book/book';
import { ReactiveFormsModule } from '@angular/forms';

// register Swiper custom elements
register();

@NgModule({
  declarations: [
    App,
    ProjectCard,
    ProjectDetailsCard,
    ImagesCard,
    HoverModal,
    Panorama,
    FloorPlans,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    NgxPanZoomModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
