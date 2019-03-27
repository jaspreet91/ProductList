import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailedViewComponent } from './detailed-view/detailed-view.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  { path: '' , component: HomeComponent},
  { path: 'create' , component: AddProductComponent, pathMatch: 'full' },
  { path: ':id' , component: DetailedViewComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
