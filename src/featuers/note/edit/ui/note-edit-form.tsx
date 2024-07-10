"use client";

import { editNote } from "@/src/entities/";
import { GetNoteDTO } from "@/src/entities/note/model/types";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { NoteEditForm } from "../model/types";
import { useRouter } from "next/navigation";

interface Props {
  noteData: GetNoteDTO;
}
export default function NoteModal({ noteData }: Props) {
  const { register, handleSubmit } = useForm<NoteEditForm>({
    defaultValues: {
      title: noteData.title,
      content: noteData.content,
    },
  });
  const router = useRouter();

  const { id } = noteData;

  const handleCancel = () => {
    router.back();
  };

  const onSubmit = async (data: NoteEditForm) => {
    await editNote({ ...data, id });
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
