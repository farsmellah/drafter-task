import { NoteAddForm } from "@/src/featuers";

import { Modal } from "@/src/shared";

export default async function NoteAddModal() {
  return (
    <Modal heading="Creae New Note">
      <NoteAddForm />
    </Modal>
  );
}
