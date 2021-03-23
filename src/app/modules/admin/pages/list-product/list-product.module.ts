import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductComponent } from './list-product/list-product.component';
import { ListProductFormmComponent } from './list-product-formm/list-product-formm.component';
import { ListProductTableComponent } from './list-product-table/list-product-table.component';
import { ProductRoutingModule } from './product-routing.module';



@NgModule({
  declarations: [ListProductComponent, ListProductFormmComponent, ListProductTableComponent],
  imports: [
    ProductRoutingModule,
    CommonModule
  ]
})
export class ListProductModule { }
