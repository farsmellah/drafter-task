import { GetNoteDTO } from "@/src/entities";
import { NoteList } from "@/src/widgets";
import { getNotesData } from "@/src/entities/";
import Toolbar from "./toolbar";
import { GetNotesParams } from "@/src/entities/note/api/note.api";
export default async function Home({
  searchParams,
}: {
  searchParams: GetNotesParams;
}) {
  const { q, _sort, _order, title_like } = searchParams;

  const data = (await getNotesData({
    q,
    _sort,
    _order,
    title_like,
  })) as GetNoteDTO[];

  return (
    <div className="text-center d-flex flex-column justify-content-center align-items-stretch p-4 gap-4">
      <div className="d-flex gap-4 justify-content-center align-items-center">
        <h1>Notes App</h1>
      </div>
      <Toolbar />
      <NoteList notesData={data}></NoteList>
    </div>
  );
}
