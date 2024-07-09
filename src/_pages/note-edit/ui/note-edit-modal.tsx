import { getNoteData, GetNoteDTO } from "@/src/entities/note";

import WrapModal from "./wrapper";

export default async function NoteEditModal({
  params,
}: {
  params: { noteId: string };
}) {
  const data = (await getNoteData(params.noteId)) as GetNoteDTO;

  return <WrapModal noteData={data} />;
}
