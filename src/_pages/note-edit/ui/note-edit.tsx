import { getNoteData, GetNoteDTO } from "@/src/entities/note";
import { NoteEditForm } from "@/src/featuers/note";

export default async function NoteEdit({
  params,
}: {
  params: { noteId: string };
}) {
  const data = (await getNoteData(params.noteId)) as GetNoteDTO;
  return <NoteEditForm noteData={data} />;
}
