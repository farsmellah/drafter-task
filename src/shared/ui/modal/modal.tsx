"use client";

import { createPortal } from "react-dom";
import BsModal from "react-bootstrap/Modal";

interface ModalProps {
  children: React.ReactNode;
  heading?: string;
  show: boolean;
  handleModalClose: () => void;
}
export function Modal({
  children,
  heading,
  show,
  handleModalClose,
}: ModalProps) {
  return createPortal(
    <>
      <BsModal centered show={show} onHide={handleModalClose} animation={true}>
        <BsModal.Header closeButton>
          {heading && <BsModal.Title>{heading}</BsModal.Title>}
        </BsModal.Header>
        <BsModal.Body>{children}</BsModal.Body>
      </BsModal>
    </>,
    document.getElementById("modal-root")!
  );
}
