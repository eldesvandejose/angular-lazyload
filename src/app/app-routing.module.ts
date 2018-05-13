import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './commons/home/home.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { SuppliersListComponent } from './suppliers/suppliers-list/suppliers-list.component';
import { NotFoundComponent } from './commons/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'clientes',
    component: CustomersListComponent
  },
  {
    path: 'proveedores',
    component: SuppliersListComponent
  },
  {
    path: 'almacen',
    loadChildren: './storing/storing.module#StoringModule'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
