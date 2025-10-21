import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
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



@NgModule({
  declarations: [
    App,
    ProjectCard,
    ProjectDetailsCard,
    ImagesCard,
    HoverModal,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    NgxPanZoomModule,
    MaterialModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
