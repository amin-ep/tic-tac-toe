import styled from "styled-components";
import ICross from "../models/circle-cross.model";

const Span = styled.span`
  background-color: var(--color-cyan-300);
  border-radius: 4px;
  position: absolute;
  width: 14px;
  height: 100%;
  transition: 0.6s;
  animation: toDown 600ms;

  @keyframes toDown {
    from {
      height: 0;
    }
    to {
      height: 100%;
    }
  }

  @media (min-width: 425px) {
    width: 17px;
  }

  @media (min-width: 640px) {
    width: 18px;
  }

  @media (min-width: 768px) {
    width: 26px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  aspect-ratio: 1/1;
  position: relative;

  @media (min-width: 425px) {
    width: 4.5rem;
  }

  @media (min-width: 640px) {
    width: 5rem;
  }

  @media (min-width: 768px) {
    width: 7.5rem;
  }
`;

const Cross: React.FC<ICross> = () => {
  return (
    <Container>
      <Span className="rotate-45 bg-gradient-to-t from-blue-500 to-cyan-300"></Span>
      <Span className="-rotate-45 bg-gradient-to-r from-blue-400 to-cyan-300"></Span>
    </Container>
  );
};

export default Cross;
