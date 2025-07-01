import { ReactNode } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: inline-block;
  background-color: var(--color-amber-400);
  padding: 0.75rem 1.5rem;
  font-size: 12px;
  font-weight: 500;
  line-height: 13px;
  cursor: pointer;
  box-shadow: inset 0 -3px 0 0 #816724;
  -webkit-border-radius: 3px 3px 3px 3px;
  border-radius: 3px 3px 3px 3px;
  border: none;
  outline: none;
  white-space: nowrap;

  font-weight: 300;

  @media (min-width: 640px) {
    font-size: 14px;
  }

  @media (min-width: 1280px) {
    font-size: 16px;
  }

  &:hover {
    background-color: var(--color-cyan-300);
    box-shadow: inset 0 -3px 0 0 #3c8b96;
  }

  &:active {
    box-shadow: inset 0 3px 0 0 #3c8b96;
    transform: translateY(1px);
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
