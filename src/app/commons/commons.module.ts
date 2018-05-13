import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonsRoutingModule } from './commons-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    CommonsRoutingModule
  ],
  declarations: [HomeComponent, HeaderComponent, NavbarComponent, NotFoundComponent],
  exports: [HomeComponent, HeaderComponent, NavbarComponent]
})
export class CommonsModule { }
