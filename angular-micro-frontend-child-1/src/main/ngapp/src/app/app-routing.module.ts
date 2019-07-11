import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ElementAComponent} from './components/element-a/element-a.component';
import {ElementBComponent} from './components/element-b/element-b.component';

const routes: Routes = [
  {path: 'elementa', component: ElementAComponent},
  {path: 'elementb', component: ElementBComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
