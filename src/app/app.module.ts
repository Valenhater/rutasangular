import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {routing, appRoutingProvider} from './app.routing'

import { AppComponent } from './app.component';
import { CineComponent } from './components/cine/cine.component';
import { HomeComponent } from './components/home/home.component';
import { MusicaComponent } from './components/musica/musica.component';

@NgModule({
  declarations: [
    AppComponent,
    CineComponent,
    HomeComponent,
    MusicaComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRoutingProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
