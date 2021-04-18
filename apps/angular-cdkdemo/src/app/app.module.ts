import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BulmaModule } from '@gallinocoq/blumajpdeffo';
//import {BulmaModule} from 'jpdeffoscript'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BulmaModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
