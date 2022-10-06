import { Disclosure } from "@headlessui/react";
import { classNames } from "../../../lib/helper";


export default function NavbarMobileLevel4Link({currentPath,href, title}) {

    console.log(href)
    console.log(title);
  return (
    <Disclosure.Button
      as="a"
      href={href}
      className= {classNames
        ( href === currentPath 
        ? "block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
        : "block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700")}
    >
      {title === "Dashboard" && title}
      {title === "Team" && title}
      {title === "Projects" && title}
      {title === "Calendar" && title}
    </Disclosure.Button>
  );
}
