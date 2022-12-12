import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { DocumentConfiguration } from '../models/document.interface';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  constructor(private http: HttpClient) {}

  getDocuments(): Observable<any[]> {
    return this.http.get<any[]>(`${API_URL}/v1/documents`, {
      headers: {
        'API-KEY': 'secret-api-key',
      },
    });
  }

  getDocument(id: number): Observable<DocumentConfiguration> {
    return this.http.get<DocumentConfiguration>(
      `${API_URL}/v1/document/${id}`,
      {
        headers: {
          'API-KEY': 'secret-api-key',
        },
      }
    );
  }

  createDocument(document: any): Observable<any> {
    return this.http.post(`${API_URL}/v1/documents/create`, document, {
      headers: {
        'API-KEY': 'secret-api-key',
      },
    });
  }
}
