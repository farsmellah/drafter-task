"use client";

import { createPortal } from "react-dom";
import BsModal from "react-bootstrap/Modal";
import { useRouter } from "next/navigation";
import { GetNoteDTO } from "@/src/entities";
import { NoteEditForm } from "@/src/featuers";

interface ModalProps {
  heading?: string;
  noteData: GetNoteDTO;
}
export function Modal({ heading, noteData }: ModalProps) {
  const { back } = useRouter();

  return createPortal(
    <>
      <BsModal centered show={true} onHide={() => back()} animation={true}>
        <BsModal.Header closeButton>
          {heading && <BsModal.Title>{heading}</BsModal.Title>}
        </BsModal.Header>
        <BsModal.Body>
          <NoteEditForm noteData={noteData} />
        </BsModal.Body>
      </BsModal>
    </>,
    document.getElementById("modal-root")!
  );
}
