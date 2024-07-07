export default function NoteView({ params }: { params: { noteId: string } }) {
  return <div>{params.noteId} Note View</div>;
}
