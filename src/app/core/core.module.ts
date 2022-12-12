import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { DocumentComponent } from './document/document.component';

@NgModule({
  declarations: [DocumentComponent],
  imports: [CommonModule, CoreRoutingModule],
})
export class CoreModule {}
