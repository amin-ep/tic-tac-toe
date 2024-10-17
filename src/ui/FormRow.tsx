import styled from "styled-components";
import { ReactNode } from "react";

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 0.5rem;
  width: 100%;
`;

const Label = styled.label`
  color: var(--color-white);
  font-weight: 600;
  width: fit-content;
`;

const ErrorParagraph = styled.p`
  color: var(--color-error);
`;

function FormRow({
  children,
  id,
  label,
  errors,
}: {
  children: ReactNode;
  id: string;
  label?: string;
  errors?: string;
}) {
  return (
    <StyledDiv>
      {label && <Label htmlFor={id}>{label}</Label>}
      {children}
      {errors && <ErrorParagraph>{errors}</ErrorParagraph>}
    </StyledDiv>
  );
}

export default FormRow;
