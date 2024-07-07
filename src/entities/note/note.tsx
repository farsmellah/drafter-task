import Link from "next/link";

interface Props {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}
export default function Note({
  id,
  title,
  content,
  createdAt,
  updatedAt,
}: Props) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
        <Link href={`/note/${id}/edit`} className="btn btn-primary">
          Edit
        </Link>
      </div>
    </div>
  );
}
