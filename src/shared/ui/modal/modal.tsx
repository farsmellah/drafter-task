"use client";
//
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import BsModal from "react-bootstrap/Modal";

export function Modal({
  children,
  heading,
}: {
  children: React.ReactNode;
  heading?: string;
}) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    onDismiss();
  };
  const handleShow = () => setShow(true);
  const router = useRouter();

  useEffect(() => {
    handleShow();
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <>
      <BsModal centered show={show} onHide={handleClose} animation={true}>
        <BsModal.Header closeButton>
          {heading && <BsModal.Title>{heading}</BsModal.Title>}
        </BsModal.Header>
        <BsModal.Body>{children}</BsModal.Body>
        <BsModal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </BsModal.Footer>
      </BsModal>
    </>,
    document.getElementById("modal-root")!
  );
}
