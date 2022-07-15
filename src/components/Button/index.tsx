import { Button as NextUIButton } from "@nextui-org/react";

import { ButtonProps } from "../../models/models";

const Button = ({
  icon,
  auto,
  light,
  animated,
  children,
  wrapperStyles,
  onClick,
}: ButtonProps) => {
  return (
    <NextUIButton
      auto={auto}
      light={light}
      animated={animated}
      css={wrapperStyles}
      icon={icon}
      onClick={onClick}
    >
      {children}
    </NextUIButton>
  );
};

export default Button;
