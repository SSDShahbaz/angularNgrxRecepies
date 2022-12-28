import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EntityDataModule, HttpUrlGenerator } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { entityConfig } from './entity-metadata';
import { HeroesComponent } from './Heroes/Heroes.component';
import { CustomurlHttpGenerator } from './shared/store/customurl-http-generator';
import { HomeComponent } from './components/home/home.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [	
    AppComponent,
      HeroesComponent,
      HomeComponent,
      AddComponent,
      EditComponent,
      NavbarComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig)
  ],
  providers: [{
    provide: HttpUrlGenerator,
    useClass: CustomurlHttpGenerator,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
