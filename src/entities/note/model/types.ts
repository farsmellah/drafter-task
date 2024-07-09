export interface GetNoteDTO {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface EditNoteDTO {
  id: string;
  title: string;
  content: string;
}

export interface AddNoteDTO {
  title: string;
  content: string;
}
