import Link from "next/link";

export default function NoteAddButton() {
  return (
    <Link
      href={`/note/add`}
      className="w-100 mx-0 mx-lg-3 btn btn-primary d-flex justify-content-center"
    >
      <i className="bi bi-plus"></i> Add Note
    </Link>
  );
}
