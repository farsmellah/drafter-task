import { GetNoteDTO } from "@/src/entities/note";
import { getNoteData } from "@/src/entities/note/";
import NoteInfoBanner from "./note-info-banner";

export default async function NoteView({
  params,
}: {
  params: { noteId: string };
}) {
  const data = (await getNoteData(params.noteId)) as GetNoteDTO;
  return NoteInfoBanner({ noteData: data });
}
