import { Note } from "@/src/entities";
import { NoteList } from "@/src/widgets";
import { getNotesData } from "../api/getNotesData";
import { NoteDTO } from "@/src/entities/note";
import { AddNoteButton } from "@/src/featuers/note/add";
import Link from "next/link";

export default async function Home() {
  const data = (await getNotesData()) as NoteDTO[];

  return (
    <div className="container text-center d-flex flex-column justify-content-center align-items-center p-4 gap-4">
      <div className="d-flex gap-4 justify-content-center align-items-center">
        <h1>Notes App</h1>
        <AddNoteButton />
      </div>
      <NoteList notesData={data}></NoteList>
    </div>
  );
}
