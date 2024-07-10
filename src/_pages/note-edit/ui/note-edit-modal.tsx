import { getNoteData, GetNoteDTO } from "@/src/entities";

import { Modal } from "@/src/widgets";

export default async function NoteEditModal({
  params,
}: {
  params: { noteId: string };
}) {
  const data = (await getNoteData(params.noteId)) as GetNoteDTO;

  return <Modal noteData={data} heading="Note Edit" />;
}
