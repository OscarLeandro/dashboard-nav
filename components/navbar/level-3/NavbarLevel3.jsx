import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import NavbarLogo from "../../commons/NavbarLogo";
import Link from "next/link";
import { useRouter } from "next/router";
import { classNames } from "../../../lib/helper";
import NavbarLevel3Link from "./NavbarLevel3Link";
import NavbarLevel3LinkTeam from "./NavbarLevel3LinkTeam";
import NavbarLevel3LinkProjects from "./NavbarLevel3LinkProjects";
import NavbarLevel3LinkCalendar from "./NavbarLevel3LinkCalendar";

export default function NavbarLevel3() {
  const router = useRouter();

   let currentPath = router.asPath;

 
  return (
    <Disclosure as="nav" className="bg-white shadow mb-6">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <NavbarLogo />
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  
                  <NavbarLevel3Link href={"/"} currentPath={currentPath} />

                  <NavbarLevel3LinkTeam href={"/team"} currentPath={currentPath} />

                  <NavbarLevel3LinkProjects href={"/projects"} currentPath={currentPath} />

                  <NavbarLevel3LinkCalendar href={"/calendar"} currentPath={currentPath} />

                </div>
              </div>

              <div className="-mr-2 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pt-2 pb-3">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
              >
                Dashboard
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Team
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Projects
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Calendar
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}