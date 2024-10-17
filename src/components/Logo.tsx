import styled from "styled-components";
import Circle from "../ui/Circle";
import Cross from "../ui/Cross";

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
