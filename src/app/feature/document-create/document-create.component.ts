import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  FormArray,
  Validators,
} from '@angular/forms';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-document-create',
  templateUrl: './document-create.component.html',
  styleUrls: ['./document-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentCreateComponent implements OnInit {
  documentCreate!: FormGroup;
  form_values!: FormArray;
  constructor(
    private fb: FormBuilder,
    private documentService: DocumentService
  ) {}

  ngOnInit(): void {
    this.documentCreate = this.fb.group({
      document_name: ['', Validators.required],
      form_values: this.fb.array([this.createDocument()]),
    });
  }

  getControls() {
    return (this.documentCreate.get('form_values') as FormArray).controls;
  }

  createDocument(): FormGroup {
    return this.fb.group({
      field_name: '',
      field_type: '',
      is_mandatory: false,
      field_seq: 0,
    });
  }

  addDocument(): void {
    this.form_values = this.documentCreate.get('form_values') as FormArray;
    this.form_values.push(this.createDocument());
  }

  submitDocument() {
    console.log(this.documentCreate.value);
    this.documentService
      .createDocument(this.documentCreate.value)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
