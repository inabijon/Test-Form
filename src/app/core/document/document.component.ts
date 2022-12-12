import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentService } from 'src/app/services/document.service';
import { Document } from '../../models/document.interface';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss'],
})
export class DocumentComponent implements OnInit {
  documents: any;
  constructor(
    private router: Router,
    private documentService: DocumentService
  ) {}

  ngOnInit(): void {
    this.documentService.getDocuments().subscribe((data) => {
      this.documents = data;
      console.log(data);
    });
  }

  addDocument() {
    this.router.navigate(['/document/create']);
  }
}
