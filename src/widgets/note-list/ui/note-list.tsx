import { Note, NoteDTO } from "@/src/entities/note";
import Link from "next/link";

export interface Props {
  notesData: NoteDTO[];
}
export default function NoteList({ notesData }: Props) {
  return (
    <div className="container text-center">
      <div className="row gy-3 gx-3">
        {notesData.map((note) => (
          <div className="col-xs-12 col-md-6 col-lg-4 " key={note.id}>
            <Note
              id={note.id}
              title={note.title}
              content={note.content}
              createdAt={note.createdAt}
              updatedAt={note.updatedAt}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
