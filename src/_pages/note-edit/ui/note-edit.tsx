import { getNoteData, GetNoteDTO } from "@/src/entities/note";
import { NoteEditForm } from "@/src/featuers/note";

export default async function NoteEdit({
  params,
}: {
  params: { noteId: string };
}) {
  const data = (await getNoteData(params.noteId)) as GetNoteDTO;

  return (
    <div className="container mt-4">
      <NoteEditForm noteData={data} />
    </div>
  );
}
