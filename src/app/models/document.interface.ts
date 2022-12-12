export interface Document {
  id: number;
  document_name: string;
  field_count: number;
  created_at: Date;
  updated_at: Date;
}

export interface DocumentConfiguration {
  documentName: string;
  fields: Field[];
}

export interface Field {
  id: number;
  field_seq: number;
  is_mandatory: boolean;
  field_type: boolean;
  field_name: string;
  document_id: number;
  select_values: string | null;
}
