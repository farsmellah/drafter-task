"use client";

import { createPortal } from "react-dom";
import BsModal from "react-bootstrap/Modal";
import { useRouter } from "next/navigation";
import { GetNoteDTO } from "@/src/entities";
import { NoteEditForm } from "@/src/featuers";

interface ModalProps {
  heading?: string;
  children: React.ReactNode;
}
export function Modal({ heading, children }: ModalProps) {
  const { back } = useRouter();

  return createPortal(
    <>
      <BsModal centered show={true} onHide={() => back()} animation={true}>
        <BsModal.Header closeButton>
          {heading && <BsModal.Title>{heading}</BsModal.Title>}
        </BsModal.Header>
        <BsModal.Body>{children}</BsModal.Body>
      </BsModal>
    </>,
    document.getElementById("modal-root")!
  );
}
