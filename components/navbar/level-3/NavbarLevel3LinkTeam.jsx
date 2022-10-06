import Link from "next/link";
import { classNames } from "../../../lib/helper";

export default function NavbarLevel3LinkTeam({ href, currentPath }) {
  return (
    <Link href="/team">
      <a
        className={classNames(
          "/team" === currentPath
            ? " border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
            : "border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700",
          "inline-flex items-center border-b-2"
        )}
      >
        Team
      </a>
    </Link>
  );
}
