import { NoteDTO } from "@/src/entities/note";

export async function getNotesData() {
  const res = await fetch(process.env.API_URL + "/notes");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
