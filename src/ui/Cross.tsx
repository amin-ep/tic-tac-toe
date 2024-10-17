import styled from "styled-components";
import ICross from "../models/circle-cross.model";

const Span = styled.span`
  background-color: var(--color-sky);
  border-radius: 4px;
  position: absolute;

  &.line-small {
    animation: line-small 0.6s;
  }

  &.line-medium {
    animation: line-medium 0.6s;
  }

  &.line-large {
    animation: line-large 0.6s;
  }

  @keyframes line-small {
    from {
      height: 0;
    }

    to {
      height: 64px;
    }
  }

  @keyframes line-medium {
    from {
      height: 0;
    }

    to {
      height: 96px;
    }
  }

  @keyframes line-large {
    from {
      height: 0;
    }

    to {
      height: 128px;
    }
  }
`;

interface ISizes {
  small: string;
  medium: string;
  large: string;
}

const Cross: React.FC<ICross> = ({ size = "small" }) => {
  const spanSizes: ISizes = {
    small: "w-3 h-16",
    medium: "w-5 h-24",
    large: "w-7 h-32",
  };

  const containerSize = {
    small: "w-14 h-14",
    medium: "w-20 h-20",
    large: "w-28 h-28",
  };

  return (
    <div
      className={`flex items-center justify-center relative ${
        containerSize[size as keyof typeof containerSize]
      } p-0`}
    >
      <Span
        className={`rotate-45 ${spanSizes[size as keyof typeof spanSizes]} ${[
          `line-${size}`,
        ]}`}
      ></Span>
      <Span
        className={`-rotate-45 ${spanSizes[size as keyof typeof spanSizes]} ${[
          `line-${size}`,
        ]}`}
      ></Span>
    </div>
  );
};

export default Cross;
