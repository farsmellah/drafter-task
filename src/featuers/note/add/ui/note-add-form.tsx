"use client";

import { addNote, editNote } from "@/src/entities/";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { NoteAddForm } from "../model/types";
import { useRouter } from "next/navigation";

export default function NoteModal() {
  const { register, handleSubmit } = useForm<NoteAddForm>();
  const router = useRouter();

  const handleCancel = () => {
    router.back();
  };

  const onSubmit = async (data: NoteAddForm) => {
    await addNote({ ...data });
    router.back();
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="noteTitle" className="form-label">
            Title
          </label>
          <input
            {...register("title")}
            tabIndex={0}
            type="text"
            className="form-control"
            id="noteTitle"
            autoComplete="off"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="noteContent" className="form-label">
            Content
          </label>
          <textarea
            {...register("content")}
            tabIndex={0}
            className="form-control"
            autoComplete="off"
            id="noteContent"
          />
        </div>
        <div className="d-flex justify-content-end gap-2">
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </div>
      </form>
    </>
  );
}
