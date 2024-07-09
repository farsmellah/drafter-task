import { NoteDTO } from "@/src/entities/note";
import { getNoteData } from "@/src/entities/note/";

export default async function NoteView({
  params,
}: {
  params: { noteId: string };
}) {
  const data = (await getNoteData(params.noteId)) as NoteDTO;
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center">
      <h1>{data.title}</h1>
      <p>{data.content}</p>
      <button className="btn btn-primary">Edit</button>
    </div>
  );
}
