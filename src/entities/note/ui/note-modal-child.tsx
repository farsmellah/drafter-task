import Link from "next/link";
import styles from "@/src/entities/note/ui/styles.module.css";
import { getNoteData } from "../api/note.api";

interface Props {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}
export default function NoteModal({
  id,
  title,
  content,
  createdAt,
  updatedAt,
}: Props) {
  return (
    <>
      <form>
        <div className="mb-3">
          <label htmlFor="noteTitle" className="form-label">
            Title
          </label>
          <input
            tabIndex={0}
            type="text"
            className="form-control"
            id="noteTitle"
            autoComplete="off"
            // value={data.title}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="noteContent" className="form-label">
            Content
          </label>
          <textarea
            tabIndex={0}
            // value={data.content}
            className="form-control"
            autoComplete="off"
            id="noteContent"
          />
        </div>
      </form>
    </>
  );
}
