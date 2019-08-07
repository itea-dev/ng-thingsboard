import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetRoutingModule } from './asset-routing.module';
import { AssetsComponent } from './assets.component';


@NgModule({
  declarations: [AssetsComponent],
  imports: [
    CommonModule,
    AssetRoutingModule
  ]
})
export class AssetModule { }
