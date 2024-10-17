import { ReactNode } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: var(--color-gold-100);
  color: var(--color-black);
  padding: 12px 20px;
  box-shadow: var(--shadow-1) var(--color-gold-300);
  border-collapse: collapse;
  border-color: var(--color-gray);
  border-style: solid;
  color: var(--color-gray);

  &:hover {
    background-color: var(--color-sky);
    box-shadow: var(--shadow-1) rgb(16, 68, 65);
  }

  &:active {
    transform: translate(0, 10px);
    box-shadow: 0 0 0;
  }
`;

function Button({
  children,
  extraStyles,
  onClick,
  type = "button",
}: {
  children: ReactNode;
  extraStyles?: string;
  onClick?: () => void;
  type?: "button" | "reset" | "submit";
}) {
  return (
    <StyledButton type={type} onClick={onClick} className={extraStyles}>
      {children}
    </StyledButton>
  );
}

export default Button;
