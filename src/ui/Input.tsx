import styled from "styled-components";

const Input = styled.input`
  border-radius: 12px;
  border-color: var(--color-gray-200);
  border-width: 1px;
  border-style: solid;
  outline: none;

  padding: 0.6rem;
  font-size: 12px;

  transition: 0.3s;

  color: var(--color-gray-700);

  &:focus {
    border-color: var(--color-blue-500);
    box-shadow: 0 2px 16px rgba(86, 87, 202, 0.3);
    background: #3b83f634;
  }

  @media (min-width: 768px) {
    padding: 0.75rem;
    font-size: 14px;
  }
`;

export default Input;
