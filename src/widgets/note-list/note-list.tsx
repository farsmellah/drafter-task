import Link from "next/link";

export default function NoteList({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container-md text-center">
      <div className="row">
        <div className="col-sm">{children}</div>
      </div>
    </div>
  );
}
