import { ReactNode } from "react";
import ReactModal from "react-modal";

import {
  ModalHeader,
  ModalTitle,
  ModalContent,
  ModalClose,
} from "./ModalStyles";

ReactModal.setAppElement("#modal-root");

interface ModalProps {
  children: ReactNode | ReactNode[];
  modalIsOpen: boolean;
  afterOpenModal?: () => void;
  closeModal?: () => void;
  shouldCloseOnOverlayClick?: boolean;
  title?: string;
}

function Modal({
  children,
  modalIsOpen,
  afterOpenModal,
  closeModal,
  shouldCloseOnOverlayClick,
  title,
}: ModalProps) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: 0,
    },
  };
  return (
    <ReactModal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
    >
      {title && (
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <ModalClose
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            onClick={closeModal}
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </ModalClose>
        </ModalHeader>
      )}
      <ModalContent>{children}</ModalContent>
    </ReactModal>
  );
}

export default Modal;
