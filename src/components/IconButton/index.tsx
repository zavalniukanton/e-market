import { Button } from "@nextui-org/react";

import { IconButtonProps } from "../../models/models";

const IconButton = ({ icon, styles, onClick }: IconButtonProps) => {
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
