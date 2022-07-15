import { Text } from "@nextui-org/react";
import Link from "next/link";

import { FooterLinkListProps } from "../../models/models";

const FooterLinkList = ({ listTitle, data }: FooterLinkListProps) => {
  return (
    <>
      <Text h3 size={12} color="$accents6" css={{ mb: 10 }}>
        {listTitle}
      </Text>
      <ul>
        {data.map((link) => (
          <li key={link.path}>
            <Link href={link.path}>
              <a className="nav-link">{link.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FooterLinkList;
