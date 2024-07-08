import { Note } from "@/src/entities";
import { NoteList } from "@/src/widgets";
import { getNotesData } from "./api/getNotesData";
import { NoteDTO } from "@/src/entities/note";

export default async function Home() {
  const data = (await getNotesData()) as NoteDTO[];

  return (
    <div className="container text-center d-flex flex-column justify-content-center align-items-center p-4 gap-4">
      <h1>Notes App</h1>
      <NoteList notesData={data}></NoteList>
    </div>
  );
}
