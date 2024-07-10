import { GetNoteDTO } from "@/src/entities";
import Link from "next/link";

type Props = {
  noteData: GetNoteDTO;
  isModal?: boolean;
};
export default function NoteInfoBanner({ noteData, isModal }: Props) {
  return isModal ? (
    <div className="container text-start d-flex flex-column align-items-center justify-content-space-between">
      <p className="w-100 text-start">{noteData.content}</p>

      <Link href={`/note/${noteData.id}/edit`} className="btn btn-dark w-100">
        Edit
      </Link>
    </div>
  ) : (
    <div className="container mt-5 d-flex flex-column align-items-center justify-content-center">
      <h1>{noteData.title}</h1>
      <p>{noteData.content}</p>
      <Link href={`/note/${noteData.id}/edit`} className="btn btn-dark">
        Edit
      </Link>
    </div>
  );
}
