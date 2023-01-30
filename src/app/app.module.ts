import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TeoriyaComponent } from './teoriya/teoriya.component';
import { TestsComponent } from './tests/tests.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DopInfComponent } from './dop-inf/dop-inf.component';
import { Tema1Component } from './teoriya/tema1/tema1.component';
import { Tema2Component } from './teoriya/tema2/tema2.component';
import { Tema3Component } from './teoriya/tema3/tema3.component';
import { Tema4Component } from './teoriya/tema4/tema4.component';
import { Test1Component } from './tests/test1/test1.component';
import { Test2Component } from './tests/test2/test2.component';
import { OProekteComponent } from './o-proekte/o-proekte.component';
import { PractikaComponent } from './practika/practika.component';
import { Tema6Component } from './teoriya/tema6/tema6.component';
import { Tema5Component } from './teoriya/tema5/tema5.component';
import { Tema7Component } from './teoriya/tema7/tema7.component';
import { IgriComponent } from './practika/igri/igri.component';
import {GimnastikaComponent} from './practika/gimnastika/gimnastika.component';
import { ElementsComponent } from './practika/gimnastika/elements/elements.component';
import { Test4Component } from './test4/test4.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeoriyaComponent,
    TestsComponent,
    NotFoundComponent,
    DopInfComponent,
    Tema1Component,
    Tema2Component,
    Tema3Component,
    Tema4Component,
    Test1Component,
    Test2Component,
    OProekteComponent,
    PractikaComponent,
    Tema6Component,
    Tema5Component,
    Tema7Component,
    IgriComponent,
    GimnastikaComponent,
    ElementsComponent,
    Test4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
