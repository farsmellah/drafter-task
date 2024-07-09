"use client";

import { Modal } from "@/src/shared/";
import { getNoteData, GetNoteDTO } from "@/src/entities/note";

import { NoteEditForm } from "@/src/featuers/note";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function WrapModal({ noteData }: { noteData: GetNoteDTO }) {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
    router.back();
  };
  const handleShow = () => setShowModal(true);
  const router = useRouter();

  useEffect(() => {
    handleShow();
  }, []);

  return (
    <Modal show={showModal} handleModalClose={handleClose} heading="Note Edit">
      <NoteEditForm noteData={noteData} handleModalClose={handleClose} />
    </Modal>
  );
}
