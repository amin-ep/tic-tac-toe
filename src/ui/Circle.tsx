import styled from "styled-components";
import ICircle from "../../models/circle-cross.model";

const Span = styled.span`
  border-color: var(--color-gold-100);
  border-style: solid;
  border-radius: 999px;
  animation: animate 0.7s;

  @keyframes animate {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;

function Circle({ size = "small" }: ICircle) {
  const spanSizes: { small: string; medium: string; large: string } = {
    small: "w-14 h-14 border-[15px]",
    medium: "w-20 h-20 border-[19px]",
    large: "w-28 h-28 border-[23px]",
  };

  return <Span className={`${spanSizes[size as keyof typeof spanSizes]}`} />;
}

export default Circle;
