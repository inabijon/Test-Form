import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { DocumentCreateComponent } from './document-create/document-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { DocumentIdComponent } from './document-id/document-id.component';

@NgModule({
  declarations: [DocumentCreateComponent, DocumentIdComponent],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class FeatureModule {}
