"use client";

import { Icon } from "@ouellettec/design-system";
import Link from "next/link";

export default function Home(): JSX.Element {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center bg-zinc-900 text-white">
      <h1 className="mb-2 text-4xl sm:mb-8 sm:text-7xl">Harper Media</h1>
      <p className="mb-2 text-xl sm:mb-4 sm:text-2xl">New site coming soon.</p>
      <Link
        className="flex items-center underline decoration-solid"
        href="http://www.harpermedia.digital"
      >
        Visit our existing site{" "}
        <Icon
          className="ml-2 h-6 w-6 fill-white"
          name="ri-external-link-line"
        />
      </Link>
    </main>
  );
}
