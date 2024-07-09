import { Modal } from "@/src/shared/";
import { getNoteData, NoteDTO, NoteModal } from "@/src/entities/note";

export default async function NoteEditModal({
  params,
}: {
  params: { noteId: string };
}) {
  const data = (await getNoteData(params.noteId)) as NoteDTO;
  return (
    <Modal heading="Note Edit">
      <NoteModal {...data} />
    </Modal>
  );
}
