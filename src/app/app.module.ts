import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatRippleModule, MatTabsModule} from '@angular/material';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatRippleModule,
    MatTabsModule
    // MatIconModule
  ],
  exports: [MatRippleModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
