import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuppliersRoutingModule } from './suppliers-routing.module';
import { SuppliersListComponent } from './suppliers-list/suppliers-list.component';
import { SupplierDataComponent } from './supplier-data/supplier-data.component';

@NgModule({
  imports: [
    CommonModule,
    SuppliersRoutingModule
  ],
  declarations: [SuppliersListComponent, SupplierDataComponent],
  exports: [SuppliersListComponent, SupplierDataComponent]
})
export class SuppliersModule { }
