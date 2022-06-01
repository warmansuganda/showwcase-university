import { ReactNode } from "react";
import ReactModal from "react-modal";

interface ModalProps {
  children: ReactNode | ReactNode[];
  modalIsOpen: boolean;
  afterOpenModal?: () => void;
  closeModal?: () => void;
  shouldCloseOnOverlayClick?: boolean;
}
function Modal({
  children,
  modalIsOpen,
  afterOpenModal,
  closeModal,
  shouldCloseOnOverlayClick,
}: ModalProps) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
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
      {children}
    </ReactModal>
  );
}

export default Modal;
