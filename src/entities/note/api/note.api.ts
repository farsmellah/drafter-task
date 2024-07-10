"use server";

import { revalidateTag } from "next/cache";
import { AddNoteDTO, EditNoteDTO } from "../model/types";
import { resolveHostUrl } from "@/src/shared";

const HOST_URL = resolveHostUrl();

const revalidateOnEdit = (id: string) => {
  revalidateTag(`notes`);
  revalidateTag(`note:${id}`);
};

const revalidateOnAdd = () => {
  revalidateTag(`notes`);
};

export async function getNotesData() {
  const res = await fetch(process.env.API_URL + "/notes", {
    next: { tags: ["notes"] },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getNoteData(id: NoteId) {
  const res = await fetch(HOST_URL + `/notes/${id}/`, {
    next: { tags: [`note:${id}`] },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function editNote(data: EditNoteDTO) {
  const res = await fetch(HOST_URL + `/notes/${data.id}/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  revalidateOnEdit(data.id);
}

export async function addNote(data: AddNoteDTO) {
  const res = await fetch(HOST_URL + `/notes/`, {
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

  revalidateOnAdd();
}
