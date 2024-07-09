import { NoteDTO } from "@/src/entities/note";
import { getNoteData } from "@/src/entities/note/";

export default async function NoteEdit({
  params,
}: {
  params: { noteId: string };
}) {
  const data = (await getNoteData(params.noteId)) as NoteDTO;
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="noteTitle" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="noteTitle"
          // value={data.title}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="noteContent" className="form-label">
          Content
        </label>
        <input
          type="text"
          // value={data.content}
          className="form-control"
          id="noteContent"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
