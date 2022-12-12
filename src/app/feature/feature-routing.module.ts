import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentCreateComponent } from './document-create/document-create.component';
import { DocumentIdComponent } from './document-id/document-id.component';

const routes: Routes = [
  {
    path: 'create',
    component: DocumentCreateComponent,
  },
  {
    path: ':id',
    component: DocumentIdComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {}
