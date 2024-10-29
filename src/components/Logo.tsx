import styled from "styled-components";
import Circle from "../ui/Circle";
import Cross from "../ui/Cross";

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 730px) {
    justify-content: start;
  }
`;

function Logo() {
  return (
    <LogoContainer>
      <Cross size="small" />
      <Circle size="small" />
    </LogoContainer>
  );
}

export default Logo;
