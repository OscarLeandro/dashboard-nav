import { useRouter } from "next/router";
import React from "react";

export default function ProjectsPage() {
   const router = useRouter();

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-lg font-semibold text-indigo-600">
              {router.asPath}
            </h2>
            <p className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Soy ProjectsPage
            </p>

          </div>
        </div>
      </div>
    </>
  );
}
