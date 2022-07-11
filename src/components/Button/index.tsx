import { Button as NextUIButton, CSS } from "@nextui-org/react";
import { ReactNode } from "react";

type Props = {
  icon?: ReactNode;
  light?: boolean;
  auto?: boolean;
  animated?: boolean;
  wrapperStyles?: CSS;
  children: ReactNode;
};

const Button = ({
  icon,
  auto,
  light,
  animated,
  children,
  wrapperStyles,
}: Props) => {
  return (
    <NextUIButton
      auto={auto}
      light={light}
      animated={animated}
      css={wrapperStyles}
      icon={icon}
    >
      {children}
    </NextUIButton>
  );
};

export default Button;
