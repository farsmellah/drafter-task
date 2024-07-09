import { NoteDTO } from "@/src/entities/note";

export async function getNoteData(id: NoteId) {
  const res = await fetch(process.env.API_URL + `/notes/${id}/`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function addNote(data: NoteDTO) {
  const res = await fetch(process.env.API_URL + `/notes/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}