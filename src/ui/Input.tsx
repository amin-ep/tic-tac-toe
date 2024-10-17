import styled from "styled-components";

const Input = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  transition: all 0.3s;
  border-radius: 6px;
  padding: 0.8rem;
  font-size: 18px;
  color: var(--color-lightSky);
  width: 100%;
  background-color: var(--color-navy-900);
  box-shadow: var(--shadow-1) rgba(0, 0, 0, 0.5);

  &:focus {
    background-color: #ffffff21;
    border-color: var(--color-gold-100);
    box-shadow: 0px 0px 0px transparent;
    transform: translate(0, 8px);
  }
`;

export default Input;
