import { GetNoteDTO } from "@/src/entities";

type Props = {
  noteData: GetNoteDTO;
  isModal?: boolean;
};
export default function NoteInfoBanner({ noteData, isModal }: Props) {
  return isModal ? (
    <div className="container text-start d-flex flex-column align-items-center justify-content-space-between">
      <p className="w-100 text-start">{noteData.content}</p>

      <button className="btn btn-dark w-100">Edit</button>
    </div>
  ) : (
    <div className="container mt-5 d-flex flex-column align-items-center justify-content-center">
      <h1>{noteData.title}</h1>
      <p>{noteData.content}</p>
      <button className="btn btn-dark">Edit</button>
    </div>
  );
}
