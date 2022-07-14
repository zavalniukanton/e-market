import { Text } from "@nextui-org/react";
import Link from "next/link";

type FooterLink = {
  id: string;
  linkName: string;
  href: string;
};

type Props = {
  listTitle: string;
  data: FooterLink[];
};

const FooterLinkList = ({ listTitle, data }: Props) => {
  return (
    <>
      <Text h3 size={12} color="$accents6">
        {listTitle}
      </Text>
      <ul>
        {data.map((link) => (
          <li key={link.id}>
            <Link href={link.href}>
              <a>
                <Text span size={14} color="#3e77aa">
                  {link.linkName}
                </Text>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FooterLinkList;
