import { Note } from "@/src/entities";
import { NoteList } from "@/src/widgets";
import { getNotesData } from "./api/getNotesData";
import { NoteDTO } from "@/src/entities/note";

export default async function Home() {
  const data = (await getNotesData()) as NoteDTO[];

  return (
    <NoteList>
      {data.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          content={note.content}
          createdAt={note.createdAt}
          updatedAt={note.updatedAt}
        />
      ))}
    </NoteList>
  );
}
