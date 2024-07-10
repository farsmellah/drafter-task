import { getNoteData, GetNoteDTO } from "@/src/entities";
import { Modal } from "@/src/shared/";
import NoteInfoBanner from "./note-info-banner";

export default async function NoteViewModal({
  params,
}: {
  params: { noteId: string };
}) {
  const data = (await getNoteData(params.noteId)) as GetNoteDTO;

  return (
    <Modal heading={data.title}>
      <NoteInfoBanner isModal noteData={data} />
    </Modal>
  );
}
