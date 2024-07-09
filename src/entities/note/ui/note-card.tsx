import Link from "next/link";
import styles from "@/src/entities/note/ui/styles.module.css";

interface Props {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}
export default function NoteCard({
  id,
  title,
  content,
  createdAt,
  updatedAt,
}: Props) {
  return (
    <div className={`card ${styles.cardContainer}`}>
      <div className={`card-body ${styles.cardBody} `}>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
        <Link href={`/note/${id}/edit`} className="btn btn-primary">
          Edit
        </Link>
      </div>
    </div>
  );
}