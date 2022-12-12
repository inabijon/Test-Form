import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-document-id',
  templateUrl: './document-id.component.html',
  styleUrls: ['./document-id.component.scss'],
})
export class DocumentIdComponent implements OnInit {
  document: any;
  fields: any;
  formFields: any;
  registerForm!: FormGroup;
  constructor(
    private activatedRoute: ActivatedRoute,
    private documentService: DocumentService
  ) {}

  ngOnInit(): void {
    const id: any = this.activatedRoute.snapshot.paramMap.get('id');
    this.documentService.getDocument(id).subscribe((document) => {
      this.document = document;
      console.log(this.document.fields);
    });
  }
}
