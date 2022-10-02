import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopingCartComponent } from './shoping-cart/shopping-cart.component';
import { ShoppingCartItemComponent } from './shoping-cart/shopping-cart-item.component';

const AppRoutes: Routes=[
  {path:'home', component: HomeComponent},
{path:'login', component: LoginComponent}


];
@NgModule({
  declarations: [
    AppComponent,
LoginComponent,
HomeComponent,
ShopingCartComponent,
ShoppingCartItemComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatToolbarModule, 
    MatProgressBarModule,
    MatIconModule,
    MatCardModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatButtonModule,
    MatBadgeModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
