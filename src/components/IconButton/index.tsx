import { Button, CSS } from "@nextui-org/react";
import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  styles?: CSS;
  onClick: () => void;
};

const IconButton = ({ icon, styles, onClick }: Props) => {
  return (
    <Button
      auto
      icon={icon}
      onClick={onClick}
      css={{
        ...styles,
        borderRadius: 4,
        backgroundColor: "transparent",
        transition: "all .3s ease-in-out",
        "&:hover": { backgroundColor: "#7a7979" },
      }}
    />
  );
};

export default IconButton;
