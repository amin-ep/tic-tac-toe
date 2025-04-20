import { ReactNode } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: linear-gradient(
    90deg,
    var(--color-orange-600),
    var(--color-amber-400),
    var(--color-cyan-300),
    var(--color-blue-500)
  );

  box-shadow: 0 2px 8px 2px rgba(0, 0, 0, 0.3);

  padding: 0.25rem 1rem;
  border-radius: 999px;
  background-size: 300%;
  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
    background-position: 100%;
    color: var(--color-white);
    box-shadow: 0 2px 12px 2px rgba(0, 0, 0, 0.3);
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

function Button({
  children,
  extraStyles,
  onClick,
  type = "button",
  disabled,
}: {
  children: ReactNode;
  extraStyles?: string;
  onClick?: () => void;
  type?: "button" | "reset" | "submit";
  disabled?: boolean;
}) {
  return (
    <StyledButton
      {...(disabled && { disabled })}
      type={type}
      onClick={onClick}
      className={extraStyles}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
