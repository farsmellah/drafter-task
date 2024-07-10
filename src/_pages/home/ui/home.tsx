import { GetNoteDTO } from "@/src/entities";
import { NoteList } from "@/src/widgets";
import { getNotesData } from "@/src/entities/";
export default async function Home() {
  const data = (await getNotesData()) as GetNoteDTO[];

  return (
    <div className="container text-center d-flex flex-column justify-content-center align-items-center p-4 gap-4">
      <div className="d-flex gap-4 justify-content-center align-items-center">
        <h1>Notes App</h1>
        {/* <AddNoteButton /> */}
      </div>
      <NoteList notesData={data}></NoteList>
    </div>
  );
}
