import { getNoteData, GetNoteDTO } from "@/src/entities";
import { NoteEditForm } from "@/src/featuers";

import { Modal } from "@/src/shared/";

export default async function NoteEditModal({
  params,
}: {
  params: { noteId: string };
}) {
  const data = (await getNoteData(params.noteId)) as GetNoteDTO;

  return (
    <Modal heading="Note Edit">
      <NoteEditForm noteData={data} />
    </Modal>
  );
}
