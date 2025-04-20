import styled from "styled-components";

const StyledSvg = styled.svg`
  width: 55px;
  height: 55px;

  @media (min-width: 425px) {
    width: 80px;
    height: 80px;
  }

  @media (min-width: 640px) {
    width: 100px;
    height: 100px;
  }

  @media (min-width: 768px) {
    width: 130px;
    height: 130px;
  }
`;

const StyledCircle = styled.circle`
  fill: transparent;
  stroke: url(#gradient); /* Reference the gradient */
  stroke-width: 35;
  stroke-dasharray: 283;
  stroke-dashoffset: 283;
  animation: svg-draw 0.6s linear forwards;

  @keyframes svg-draw {
    to {
      stroke-dashoffset: 0;
    }
  }
`;

function Circle() {
  const circleAttrs = {
    cx: "70",
    cy: "70",
  };

  const viewBox = "-10 0 170 160";

  return (
    <StyledSvg viewBox={viewBox}>
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FF6B35" />
          <stop offset="50%" stop-color="#FFA62B" />
          <stop offset="100%" stop-color="#FFD166" />
        </linearGradient>
      </defs>
      <StyledCircle cx={circleAttrs.cx} cy={circleAttrs.cy} r="45" />
    </StyledSvg>
  );
}

export default Circle;
