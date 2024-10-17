/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, ReactNode, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";
import Button from "./Button";

const StyledModal = styled.div`
  background-color: var(--color-navy-950);
  transition: all 0.5s;
  box-shadow: var(--shadow-lg);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  z-index: 1001;
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  width: min-content;
  padding: 0;
`;

const Overlay = styled.div`
  background: transparent;
  backdrop-filter: blur(5px);
  overflow-y: auto;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1000;
  transition: all 0.5s;
`;

const CloseButton = styled.button`
  padding: 0.5rem;
  float: right;
  color: var(--color-white);
`;

const ModalContext = createContext({
  openName: "",
  open: (name: string) => {},
  close: () => {},
});

function Modal({ children }: { children: ReactNode }) {
  const [openName, setOpenName] = useState<string>("");

  const open: (name: string) => void = (name: string) => {
    setOpenName(name);
  };

  const close: () => void = () => {
    setOpenName("");
  };

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({
  children,
  opens: windowName,
}: {
  children: ReactNode;
  opens: string;
}) {
  const { open } = useContext(ModalContext);

  return (
    <Button onClick={() => open(windowName)} extraStyles="rounded-md">
      {children}
    </Button>
  );
}

function Content({ children, name }: { children: ReactNode; name: string }) {
  const { openName, close } = useContext(ModalContext);

  if (name !== openName) return null;

  return createPortal(
    <Overlay>
      <StyledModal>
        <div>
          <CloseButton onClick={close}>
            <HiXMark size={30} />
          </CloseButton>
        </div>
        {children}
      </StyledModal>
    </Overlay>,
    document.body
  );
}

Modal.Content = Content;
Modal.Open = Open;

export default Modal;
