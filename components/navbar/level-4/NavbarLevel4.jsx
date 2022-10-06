//import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import NavbarLogo from "../../commons/NavbarLogo";
//import Link from "next/link";
import { useRouter } from "next/router";
//import { classNames } from "../../../lib/helper";
import NavbarLevel4Link from "./NavbarLevel4Link";
import NavbarMobileLevel4Link from "./NavbarMobileLevel4Link";

const navegation = [
  { id: 1, href: "/", title: "Dashboard" },
  { id: 2, href: "/team", title: "Team" },
  { id: 3, href: "/projects", title: "Projects" },
  { id: 4, href: "/calendar", title: "Calendar" },
];

export default function NavbarLevel4() {
  const router = useRouter();

   let currentPath = router.asPath;

  return (
    <Disclosure as="nav" className="bg-white shadow mb-6">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div  onClick={()=>router.push('/')} className="flex cursor-pointer">
                <NavbarLogo  />
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {navegation.map((nav) => (
                    <NavbarLevel4Link
                      key={nav.id}
                      href={nav.href}
                      currentPath={currentPath}
                      title={nav.title}
                    />
                  ))}
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
              {navegation.map((element) => (
                
                <NavbarMobileLevel4Link 
                  href={element.href} 
                  key={element.id}
                  currentPath={currentPath}
                  title={element.title} 
                />
              ))}
              
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
