import { Text } from "@nextui-org/react";
import Link from "next/link";

type Route = {
  name: string;
  path: string;
};

type Props = {
  listTitle: string;
  data: Route[];
};

const FooterLinkList = ({ listTitle, data }: Props) => {
  return (
    <>
      <Text h3 size={12} color="$accents6">
        {listTitle}
      </Text>
      <ul>
        {data.map((link) => (
          <li key={link.path}>
            <Link href={link.path}>
              <a>
                <Text span size={14} color="#3e77aa">
                  {link.name}
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
