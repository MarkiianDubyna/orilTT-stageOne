import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './components/app/app.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {HomeComponent} from './components/home/home.component';
import {HeaderComponent} from './components/header/header.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
