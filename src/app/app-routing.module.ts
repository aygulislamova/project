import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DopInfComponent } from './dop-inf/dop-inf.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TeoriyaComponent } from './teoriya/teoriya.component';
import { TestsComponent } from './tests/tests.component';
import { Tema1Component } from './teoriya/tema1/tema1.component';
import { Tema2Component } from './teoriya/tema2/tema2.component';
import { Tema3Component } from './teoriya/tema3/tema3.component';
import { Tema4Component } from './teoriya/tema4/tema4.component';
import { Tema5Component } from './teoriya/tema5/tema5.component';
import { Tema6Component } from './teoriya/tema6/tema6.component';
import { Test1Component } from './tests/test1/test1.component';
import { Test2Component } from './tests/test2/test2.component';
import { OProekteComponent } from './o-proekte/o-proekte.component';
import { PractikaComponent } from './practika/practika.component';
import { GimnastikaComponent } from './practika/gimnastika/gimnastika.component';
import { IgriComponent } from './practika/igri/igri.component';
import { ElementsComponent } from './practika/gimnastika/elements/elements.component';
const routes: Routes = [
  {path:'',component: HomeComponent },
  {path:'dop-inf',component: DopInfComponent },
  {path:'teoriya',component: TeoriyaComponent },
  {path:'tests',component: TestsComponent },
  {path:'tests/test1',component: Test1Component },
  {path:'tests/test2',component: Test2Component },
  {path: 'teoriya/tema1',component:Tema1Component },
  {path: 'teoriya/tema2',component:Tema2Component },
  {path: 'teoriya/tema3',component:Tema3Component },
  {path: 'teoriya/tema4',component:Tema4Component },
  {path: 'teoriya/tema5',component:Tema5Component },
  {path: 'teoriya/tema6',component:Tema6Component },
  {path: 'oproekte',component:OProekteComponent },
  {path: 'practika',component:PractikaComponent },
  {path: 'practika/gimnastika',component:GimnastikaComponent },
  {path: 'practika/gimnastika/elements',component:ElementsComponent },
  {path: 'practika/igri',component:IgriComponent },
  
  {path:'**',component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
